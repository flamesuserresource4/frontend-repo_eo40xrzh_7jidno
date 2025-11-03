import React from 'react';
import { Brain, Calendar, Activity, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Step = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="relative bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-100"
  >
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-teal-50 text-[#0E7490] flex items-center justify-center ring-1 ring-teal-100">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-slate-600 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Intake & Baseline',
      desc: 'Complete a structured intake: history, triggers, and self-assessment to establish your emotional baseline.',
    },
    {
      icon: Brain,
      title: 'AI Classification',
      desc: 'Our NLP engine identifies phobia type and severity, recommending a personalized VR exposure path.',
    },
    {
      icon: Activity,
      title: 'Immersive VR Sessions',
      desc: 'Experience graded exposure modules (heights, crowds, spiders, and more) with adaptive difficulty.',
    },
    {
      icon: Shield,
      title: 'Secure Progress Tracking',
      desc: 'HIPAA/DPDP-aligned progress logs, AI summaries, and therapist insights — all encrypted end-to-end.',
    },
  ];

  return (
    <section className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">How it works</h2>
          <p className="mt-3 text-slate-600">
            A seamless flow from assessment to adaptive treatment — guided by AI and supervised by certified therapists.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Step key={s.title} icon={s.icon} title={s.title} desc={s.desc} index={i} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <div className="h-2 w-full max-w-4xl bg-gradient-to-r from-teal-200 via-[#2DD4BF] to-[#0E7490] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
