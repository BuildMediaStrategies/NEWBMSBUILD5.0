export default function Subprocessors() {
  return (
    <main className="section-pad-resp min-h-screen max-w-3xl mx-auto pt-20 pb-24 text-white">
      <h1 className="h2-resp mb-4 text-white">Sub-processors</h1>
      <p className="p-resp text-white/80">We do not currently use any third-party vendors or subprocessors for data processing.</p>
      <p className="p-resp mt-2 text-white/80">This page will be updated if we begin working with any third-party data processors in the future.</p>
      <p className="p-resp mt-2 text-white/80">For questions about data processing, contact us via the Contact page.</p>
      <p className="p-resp mt-4 opacity-60 text-white/80">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </main>
  );
}