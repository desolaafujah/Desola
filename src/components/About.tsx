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
            <p>the heart has everything passion, desire and emotion. mine lies within these categories</p>
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
                <u style={{ textDecoration: "underline dotted" }}><a href="https://www.youtube.com/watch?v=Hxb6WmvaGhk&lis">trying</a></u> <u style={{ textDecoration: "underline dotted" }}><a href="https://www.google.com/search?q=disciple+of+christ&rlz=1C5OZZY_enUS1169US1169&oq=disciple+of+christ&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyCggBEC4Y1AIYgAQyCggCEC4Y1AIYgAQyDQgDEC4YxwEY0QMYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEC4YgATSAQg2MDY1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">disciple</a></u>, <u style={{ textDecoration: "underline dotted" }}><a href="https://en.wikipedia.org/wiki/Pool_(cue_sports)">pool</a></u> enthusiast, music lover. i value authentic connections. i like brown a lot. 
                i'm also the type of person that would literally do anything. wanna jump off a cliff into a lake? 
                <span className="relative group inline-block">
                   
                      <a href='#' className="text-inherit hover:underline hover:decoration-dotted hover:cursor-pointer transition duration-200">
                          i just might be down!
                      </a>
                  
                  <div className="absolute -top-8 left-full ml-2 hidden group-hover:block z-10">
                    <div className="bg-[hsl(var(--forest-green))] text-white text-xs px-2 py-1 rounded-full shadow-md whitespace-nowrap">
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
            <h3 className="text-xl font-semibold text-primary mb-4">unconventional storyteller</h3>
              <p className="text-muted-foreground leading-relaxed">
                i come from a family of storytellers and writers. it's funny because i never considered myself to be interested in writing or reading. growing up, reading was something i was forced to do and i only wrote when i had to. 
                and because of that, i get to be unconventional. at the end of the day, we all have stories, so i might as well.
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