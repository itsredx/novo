import { Plus } from 'lucide-react';
import { motion } from 'motion/react';

const items = [
  {
    id: 1,
    name: "Birria Tacos",
    price: "₦14,500",
    description: "Slow-cooked tender beef, melted cheese, and a side of rich dipping consommé.",
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Classic Quesadilla",
    price: "₦12,000",
    description: "Hand-pressed tortilla loaded with a blend of artisanal cheeses and roasted peppers.",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Avocado Crema Bowl",
    price: "₦11,000",
    description: "Freshly mashed avocado topped with radish, cilantro, and our house signature crema.",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80"
  }
];

export default function PopularPicks() {
  return (
    <section id="menu" className="bg-background py-32 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="novo-label">Menu / Category</span>
            <h2 className="text-5xl md:text-7xl text-on-background mt-4 lowercase italic">Tacos & Bites.</h2>
            <p className="font-body text-base mt-8 opacity-70 leading-relaxed italic">
              From our kitchen to your table. Each dish is prepared with fresh, locally sourced ingredients and a pinch of modern bistro magic.
            </p>
          </div>
          <div className="novo-label hidden md:flex items-center gap-2">
            View Full List <Plus className="w-3 h-3" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {items.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -10 }}
              className="group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[3/4] rounded-t-[100px] rounded-b-2xl mb-8">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 right-6 bg-white text-on-background px-4 py-2 rounded-full font-bold text-sm shadow-xl">
                  {item.price}
                </div>
              </div>
              
              <div className="px-2 flex flex-col flex-1">
                <h3 className="text-3xl text-on-background mb-4 italic lowercase">{item.name}.</h3>
                <p className="text-sm font-body leading-relaxed text-on-background/60 mb-8 flex-1">
                  {item.description}
                </p>
                
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  className="bg-on-background text-background font-bold py-4 rounded-full hover:bg-primary transition-colors flex justify-center items-center gap-2 text-sm"
                >
                  <Plus className="w-4 h-4" /> Add to Table
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
