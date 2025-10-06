import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground" data-testid="text-copyright">
            © 2024 Ujwal Sharma. Crafted with precision and powered by innovation.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href="mailto:vishusharmasharma2012@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ujwal-sharma-b5146b202" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/ujwal1616" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-github"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
