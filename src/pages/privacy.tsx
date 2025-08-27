export default function Privacy() {
  return (
    <main className="section-pad-resp min-h-screen max-w-3xl mx-auto pt-20 pb-24 text-white">
      <h1 className="h2-resp mb-4 text-white">Privacy Policy</h1>
      <p className="p-resp text-white/80">We collect only minimal personal data necessary to provide our services, including contact form details and email addresses when submitted by you.</p>
      <p className="p-resp mt-2 text-white/80">We do not sell your data to third parties. Your information is used solely for service delivery and communication purposes.</p>
      <p className="p-resp mt-2 text-white/80">You have the right to request access to or deletion of your personal data. Please contact us via the Contact page to exercise these rights.</p>
      <p className="p-resp mt-2 text-white/80">We retain your data only as long as necessary to provide our services or as required by law.</p>
      <p className="p-resp mt-4 opacity-60 text-white/80">Last updated: {new Date().toISOString().slice(0,10)}</p>
    </main>
  );
}