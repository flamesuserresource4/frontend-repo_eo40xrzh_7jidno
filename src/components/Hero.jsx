import React from 'react';
import { Rocket, Shield, User } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-[#0E7490] flex items-center justify-center text-white font-bold">N</div>
          <span className="font-semibold text-slate-900 text-lg">Neuronest</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition">
            <User className="h-4 w-4" /> Patient Login
          </button>
          <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#0E7490] text-white shadow-sm hover:bg-[#0c6177] transition">
            <Shield className="h-4 w-4" /> Therapist Login
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 pt-10 pb-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0E7490] bg-teal-50 rounded-full px-3 py-1 ring-1 ring-teal-100">
            <Rocket className="h-4 w-4" /> AI + VR Therapy Platform
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Conquer Your Fears through Immersive AI + VR Therapy
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Personalized exposure therapy powered by emotional AI, secure progress tracking, and therapist-guided care — designed to treat phobias and anxiety disorders.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-[#0E7490] text-white shadow-sm hover:bg-[#0c6177] transition">
              Start Therapy
            </button>
            <button className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50 transition">
              For Therapists
            </button>
            <button className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-[#2DD4BF] text-slate-900 hover:bg-teal-300 transition">
              Book Consultation
            </button>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
            <div>
              <span className="font-semibold text-slate-900">70%</span> improvement
            </div>
            <div>
              <span className="font-semibold text-slate-900">40%</span> faster recovery
            </div>
            <div>
              <span className="font-semibold text-slate-900">10,000+</span> sessions delivered
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-[420px] sm:h-[520px] md:h-[560px] rounded-3xl overflow-hidden shadow-lg bg-white"
        >
          <Spline
            scene="https://prod.spline.design/9HgHYACX2il7xmYO/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
