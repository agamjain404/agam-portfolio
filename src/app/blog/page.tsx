export const metadata = {
  title: "Blog",
  description: "Engineering notes and long-form writing by Agam Jain.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-4xl px-5 py-24 sm:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Blog</p>
      <h1 className="mt-4 text-4xl font-semibold">Engineering Notes</h1>
      <p className="mt-4 text-zinc-400">
        Blog infrastructure is ready. Articles coming soon on backend architecture, platform engineering, and system design.
      </p>
    </main>
  );
}

