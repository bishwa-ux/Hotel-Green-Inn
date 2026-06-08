import { motion } from 'motion/react';
import { ChefHat, CakeSlice, GlassWater, Moon, Salad, Music } from 'lucide-react';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, suffix = "", text }: { end: number, suffix?: string, text: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000;
    
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = (time - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end]);

  return (
    <div className="text-center md:text-left">
      <div className="font-serif text-4xl md:text-5xl text-gold font-bold mb-2">
        {count}{suffix}
      </div>
      <div className="text-charcoal font-bold uppercase tracking-wide text-sm">{text}</div>
    </div>
  );
};

export default function About() {
  const highlights = [
    { icon: ChefHat, title: 'Signature Cuisine', desc: 'Expertly crafted dishes merging local flavors with global flair.' },
    { icon: CakeSlice, title: 'Great Desserts', desc: 'Indulgent sweet treats made fresh by our pastry chefs daily.' },
    { icon: GlassWater, title: 'Happy Hour Specials', desc: 'Premium beverages and bites at special rates from 5–7 PM.' },
    { icon: Moon, title: 'Late-Night Dining', desc: 'Satisfying cravings with a curated menu after hours.' },
    { icon: Salad, title: 'All-You-Can-Eat', desc: 'Sumptuous weekend buffets with endless options.' },
    { icon: Music, title: 'Live Music & Ambiance', desc: 'Soulful local artists elevating your dining experience.' },
  ];

  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-block border-b-2 border-gold pb-2 text-forest font-bold tracking-widest uppercase text-sm">
              Our Story
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal font-bold leading-tight">
              A Place Crafted <br/>
              <span className="text-forest italic">for Every Guest</span>
            </h2>
            <div className="space-y-4 text-charcoal/80 text-lg leading-relaxed">
              <p>
                Welcome to Hotel Green Inn, where upscale culinary artistry meets everyday warmth. We believe that fine dining doesn't have to feel intimidating, and a welcoming family atmosphere doesn't have to compromise on elegance.
              </p>
              <p>
                Whether you're a busy solo diner seeking a quiet corner, a lively group celebrating a milestone, or tourists exploring the city's flavors, our doors are open. Experience premium quality dining, worth every visit, enhanced by our warm hospitality.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-forest/10">
              <AnimatedCounter end={500} suffix="+" text="Happy Guests Weekly" />
              <AnimatedCounter end={15} suffix="+" text="Signature Dishes" />
              <AnimatedCounter end={5} suffix="★" text="Service Standards" />
            </div>

            <div className="mt-8 bg-white p-6 rounded-sm border border-forest/5 shadow-lg relative">
              <div className="absolute -top-4 -left-2 text-6xl text-gold opacity-30 font-serif">"</div>
              <p className="text-xl font-serif italic text-charcoal/90 relative z-10 text-center md:text-left px-4">
                Attentive service, friendly staff, and an ambiance you'll want to return to.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-t-full rounded-b-sm overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80" 
                alt="Restaurant Ambiance" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent"></div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold rounded-full -z-10 blur-2xl opacity-50"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-forest rounded-full -z-10 blur-2xl opacity-20"></div>
          </motion.div>
        </div>

        {/* Dining Experience Highlights */}
        <div id="services" className="pt-16 border-t border-forest/10">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-forest font-bold mb-4">Dining Experience Highlights</h3>
            <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">Curated moments designed to elevate your time with us, from morning specials to late-night bites.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-forest/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                
                <div className="bg-cream w-16 h-16 rounded-sm flex justify-center items-center mb-6 text-forest group-hover:bg-gold group-hover:text-white transition-colors">
                  <highlight.icon size={32} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-charcoal mb-3 group-hover:text-forest transition-colors">{highlight.title}</h4>
                <p className="text-charcoal/70 leading-relaxed font-light">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
