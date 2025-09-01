import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Smartphone, Settings } from "lucide-react";

export function BlogSection() {
  const blogPosts = [
    {
      title: "AI in Financial Markets: A Developer's Perspective",
      description: "Exploring how AI technologies are reshaping financial analysis and trading strategies from a technical implementation standpoint.",
      readTime: "5 min read",
      icon: Bot,
      gradient: "from-primary to-accent"
    },
    {
      title: "Building Apps with AI Assistance: Lessons Learned", 
      description: "Practical insights on leveraging AI tools for faster development while maintaining code quality and learning core concepts.",
      readTime: "7 min read",
      icon: Smartphone,
      gradient: "from-accent to-secondary"
    },
    {
      title: "Automation in Finance: From Trading to Portfolio Management",
      description: "How automation tools and workflows can enhance financial decision-making and streamline investment processes.",
      readTime: "6 min read",
      icon: Settings,
      gradient: "from-secondary to-primary"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="heading-blog">Insights & Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-blog-subtitle">
            Thoughts on AI, automation, app development, and finance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="glass hover:scale-105 transition-transform"
              data-testid={`card-blog-${index}`}
            >
              <CardContent className="p-6">
                {/* Blog post illustration */}
                <div className={`h-48 bg-gradient-to-br ${post.gradient} rounded-lg mb-6 flex items-center justify-center`}>
                  <post.icon className="text-4xl text-white w-16 h-16" />
                </div>
                
                <div className="space-y-4">
                  <div className="text-xs text-accent mb-2" data-testid={`status-blog-${index}`}>
                    Coming Soon
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3" data-testid={`heading-blog-${index}`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4" data-testid={`text-blog-description-${index}`}>
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground" data-testid={`text-read-time-${index}`}>
                      {post.readTime}
                    </span>
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-accent transition-colors p-0"
                      data-testid={`button-read-more-${index}`}
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
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
