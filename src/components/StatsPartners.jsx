import React from 'react';
import { motion } from 'framer-motion';

const Stat = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-100 text-center"
  >
    <div className="text-3xl font-extrabold text-slate-900">{value}</div>
    <div className="mt-1 text-sm text-slate-600">{label}</div>
  </motion.div>
);

const Partners = () => (
  <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
    {['NIMHANS', 'AIIMS', 'IIT Bombay', 'IIT Delhi'].map((p, i) => (
      <motion.div
        key={p}
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: i * 0.05 }}
        className="rounded-xl bg-white p-4 text-center text-slate-700 font-medium ring-1 ring-slate-100 shadow-sm"
      >
        {p}
      </motion.div>
    ))}
  </div>
);

const StatsPartners = () => {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Evidence-backed outcomes</h3>
            <p className="mt-2 text-slate-600">
              We combine clinical research with modern immersion technology to deliver measurable results that last.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Stat value="70%" label="Avg. symptom improvement" delay={0.05} />
              <Stat value="40%" label="Faster recovery" delay={0.1} />
              <Stat value="10k+" label="Sessions delivered" delay={0.15} />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-900">Clinical partners</h4>
            <p className="mt-1 text-slate-600 text-sm">In collaboration with leading institutions and hospitals.</p>
            <Partners />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsPartners;
