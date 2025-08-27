export default function PrivacyRequests() {
  return (
    <main className="section-pad-resp min-h-screen max-w-3xl mx-auto pt-20 pb-24 text-white">
      <h1 className="h2-resp mb-4 text-white">Data Subject Access Requests</h1>
      <p className="p-resp text-white/80">You have the right to access, delete, or export your personal data under GDPR. Full process coming soon.</p>
      <p className="p-resp mt-2 text-white/80">For requests, contact us via the Contact page.</p>
      <p className="p-resp mt-4 opacity-60 text-white/80">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </main>
  );
}