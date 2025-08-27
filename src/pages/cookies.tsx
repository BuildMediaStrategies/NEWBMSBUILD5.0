export default function Cookies() {
  return (
    <main className="section-pad-resp min-h-screen max-w-3xl mx-auto pt-20 pb-24 text-white">
      <h1 className="h2-resp mb-4 text-white">Cookie Policy</h1>
      <p className="p-resp text-white/80">By default, we only use essential cookies required for the website to function properly.</p>
      <p className="p-resp mt-2 text-white/80">We do not set analytics or marketing cookies without your explicit consent through our consent banner.</p>
      <p className="p-resp mt-2 text-white/80">You can accept or reject non-essential cookies through the consent options provided when you first visit our site.</p>
      <p className="p-resp mt-2 text-white/80">You may withdraw your consent at any time by clearing your browser cookies or contacting us via the Contact page.</p>
      <p className="p-resp mt-4 opacity-60 text-white/80">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </main>
  );
}