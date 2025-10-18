import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";


// TODO: add a design doc part for each project
// this would help improve my writing

const Projects = () => {
  const projects = [
    {
      title: "StoreFront",
      description: "throwback to first ever fullstack project built in team setting",
      status: "Completed",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/desolaafujah/StoreFront",
      live: null,
    },
    {
      title: "Daily Dose",
      description: "ColorStack winter'24 hackathon project",
      status: "Completed",
      technologies: ["JavaScript", "AWS DynamoDB", "Express"],
      github: "https://github.com/BG-legacy/Daily-Dose",
      live: "https://daily-dose.me",
    },
    {
      title: "Dependency Upgrader",
      description: "Dependency management tool for complex applications",
      status: "In Progress",
      technologies: ["Golang", "Temporal"],
      github: "https://github.com/desolaafujah/DependencyUpgrader",
      live: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            my artwork
          </h2>
          <div className="h-1 w-16 bg-forest mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            stuff brought to life (or attempted to)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-soft border border-border/50 hover:shadow-warm transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span 
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    project.status === "Completed" 
                      ? "text-sage bg-sage/10" 
                      : "text-forest bg-forest/10"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-forest transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-chocolate-medium text-chocolate-medium hover:bg-chocolate-medium hover:text-white transition-all duration-300"
                  asChild
                >
                  <a href={project.github} className="flex items-center justify-center">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.live && (
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.live} className="flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <p className="text-muted-foreground mb-6">
            i should probably just have have my projects on here
          </p> */}
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com/desolaafujah">
              <Github className="w-5 h-5 mr-2" />
              github profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;