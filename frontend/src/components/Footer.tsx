export default function Footer() {
  return (
    <footer className="border-t border-border py-7">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6">
        <p className="text-sm text-text-faint">
          &copy; {new Date().getFullYear()} Shattajit Ghosh. Built with
          Next.js &amp; ASP.NET Core.
        </p>
        <a
          href="#home"
          className="text-sm text-text-dim transition-colors hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
