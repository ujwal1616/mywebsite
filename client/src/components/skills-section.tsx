import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Server, Bot, TrendingUp, Wrench } from "lucide-react";

export function SkillsSection() {
  const skills = [
    {
      icon: Brain,
      title: "AI/ML Fundamentals",
      items: [
        "• Columbia AI for Business (In Progress)",
        "• Machine Learning Concepts",
        "• Prompt Engineering",
        "• AI-Assisted Development"
      ],
      color: "primary"
    },
    {
      icon: Code,
      title: "App Development",
      items: [
        "• Next.js & React",
        "• FlutterFlow",
        "• Firebase & Supabase",
        "• GitHub & VS Code"
      ],
      color: "primary"
    },
    {
      icon: Server,
      title: "Backend & Auth",
      items: [
        "• Firebase Implementation",
        "• Supabase with AI Support",
        "• Authentication Systems",
        "• Database Management"
      ],
      color: "primary"
    },
    {
      icon: Bot,
      title: "Automation",
      items: [
        "• n8n Workflows",
        "• Node.js Basics",
        "• Process Automation",
        "• API Integration"
      ],
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "Finance & Trading",
      items: [
        "• 2+ Years Stock Trading",
        "• NISM Certified",
        "• Technical Analysis",
        "• Risk Management"
      ],
      color: "accent"
    },
    {
      icon: Wrench,
      title: "Development Tools",
      items: [
        "• GitHub, Replit",
        "• Vercel, Netlify",
        "• Opstra, Sensibull",
        "• MS Office Suite"
      ],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="heading-skills">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-subtitle">
            A comprehensive skill set spanning AI development, financial analysis, and automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="glass p-6 hover:scale-105 transition-transform"
              data-testid={`card-skill-${skill.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <CardContent className="p-0">
                <div className={`text-3xl mb-4 ${skill.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid={`heading-skill-${index}`}>
                  {skill.title}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} data-testid={`text-skill-item-${index}-${itemIndex}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
