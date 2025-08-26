import { Card } from "@/components/ui/card";
import { GraduationCap, Palette, Building2, BookOpen } from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Universities & Colleges",
    description: "Host hackathons, innovation challenges, and student competitions with seamless management tools.",
    features: ["Student Registration", "Judging Panels", "Project Submissions", "Awards Management"]
  },
  {
    icon: Palette,
    title: "Design Communities",
    description: "Run graphic design contests, video competitions, and creative challenges with portfolio showcases.",
    features: ["Portfolio Reviews", "Design Galleries", "Creative Briefs", "Expert Feedback"]
  },
  {
    icon: Building2,
    title: "Corporate Teams",
    description: "Organize employee challenges, innovation sprints, and internal competitions to boost engagement.",
    features: ["Team Building", "Innovation Tracking", "Performance Metrics", "Recognition Programs"]
  },
  {
    icon: BookOpen,
    title: "EdTech Platforms",
    description: "Conduct quizzes, assignments, research challenges, and educational competitions at scale.",
    features: ["Automated Grading", "Progress Tracking", "Learning Analytics", "Certification"]
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Built for Every{" "}
            <span className="text-gradient">Competition Type</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're hosting hackathons, design contests, or educational challenges, 
            our platform adapts to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            
            return (
              <Card 
                key={index}
                className="feature-card p-6 lg:p-8 text-center group cursor-pointer relative overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-xs lg:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 group-hover:bg-accent transition-colors"></div>
                        <span className="text-left">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-1 bg-gradient-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Organizations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">50K+</div>
            <div className="text-muted-foreground">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-success mb-2">1M+</div>
            <div className="text-muted-foreground">Submissions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-warning mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;