import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Mail, Coffee, Code, Briefcase } from "lucide-react";


const Index = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      status: "Completed"
    },
    {
      title: "Daily Dose",
      description: "will update soon...",
      tech: ["Javascript", "AWS DynamoDB", "Express"],
      status: "In Progress"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      tech: ["React", "API Integration", "Chart.js", "CSS"],
      status: "Completed"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"
  ];
    return (
      
    <div className="min-h-screen bg-gradient-to-br from-background via-brown-cream/30 to-secondary">
      {/* Header */}

      <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate('/backroom')}
            className="opacity-30 hover:opacity-100 transition-opacity"
          >
            <Coffee className="h-4 w-4 mr-2" />
            ?
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Desola Fujah
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            software engineer, pool shark, avid music listener
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-brown-dark">
              <Briefcase className="h-5 w-5 mr-2" />
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="h-5 w-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate full-stack developer with over 3 years of experience building 
              scalable web applications. I love turning complex problems into simple, 
              beautiful solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying a perfect cup of coffee.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-brown-light/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-brown-light text-brown-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <Badge key={skill} className="bg-brown-medium text-primary-foreground px-4 py-2 text-sm">
                  <Code className="h-3 w-3 mr-2" />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-primary">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together.
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg">
              <Mail className="h-5 w-5 mr-2" />
              Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-background">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Your Name. Crafted with love and lots of coffee.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;