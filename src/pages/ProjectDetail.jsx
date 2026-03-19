import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Cpu, Terminal, Box, Database, CheckCircle2, Layout, Layers } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ParticleBackground from '../components/ParticleBackground';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030305] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-[#00f0ff] hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const getIcon = (category) => {
    switch (category) {
      case 'AI/ML': return <Cpu size={20} />;
      case 'NLP': return <Terminal size={20} />;
      case 'Automation': return <Box size={20} />;
      case 'Data Science': return <Database size={20} />;
      default: return <Layout size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030305] text-white relative overflow-hidden pb-24">
      <ParticleBackground />
      
      {/* Background ambient lights */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[180px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#b026ff] rounded-full mix-blend-screen filter blur-[180px] opacity-10 pointer-events-none"></div>

      {/* Spacer to clear navbar */}
      <div className="h-32 w-full"></div>

      <div className="container mx-auto relative z-10 px-6 lg:px-12">
        {/* Breadcrumbs / Back button */}
        <motion.button
          onClick={() => navigate(-1)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-gray-400 hover:text-[#00f0ff] transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold tracking-widest uppercase">Back to Archive</span>
        </motion.button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
                  {getIcon(project.category)}
               </div>
               <span className="text-[#00f0ff] text-xs font-bold tracking-[0.2em] uppercase">{project.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit mb-8 tracking-tighter leading-tight">
              {project.title}
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl leading-[1.8] font-light italic mb-10">
              "{project.description}"
            </p>

            <div className="flex flex-wrap gap-4">
               {project.link !== "#" && (
                 <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-[#00f0ff] text-[#030305] font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                    Execute Live Demo
                 </a>
               )}
               <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full glass border border-white/10 text-white font-bold text-xs tracking-widest uppercase hover:border-[#00f0ff]/40 transition-all flex items-center gap-2">
                 <Github size={16} /> Repository
               </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card !p-0 overflow-hidden relative group">
                <div className="aspect-video w-full flex items-center justify-center overflow-hidden bg-[#010103]" 
                     style={{ background: project.image.startsWith('linear') ? project.image : '#010103' }}>
                  {project.image.startsWith('/') ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="flex flex-col items-center gap-4 text-white/10 uppercase font-black text-2xl tracking-tighter">
                       {getIcon(project.category)}
                       <span>Archive_Preview</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/80 to-transparent"></div>
                </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00f0ff]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#b026ff]/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-20">
            {/* Overview Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                 <h2 className="text-2xl font-bold font-outfit uppercase tracking-wider">Project Overview</h2>
                 <div className="h-[1px] flex-grow bg-white/10"></div>
              </div>
              <p className="text-gray-400 text-lg leading-[1.8] font-light">
                {project.longDescription}
              </p>
            </section>

            {/* Architecture Section - Only if exists */}
            {project.architecture && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                   <h2 className="text-2xl font-bold font-outfit uppercase tracking-wider">Technical Architecture</h2>
                   <div className="h-[1px] flex-grow bg-white/10"></div>
                </div>
                <div className="glass-card bg-white/[0.02] border-white/[0.05] p-10">
                   <div className="flex items-start gap-6">
                      <div className="p-3 rounded-xl bg-[#b026ff]/10 text-[#b026ff] border border-[#b026ff]/20 flex-shrink-0">
                         <Layers size={24} />
                      </div>
                      <p className="text-gray-300 leading-[1.8]">
                        {project.architecture}
                      </p>
                   </div>
                </div>
              </section>
            )}

            {/* Impact Section - New */}
            {project.impact && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                   <h2 className="text-2xl font-bold font-outfit uppercase tracking-wider text-green-400">Project Impact</h2>
                   <div className="h-[1px] flex-grow bg-white/10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {project.impact.map((item, i) => (
                     <div key={i} className="glass-card bg-white/[0.01] border-white/[0.03] p-6 group hover:border-green-400/30 transition-all">
                        <div className="text-green-400 font-bold mb-2 flex items-center gap-2">
                           <CheckCircle2 size={16} /> Impact_{i+1}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{item}</p>
                     </div>
                   ))}
                </div>
              </section>
            )}

            {/* Key Features Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                 <h2 className="text-2xl font-bold font-outfit uppercase tracking-wider">Strategic Components</h2>
                 <div className="h-[1px] flex-grow bg-white/10"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                 {project.features.map((feature, i) => (
                   <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] border border-[#00f0ff]/20 group-hover:bg-[#00f0ff] group-hover:text-[#030305] transition-all duration-300 flex-shrink-0">
                         <span className="text-[10px] font-bold">{i+1}</span>
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-[#00f0ff] transition-colors">{feature}</span>
                   </div>
                 ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div>
               <h3 className="text-xs font-bold text-[#b026ff] tracking-[0.2em] uppercase mb-6">Technologies Leveraged</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-md bg-[#b026ff]/10 border border-[#b026ff]/20 text-[10px] font-bold text-[#b026ff] hover:bg-[#b026ff] hover:text-white transition-all cursor-default">
                       {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Role Sidebar Item - New */}
              {project.role && (
                <div>
                  <h3 className="text-xs font-bold text-green-400 tracking-[0.2em] uppercase mb-6">Your Contribution</h3>
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 italic text-sm text-gray-400 leading-relaxed font-light">
                    "{project.role}"
                  </div>
                </div>
              )}

            <div className="p-8 rounded-2xl glass border-white/[0.05] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00f0ff]/5 to-[#b026ff]/5 rounded-bl-full pointer-events-none"></div>
               <h3 className="text-sm font-bold text-white mb-4 relative z-10">Repository Details</h3>
               <div className="space-y-4 relative z-10">
                  <div className="flex justify-between text-xs">
                     <span className="text-gray-500 uppercase tracking-widest">Type</span>
                     <span className="text-gray-300 font-bold uppercase tracking-wider">{project.category} Implementation</span>
                  </div>
                  <div className="flex justify-between text-xs">
                     <span className="text-gray-500 uppercase tracking-widest">Status</span>
                     <span className="text-green-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Production Ready
                     </span>
                  </div>
               </div>
               <button onClick={() => navigate('/projects')} className="w-full mt-8 py-3 rounded-xl border border-white/10 text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white hover:border-white/40 transition-all">
                  Browse More Work
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
