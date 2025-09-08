import { Code, Heart, Layers } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            The Layers of Me
          </h2>
          <div className="h-1 w-16 bg-forest mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            There are so many layers to who we are, and I'm just beginning to unpack mine through writing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-soft border border-border/50 hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-forest rounded-lg flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">engineer</h3>
              <p className="text-muted-foreground leading-relaxed">
                growing up, i've always wanted to be some type of artist. wasn't very good at drawing
                but i found coding to be my way to <i>art</i>.
              </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-soft border border-border/50 hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-forest rounded-lg flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">human</h3>
            <p className="text-muted-foreground leading-relaxed">
              trying disciple, pool enthuasist, music lover. i value authentic connections. i like brown a lot
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-soft border border-border/50 hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-forest rounded-lg flex items-center justify-center mb-6">
              <Layers className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">storyteller?</h3>
              <p className="text-muted-foreground leading-relaxed">
                i come from a big family of storytellers and writers. it's funny because i never considered myself to be a reader or writer. growing up, reading wasn't something i enjoyed and i only wrote when i had to.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                but getting older (and wiser), i've decided to give myself an outlet (apart from God) to properly process my thoughts across many different topics. this actually might be fun.
              </p>
          </div>
        </div>

        <div className="bg-primary/5 p-8 md:p-12 rounded-2xl border border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              beyond all of this
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              i've spent many years finding my around using tech to amplify a tiny voice i have in my head. writing isn't something i've ever thought i'd be into 
              given that i'm not even that much of a reader, but a dear friend once told me that they valued my perspective of the world. this is gonna be fun.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              this website is steadily evolving. a space where technical expertise meets the reflective. it's so many layers to this.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;