import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, User } from "lucide-react";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "AI Innovator | App Builder | Finance & Automation Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Professional avatar placeholder */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl flex items-center justify-center">
          <User className="text-4xl text-white w-16 h-16" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          Ujwal Sharma
        </h1>
        
        <div 
          className="text-xl md:text-2xl mb-8 text-muted-foreground animate-slide-up font-mono"
          style={{ animationDelay: "0.2s" }}
          data-testid="text-tagline"
        >
          {typedText}
        </div>
        
        <p 
          className="text-lg mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
          data-testid="text-hero-description"
        >
          Exploring how AI can revolutionize finance by turning ideas into practical projects. With a foundation in financial expertise and a drive to build real-world AI applications, I’m focused on sharpening my analytical thinking and creating solutions that can make an impact.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 animate-pulse-glow"
            data-testid="button-explore-work"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Explore My Work
          </Button>
          
          <Button
            variant="outline"
            className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
            data-testid="button-download-resume"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>
    </section>
  );
}
