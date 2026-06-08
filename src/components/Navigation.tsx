import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState({ state: "Opening Soon", dot: "bg-yellow-400" });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Dynamic opening indicator
    const updateTime = () => {
      const hours = new Date().getHours();
      if (hours >= 10 && hours <= 22) setIsOpenInfo({ state: "Currently Open", dot: "bg-green-400" });
      else if (hours === 9) setIsOpenInfo({ state: "Opening Soon", dot: "bg-yellow-400" });
      else setIsOpenInfo({ state: "Closed Now", dot: "bg-red-500" });
    };
    updateTime();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-forest text-gold text-[11px] uppercase tracking-widest py-2 text-center font-bold border-b border-gold/20 relative z-50">
        🎵 LIVE MUSIC EVERY WEEKEND &nbsp; | &nbsp; HAPPY HOUR: 5–7 PM DAILY &nbsp; | &nbsp; <span className="text-white/80">FREE PARKING AVAILABLE</span>
      </div>
      
      {/* Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 border-b border-white/5 ${isScrolled ? 'bg-forest shadow-xl py-3' : 'bg-forest shadow-md py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 text-white">
              <Leaf className="w-6 h-6 text-gold" />
              <span className="font-serif text-xl font-bold tracking-tight">Hotel Green Inn</span>
              <span className="hidden md:flex ml-4 items-center gap-1 bg-charcoal px-2 py-0.5 rounded text-[9px] uppercase border border-white/10 font-bold tracking-widest">
                <span className={`w-1.5 h-1.5 rounded-full ${isOpenInfo.dot}`}></span> {isOpenInfo.state}
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-wider font-medium opacity-90">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-white hover:text-gold transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="#reserve" className="bg-gold text-forest px-6 py-2.5 rounded-sm font-bold btn-pulse transition-all hover:brightness-110">
                BOOK A TABLE
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-forest overflow-hidden border-t border-white/10"
            >
              <div className="px-4 pt-4 pb-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-gold transition-colors block text-sm font-bold uppercase tracking-widest border-b border-white/10 pb-3"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 left-4 right-4 z-50 md:hidden">
         <a href="#reserve" className="block w-full bg-gold text-forest font-bold py-4 rounded-sm text-center shadow-2xl transition-colors uppercase tracking-widest text-sm btn-pulse">
            BOOK A TABLE
         </a>
      </div>
    </>
  );
}
