import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="text-xl font-bold text-primary cursor-pointer"
          onClick={() => scrollToSection("home")}
          data-testid="logo-ujwal-sharma"
        >
          Ujwal Sharma
        </div>
        
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection("home")}
            className="hover:text-primary transition-colors"
            data-testid="nav-link-home"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="hover:text-primary transition-colors"
            data-testid="nav-link-about"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("skills")}
            className="hover:text-primary transition-colors"
            data-testid="nav-link-skills"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection("projects")}
            className="hover:text-primary transition-colors"
            data-testid="nav-link-projects"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection("blog")}
            className="hover:text-primary transition-colors"
            data-testid="nav-link-blog"
          >
            Blog
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition-colors"
            data-testid="nav-link-contact"
          >
            Contact
          </button>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 bg-secondary text-secondary-foreground hover:bg-muted"
          data-testid="button-theme-toggle"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </nav>
  );
}
