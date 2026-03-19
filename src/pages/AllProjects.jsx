import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, CodeSquare, Box, Terminal, Cpu, Database, ChevronRight } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import ParticleBackground from '../components/ParticleBackground';
import { projectsData } from '../data/projectsData';

const AllProjects = () => {
  const [filter, setFilter] = useState('All');

  // Ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'AI/ML', 'NLP', 'Automation', 'Data Science'];

  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

  const getIcon = (category) => {
    switch (category) {
      case 'AI/ML': return <Cpu size={14} />;
      case 'NLP': return <Terminal size={14} />;
      case 'Automation': return <Box size={14} />;
      case 'Data Science': return <Database size={14} />;
      default: return <CodeSquare size={14} />;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-28 relative bg-[#030305] overflow-hidden">
      <div className="h-32 w-full"></div> {/* Spacer to clear navbar */}
      <ParticleBackground />
      
      {/* Background ambient lights */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[180px] opacity-10 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#b026ff] rounded-full mix-blend-screen filter blur-[180px] opacity-10 pointer-events-none animate-pulse delay-700"></div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center mb-24 px-4"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass mb-6 border border-[#00f0ff]/30 backdrop-blur-xl">
            <span className="text-[#00f0ff] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
              Project Repository
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-outfit mb-10 tracking-tighter leading-tight text-center">
            Curated <span className="text-gradient">Innovations</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-[1.8] font-light text-center px-4">
            A comprehensive overview of architectural implementations in machine intelligence and distributed systems.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mt-14 px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                  filter === cat
                    ? 'bg-[#00f0ff] text-[#030305] border-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                    : 'glass text-gray-400 border-[rgba(255,255,255,0.1)] hover:border-[#00f0ff]/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1200px]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className="glass-card group relative flex flex-col h-full overflow-hidden border-[#00f0ff]/10 hover:border-[#00f0ff]/40 shadow-2xl bg-[rgba(10,10,15,0.95)] !p-0">
                    
                    {/* Scanning Animation Element */}
                    <div className="scan-container">
                      <div className="scan-line"></div>
                    </div>

                    {/* Project Image Area */}
                    <div className="h-44 w-full relative overflow-hidden border-b border-[rgba(255,255,255,0.05)] group-hover:border-[#00f0ff]/30 transition-colors duration-500 flex items-center justify-center bg-[#010103]"
                      style={{ background: project.image.startsWith('linear') ? project.image : '#010103' }}>

                      {project.image.startsWith('/') ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 group-hover:rotate-1"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-4 text-white/20 group-hover:text-[#00f0ff]/60 transition-colors">
                           {getIcon(project.category)}
                           <span className="text-[10px] tracking-widest font-black uppercase">Archive_{idx}</span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,3,5,1)] via-[rgba(3,3,5,0.2)] to-transparent"></div>
                      
                      {/* Meta Tags on image */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="glass px-3 py-1 rounded-full text-[9px] font-bold text-[#00f0ff] border border-[#00f0ff]/20">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="px-6 pt-6 pb-8 flex flex-col flex-grow relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-8 h-[1px] bg-[#00f0ff]/40 group-hover:w-12 transition-all duration-500"></span>
                        <span className="text-[10px] text-[#00f0ff] font-mono tracking-tighter uppercase whitespace-nowrap overflow-hidden text-ellipsis">ID_{project.id.slice(0, 10)}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#00f0ff] transition-colors font-outfit leading-tight min-h-[3rem] flex items-center uppercase tracking-wide">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-[11px] mb-6 flex-grow leading-relaxed font-light italic opacity-80 group-hover:opacity-100 transition-opacity">
                        "{project.description}"
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-[7px] uppercase tracking-widest font-bold text-[#b026ff] bg-[rgba(176,38,255,0.05)] px-2 py-1 rounded-md border border-[rgba(176,38,255,0.1)] group-hover:border-[#b026ff]/30 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-[rgba(255,255,255,0.05)]">
                        <Link
                          to={`/projects/${project.id}`}
                          className="flex items-center justify-center gap-2.5 py-3 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:bg-white/10 hover:border-white/20 transition-all group/learn"
                        >
                          Learn More <ChevronRight size={14} className="group-hover/learn:translate-x-1 transition-transform" />
                        </Link>

                        <div className="flex items-center justify-between">
                          {project.link !== "#" ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2.5 text-[9px] font-bold tracking-[0.15em] uppercase text-[#00f0ff] hover:text-white transition-all group/btn"
                            >
                              Live Execute <ExternalLink size={12} className="group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                          ) : (
                            <span className="flex items-center gap-2.5 text-[9px] font-bold tracking-[0.15em] uppercase text-gray-600">
                              Repo Private <Github size={12} />
                            </span>
                          )}
                          <CodeSquare size={14} className="text-gray-700 group-hover:text-[#00f0ff]/30 transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                       <div className="absolute bottom-[-16px] right-[-16px] w-8 h-8 bg-[#00f0ff]/10 rotate-45 group-hover:bg-[#00f0ff]/20 transition-colors"></div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjects;
