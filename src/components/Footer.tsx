import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Desola Fujah</h3>
            <p className="text-primary-foreground/80">
              Software engineer discovering the art of storytelling
            </p>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
              Built with <Heart className="w-4 h-4 text-forest fill-current" /> and curiosity
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2">
              © 2024 Desola Fujah. All layers included.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;