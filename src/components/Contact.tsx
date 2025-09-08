import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "desolafujah365@gmail.com",
      href: "mailto:desolafujah365@gmail.com",
      description: "Best way to reach me for collaborations or conversations",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "@desolaafujah",
      href: "https://github.com/desolaafujah",
      description: "Check out my code and ongoing projects",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Desola Fujah",
      href: "#",
      description: "Professional network and career updates",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            we should probably talk
          </h2>
          <div className="h-1 w-16 bg-forest mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you want to discuss tech, share stories, or explore collaborations, 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="bg-card p-6 rounded-lg shadow-soft border border-border/50 hover:shadow-warm hover:border-forest/30 transition-all duration-300 group block"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-forest rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-foreground">
                    {method.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary group-hover:text-forest transition-colors duration-300">
                    {method.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {method.value}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {method.description}
              </p>
            </a>
          ))}
        </div>

        <div className="bg-gradient-warm p-8 md:p-12 rounded-2xl border border-border/50 text-center">
          <MessageCircle className="w-12 h-12 text-forest mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Start a Conversation
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            I'm always interested in meaningful conversations—whether about technology, 
            writing, life experiences, or potential collaborations. Don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-forest hover:bg-forest/90 text-white shadow-warm px-8 py-3"
              asChild
            >
              <a href="mailto:desolafujah365@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send me an email
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-chocolate-medium text-chocolate-medium hover:bg-chocolate-medium hover:text-white transition-all duration-300 px-8 py-3"
              asChild
            >
              <a href="https://github.com/desolaafujah">
                <Github className="w-5 h-5 mr-2" />
                View my work
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;