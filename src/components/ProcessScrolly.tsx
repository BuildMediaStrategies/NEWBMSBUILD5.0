import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Book',
    description: 'Free strategy call to identify your biggest automation opportunities'
  },
  {
    number: '02',
    title: 'Build',
    description: 'Custom system designed, built, and deployed in days not months'
  },
  {
    number: '03',
    title: 'Scale',
    description: 'Ongoing optimization and monitoring to maximize your ROI'
  }
];

export default function ProcessScrolly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  return (
    <section ref={containerRef} className="relative py-32 bg-black text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto section-pad-resp">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-400">Three simple steps to transform your business</p>
        </motion.div>

        <div className="space-y-40">
          {steps.map((step, index) => {
            const stepStart = index / steps.length;
            const stepEnd = (index + 1) / steps.length;

            const opacity = useTransform(
              scrollYProgress,
              [stepStart, stepStart + 0.1, stepEnd - 0.1, stepEnd],
              prefersReducedMotion ? [1, 1, 1, 1] : [0.3, 1, 1, 0.3]
            );

            const scale = useTransform(
              scrollYProgress,
              [stepStart, stepStart + 0.1, stepEnd - 0.1, stepEnd],
              prefersReducedMotion ? [1, 1, 1, 1] : [0.95, 1, 1, 0.95]
            );

            const lineProgress = useTransform(
              scrollYProgress,
              [stepStart, stepEnd],
              prefersReducedMotion ? [100, 100] : [0, 100]
            );

            return (
              <motion.div
                key={step.number}
                style={{ opacity, scale }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
                  <div className="flex-shrink-0">
                    <div className="text-7xl md:text-8xl font-bold text-white/10">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Progress line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 md:left-16 top-full h-40 w-px bg-white/10 mt-8">
                    <motion.div
                      className="w-full bg-white/30"
                      style={{ height: `${lineProgress.get()}%` }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
