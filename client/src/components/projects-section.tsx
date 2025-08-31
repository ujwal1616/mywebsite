import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Handshake, Smartphone, QrCode } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Metanoia Website",
      status: "",
      description: "Prototype website showcasing an experimental job-matching concept with interactive swiping, animated flows, and toggle-based features. Built as a blueprint for the Metanoia app, highlighting user experience design and innovative hiring logic",
      icon: Handshake,
      gradient: "from-primary to-accent",
      tags: ["React", "GitHub", "AI-Assisted"],
      tagColor: "primary"
    },
    {
      title: "Metanoia App",
      status: "(WIP)",
      description: "Mobile-first job-matching app reimagining how candidates and HR connect. Swipe, match, and interact with opportunities, creating a fast, intuitive, and engaging hiring experience.",
      icon: Smartphone,
      gradient: "from-accent to-primary",
      tags: ["FlutterFlow", "Mobile", "Firebase"],
      tagColor: "accent"
    },
    {
      title: "Morphiqqr",
      status: "",
      description: "Experimental offline messaging app using QR code technology for seamless data transfer without internet. Demonstrates advanced prototyping and AI-assisted implementation, showcasing innovation in real-world communication.",
      icon: QrCode,
      gradient: "from-secondary to-muted",
      tags: ["QR Tech", "Offline", "Prototype"],
      tagColor: "secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="heading-projects">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-subtitle">
            Innovative solutions combining AI, finance, and real-world problem-solving
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass hover:scale-105 transition-all group"
              data-testid={`card-project-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <CardContent className="p-6">
                {/* Project icon/illustration */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center`}>
                  <project.icon className="text-4xl text-white w-16 h-16" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3" data-testid={`heading-project-${index}`}>
                      {project.title} 
                      {project.status && (
                        <span className="text-accent text-sm ml-2" data-testid={`status-project-${index}`}>
                          {project.status}
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="secondary"
                        className={`px-3 py-1 ${
                          project.tagColor === 'primary' ? 'bg-primary/20 text-primary' :
                          project.tagColor === 'accent' ? 'bg-accent/20 text-accent' :
                          'bg-secondary/20 text-secondary-foreground'
                        } rounded-full text-sm`}
                        data-testid={`tag-project-${index}-${tagIndex}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      className={`flex-1 ${
                        project.tagColor === 'primary' ? 'bg-primary hover:bg-primary/90' :
                        project.tagColor === 'accent' ? 'bg-accent hover:bg-accent/90' :
                        'bg-secondary hover:bg-secondary/90'
                      } text-white transition-colors`}
                      data-testid={`button-view-project-${index}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {index === 0 ? 'Live Demo' : index === 1 ? 'View Code' : 'Preview'}
                    </Button>
                    <Button 
                      variant="outline"
                      className={`px-4 py-2 border-${
                        project.tagColor === 'primary' ? 'primary text-primary hover:bg-primary hover:text-primary-foreground' :
                        project.tagColor === 'accent' ? 'accent text-accent hover:bg-accent hover:text-accent-foreground' :
                        'secondary text-secondary-foreground hover:bg-secondary'
                      } transition-colors`}
                      data-testid={`button-github-project-${index}`}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
