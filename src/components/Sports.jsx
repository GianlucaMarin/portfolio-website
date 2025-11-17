import { motion } from 'framer-motion';
import { Trophy, Award, Target, Medal } from 'lucide-react';

const Sports = () => {
  const achievements = [
    {
      title: 'Schweizer Meister',
      detail: 'National Championship Winner',
      icon: Trophy,
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'ITF Holland - 2. Platz',
      detail: 'International Tournament Silver',
      icon: Medal,
      gradient: 'from-gray-300 to-gray-500'
    },
    {
      title: 'Europameisterschaft 2017 - 4. Platz',
      detail: 'European Championship',
      icon: Award,
      gradient: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Schweizer Nationalkader',
      detail: '5 Years | 2 Years at Swisstennis Training Base Biel',
      icon: Target,
      gradient: 'from-cyan-400 to-cyan-600'
    },
  ];

  const stats = [
    { value: '5', label: 'Years National Squad', gradient: 'from-cyan-400 to-cyan-600' },
    { value: '4+', label: 'International Titles', gradient: 'from-purple-400 to-purple-600' },
    { value: 'Top', label: 'National Level', gradient: 'from-pink-400 to-pink-600' },
  ];

  return (
    <section id="sports" className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-900/50 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Athletic Excellence</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sports Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Swiss National Squad | International Competitor | Mental Resilience Champion
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Achievements */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">Greatest Achievements</h3>

              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8 }}
                      className="group relative"
                    >
                      {/* Glow Effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}></div>

                      {/* Card */}
                      <div className="relative flex items-center gap-4 p-5 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl border border-white/10">
                        <div className={`w-14 h-14 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg">{achievement.title}</p>
                          <p className="text-gray-400 text-sm">{achievement.detail}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* What Tennis Taught Me */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 p-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl backdrop-blur-sm"
            >
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">What Tennis Taught Me</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                In high-performance tennis, every point matters - no matter how far behind you are.
                This sport demanded exceptional mental resilience and taught me to find solutions under
                extreme pressure. The experience of competing at national and international level shaped
                my approach to challenges: stay focused, adapt quickly, and never give up.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Problem-solving under pressure', 'Mental resilience', 'Strategic thinking', 'Performance mindset'].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Trophy Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
              <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center">
                <Trophy className="w-64 h-64 text-yellow-500/30" strokeWidth={1} />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl border border-white/10"
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
