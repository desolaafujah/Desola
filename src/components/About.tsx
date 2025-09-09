import { Code, Heart, Layers } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            my layers
          </h2>
          <div className="h-1 w-16 bg-forest mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <i>Proverbs 23:7a - For as he thinketh in his heart, so is he</i>
            the heart has everything passion, desire and emotion. mine lies within these categories
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-lg shadow-soft border border-border/50 hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-forest rounded-lg flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">engineer (artist)</h3>
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
              <div className="text-muted-foreground leading-relaxed">
                {/* underline and when clicked, takes them to ella mai trying vid OMG */}
                trying disciple, pool enthusiast, music lover. i value authentic connections. i like brown a lot. 
                i'm also the type of person that would literally do anything. wanna jump off a cliff into a lake? 
                <span className="relative group inline-block cursor-pointer">
                  <u>i just might be down!</u>
                  <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                    <div className="comment-bubble bg-[hsl(var(--forest-green))] text-white px-3 py-2 rounded-lg shadow-soft">
                      <p>keyword: "might"</p>
                    </div>
                  </div>
                </span>
                {/* def have a design for the underline. highkey need to revamp the frontend */}
              </div>

           
          </div>

          <div className="bg-card p-8 rounded-lg shadow-soft border border-border/50 hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-forest rounded-lg flex items-center justify-center mb-6">
              <Layers className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">storyteller?</h3>
              <p className="text-muted-foreground leading-relaxed">
                i come from a family of storytellers and writers. it's funny because i never considered myself to be interested in writing or reading. growing up, reading was something i was forced to do and i only wrote when i had to.
                but one thing i've learned is that growing could involve engaging myself in past hated activities for potentital personal gain. and we all have stories, so i might as well.
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