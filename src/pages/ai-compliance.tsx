export default function AiCompliance() {
  return (
    <main className="section-pad-resp min-h-screen max-w-3xl mx-auto pt-20 pb-24 text-white">
      <h1 className="h2-resp mb-4 text-white">EU AI Act Compliance</h1>
      <p className="p-resp text-white/80">We follow EU AI Act requirements for risk management, transparency, and human-in-the-loop oversight for all AI systems.</p>
      <p className="p-resp mt-2 text-white/80">High-risk AI uses, such as employment or recruitment automation, include explainability features and human override options.</p>
      <p className="p-resp mt-2 text-white/80">Comprehensive logging and monitoring systems are in place for all AI decisions and automated processes.</p>
      <p className="p-resp mt-2 text-white/80">Clients remain in full control of system deployment and can modify or disable AI features at any time.</p>
      <p className="p-resp mt-2 text-white/80">For compliance questions, contact us via the Contact page.</p>
      <p className="p-resp mt-4 opacity-60 text-white/80">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </main>
  );
}