import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/calmbrown.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-earth opacity-70"></div>
        <div className="absolute inset-0 bg-background/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              Desola Fujah
            </h1>
            <div className="h-1 w-24 bg-forest mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light leading-relaxed max-w-2xl mx-auto">
           coder, writer under construction, and believer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="secondary"
              size="lg"
              className="bg-cream text-chocolate-dark hover:bg-cream/90 transition-all duration-300 shadow-warm px-8 py-3"
              onClick={() => document.getElementById("writing")?.scrollIntoView({ behavior: "smooth" })}
            >
              read words
            </Button>
            <Button
                  variant="ghost"
                  onClick={() => navigate("/password-page")}
                  className="flex items-center text-brown-cream hover:text-white hover:bg-brown-medium/20"
                >
                  <Mail className="w-4 h-4 mr-2" /> 
                  secret ai thing
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          {/* <button 
            onClick={scrollToNext}
            className="animate-bounce text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

// secret button css
// variant="outline"
//               size="lg"
//               className="border-2 border-cream text-cream hover:bg-cream hover:text-chocolate-dark transition-all duration-300 px-8 py-3"
//               asChild