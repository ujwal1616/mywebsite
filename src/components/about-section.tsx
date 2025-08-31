import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Star, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="heading-about">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subtitle">
            A unique blend of financial expertise and emerging AI capabilities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" data-testid="text-about-paragraph-1">
              Ujwal Sharma demonstrates exceptional analytical thinking through his unique journey from finance to AI. With 2+ years of active stock trading experience and NISM Equity Derivatives certification, he brings a rare combination of market analysis skills and emerging AI capabilities to the technology sector.
            </p>
            <p className="text-lg leading-relaxed" data-testid="text-about-paragraph-2">
              Currently pursuing Columbia University's AI for Business certification, Ujwal combines his proven financial acumen with cutting-edge AI development skills. His approach to problem-solving reflects both the precision required in financial markets and the innovative thinking needed in AI applications.
            </p>
            <p className="text-lg leading-relaxed" data-testid="text-about-paragraph-3">
              Ujwal's portfolio showcases his ability to conceptualize and implement solutions that address real-world challenges, from job-matching applications to innovative messaging systems, all while maintaining the analytical rigor developed through his finance background.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <Card className="text-center p-4 bg-card">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary" data-testid="stat-projects">3+</div>
                  <div className="text-sm text-muted-foreground">Active Projects</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 bg-card">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary" data-testid="stat-trading-years">2+</div>
                  <div className="text-sm text-muted-foreground">Years Trading</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 bg-card">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary" data-testid="stat-certifications">2</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="glass p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary" data-testid="heading-education">Education & Certifications</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold" data-testid="text-columbia-ai">Columbia University - AI for Business</div>
                      <div className="text-sm text-muted-foreground">Certificate in Progress</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold" data-testid="text-nism-certification">NISM Equity Derivatives Certification</div>
                      <div className="text-sm text-muted-foreground">SEBI Certified</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold" data-testid="text-financial-management">Certificate of Merit in Financial Management</div>
                      <div className="text-sm text-muted-foreground">TIAS</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold" data-testid="text-bachelor-degree">Bachelor's Degree</div>
                      <div className="text-sm text-muted-foreground">TIAS - 78% (2019-22)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-accent" data-testid="heading-achievements">Key Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Trophy className="text-accent h-5 w-5" />
                    <span data-testid="text-achievement-debate">Runner-up in Inter-College Debate Quiz</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Medal className="text-accent h-5 w-5" />
                    <span data-testid="text-achievement-taekwondo">Multiple Taekwondo Tournament Medals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="text-accent h-5 w-5" />
                    <span data-testid="text-achievement-event-manager">Event Manager for Russell Peters Show</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
