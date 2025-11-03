import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import StatsPartners from './components/StatsPartners';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <HowItWorks />
      <StatsPartners />
      <Testimonials />
      <footer className="border-t border-slate-200 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#0E7490] text-white grid place-items-center font-bold">N</div>
            <span>Neuronest — AI + VR Therapy</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Privacy</span>
            <span>Compliance</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
