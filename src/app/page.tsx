import Link from "next/link";

const features = [
  { title: "App Router", body: "File-based routing in src/app. Add a folder with a page.tsx to create a new route." },
  { title: "TypeScript", body: "Strict mode on, with the @/* import alias pointing at src/." },
  { title: "Tailwind CSS v4", body: "Theme tokens live in src/app/globals.css under @theme." },
];

export default function Home() {
  return (
    <div className="py-20">
      <section className="max-w-2xl">
        <p className="font-mono text-sm text-accent">Next.js starter</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          A clean place to start building.
        </h1>
        <p className="mt-5 text-lg text-muted">
          Edit <code className="font-mono text-foreground">src/app/page.tsx</code> and save — the
          page updates instantly.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Read the docs
          </a>
          <Link
            href="/about"
            className="rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            About
          </Link>
        </div>
      </section>

      <section className="mt-20 grid gap-4 sm:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-foreground/10 p-6">
            <h2 className="font-medium">{f.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
