import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "C", "SQL"],
      color: "from-[#00f0ff] to-[#0080ff]"
    },
    {
      title: "Machine Learning",
      skills: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
      color: "from-[#b026ff] to-[#7000ff]"
    },
    {
      title: "Generative AI",
      skills: ["Large Language Models", "Prompt Engineering", "Retrieval Augmented Generation (RAG)", "Agentic AI", "Multi-Agent Systems"],
      color: "from-[#00f0ff] to-[#b026ff]"
    },
    {
      title: "Frameworks",
      skills: ["LangChain", "Hugging Face", "Flask", "Django", "FAISS"],
      color: "from-[#ff0055] to-[#ff00aa]"
    },
    {
      title: "Automation & Integration",
      skills: ["n8n", "Zapier", "Webhooks", "Event-Driven Pipelines", "Third-Party API Integrations"],
      color: "from-[#ffaa00] to-[#ff5500]"
    },
    {
      title: "Tools",
      skills: ["Docker", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code"],
      color: "from-[#00ff88] to-[#00b0ff]"
    }
  ];

  return (
    <section id="skills" className="relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 mt-0"
        >
          <h2 className="text-5xl md:text-6xl font-black font-outfit mb-6 tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card flex flex-col gap-8 p-10 lg:p-12 border-t-[3px] relative overflow-hidden group shadow-2xl bg-[rgba(15,15,20,0.4)] hover:bg-[rgba(20,20,25,0.8)] h-full"
              style={{ borderTopColor: category.color.includes('00f0ff') ? '#00f0ff' : '#b026ff' }}
            >
              <div className={`absolute -right-10 -top-10 w-48 h-48 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-700`}></div>

              <h3 className="text-2xl font-bold font-outfit text-white tracking-wider flex-shrink-0">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4 lg:gap-5 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-6 py-3 rounded-2xl text-sm font-semibold tracking-wide bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] shadow-sm hover:border-[#00f0ff] hover:text-[#00f0ff] hover:bg-[rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
