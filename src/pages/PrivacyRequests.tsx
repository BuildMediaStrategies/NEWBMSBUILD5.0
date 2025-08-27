export default function PrivacyRequests() {
  return (
    <main className="section-pad-resp max-w-3xl mx-auto py-12">
      <h1 className="h2-resp mb-4">Data Subject Access Requests</h1>
      <p className="p-resp">You have the right to access, delete, or export your personal data under GDPR. Full process coming soon.</p>
      <p className="p-resp mt-2">For requests, contact us via the Contact page.</p>
      <p className="p-resp mt-4 opacity-60">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </main>
  );
}