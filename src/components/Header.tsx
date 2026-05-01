import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-on-background/5 shadow-none hidden md:block h-[80px] flex items-center">
        <div className="flex justify-between items-center px-12 w-full max-w-7xl mx-auto h-full">
          <div className="flex items-center gap-3">
            <img 
              src="https://instagram.fkan1-1.fna.fbcdn.net/v/t51.2885-19/398252347_352997163805754_8956605319643778082_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41NzYuYzIifQ&_nc_ht=instagram.fkan1-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2gE4sK3Or5h4yjM769YMt86FhUDQYRbH5XFrLnlh80lXGjodfi0zhCF_wwlp-CocU6Q&_nc_ohc=I3LFTtqTWuQQ7kNvwHd5QCW&_nc_gid=8Rb-POi-bPElOOYgcJ9J-w&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af7F03Xw6PEsSpVb1Ngab5yxclCykHUCtIlu6odB503RJA&oe=69FA761A&_nc_sid=22de04" 
              alt="Novo Logo" 
              className="w-10 h-10 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="text-2xl font-bold tracking-tight font-h1 lowercase italic">novo.</div>
          </div>
          <nav className="flex gap-10 text-sm font-medium">
            <a className="hover:text-primary transition-colors" href="#menu">Menu</a>
            <a className="hover:text-primary transition-colors text-on-background/60" href="#contact">Contact</a>
          </nav>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-on-background text-background px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-primary transition-colors"
          >
            Book a Table
          </motion.button>
        </div>
      </header>
      
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-on-background/5 md:hidden h-[64px] flex items-center">
        <div className="flex justify-between items-center px-5 w-full">
          <div className="text-xl font-bold tracking-tight font-h1 lowercase italic">novo.</div>
          <button className="text-primary font-bold text-xs flex items-center gap-1 active:scale-95 transition-transform bg-primary/10 px-3 py-1.5 rounded-full">
            Contact <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </header>
    </>
  );
}
