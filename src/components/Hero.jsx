import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, BrainCircuit } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import Scene from './Scene';
import MagneticButton from './MagneticButton';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center pt-40 pb-20 overflow-hidden">
      {/* Background elements */}
      <ParticleBackground />
      <div className="grid-overlay"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.15] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#b026ff] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.15] animate-pulse delay-1000 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass mb-10 border border-[#00f0ff]/30 shadow-[0_0_20px_rgba(0,240,255,0.15)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f0ff]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out"></div>
              <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping"></div>
              <span className="text-[#00f0ff] text-[11px] font-black tracking-[0.2em] uppercase">
                Next-Generation AI Development
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 font-outfit leading-[1] tracking-[-0.04em]">
              M. Venkat Lakshmi <br className="hidden md:block" />
              <span className="text-gradient">Narayana</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl font-medium mb-12 text-white/80 min-h-[48px] lg:min-h-[56px] tracking-tight font-outfit">
              <Typewriter
                words={[
                  'Architecting Intelligent Systems',
                  'Building Autonomous AI Agents',
                  'Developing Scalable RAG Pipelines'
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1200}
              />
            </h2>

            <p className="text-gray-400 text-lg lg:text-xl mb-16 max-w-2xl mx-auto md:mx-0 leading-[1.8] font-light">
              Pioneering the next wave of <span className="text-white font-medium">Machine Intelligence</span>. specialized in RAG, Agentic workflows, and deploying sophisticated LLM applications that drive real-world impact.
            </p>

            <div className="hero-buttons gap-6">
              <MagneticButton as="a" href="#projects" className="px-12 py-5 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white font-black tracking-[0.15em] uppercase text-xs transition-all duration-300 flex items-center shadow-[0_0_40px_rgba(0,240,255,0.35)] hover:shadow-[0_0_50px_rgba(176,38,255,0.5)] hover:scale-105 active:scale-95">
                Launch Portfolio
              </MagneticButton>
              <MagneticButton as="a" href="#contact" className="px-12 py-5 rounded-full glass border border-white/10 text-white font-black tracking-[0.15em] uppercase text-xs hover:bg-white/5 hover:border-white/30 transition-all duration-300 flex items-center">
                Contact Me
              </MagneticButton>
            </div>

            <div className="stats-grid border-t border-[rgba(255,255,255,0.05)] pt-12">
              <div className="text-center md:text-left group cursor-default">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter transition-all group-hover:tracking-normal"><span className="text-[#00f0ff]">15</span>+</h3>
                <p className="text-[9px] lg:text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black leading-tight">
                  <span className="block text-white/40 group-hover:text-[#00f0ff] transition-colors">AI Systems</span> Deployments
                </p>
              </div>
              <div className="text-center md:text-left group cursor-default">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter transition-all group-hover:tracking-normal"><span className="text-[#b026ff]">10</span>+</h3>
                <p className="text-[9px] lg:text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black leading-tight">
                  <span className="block text-white/40 group-hover:text-[#b026ff] transition-colors">ML Models</span> Architected
                </p>
              </div>
              <div className="text-center md:text-left group cursor-default hidden sm:block">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter transition-all group-hover:tracking-normal"><span className="text-yellow-400">20</span>+</h3>
                <p className="text-[9px] lg:text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black leading-tight">
                  <span className="block text-white/40 group-hover:text-yellow-400 transition-colors">Automated</span> Workflows
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side interactive 3D Scene */}
          <motion.div
            className="hidden md:block relative w-full h-[500px] max-w-lg ml-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Scene />

            {/* Floating UI Badges */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-10 w-16 h-16 glass rounded-xl flex items-center justify-center border-[#b026ff] opacity-80 backdrop-blur-md pointer-events-none z-10 shadow-lg">
              <span className="text-xs font-bold text-[#b026ff]">NLP</span>
            </motion.div>
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }} className="absolute bottom-16 left-0 w-20 h-20 glass rounded-full flex items-center justify-center border-[#00f0ff] opacity-80 backdrop-blur-md pointer-events-none z-10 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="text-xs font-bold text-[#00f0ff]">LLMs</span>
            </motion.div>
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 2, ease: "easeInOut" }} className="absolute top-1/2 -right-4 w-14 h-14 glass rounded-lg flex items-center justify-center border-white opacity-60 backdrop-blur-md pointer-events-none z-10">
              <span className="text-xs font-bold text-white">RAG</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
