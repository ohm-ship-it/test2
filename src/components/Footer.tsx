export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-muted">
        © {new Date().getFullYear()} Starter. Built with Next.js.
      </div>
    </footer>
  );
}
