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
const GROUP_GAP = 30;
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
  const width = NODE_X + 80;

  useLayoutEffect(() => {
    setBoxWidths(labelRefs.current.map((el) => el?.offsetWidth ?? 0));
  }, [groups]);

  if (totalHeight === 0) return null;

  return (
    <div
      className="pointer-events-none relative w-full max-w-[420px] text-accent sm:max-w-[520px] lg:max-w-[600px]"
      style={{ aspectRatio: `${width} / ${totalHeight}` }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${width} ${totalHeight}`}
        className="absolute inset-0 h-full w-full overflow-visible"
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
          style={{ left: `${(g.branch.x / width) * 100}%`, top: `${(g.branch.y / totalHeight) * 100}%` }}
        >
          {g.title}
        </span>
      ))}

      {groups.flatMap((g) => g.nodes).map((n) => (
        <TreeLeaf key={n.name} node={n} width={width} totalHeight={totalHeight} />
      ))}
    </div>
  );
}

function TreeLeaf({ node, width, totalHeight }: { node: TreeNode; width: number; totalHeight: number }) {
  const { Icon, color } = getTechIconInfo(node.name);
  return (
    <span
      title={node.name}
      className="tree-leaf-dot absolute flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-[0.65rem]"
      style={{
        left: `${(node.point.x / width) * 100}%`,
        top: `${(node.point.y / totalHeight) * 100}%`,
        color,
      }}
    >
      <Icon />
    </span>
  );
}
