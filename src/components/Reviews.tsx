import { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Reviews() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const reviews = [
    { name: "Anjali M.", type: "Family Visit", text: "The food quality and service exceeded expectations — truly a family gem. We felt so welcomed throughout our dining experience." },
    { name: "Rahul S.", type: "Solo Diner", text: "Best happy hour in town. The live music made our evening unforgettable, bringing such vibrant energy to the space." },
    { name: "Meet Patel", type: "Vegetarian Diner", text: "Vegetarian options were plentiful and delicious. Staff were so attentive and ensured our dietary needs were perfectly met." },
    { name: "Sarita R.", type: "Group Celebration", text: "Perfect spot for a group celebration. The all-you-can-eat was outstanding with something special for everyone." },
    { name: "Vikram K.", type: "Late Night Diner", text: "Late-night dining was a pleasant surprise — fresh food, warm welcome even at 1 AM in the morning." },
    { name: "Priya T.", type: "Tourist", text: "Slightly pricey but absolutely worth every rupee for the experience. The upscale atmosphere is unmatched." },
  ];

  const faqs = [
    { q: "Do you accept walk-ins?", a: "Yes, walk-ins are always welcome! However, we recommend reservations for large groups or weekend evenings." },
    { q: "Is parking available?", a: "Absolutely. We offer free on-site valet parking for all our guests during operating hours." },
    { q: "Do you have a kids' menu?", a: "Yes, we have a dedicated, kid-friendly menu featuring familiar favorites in appropriate portions." },
    { q: "Can I book for large groups?", a: "Yes, we accommodate large groups and private events. Please call us in advance to make arrangements." },
    { q: "Do you offer vegetarian options?", a: "Extensively! We have dedicated vegetarian menus with robust, flavorful plant-based choices." },
    { q: "What are your dining hours?", a: "We serve Brunch (9 AM - 12 PM), Lunch (12 PM - 4 PM), and Dinner (6 PM - 11 PM)." },
  ];

  return (
    <section id="reviews" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reviews Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-bold mb-6">What Our Guests Are Saying</h2>
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="fill-gold text-gold w-6 h-6" />)}
            </div>
            <p className="text-forest font-bold tracking-widest uppercase text-sm mt-2">4.8 / 5.0 Average Rating</p>
          </div>
        </div>

        {/* Auto Scrolling Carousel (CSS animation approximation using mapped duplication for infinite effect) */}
        <div className="relative mb-32 -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
            {reviews.map((review, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[300px] md:w-[400px] bg-white p-8 rounded-sm shadow-md border border-forest/5 relative hover:shadow-lg transition-shadow">
                <Quote className="text-gold opacity-20 w-12 h-12 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="fill-gold text-gold w-4 h-4" />)}
                </div>
                <p className="text-charcoal/80 font-light italic mb-6 leading-relaxed relative z-10">"{review.text}"</p>
                <div className="border-t border-forest/10 pt-4 mt-auto">
                  <div className="font-bold text-forest">{review.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-charcoal/50 font-bold mt-1">{review.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-sm shadow-xl border border-forest/5 relative">
          <div className="absolute top-0 right-0 w-4 h-full bg-gold"></div>
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl font-bold text-charcoal">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-forest/10 pb-2">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-4 flex justify-between items-center text-left group"
                >
                  <span className="font-bold text-charcoal group-hover:text-forest transition-colors pr-8">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="text-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-forest/40 group-hover:text-gold transition-colors flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-charcoal/70 font-light leading-relaxed pr-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
