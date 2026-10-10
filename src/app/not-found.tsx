import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="mt-6 inline-block text-sm text-accent hover:underline">
        ← Back home
      </Link>
    </div>
  );
}
