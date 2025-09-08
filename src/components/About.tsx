import { Code, Heart, Layers } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            The Layers of Me
          </h2>
          <div className="h-1 w-16 bg-terracotta mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            There are so many layers to who we are, and I'm just beginning to unpack mine through writing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-soft border border-border/50 hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-sunset rounded-lg flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">The Engineer</h3>
            <p className="text-muted-foreground leading-relaxed">
              3+ years building scalable web applications and infrastructure. I love solving complex problems 
              and creating tools that make developers' lives easier.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-soft border border-border/50 hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-sunset rounded-lg flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">The Human</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pool enthusiast, music lover, and someone who believes in the power of authentic connections. 
              I find joy in the simple moments between the big achievements.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-soft border border-border/50 hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-sunset rounded-lg flex items-center justify-center mb-6">
              <Layers className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">The Storyteller</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm discovering that there are stories within me waiting to be told. Writing is becoming 
              my way of exploring the depths of experience and connection.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 p-8 md:p-12 rounded-2xl border border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Beyond the Code
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              While I've spent years perfecting my craft as a developer, I'm realizing there's so much more to explore. 
              Writing has become my new frontier—a place where I can process experiences, share insights, and connect 
              with others on a deeper level.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This website is evolving, just like me. It's a space where technical expertise meets human storytelling, 
              where the analytical meets the emotional, where all the layers come together to form something whole.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;