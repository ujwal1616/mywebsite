import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. This is a demo - implement actual form handling.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const interestAreas = [
    { label: "AI Development", color: "primary" },
    { label: "FinTech", color: "primary" },
    { label: "Automation", color: "accent" },
    { label: "App Development", color: "accent" },
    { label: "Market Analysis", color: "secondary" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="heading-contact">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Ready to discuss AI projects, development opportunities, or financial technology innovations?
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6" data-testid="heading-lets-connect">Let's Connect</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:vishusharmasharma2012@gmail.com" 
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    data-testid="link-email"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground text-sm">vishusharmasharma2012@gmail.com</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/ujwal-sharma-b5146b202" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    data-testid="link-linkedin"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-muted-foreground text-sm">Connect professionally</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/ujwal1616" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    data-testid="link-github"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <div className="text-muted-foreground text-sm">View my code</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass p-6">
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold mb-4" data-testid="heading-areas-of-interest">Areas of Interest</h4>
                <div className="flex flex-wrap gap-2">
                  {interestAreas.map((area, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className={`px-3 py-1 ${
                        area.color === 'primary' ? 'bg-primary/20 text-primary' :
                        area.color === 'accent' ? 'bg-accent/20 text-accent' :
                        'bg-secondary/20 text-secondary-foreground'
                      } rounded-full text-sm`}
                      data-testid={`badge-interest-${index}`}
                    >
                      {area.label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="glass p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold mb-6" data-testid="heading-send-message">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input 
                      type="text" 
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-input border-border focus:ring-2 focus:ring-primary"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-input border-border focus:ring-2 focus:ring-primary"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger className="bg-input border-border focus:ring-2 focus:ring-primary" data-testid="select-subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-project" data-testid="option-ai-project">AI/ML Project Discussion</SelectItem>
                      <SelectItem value="app-development" data-testid="option-app-development">App Development Opportunity</SelectItem>
                      <SelectItem value="fintech-collaboration" data-testid="option-fintech">Financial Technology Collaboration</SelectItem>
                      <SelectItem value="general-inquiry" data-testid="option-general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    rows={6} 
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-input border-border focus:ring-2 focus:ring-primary resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  data-testid="button-send-message"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
