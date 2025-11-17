import { motion } from 'framer-motion';
import { ExternalLink, Code2, Folder, BrainCircuit, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Startup Acquisition Predictor',
      description: 'Developed a machine learning classification model to predict startup acquisition probability for a venture capital firm. Implemented comprehensive data preprocessing, feature engineering, and model evaluation pipeline.',
      implementation: [
        'Data preprocessing and cleaning (handling missing values, outliers)',
        'Feature engineering (creating meaningful predictors from raw data)',
        'Model training and hyperparameter tuning',
        'Feature importance analysis using permutation methods',
        'Model explainability with ICE curves',
        'Performance evaluation and validation'
      ],
      tech: ['Python', 'pandas', 'scikit-learn', 'Data Preprocessing', 'Feature Engineering', 'Classification Models', 'Model Explainability'],
      gradient: 'from-cyan-500 to-cyan-600',
      // icon: BrainCircuit,
      // iconColor: 'text-cyan-400',
      // glowColor: 'rgba(0,212,255,0.5)',
    },
    {
      title: 'AI Customer Support Chatbot',
      description: 'Full-stack AI-powered customer support system for a Swiss energy company. Built enterprise-grade RAG (Retrieval Augmented Generation) pipeline with vector search, real-time chat streaming, and admin dashboard for knowledge base management.',
      implementation: [
        'Backend API with FastAPI and RESTful endpoints',
        'RAG system using LangChain for intelligent responses',
        'Vector database (Qdrant) for semantic search',
        'OpenAI GPT-4 integration for natural language processing',
        'MySQL database for analytics and conversation history',
        'Embeddable JavaScript chat widget',
        'React admin dashboard for content management',
        'Docker containerization for deployment',
        'Website crawling and document processing pipeline'
      ],
      tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI API', 'Qdrant', 'MySQL', 'React', 'Docker', 'RAG Architecture'],
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Hotel Reservation System',
      description: 'Full-stack hotel reservation system built with Python following clean architecture principles. Implemented complete booking workflow including room availability search, dynamic pricing, reservation management, and data analytics visualization.',
      implementation: [
        'Multi-layer architecture (Model, DAL, BLL, UI layers)',
        'Object-oriented design with UML class diagrams',
        'SQLite database with CRUD operations via DAO pattern',
        'Business logic managers for hotels, bookings, guests, pricing',
        'Dynamic pricing engine with seasonal adjustments',
        'Data visualization and analytics using Pandas',
        'Input validation and error handling system',
        'Console-based user interface with role separation (User/Admin)',
        'Git version control and collaborative development'
      ],
      tech: ['Python', 'SQLite', 'Pandas', 'OOP', 'Clean Architecture', 'Git'],
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      title: 'Agent-Readiness Analysis Platform (In Development)',
      description: 'Full-stack web application for analyzing website compatibility with AI agent integration. Currently building an automated web scraping pipeline that evaluates technical architecture, API quality, and infrastructure patterns of target websites. This is our ongoing project with more features being added.',
      implementation: [
        'FastAPI backend with RESTful API endpoints',
        'React + TypeScript frontend using Vite',
        'MySQL database with normalized schema design',
        'Playwright DevTools for automated web scraping',
        'Session-based authentication (HTTPOnly cookies)',
        'Background job processing with Python threading',
        'Word document parsing for dynamic configuration',
        'Tailwind CSS for responsive UI components',
        '...and more features coming soon'
      ],
      tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'MySQL', 'Playwright', 'Tailwind CSS', 'Vite', 'REST API'],
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-gray-900/50">
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
            <Folder className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of some of my recent and past student projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden h-full flex flex-col">
                {/* Image Placeholder - nie anzeigen */}
                {false && (
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-10 relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {project.icon ? (
                        <>
                          {/* Main Icon - GROSS und LEUCHTEND */}
                          <project.icon
                            size={120}
                            className={`${project.iconColor || 'text-cyan-400'} opacity-70`}
                            strokeWidth={1.5}
                            style={{
                              filter: `drop-shadow(0 0 30px ${project.glowColor || 'rgba(0,212,255,0.5)'})`
                            }}
                          />

                          {/* Decorative Sparkles */}
                          <Sparkles
                            className={`w-6 h-6 ${project.iconColor || 'text-cyan-400'} opacity-50 absolute top-6 left-8 animate-pulse`}
                            style={{
                              filter: `drop-shadow(0 0 10px ${project.glowColor || 'rgba(0,212,255,0.4)'})`
                            }}
                          />
                          <Sparkles
                            className={`w-5 h-5 ${project.iconColor || 'text-cyan-400'} opacity-45 absolute top-10 right-12 animate-pulse`}
                            style={{
                              animationDelay: '0.5s',
                              filter: `drop-shadow(0 0 10px ${project.glowColor || 'rgba(0,212,255,0.4)'})`
                            }}
                          />
                          <Sparkles
                            className={`w-6 h-6 ${project.iconColor || 'text-cyan-400'} opacity-50 absolute bottom-8 right-10 animate-pulse`}
                            style={{
                              animationDelay: '1s',
                              filter: `drop-shadow(0 0 10px ${project.glowColor || 'rgba(0,212,255,0.4)'})`
                            }}
                          />
                        </>
                      ) : (
                        <Code2 className="w-16 h-16 text-white/20" />
                      )}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technical Implementation */}
                  {project.implementation && (
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Technical Implementation:</h4>
                      <ul className="space-y-1">
                        {project.implementation.map((item, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
