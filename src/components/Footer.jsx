import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-12 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Brand & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Gianluca
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Center: Made with love */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
            <span>and React</span>
          </div>

          {/* Right: Quick Links */}
          <div className="flex items-center gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white shadow-lg shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
