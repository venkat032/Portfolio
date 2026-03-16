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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b026ff] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse delay-1000"></div>

      <div className="container relative z-10">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-6 py-2 rounded-full glass mb-8 border border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.1)]"
            >
              <span className="text-[#00f0ff] text-sm font-bold tracking-widest uppercase">
                Next-Generation AI Development
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 font-outfit leading-[1.1] tracking-[-1px]">
              M. Venkat Lakshmi <br className="hidden md:block" />
              <span className="text-gradient">Narayana</span>
            </h1>

            <h2 className="text-2xl lg:text-4xl font-semibold mb-10 text-gray-300 min-h-[48px] lg:min-h-[64px] tracking-wide">
              <Typewriter
                words={[
                  'AI/ML Engineer',
                  'Generative AI Developer',
                  'Python AI Systems Builder'
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>

            <p className="text-gray-400 text-lg lg:text-xl mb-14 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              AI engineer focused on building intelligent systems using LLMs, machine learning, and automation. Specialized in RAG chatbots, AI agents, and scalable AI applications.
            </p>

            <div className="hero-buttons">
              <MagneticButton as="a" href="#projects" className="px-10 py-5 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white font-bold tracking-widest uppercase text-sm transition-transform duration-300 flex items-center shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(176,38,255,0.5)]">
                View Projects
              </MagneticButton>
              <MagneticButton as="a" href="#skills" className="px-10 py-5 rounded-full glass border border-[rgba(0,240,255,0.5)] text-white font-bold tracking-widest uppercase text-sm hover:bg-[rgba(0,240,255,0.1)] transition-all duration-300 flex items-center">
                Explore AI Work
              </MagneticButton>
              <MagneticButton as="a" href="/resume.pdf" download className="px-10 py-5 rounded-full glass border border-[rgba(255,255,255,0.2)] text-white font-bold tracking-widest uppercase text-sm hover:border-white transition-all duration-300 items-center hidden xl:flex">
                Download Resume
              </MagneticButton>
              <MagneticButton as="a" href="#contact" className="px-10 py-5 rounded-full glass border border-[#b026ff]/50 text-white font-bold tracking-widest uppercase text-sm hover:border-[#b026ff] hover:bg-[rgba(176,38,255,0.1)] transition-all duration-300 flex items-center">
                Contact Me
              </MagneticButton>
            </div>

            <div className="stats-grid border-t border-[rgba(255,255,255,0.05)] pt-10">
              <div className="text-center md:text-left group">
                <h3 className="text-4xl font-black text-white mb-2 group-hover:text-[#00f0ff] transition-colors"><span className="text-[#00f0ff]">15</span>+</h3>
                <p className="text-[10px] lg:text-xs text-gray-400 uppercase tracking-widest font-semibold flex flex-col"><span>AI Projects</span> Built</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-transparent hidden md:block"></div>
              <div className="text-center md:text-left group">
                <h3 className="text-4xl font-black text-white mb-2 group-hover:text-[#b026ff] transition-colors"><span className="text-[#b026ff]">10</span>+</h3>
                <p className="text-[10px] lg:text-xs text-gray-400 uppercase tracking-widest font-semibold flex flex-col"><span>ML Models</span> Developed</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-transparent hidden md:block"></div>
              <div className="text-center md:text-left group hidden sm:block">
                <h3 className="text-4xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors"><span className="text-yellow-400">20</span>+</h3>
                <p className="text-[10px] lg:text-xs text-gray-400 uppercase tracking-widest font-semibold flex flex-col"><span>Automation</span> Workflows</p>
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
