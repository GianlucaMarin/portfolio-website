import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: 'Business Artificial Intelligence FHNW Olten',
      period: '09.2024 - heute',
      current: true,
    },
    {
      institution: 'BM2 KV Zürich / Typ Wirtschaft',
      period: '08.2023 - 07.2024',
      current: false,
    },
    {
      institution: 'UNITED School of Sports Zürich',
      program: 'Kaufmännische Grundbildung für Sporttalente',
      period: '08.2020 - 07.2023',
      current: false,
    },
    {
      institution: 'Sporthandelsschule BFB Biel',
      period: '08.2018 - 07.2020',
      current: false,
    },
  ];

  const certificates = [
    'Handelsdiplom BFB',
    'B2 First Zertifikat (Englisch)',
    'B1 Française DELF B1 Zertifikat (Französisch)',
    'Eidg. Fähigkeitszeugnis Kauffrau/-mann, Profil E',
    'Berufsmaturitätszeugnis',
  ];

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Education</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My educational background and professional qualifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-cyan-400" />
              Educational Path
            </h3>

            <div className="relative space-y-8">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>

              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 top-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    edu.current
                      ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/50'
                      : 'bg-gradient-to-br from-purple-500 to-purple-600'
                  }`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`group relative ${
                    edu.current ? 'hover:scale-105' : 'hover:scale-102'
                  } transition-transform duration-300`}>
                    <div className={`absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 ${
                      edu.current
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-600'
                        : 'bg-gradient-to-r from-purple-500 to-purple-600'
                    }`}></div>

                    <div className={`relative p-6 rounded-xl border transition-all ${
                      edu.current
                        ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/30'
                        : 'bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-white/10'
                    }`}>
                      <h4 className="text-lg font-bold text-white mb-2">{edu.institution}</h4>
                      {edu.program && (
                        <p className="text-gray-300 mb-2 text-sm">{edu.program}</p>
                      )}
                      <p className={`text-sm font-medium ${edu.current ? 'text-cyan-400' : 'text-purple-400'}`}>
                        {edu.period}
                        {edu.current && ' • Currently Studying'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
              <Award className="w-7 h-7 text-purple-400" />
              Diplomas & Certificates
            </h3>

            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>

                  {/* Card */}
                  <div className="relative flex items-center gap-4 p-5 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <p className="text-white font-semibold flex-1">{cert}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
