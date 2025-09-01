import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Coffee, Code, Briefcase } from "lucide-react";
import { IoLogoGithub } from "react-icons/io"

const Index = () => {
  const projects = [
    {
      title: "StoreFront",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      status: "Completed",
      repo: "https://github.com/desolaafujah/StoreFront"
    },
    {
      title: "Daily Dose",
      description: "colorstack winter'24 hackathon project",
      tech: ["Javascript", "AWS DynamoDB", "Express"],
      status: "Completed",
      repo: "https://github.com/BG-legacy/Daily-Dose"
    },
    {
      title: "Dependency Upgrader",
      description: "dependency management",
      tech: ["Golang", "Temporal"],
      status: "In Progress",
      repo: "https://github.com/desolaafujah/DependencyUpgrader",
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-brown-cream/30 to-secondary flex flex-col items-center">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border w-full">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"
             style={{ margin: '0 auto', width: '100%', maxWidth: '1200px' }}>
          <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
          <nav className="flex space-x-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button 
            variant="outline" 
            size="sm"
            className="opacity-30 hover:opacity-100 transition-opacity"
          >
            <Coffee className="h-4 w-4 mr-2" />
            ?
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 w-full">
        <div className="max-w-6xl mx-auto text-center"
             style={{ margin: '0 auto', width: '100%', maxWidth: '1200px' }}>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Desola Fujah
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            software engineer, pool shark, avid music listener
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:desolafujah365@gmail.com"
              className="w-fit"
            >
              <Button variant="outline" size="lg" className="w-fit">
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </Button>            
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-card/50 w-full">
        <div className="max-w-6xl mx-auto"
             style={{ margin: '0 auto', width: '100%', maxWidth: '1200px' }}>
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              i'm a passionate full-stack (backend better) developer with over 3 years of experience building scalable web applications and working on scalable tools and infrastructure to simplify and automate software dependency workflows for complex applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              i like pool and listening to music btw
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 w-full">
        <div className="max-w-6xl mx-auto"
            style={{ margin: '0 auto', width: '100%', maxWidth: '1200px'}}>
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative hover:shadow-lg transition-shadow duration-300 border-brown-light/20"
              >
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

                {/* github icon shadow thing */}
                {project.repo && (
                  <a 
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center
                                bg-black/40 opacity-0 group-hover:opacity-100
                                transition-opacity rounded-2xl
                    "
                  >
                    <IoLogoGithub className="h-12 w-12 text-white drop-shadow-lg hover:scale-110 transition-transform"/>
                  </a>
                )}
        
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-card/50 w-full">
        <div className="max-w-6xl mx-auto"
             style={{ margin: '0 auto', width: '100%', maxWidth: '1200px' }}>
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
      <section id="contact" className="py-16 px-6 w-full">
        <div className="max-w-6xl mx-auto text-center"
             style={{ margin: '0 auto', width: '100%', maxWidth: '1200px' }}>
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
      <footer className="py-8 px-6 border-t border-border bg-background w-full">
        <div className="max-w-6xl mx-auto text-center"
             style={{ margin: '0 auto', width: '100%', maxWidth: '1200px' }}>
          <p className="text-muted-foreground">
            © 2025 Desola Fujah.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;