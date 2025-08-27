export default function Accessibility() {
  return (
    <main className="section-pad-resp min-h-screen max-w-3xl mx-auto pt-20 pb-24 text-white">
      <h1 className="h2-resp mb-4 text-white">Accessibility Statement</h1>
      <p className="p-resp text-white/80">We are committed to making our website accessible to all users and strive to meet WCAG 2.1 AA standards where possible.</p>
      <p className="p-resp mt-2 text-white/80">Our site includes keyboard navigation support and screen reader compatibility for main navigation and content areas.</p>
      <p className="p-resp mt-2 text-white/80">We continuously work to improve accessibility and welcome feedback on how we can better serve users with disabilities.</p>
      <p className="p-resp mt-2 text-white/80">For accessibility concerns or to request assistance, please contact us via the Contact page.</p>
      <p className="p-resp mt-4 opacity-60 text-white/80">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </main>
  );
}