import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Network, Zap } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Cpu size={32} className="text-[#00f0ff]" />,
      title: "AI Engineering",
      description: "Designing end-to-end intelligent systems, fine-tuning neural networks, and developing scalable algorithms."
    },
    {
      icon: <Network size={32} className="text-[#b026ff]" />,
      title: "Machine Learning",
      description: "Building predictive ML models, data analysis deep dives, and optimizing accuracy profiles."
    },
    {
      icon: <Zap size={32} className="text-[#00f0ff]" />,
      title: "Generative AI",
      description: "Developing intelligent RAG chatbots, Agentic AI, and document intelligence pipelines."
    },
    {
      icon: <Code2 size={32} className="text-[#b026ff]" />,
      title: "Automation Systems",
      description: "Creating powerful multi-agent systems and automating enterprise workflows using n8n and AI tools."
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-[#030305] to-[#0a0a0f]">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-black font-outfit mb-4 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] mx-auto rounded-full mb-10"></div>

          <motion.div
            className="text-left text-gray-300 max-w-5xl mx-auto glass p-10 md:p-14 lg:p-16 rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-2xl relative overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00f0ff] to-[#b026ff] opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-700"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8">
              {/* Vertical Accent Line */}
              <div className="hidden md:block w-1.5 self-stretch bg-gradient-to-b from-[#00f0ff] to-transparent rounded-full opacity-70"></div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-white font-outfit tracking-wide mb-6 flex items-center gap-4">
                  <span className="md:hidden w-8 h-1 bg-[#00f0ff] rounded-full inline-block"></span>
                  M. Venkat Lakshmi Narayana
                </h3>

                <p className="text-lg md:text-xl leading-relaxed md:leading-loose text-gray-300 mb-8">
                  I am an AI/ML Engineer passionate about designing and building intelligent, real-world AI applications. My expertise lies in <strong className="text-[#00f0ff] font-medium">Large Language Models</strong>, advanced machine learning, and comprehensive automation systems.
                </p>

                <p className="text-base md:text-lg leading-relaxed md:leading-loose text-gray-400">
                  Currently, my work revolves around developing scalable AI products—ranging from intelligent <strong className="text-white font-medium">RAG chatbots</strong> and autonomous <strong className="text-white font-medium">AI agents</strong>, to sophisticated document intelligence pipelines and enterprise-grade workflow automation platforms.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 lg:p-12 border-t-[3px] border-t-transparent hover:border-t-[#00f0ff] flex flex-col items-start justify-between group shadow-xl bg-[rgba(15,15,20,0.6)] hover:bg-[rgba(20,20,25,0.8)] min-h-[350px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                {card.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-white tracking-wide leading-tight">{card.title}</h3>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed mt-auto">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f0ff] opacity-5 filter blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#b026ff] opacity-5 filter blur-[150px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default About;
