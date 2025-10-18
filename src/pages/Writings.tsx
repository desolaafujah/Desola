import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom"; // or next/link if using Next.js
import NYC from "@/pages/writings/NYC";


type WritingPiece = {
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  isNew: boolean;
  link: string;
};
const Writings = 
() => {
  const writingPieces = [
    {
      title: "something strange was always in the air",
      excerpt: "my experience in nyc",
      readTime: "3 min read",
      category: "reflection",
      isNew: true,
      link: "/writings/NYC",
    },
    {
      title: "dependency management",
      excerpt: "i have a growing interest in dependency management",
      readTime: "2 min read",
      category: "tech",
      isNew: false,
      link: "/writings/dependency-management",
    },
    {
      title: "deep dive",
      excerpt: "a deep reflection",
      readTime: "30 s read",
      category: "personal",
      isNew: true,
      link: "/writings/deep-dive",
    },
  ];

  return (
    <section id="writing" className="py-20 bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            my words
          </h2>
          <div className="h-1 w-16 bg-forest mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            i've been exploring unconventional writing styles, mainly because i think this is a space where i can write as honestly and generic as possible. this is helping my brain a lot.
          </p>
        </div>

        {/* List of writings */}
        <div className="space-y-4">
          {writingPieces.map((piece, index) => (
            <Link
              key={index}
              to={piece.link}
              className="block border border-border/50 rounded-xl p-5 hover:bg-muted/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="uppercase tracking-wide">
                    {piece.category}
                  </span>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>{piece.readTime}</span>
                </div>
                {piece.isNew && (
                  <span className="text-xs font-semibold text-sage bg-sage/10 px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-1">
                    {piece.title}
                  </h3>
                  <p className="text-muted-foreground">{piece.excerpt}</p>
                </div>

                <ArrowRight className="w-5 h-5 text-forest opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writings;
