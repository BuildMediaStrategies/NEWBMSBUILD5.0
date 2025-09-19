import React from "react";

export default function HowItWorks() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl shadow bg-white/5">
          <h3 className="text-xl font-semibold mb-2">1. Book a Free Call</h3>
          <p>Tell us your goals and challenges so we can map out the perfect system.</p>
        </div>
        <div className="p-6 rounded-xl shadow bg-white/5">
          <h3 className="text-xl font-semibold mb-2">2. Build & Launch</h3>
          <p>We design, build, and deploy your automation system in days — not months.</p>
        </div>
        <div className="p-6 rounded-xl shadow bg-white/5">
          <h3 className="text-xl font-semibold mb-2">3. Scale & Optimize</h3>
          <p>We monitor results and keep improving to maximize ROI for your business.</p>
        </div>
      </div>
    </section>
  );
}