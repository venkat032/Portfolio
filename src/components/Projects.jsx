import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, CodeSquare, ChevronRight } from 'lucide-react';
import TiltCard from './TiltCard';
import { projectsData } from '../data/projectsData';

const ProjectCard = ({ project, idx }) => (
  <motion.div
    key={project.id}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.15, duration: 0.8 }}
    className="h-full max-w-sm mx-auto"
  >
    <TiltCard className="h-full">
      <div className="glass-card group flex flex-col h-full overflow-hidden border-[#00f0ff]/10 hover:border-[#00f0ff]/40 shadow-2xl bg-[rgba(10,10,15,0.95)] !p-0">
        {/* Project Image - Reduced size */}
        <div className="h-44 w-full relative overflow-hidden border-b border-[rgba(255,255,255,0.05)] group-hover:border-[#00f0ff]/30 transition-colors duration-500 bg-[#010103]" 
             style={{ background: project.image.startsWith('linear') ? project.image : '#010103' }}>
          
          {project.image.startsWith('/') ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
          ) : (
              <div className="w-full h-full flex items-center justify-center text-white/10 italic font-black uppercase text-xl tracking-tighter">
                 Archive_Preview
              </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,3,5,0.9)] via-[rgba(3,3,5,0.2)] to-transparent"></div>
        </div>

        <div className="px-6 pt-6 pb-8 flex flex-col flex-grow relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#00f0ff]/40 group-hover:w-10 transition-all duration-500"></span>
            <span className="text-[9px] text-[#00f0ff] font-mono tracking-tighter uppercase whitespace-nowrap overflow-hidden text-ellipsis">ID_{project.id.slice(0, 10)}</span>
          </div>

          <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#00f0ff] transition-colors font-outfit leading-tight min-h-[3rem] flex items-center uppercase tracking-wide">{project.title}</h3>
          <p className="text-gray-400 text-[11px] mb-6 flex-grow leading-relaxed font-light italic opacity-80 group-hover:opacity-100 transition-opacity">
            "{project.description}"
          </p>

          <div className="flex flex-wrap gap-1.5 mb-8 mt-auto">
            {project.tech.map((t, i) => (
              <span key={i} className="text-[7px] uppercase tracking-widest font-bold text-[#b026ff] bg-[rgba(176,38,255,0.05)] px-2 py-1 rounded-md border border-[rgba(176,38,255,0.1)] group-hover:border-[#b026ff]/30 transition-colors">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-auto pt-5 border-t border-[rgba(255,255,255,0.05)]">
              <Link
                to={`/projects/${project.id}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-[9px] font-black uppercase tracking-[0.2em] text-white hover:bg-white/10 hover:border-white/20 transition-all group/learn"
              >
                Learn More <ChevronRight size={12} className="group-hover/learn:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center justify-between">
                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[8px] font-bold tracking-[0.15em] uppercase text-[#00f0ff] hover:text-white transition-all group/btn"
                  >
                    Live Execute <ExternalLink size={10} className="group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-[8px] font-bold tracking-[0.15em] uppercase text-gray-600">
                    Repo Private <Github size={10} />
                  </span>
                )}
                <CodeSquare size={12} className="text-gray-700 group-hover:text-[#00f0ff]/30 transition-colors" />
              </div>
          </div>
        </div>
      </div>
    </TiltCard>
  </motion.div>
);

const Projects = () => {
  // Take first 3 projects as featured
  const featuredProjects = [
    projectsData.find(p => p.id === "genai-rag-chatbot"),
    projectsData.find(p => p.id === "ai-resume-platform"),
    projectsData.find(p => p.id === "whatsapp-ai-agent")
  ].filter(Boolean);

  return (
    <section id="projects" className="relative bg-gradient-to-t from-[#030305] to-[#0a0a0f] py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass mb-6 border border-[#00f0ff]/30 backdrop-blur-xl">
            <span className="text-[#00f0ff] text-[10px] font-bold tracking-[0.2em] uppercase">
              Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-outfit mb-6 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto px-4 place-items-center">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/projects" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white font-black tracking-[0.2em] uppercase text-xs hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(176,38,255,0.5)]">
            Archive Repository <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
