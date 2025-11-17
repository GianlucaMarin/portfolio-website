import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Target, User } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'I thrive on finding elegant solutions to complex challenges. Every problem is an opportunity to innovate and learn.',
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learner',
      description: 'From competitive sports to AI development, I\'m constantly pushing boundaries and expanding my skillset.',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Whether on the tennis court or in development, I focus on delivering measurable outcomes that exceed expectations.',
      gradient: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <User className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Who I Am
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A unique blend of athletic discipline and technical innovation
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a <span className="text-white font-semibold">Business AI student</span> with a unique background in competitive sports.
                As a former <span className="text-cyan-400 font-semibold">Swiss National Squad tennis player</span>, I learned the value of discipline,
                strategic thinking, and performing under pressure.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, I channel that same dedication into developing innovative digital solutions.
                My journey from the tennis court to the tech world has taught me that success comes
                from continuous learning, adaptability, and never giving up.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about leveraging <span className="text-purple-400 font-semibold">AI and modern technologies</span> to
                solve real-world problems and create meaningful impact through code.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Quick Facts</h3>
                      <p className="text-gray-400">Get to know me better</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-white/5">
                      <span className="text-gray-400">Location</span>
                      <span className="text-white font-medium">Switzerland</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-white/5">
                      <span className="text-gray-400">Education</span>
                      <span className="text-white font-medium">Business AI</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-white/5">
                      <span className="text-gray-400">Sports Background</span>
                      <span className="text-white font-medium">National Tennis</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-400">Availability</span>
                      <span className="text-cyan-400 font-medium">Open to Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glow on Hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
