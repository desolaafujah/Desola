import { FileText, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Writing = () => {
  const writingPieces = [
    {
      title: "On Beginnings",
      excerpt: "There's something magical about starting something new, even when you don't know where it will lead...",
      readTime: "3 min read",
      category: "Reflection",
      isNew: true,
    },
    {
      title: "The Space Between Code and Words",
      excerpt: "As a developer, I've learned to speak in logic and functions. But what happens when we need to speak in feelings?",
      readTime: "5 min read",
      category: "Technology & Life",
      isNew: false,
    },
    {
      title: "Layers",
      excerpt: "We are not single stories. We are collections of moments, decisions, and discoveries that build upon each other...",
      readTime: "4 min read",
      category: "Personal",
      isNew: true,
    },
  ];

  return (
    <section id="writing" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Words in Progress
          </h2>
          <div className="h-1 w-16 bg-terracotta mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm learning to translate thoughts into words, experiences into stories. 
            Here's where I practice the art of being human through writing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {writingPieces.map((piece, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-soft border border-border/50 hover:shadow-warm transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
                  {piece.category}
                </span>
                {piece.isNew && (
                  <span className="text-xs font-bold text-sage bg-sage/10 px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-terracotta transition-colors duration-300">
                {piece.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {piece.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  {piece.readTime}
                </div>
                <div className="flex items-center text-terracotta group-hover:translate-x-1 transition-transform duration-300">
                  <span className="text-sm font-medium mr-1">Read</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-warm p-8 md:p-12 rounded-2xl border border-border/50 max-w-2xl mx-auto">
            <FileText className="w-12 h-12 text-terracotta mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-primary mb-4">
              More Stories Coming Soon
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm actively working on more pieces that explore the intersections of technology, 
              human experience, and the stories that connect us all.
            </p>
            <Button 
              variant="outline"
              className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition-all duration-300"
            >
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;