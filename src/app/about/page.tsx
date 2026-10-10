import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-2xl py-20">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-4 text-muted">
        This is an example second route. It lives in{" "}
        <code className="font-mono text-foreground">src/app/about/page.tsx</code>. Copy this
        folder to add more pages.
      </p>
    </div>
  );
}
