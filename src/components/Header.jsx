import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin as LinkedinIcon, Mail } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Sports', href: '#sports' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold relative group">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Gianluca
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Right Side - Social Icons & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/gianluca-marin-5ba027333/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-cyan-400 transition-all"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:maringianluca1@gmail.com"
                className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-cyan-400 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-cyan-400 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="flex items-center gap-3 px-4 pt-4">
                  <a
                    href="https://www.linkedin.com/in/gianluca-marin-5ba027333/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 transition-all"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:maringianluca1@gmail.com"
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 transition-all"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white text-center font-semibold"
                >
                  Let's Talk
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
