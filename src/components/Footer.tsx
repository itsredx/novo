export default function Footer() {
  return (
    <footer className="bg-background w-full pb-20 md:pb-0">
      <div className="flex flex-col md:flex-row justify-between items-start px-12 py-20 max-w-7xl mx-auto gap-20">
        <div className="flex-1">
          <div className="text-on-background font-bold text-3xl mb-6 lowercase italic font-h1">novo.</div>
          <p className="text-sm text-on-background/60 max-w-sm font-body leading-relaxed mb-10 italic">
            Celebrating the art of texture and taste. A modern bistro experience curated for the curious palate. Found in the heart of the city, served with love.
          </p>
          <div className="novo-label text-on-background opacity-100 flex gap-4">
             <a href="#" className="hover:text-primary">Instagram</a>
             <a href="#" className="hover:text-primary">Facebook</a>
             <a href="#" className="hover:text-primary">Twitter</a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-6">
            <div className="novo-label">Explore</div>
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              <a className="hover:text-primary transition-colors" href="#menu">The Menu</a>
              <a className="hover:text-primary transition-colors" href="#locations">Our Spaces</a>
              <a className="hover:text-primary transition-colors" href="#events">Gatherings</a>
            </nav>
          </div>
          <div className="space-y-6">
            <div className="novo-label">Legal</div>
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              <a className="hover:text-primary transition-colors" href="#privacy">Privacy</a>
              <a className="hover:text-primary transition-colors" href="#terms">Terms</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="px-12 py-10 border-t border-on-background/5 text-center text-[10px] mono-label opacity-40">
        © 2024 NOVO BISTRO & CAFE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
