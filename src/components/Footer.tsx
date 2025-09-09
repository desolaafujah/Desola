import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">study the bible🥹</h3>
            {/* have link maybe ? */}
            <p className="text-primary-foreground/80">
              <i>John 8:12 - "No one, sir," she said. Then neither do I condemn you," Jesus declared. "Go now and leave your life of sin"</i>
            </p>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
              Built with <Heart className="w-4 h-4 text-forest fill-current" /> and curiosity
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2">
              © 2025 Desola Fujah. shhh.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;