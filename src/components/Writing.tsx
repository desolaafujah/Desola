import { FileText, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Writing = () => {
  const writingPieces = [
    {
      title: "something strange was always in the air",
      excerpt: "my experience in nyc",
      readTime: "3 min read",
      category: "reflection",
      isNew: true,
    },
    {
      title: "dependency management",
      excerpt: "i have a growing interest in dependency management",
      readTime: "2 min read",
      category: "tech",
      isNew: false,
    },
    {
      title: "underneath",
      excerpt: "a deep reflection",
      readTime: "30 s read",
      category: "personal",
      isNew: true,
    },
  ];

  return (
    <section id="writing" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            my words
          </h2>
          <div className="h-1 w-16 bg-forest mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            i think a lot so getting into the habit of writing (again) would probably help me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {writingPieces.map((piece, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-soft border border-border/50 hover:shadow-warm transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-forest bg-forest/10 px-3 py-1 rounded-full">
                  {piece.category}
                </span>
                {piece.isNew && (
                  <span className="text-xs font-bold text-sage bg-sage/10 px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-forest transition-colors duration-300">
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
                <div className="flex items-center text-forest group-hover:translate-x-1 transition-transform duration-300">
                  <span className="text-sm font-medium mr-1">Read</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;