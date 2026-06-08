import { motion } from 'motion/react';
import { Utensils, Coffee, Car, Truck, ShieldCheck, Star, Music, Heart } from 'lucide-react';

export default function Hero() {
  const quickServices = [
    { icon: Utensils, label: 'Dine-In' },
    { icon: Coffee, label: 'Takeaway' },
    { icon: Car, label: 'Drive-Through' },
    { icon: Truck, label: 'Delivery' },
    { icon: ShieldCheck, label: 'No-Contact Delivery' },
  ];

  return (
    <section id="home" className="relative min-h-[95vh] flex flex-col md:flex-row overflow-hidden bg-cream pt-[113px] md:pt-[101px]">
      
      {/* Left: Branding & Hero */}
      <div className="w-full md:w-3/5 bg-forest px-8 py-16 md:p-12 lg:p-20 flex flex-col justify-center relative items-start text-left shrink-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-5 blur-[120px]"></div>
        
        <div className="relative z-10 w-full max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-white text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-8 rounded-full shadow-lg"
          >
            Now Serving Brunch · Lunch · Dinner
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight mb-6"
          >
            Where Every Meal <br /> Becomes a <span className="text-gold mt-2 block">Memory</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/70 text-base md:text-lg max-w-md mb-10 leading-relaxed font-light"
          >
            Experience fine dining with family warmth. Live music, signature cuisine, and an ambiance crafted for every guest.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#reserve" className="bg-gold text-forest hover:bg-yellow-500 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest text-center shadow-lg transition-colors">
              Reserve a Table
            </a>
            <a href="#menu" className="border border-white/30 text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors text-center">
              Explore Menu
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right side: Ambiance Image & Floating Badges */}
      <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-center items-center gap-6 relative min-h-[400px]">
        {/* Background image constrained to right side */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80")',
          }}
        >
           <div className="absolute inset-0 bg-gradient-to-l from-charcoal/80 via-forest/60 to-forest/90 md:to-forest/0" />
        </div>
        
        {/* Floating Badges re-styled as trust cards on the right */}
        <div className="relative z-10 flex flex-col gap-4 w-full max-w-[260px] md:self-end md:mr-10 xl:mr-16 mt-auto mb-20 md:mb-10">
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.6, duration: 0.8 }}
             className="glass p-4 rounded-sm shadow-2xl border border-gold/20 flex flex-col gap-3"
           >
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif font-bold text-lg">
                   4.8
                 </div>
                 <div>
                   <div className="text-[11px] font-bold text-forest uppercase tracking-wider">User Rating</div>
                   <div className="flex text-gold text-[10px] mt-0.5">★★★★★</div>
                 </div>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.7, duration: 0.8 }}
             className="glass p-4 rounded-sm shadow-2xl border border-gold/20 flex items-center gap-4"
           >
              <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-white">
                <Music className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-forest uppercase tracking-wider">Live Music</div>
                <div className="text-[10px] text-forest/60">Every Fri-Sun Night</div>
              </div>
           </motion.div>
        </div>
      </div>

      {/* Quick Services Strip */}
      <footer className="absolute bottom-0 w-full h-16 md:h-20 bg-white border-t border-black/5 flex items-center justify-start md:justify-around px-4 md:px-10 overflow-x-auto no-scrollbar z-20 gap-8 md:gap-4">
        {quickServices.map((service, idx) => (
          <motion.div 
            key={service.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + (idx * 0.1) }}
            className="flex items-center gap-3 px-4 py-2 bg-cream border border-black/5 rounded-full grayscale hover:grayscale-0 transition-all cursor-default min-w-max"
          >
            <service.icon className="w-4 h-4 text-forest" />
            <span className="text-[11px] font-bold uppercase tracking-tighter text-charcoal">{service.label}</span>
          </motion.div>
        ))}
      </footer>
    </section>
  );
}
