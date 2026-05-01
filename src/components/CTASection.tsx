import { Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <section className="bg-surface py-24 px-5 border-y border-on-background/5">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <span className="novo-label">Connect / Interface</span>
        <h2 className="text-5xl md:text-8xl text-on-background lowercase leading-[0.9] tracking-tighter italic">
          Taste the Modern.<br/>Visit the Kitchen.
        </h2>
        <p className="text-lg text-on-background/60 max-w-2xl mx-auto font-body italic leading-relaxed">
          Reserve your experience or reach out directly via WhatsApp for instant inquiries and handcrafted deliveries.
        </p>
        <div className="pt-8">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-12 py-4 rounded-full hover:bg-primary-container transition-all text-sm font-bold shadow-xl flex items-center justify-center gap-4 mx-auto w-full md:w-auto"
          >
            <Send className="w-4 h-4" /> Send Instant Inquiry
          </motion.button>
        </div>
      </div>
    </section>
  );
}
