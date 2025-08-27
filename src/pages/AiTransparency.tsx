export default function AiTransparency() {
  return (
    <main className="section-pad-resp max-w-3xl mx-auto py-12">
      <h1 className="h2-resp mb-4">AI Transparency</h1>
      <p className="p-resp">Information about how we use AI, human oversight, and your opt-out rights. Full details coming soon.</p>
      <p className="p-resp mt-2">For requests, contact us via the Contact page.</p>
      <p className="p-resp mt-4 opacity-60">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </main>
  );
}