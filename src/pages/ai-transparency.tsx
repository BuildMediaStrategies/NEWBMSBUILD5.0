export default function AiTransparency() {
  return (
    <main className="section-pad-resp min-h-screen max-w-3xl mx-auto pt-20 pb-24 text-white">
      <h1 className="h2-resp mb-4 text-white">AI Transparency</h1>
      <p className="p-resp text-white/80">We use AI for automation systems, content generation, and lead capture optimization to improve business efficiency.</p>
      <p className="p-resp mt-2 text-white/80">Human oversight is maintained on all client deliverables. Every AI-generated output is reviewed before implementation.</p>
      <p className="p-resp mt-2 text-white/80">You can opt out of automated decision-making at any time by contacting us via the Contact page.</p>
      <p className="p-resp mt-2 text-white/80">Clear documentation of AI workflows and decision processes is available upon request.</p>
      <p className="p-resp mt-4 opacity-60 text-white/80">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </main>
  );
}