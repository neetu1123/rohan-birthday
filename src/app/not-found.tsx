import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-gold">404</p>
      <h1 className="section-title mt-4 max-w-xl">This page wandered off.</h1>
      <p className="section-copy max-w-md">The surprise you are looking for is waiting on the home page.</p>
      <Link href="/" className="btn-gold mt-8">
        Return to the story
      </Link>
    </main>
  );
}
