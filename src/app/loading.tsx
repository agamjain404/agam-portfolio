export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-6xl animate-pulse space-y-6 px-5 py-20 sm:px-8">
      <div className="h-8 w-56 rounded bg-white/10" />
      <div className="h-5 w-full max-w-2xl rounded bg-white/10" />
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="h-24 rounded-2xl bg-white/10" />
        <div className="h-24 rounded-2xl bg-white/10" />
        <div className="h-24 rounded-2xl bg-white/10" />
      </div>
      <div className="h-56 rounded-2xl bg-white/10" />
      <div className="h-56 rounded-2xl bg-white/10" />
    </main>
  );
}

