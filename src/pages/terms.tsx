export default function Terms() {
  return (
    <main className="section-pad-resp min-h-screen max-w-3xl mx-auto pt-20 pb-24 text-white">
      <h1 className="h2-resp mb-4 text-white">Terms of Service</h1>
      <p className="p-resp text-white/80">Our services are provided "as-is" with best efforts to deliver quality automation solutions.</p>
      <p className="p-resp mt-2 text-white/80">Clients remain responsible for the lawful use of all systems and automation we implement.</p>
      <p className="p-resp mt-2 text-white/80">Our liability is limited to direct damages only. We are not liable for any indirect, consequential, or special losses.</p>
      <p className="p-resp mt-2 text-white/80">These terms are governed by UK law. Any disputes will be handled through local UK jurisdiction.</p>
      <p className="p-resp mt-2 text-white/80">For questions about these terms, contact us via the Contact page.</p>
      <p className="p-resp mt-4 opacity-60 text-white/80">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </main>
  );
}