import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CodeSquare } from 'lucide-react';
import TiltCard from './TiltCard';

const Projects = () => {
  const projects = [
    {
      title: "GenAI RAG Chatbot",
      tech: ["Python", "LangChain", "OpenAI", "FAISS", "Flask"],
      description: "An end-to-end Generative AI chatbot built using Retrieval Augmented Generation with semantic search and vector databases.",
      link: "https://gen-ai-chatbot-37j6.onrender.com",
      image: "/project-rag-chatbot.png"
    },
    {
      title: "Restaurant WhatsApp AI Agent",
      tech: ["GenAI", "APIs", "n8n", "AI Agents"],
      description: "Agentic AI system that automatically responds to restaurant customer queries through WhatsApp using LLMs and workflow automation.",
      impact: "Reduced manual customer support effort by 60%.",
      link: "#",
      image: "/project-whatsapp-agent.png"
    },
    {
      title: "AI Resume Analysis Platform",
      tech: ["NLP", "RAG", "AI Agents", "Flask"],
      description: "AI-powered document intelligence platform that extracts structured data from resumes and performs semantic matching with job requirements.",
      link: "https://innohire.ai/",
      image: "/project-ai-resume.png"
    }
  ];

  return (
    <section id="projects" className="relative bg-gradient-to-t from-[#030305] to-[#0a0a0f]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black font-outfit mb-4 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg mb-4">A selection of my recent AI engineering work and automation systems.</p>
          <div className="w-24 h-2 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1200px]">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 48, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.8, type: "spring" }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="glass-card group flex flex-col h-full overflow-hidden border-[#00f0ff]/20 hover:border-[#00f0ff]/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[rgba(10,10,15,0.8)]">
                  {/* Project Image */}
                  <div className="h-48 w-full relative overflow-hidden border-b border-[rgba(255,255,255,0.1)] group-hover:border-[#00f0ff]/50 transition-colors duration-500" style={{ transform: "translateZ(0)" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,3,5,0.9)] via-[rgba(3,3,5,0.3)] to-transparent"></div>
                    {/* Neon border glow on hover */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00f0ff]/30 rounded-t-[20px] transition-all duration-500"></div>
                  </div>

                  <div className="p-8 md:p-12 lg:p-14 flex flex-col flex-grow relative z-10" style={{ transform: "translateZ(20px)" }}>
                    <h3 className="text-xl md:text-3xl font-bold mb-6 text-white group-hover:text-[#00f0ff] transition-colors inline-block">{project.title}</h3>
                    <p className="text-gray-300 text-base mb-8 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 mt-auto" style={{ transform: "translateZ(10px)" }}>
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-[#b026ff] bg-[rgba(176,38,255,0.1)] px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.impact && (
                      <div className="mb-6 p-4 rounded-lg bg-[rgba(0,240,255,0.05)] border border-[rgba(0,240,255,0.2)]" style={{ transform: "translateZ(12px)" }}>
                        <p className="text-xs text-[#00f0ff] font-semibold"><strong className="text-white">Impact:</strong> {project.impact}</p>
                      </div>
                    )}

                    <div className="flex items-center gap-4 mt-auto border-t border-[rgba(255,255,255,0.1)] pt-4" style={{ transform: "translateZ(15px)" }}>
                      {project.link !== "#" ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#00f0ff] transition-colors"
                        >
                          Live Demo <ExternalLink size={16} />
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 text-sm font-medium text-gray-400 cursor-not-allowed">
                          Private Repo <Github size={16} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
