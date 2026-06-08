import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Globe, User, Carrot, PartyPopper, CheckCircle2 } from 'lucide-react';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Dinner');

  const tabs = ['Brunch', 'Lunch', 'Dinner', 'Desserts', 'Kids Menu', 'Happy Hour'];

  const menuData: Record<string, any[]> = {
    'Brunch': [
      { name: 'Classic Eggs Benedict', desc: 'Poached eggs, hollandaise, toasted muffin.', price: '₹450', tags: ['Non-Veg'] },
      { name: 'Avocado Toast', desc: 'Sourdough, smashed avocado, cherry tomatoes.', price: '₹350', tags: ['Veg', 'Popular Choice'] },
      { name: 'Pancakes Stack', desc: 'Fluffy pancakes with maple syrup and berries.', price: '₹300', tags: ['Veg'] },
      { name: 'Masala Omelette', desc: 'Indian spices, onions, cilantro, toast.', price: '₹250', tags: ['Non-Veg'] },
    ],
    'Lunch': [
      { name: 'Grilled Salmon Bowl', desc: 'Quinoa, roasted veggies, lemon herb dressing.', price: '₹850', tags: ['Non-Veg'] },
      { name: 'Paneer Tikka Wrap', desc: 'Mint chutney, crisp salad, whole wheat wrap.', price: '₹350', tags: ['Veg'] },
      { name: 'Mushroom Risotto', desc: 'Arborio rice, truffle oil, parmesan.', price: '₹550', tags: ['Veg', "Chef's Special"] },
      { name: 'Chicken Caesar Salad', desc: 'Romaine, croutons, parmesan, grilled chicken.', price: '₹450', tags: ['Non-Veg'] },
    ],
    'Dinner': [
      { name: 'Herb Crusted Lamb', desc: 'Mashed potatoes, red wine jus, asparagus.', price: '₹1200', tags: ['Non-Veg', "Chef's Special"] },
      { name: 'Dal Makhani Platter', desc: 'Slow-cooked lentils, garlic naan, jeera rice.', price: '₹450', tags: ['Veg', 'Popular Choice'] },
      { name: 'Butter Chicken', desc: 'Rich tomato gravy, cream, soft kulcha.', price: '₹650', tags: ['Non-Veg'] },
      { name: 'Exotic Veg Sizzler', desc: 'Assorted veggies, paneer steak, pepper sauce.', price: '₹550', tags: ['Veg'] },
    ],
    'Desserts': [
      { name: 'Tiramisu', desc: 'Coffee soaked ladyfingers, mascarpone.', price: '₹350', tags: ['Veg'] },
      { name: 'Molten Choco Lava', desc: 'Warm cake, vanilla bean ice cream.', price: '₹300', tags: ['Veg', 'Popular Choice'] },
      { name: 'Rasmalai Tres Leches', desc: 'Fusion sponge cake, saffron milk.', price: '₹400', tags: ['Veg', "Chef's Special"] },
      { name: 'Classic Cheesecake', desc: 'Berry compote, buttery crust.', price: '₹350', tags: ['Veg'] },
    ],
    'Kids Menu': [
      { name: 'Mac & Cheese', desc: 'Creamy cheese sauce, shell pasta.', price: '₹300', tags: ['Veg', 'Popular Choice'] },
      { name: 'Chicken Nuggets', desc: 'Crispy nuggets with house fries.', price: '₹350', tags: ['Non-Veg'] },
      { name: 'Mini Margherita Pizza', desc: 'Fresh tomato sauce, mozzarella.', price: '₹300', tags: ['Veg'] },
      { name: 'Smiley Potatoes', desc: 'Crunchy potato smiles with ketchup.', price: '₹200', tags: ['Veg'] },
    ],
    'Happy Hour': [
      { name: 'Crispy Calamari', desc: 'Lemon aioli, sea salt.', price: '₹450', tags: ['Non-Veg'] },
      { name: 'Loaded Nachos', desc: 'Cheese sauce, jalapeños, salsa.', price: '₹350', tags: ['Veg', 'Popular Choice'] },
      { name: 'Spicy Chicken Wings', desc: 'Buffalo sauce, blue cheese dip.', price: '₹400', tags: ['Non-Veg'] },
      { name: 'Jalapeño Poppers', desc: 'Cream cheese stuffed, fried golden.', price: '₹300', tags: ['Veg'] },
    ]
  };

  const guestTypes = [
    { icon: Users, title: 'Families', desc: 'Kid-friendly menus and ample seating for a comfortable family outing.' },
    { icon: Users, title: 'Groups', desc: 'Spacious layouts perfect for corporate dinners or gatherings.' },
    { icon: Globe, title: 'Tourists', desc: 'A taste of local luxury, ideally situated for travelers.' },
    { icon: User, title: 'Solo Diners', desc: 'Quiet corners and bar seating for a peaceful personal retreat.' },
    { icon: Carrot, title: 'Vegetarians', desc: 'Dedicated plant-based menus prepared with care and flavor.' },
    { icon: PartyPopper, title: 'Celebrations', desc: 'Custom cakes and mood lighting for special milestones.' },
  ];

  const facilities = [
    "Free Parking", "High Chairs Available", "Ample Seating", "Kids Menu", 
    "Reservations Accepted", "Group Booking", "Cozy Interiors", "Trendy Decor", "Upscale Ambiance"
  ];

  return (
    <section className="bg-white">
      {/* Menu Teaser */}
      <div id="menu" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-bold mb-4">Curated Signatures</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">Explore a glimpse of our offerings, crafted perfectly for every palate.</p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 sm:px-8 py-3 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-forest text-gold shadow-lg transform scale-[1.02]' 
                  : 'bg-cream text-charcoal hover:bg-gold/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="min-h-[450px]">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
            >
              {menuData[activeTab]?.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start border-b border-forest/10 pb-6 group">
                  <div className="flex-1 pr-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <h4 className="font-serif text-xl font-bold text-charcoal group-hover:text-forest transition-colors">{item.name}</h4>
                        <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
                            {item.tags.map(tag => (
                                <span key={tag} className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-sm tracking-wider whitespace-nowrap ${
                                    tag === 'Veg' ? 'bg-green-100 text-green-800 border-green-200' :
                                    tag === 'Non-Veg' ? 'bg-red-100 text-red-800 border-red-200' :
                                    tag === 'Popular Choice' ? 'bg-gold text-forest' :
                                    'bg-forest/10 text-forest'
                                } border`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-charcoal/70 font-light text-sm italic">{item.desc}</p>
                  </div>
                  <div className="font-serif text-xl font-bold text-gold">{item.price}</div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <button className="border border-forest/30 text-forest hover:bg-forest hover:text-white font-bold px-10 py-4 rounded-sm transition-all uppercase tracking-widest text-sm hover:shadow-lg">
            View Full Menu
          </button>
        </div>
      </div>

      {/* Guest Types Section */}
      <div className="bg-[#fcfaf5] py-24 border-y border-forest/5 relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B4332 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-bold mb-4">Who We Welcome</h2>
            <p className="text-charcoal/70 text-lg">A space designed thoughtfully with everyone in mind.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {guestTypes.map((guest, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-white rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gold/10"
              >
                <div className="mx-auto w-16 h-16 bg-forest flex justify-center items-center mb-6 text-white rounded-sm">
                  <guest.icon size={28} />
                </div>
                <h4 className="font-bold text-charcoal mb-3 uppercase tracking-wide text-sm">{guest.title}</h4>
                <p className="text-charcoal/60 text-xs font-light leading-relaxed">{guest.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Strip */}
      <div className="bg-forest text-white py-8 border-t-4 border-gold">
        <div className="max-w-full overflow-x-auto px-4 no-scrollbar">
          <div className="flex justify-start md:justify-center items-center gap-10 md:gap-14 min-w-max mx-auto px-4">
            {facilities.map((fac, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="text-gold w-6 h-6" />
                <span className="font-semibold tracking-wide uppercase text-sm">{fac}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
