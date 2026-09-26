"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { SkillCategory } from "@/lib/types";
import { getTechIconInfo } from "@/lib/techIcons";

type Point = { x: number; y: number };
type TreeNode = { name: string; point: Point };
type TreeGroup = { title: string; branch: Point; nodes: TreeNode[] };

const ROOT_X = 16;
const BRANCH_X = 150;
const NODE_X = 220;
const ITEM_PITCH = 28;
const GROUP_GAP = 70; // wide separation between categories so one branch's lines never crowd another's box
const MARGIN_Y = 14;

function dist(a: Point, b: Point) {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

export default function SkillsTree({ categories }: { categories: SkillCategory[] }) {
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [boxWidths, setBoxWidths] = useState<number[] | null>(null);

  const groups: TreeGroup[] = useMemo(() => {
    let cursorY = MARGIN_Y;
    return categories.map((cat) => {
      const top = cursorY;
      const nodes: TreeNode[] = cat.items.map((item, i) => ({
        name: item,
        point: { x: NODE_X, y: top + i * ITEM_PITCH + ITEM_PITCH / 2 },
      }));
      const branchY = (nodes[0].point.y + nodes[nodes.length - 1].point.y) / 2;
      cursorY = top + cat.items.length * ITEM_PITCH + GROUP_GAP;
      return { title: cat.title, branch: { x: BRANCH_X, y: branchY }, nodes };
    });
  }, [categories]);

  const totalHeight = useMemo(() => {
    if (groups.length === 0) return 0;
    const lastGroup = groups[groups.length - 1];
    const lastNode = lastGroup.nodes[lastGroup.nodes.length - 1];
    return lastNode.point.y + ITEM_PITCH / 2 + MARGIN_Y;
  }, [groups]);

  const root: Point = { x: ROOT_X, y: totalHeight / 2 };
  const naturalWidth = NODE_X + 170; // room for the skill name text after each icon

  useLayoutEffect(() => {
    setBoxWidths(labelRefs.current.map((el) => el?.offsetWidth ?? 0));
  }, [groups]);

  // Same technique as the design artifact: everything (SVG lines + HTML
  // label/leaf overlays) lives at a fixed natural pixel size, then the
  // whole rigid unit is scaled by CSS transform to fit the available
  // width. This keeps text/icons/lines all in proportion with each other
  // at any viewport size, instead of positions scaling via % while font
  // sizes stay fixed.
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage || totalHeight === 0) return;

    const applyScale = () => {
      const available = stage.clientWidth;
      setScale(available > 0 ? Math.min(1.4, available / naturalWidth) : 1);
    };

    applyScale();
    const observer = new ResizeObserver(applyScale);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [naturalWidth, totalHeight]);

  if (totalHeight === 0) return null;

  return (
    <div
      ref={stageRef}
      className="w-full max-w-[600px] overflow-hidden"
      style={{ height: totalHeight * scale }}
      aria-hidden="true"
    >
      <div
        className="pointer-events-none relative origin-top-left text-accent"
        style={{ width: naturalWidth, height: totalHeight, transform: `scale(${scale})` }}
      >
        <svg
          width={naturalWidth}
          height={totalHeight}
          viewBox={`0 0 ${naturalWidth} ${totalHeight}`}
          className="absolute inset-0 overflow-visible"
        >
          <circle cx={root.x} cy={root.y} r={4} className="tree-root-dot" />

          {groups.map((g, gi) => {
            const boxWidth = boxWidths?.[gi];
            if (boxWidth === undefined) return null;
            const trunkEnd: Point = { x: g.branch.x - boxWidth, y: g.branch.y };
            const trunkLen = dist(root, trunkEnd);

            return (
              <g key={g.title}>
                <line x1={root.x} y1={root.y} x2={trunkEnd.x} y2={trunkEnd.y} className="tree-wire" />
                <line
                  x1={root.x}
                  y1={root.y}
                  x2={trunkEnd.x}
                  y2={trunkEnd.y}
                  className="tree-line-flow"
                  style={{ ["--flow-dist" as string]: trunkLen, strokeDasharray: `${trunkLen}` }}
                />

                {g.nodes.map((n) => {
                  const twigLen = dist(g.branch, n.point);
                  return (
                    <g key={n.name}>
                      <line x1={g.branch.x} y1={g.branch.y} x2={n.point.x} y2={n.point.y} className="tree-wire" />
                      <line
                        x1={g.branch.x}
                        y1={g.branch.y}
                        x2={n.point.x}
                        y2={n.point.y}
                        className="tree-line-flow tree-twig"
                        style={{ ["--flow-dist" as string]: twigLen, strokeDasharray: `${twigLen}` }}
                      />
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>

        {groups.map((g, gi) => (
          <span
            key={g.title}
            ref={(el) => {
              labelRefs.current[gi] = el;
            }}
            className="tree-group-box absolute -translate-x-full -translate-y-1/2"
            style={{ left: g.branch.x, top: g.branch.y }}
          >
            {g.title}
          </span>
        ))}

        {groups.flatMap((g) => g.nodes).map((n) => (
          <TreeLeaf key={n.name} node={n} />
        ))}
      </div>
    </div>
  );
}

function TreeLeaf({ node }: { node: TreeNode }) {
  const { Icon, color } = getTechIconInfo(node.name);
  return (
    <span
      className="absolute flex -translate-y-1/2 items-center gap-1.5"
      style={{ left: node.point.x, top: node.point.y }}
    >
      <span
        className="tree-leaf-dot flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.65rem]"
        style={{ color }}
      >
        <Icon />
      </span>
      <span className="tree-leaf-name whitespace-nowrap text-xs text-text-dim">{node.name}</span>
    </span>
  );
}
