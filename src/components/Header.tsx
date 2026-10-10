import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-foreground/10">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight">
          Starter<span className="text-accent">.</span>
        </Link>
        <ul className="flex gap-6 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
