import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Aarav, 28',
    role: 'Recovered from fear of flying',
    quote:
      'Neuronest helped me board a plane again. The VR sessions started gentle and slowly built up. I could finally visit my family after years.',
  },
  {
    name: 'Meera, 34',
    role: 'Therapist, CBT Specialist',
    quote:
      'The AI summaries save me hours of paperwork and the progress visualizations make sessions focused and data-driven.',
  },
  {
    name: 'Rohan, 22',
    role: 'Student with social anxiety',
    quote:
      'I loved the daily mood tracker and guided exposure modules. My anxiety scores dropped visibly in just a few weeks.',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">What people say</h3>
          <div className="flex items-center gap-2">
            <button onClick={prev} aria-label="Previous" className="h-10 w-10 rounded-full bg-slate-50 ring-1 ring-slate-200 hover:bg-slate-100 grid place-items-center">
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </button>
            <button onClick={next} aria-label="Next" className="h-10 w-10 rounded-full bg-slate-50 ring-1 ring-slate-200 hover:bg-slate-100 grid place-items-center">
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </button>
          </div>
        </div>

        <div className="mt-6 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl p-6 bg-[#F9FAFB] ring-1 ring-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-1 text-[#0E7490]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#0E7490] text-[#0E7490]" />
                ))}
              </div>
              <p className="mt-3 text-slate-700 text-lg leading-relaxed">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{t.name}</span> — {t.role}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-8 text-center text-slate-500 text-sm">
          Data privacy first: end-to-end encryption, role-based access, and consent-driven workflows.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
