import { Helmet } from 'react-helmet-async';

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Case Studies – BuildMediaStrategies</title>
        <meta name="description" content="Case studies showcasing our web design, AI automation, and development work for Dover and Kent businesses." />
      </Helmet>
      <div className="bg-black text-white min-h-screen pt-20">
        <section className="py-32">
          <div className="max-w-7xl mx-auto section-pad-resp text-center">
            <h1 className="h1-resp mb-6 heading-safe">Case Studies</h1>
            <p className="p-resp text-gray-400">This page is currently under construction due to large updates.</p>
          </div>
        </section>
      </div>
    </>
  );
}