import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    id: "01",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    title: "Handcrafted\nFlavors",
    subtitle: "Tacos & Quesadillas",
    description: "Experience the vibrant crunch of our artisanal tacos and the melty perfection of handcrafted quesadillas."
  },
  {
    id: "02",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    title: "The Morning\nRitual",
    subtitle: "Artisanal Coffee",
    description: "Roasted to perfection, poured with passion. Your daily escape into the world of fine coffee."
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[750px] overflow-hidden bg-[#2D1A12] flex flex-col md:flex-row">
      {/* Wood Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-100">
        <img 
          src="input_file_0.png" 
          alt="Wood Pattern" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex-1 relative overflow-hidden z-10">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <img 
              src={slides[index].image} 
              alt={slides[index].subtitle} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-20 text-white z-10">
          <motion.span 
            key={`sub-${index}`}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="novo-label text-white opacity-100 mb-4"
          >
            {slides[index].subtitle}
          </motion.span>
          <motion.h1 
            key={`title-${index}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-h1 leading-[0.9] mb-8 whitespace-pre-line lowercase italic"
          >
            {slides[index].title}.
          </motion.h1>
          <motion.p 
            key={`desc-${index}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="max-w-md text-sm md:text-base leading-relaxed opacity-90 font-medium italic"
          >
            {slides[index].description}
          </motion.p>
          
          <div className="mt-12 flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-on-background px-8 py-3 rounded-full font-bold text-sm shadow-xl"
            >
              Explore Menu
            </motion.button>
            <div 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white hover:text-on-background transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:flex w-1/3 border-l border-on-background/5 bg-surface p-12 flex-col justify-between">
        <div className="space-y-8">
           <div className="novo-label">Current / Archive</div>
           <h2 className="text-3xl text-on-background italic">Bistro & Cafe.</h2>
           <p className="text-sm opacity-70 leading-relaxed font-body">
             Novo is a celebration of culinary texture and warmth. Every dish is a dialogue between tradition and modern curiosity.
           </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
           <div>
             <div className="novo-label text-[10px] mb-2">Location</div>
             <div className="text-sm font-bold">Downtown Center</div>
           </div>
           <div>
             <div className="novo-label text-[10px] mb-2">Since</div>
             <div className="text-sm font-bold">MMXXII</div>
           </div>
        </div>
      </div>
    </section>
  );
}
