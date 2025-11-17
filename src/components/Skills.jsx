import { motion } from 'framer-motion';
import { Code, Server, Wrench, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code,
      gradient: 'from-cyan-500 to-cyan-600',
      skills: ['Python', 'SQL', 'Prolog', 'SPARQL', 'SQWRL', 'DMN'],
    },
    {
      category: 'Frameworks & Databases',
      icon: Server,
      gradient: 'from-purple-500 to-purple-600',
      skills: ['React', 'FastAPI', 'LangChain', 'Tailwind CSS', 'Pandas', 'SQLite', 'MySQL', 'Qdrant'],
    },
    {
      category: "Tools I've Worked With",
      icon: Wrench,
      gradient: 'from-pink-500 to-pink-600',
      skills: ['Git', 'GitHub', 'VS Code', 'LangSmith', 'Voiceflow', 'Tableau Prep', 'Orange', 'Protégé', 'Trisotech DMN'],
    },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <Zap className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-medium text-pink-400">Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
