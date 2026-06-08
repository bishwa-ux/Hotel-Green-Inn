import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Leaf, Clock, ArrowRight } from 'lucide-react';

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
  };

  return (
    <>
      <section id="reserve" className="py-24 bg-charcoal text-white relative border-t-8 border-gold">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80")', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Form Section */}
            <div className="flex-1">
              <div className="mb-10">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-cream">Reserve Your Table Today</h2>
                <p className="text-cream/70 font-light text-lg">Walk-ins welcome, but reservations are recommended — especially on weekends.</p>
              </div>

              <div className="bg-charcoal p-8 md:p-10 rounded-sm shadow-2xl relative border border-white/5 z-10 w-full max-w-2xl">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-cream/70 mb-1.5">Full Name</label>
                          <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-cream/70 mb-1.5">Phone Number</label>
                          <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors" placeholder="+91 XXXXX XXXXX" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-cream/70 mb-1.5">Date</label>
                          <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors [&::-webkit-calendar-picker-indicator]:invert text-white/80" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-cream/70 mb-1.5">Time Slot</label>
                          <select required className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-gold transition-colors outline-none h-[46px]">
                            <option value="brunch" className="text-charcoal bg-cream">Brunch (9 AM - 12 PM)</option>
                            <option value="lunch" className="text-charcoal bg-cream">Lunch (12 PM - 4 PM)</option>
                            <option value="dinner" className="text-charcoal bg-cream">Dinner (6 PM - 11 PM)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-cream/70 mb-1.5">Guests</label>
                          <input required type="number" min="1" max="20" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors" defaultValue="2" />
                        </div>
                      </div>

                      <button type="submit" className="w-full mt-4 bg-gold hover:bg-yellow-500 text-forest font-bold px-8 py-4 rounded-sm transition-all hover:scale-[1.01] text-xs uppercase tracking-widest flex justify-center items-center gap-2 btn-pulse">
                        Confirm My Reservation
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <h3 className="font-serif text-2xl font-bold mb-3 text-cream">Reservation Confirmed!</h3>
                      <p className="text-cream/70 text-sm mb-6">We've sent a confirmation message. We look forward to hosting you.</p>
                      <button onClick={() => setSubmitted(false)} className="text-forest bg-gold font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-sm transition-all">Book Another</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Contact Info side */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <div className="space-y-10">
                <div>
                  <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Direct Contact</h4>
                  <div className="space-y-4">
                    <a href="tel:+919876543210" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex justify-center items-center group-hover:bg-gold transition-colors text-cream group-hover:text-forest">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="text-lg hover:text-gold transition-colors font-light">+91 98765 43210</span>
                    </a>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex justify-center items-center group-hover:bg-[#25D366] transition-colors text-cream group-hover:text-white">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <span className="text-lg hover:text-[#25D366] transition-colors font-light">WhatsApp Us</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Location</h4>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex justify-center items-center text-cream shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <p className="text-lg text-cream/80 font-light leading-relaxed">
                      123 Green Boulevard,<br />
                      Culinary District,<br />
                      Metropolis, MT 400001
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest text-cream/70 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
            
            <div className="space-y-4">
               <a href="#" className="flex items-center gap-2 text-white mb-6">
                <Leaf className="w-6 h-6 text-gold" />
                <span className="font-serif text-xl font-bold tracking-wider">Hotel Green Inn</span>
              </a>
              <p className="font-light leading-relaxed">Good Food. Great Vibes. <br/>Always Green.</p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-forest transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-forest transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-forest transition-colors"><MapPin className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
              <ul className="space-y-3 font-light">
                <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#menu" className="hover:text-gold transition-colors">Explore Menu</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Our Services</a></li>
                <li><a href="#reviews" className="hover:text-gold transition-colors">Guest Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Services</h4>
              <ul className="space-y-3 font-light">
                <li>Dine-In & Takeaway</li>
                <li>Private Dining & Events</li>
                <li>Live Music Weekends</li>
                <li>Corporate Catering</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Operating Hours</h4>
              <ul className="space-y-4 font-light">
                <li className="flex gap-3 items-start">
                   <Clock className="w-4 h-4 text-gold shrink-0 mt-1" />
                   <div>
                     <div className="text-white font-medium">Brunch</div>
                     <div className="text-sm">9:00 AM - 12:00 PM</div>
                   </div>
                </li>
                <li className="flex gap-3 items-start">
                   <Clock className="w-4 h-4 text-gold shrink-0 mt-1" />
                   <div>
                     <div className="text-white font-medium">Lunch</div>
                     <div className="text-sm">12:00 PM - 4:00 PM</div>
                   </div>
                </li>
                <li className="flex gap-3 items-start">
                   <Clock className="w-4 h-4 text-gold shrink-0 mt-1" />
                   <div>
                     <div className="text-white font-medium">Dinner</div>
                     <div className="text-sm">6:00 PM - 11:00 PM</div>
                   </div>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-light">
            <p>&copy; {new Date().getFullYear()} Hotel Green Inn. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
