import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "AI Developer",
      company: "Innochase",
      description: "Developing intelligent AI systems and advanced automation solutions.",
      icon: <Briefcase size={20} />
    },
    {
      role: "Machine Learning Intern",
      company: "Bharat Intern",
      description: "Built predictive machine learning models and improved model accuracy by 12%.",
      icon: <Briefcase size={20} />
    },
    {
      role: "AI with Python Intern",
      company: "Edvedha",
      description: "Built NLP applications and automated data preprocessing pipelines.",
      icon: <Briefcase size={20} />
    },
    {
      role: "Web Development Intern",
      company: "EduNet",
      description: "Developed MERN stack applications including a Zomato clone.",
      icon: <Briefcase size={20} />
    }
  ];

  const education = {
    degree: "B.Tech in Computer Science (AI/ML)",
    institution: "Sphoorthy Engineering College, Hyderabad",
    icon: <GraduationCap size={20} />
  };

  const certifications = [
    "IBM Artificial Intelligence Fundamentals",
    "Machine Learning with Python – Cognitive Class",
    "Accenture Developer Simulation",
    "MERN Stack Development – EduNet",
    "Infosys Java Tools"
  ];

  return (
    <section id="experience" className="relative overflow-hidden">
      {/* Decorative vertical line for timeline */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(0,240,255,0.2)] to-transparent hidden lg:block"></div>

      <div className="container mx-auto relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Left Column: Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-16"
            >
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-[#00f0ff] border-[#00f0ff]/50 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold font-outfit">Experience</h2>
            </motion.div><br />


            <div className="flex flex-col gap-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-10 lg:p-12 border-l-[4px] hover:border-l-[#00f0ff] transition-all duration-300 relative group hover:bg-[rgba(20,20,25,0.6)]"
                  style={{ borderLeftColor: 'rgba(255,255,255,0.05)' }}
                >
                  <div className="absolute -left-10 top-6 w-4 h-4 rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff] hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-[#b026ff] font-medium text-sm mb-4">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-[1.75]">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-16"
            >
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-[#b026ff] border-[#b026ff]/50 shadow-[0_0_20px_rgba(176,38,255,0.2)]">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-4xl font-black font-outfit uppercase tracking-wider">Education</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 lg:p-12 border-l-[4px] border-l-[#b026ff] relative mb-16 shadow-xl bg-[rgba(15,15,20,0.4)] hover:bg-[rgba(20,20,25,0.6)]"
            >
              <div className="absolute -right-10 top-8 w-6 h-6 rounded-full bg-[#b026ff] shadow-[0_0_15px_#b026ff] hidden lg:block opacity-100"></div>
              <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
              <p className="text-[#00f0ff] font-semibold text-base">{education.institution}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-16"
            >
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-yellow-400 border-yellow-400/50 shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                <Award size={32} />
              </div>
              <h2 className="text-4xl font-black font-outfit uppercase tracking-wider">Certifications</h2>
            </motion.div>

            <div className="flex flex-col gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass flex items-center gap-6 p-8 rounded-[24px] border border-[rgba(255,255,255,0.05)] hover:border-[#b026ff]/50 hover:bg-[rgba(176,38,255,0.05)] hover:shadow-[0_0_20px_rgba(176,38,255,0.15)] transition-all duration-400"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#b026ff] shadow-[0_0_8px_rgba(0,240,255,0.5)]"></div>
                  <p className="text-gray-200 text-lg font-medium">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
