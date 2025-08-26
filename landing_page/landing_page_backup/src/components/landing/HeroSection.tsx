import { Button } from "@/components/ui/button";
import { Calendar, Users, MessageSquare, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="animate-pulse-soft mr-2">🚀</span>
              Trusted by 500+ Organizations
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Host Competitions.{" "}
              <span className="text-gradient">Empower Teams.</span>{" "}
              Evaluate with Ease.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A complete platform to manage hackathons, study challenges, design contests, and more — 
              with dashboards, collaboration tools, and live evaluations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="cta-glow animate-glow group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Schedule a Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                Contact Sales
              </Button>
            </div>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center px-3 py-2 bg-card rounded-full shadow-sm">
                <Users className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm text-muted-foreground">Team Management</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-card rounded-full shadow-sm">
                <Calendar className="w-4 h-4 text-accent mr-2" />
                <span className="text-sm text-muted-foreground">Event Planning</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-card rounded-full shadow-sm">
                <MessageSquare className="w-4 h-4 text-success mr-2" />
                <span className="text-sm text-muted-foreground">Real-time Chat</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Dashboard Mockup */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Floating Dashboard */}
              <div className="relative z-10 bg-card rounded-xl shadow-lg overflow-hidden border">
                <img 
                  src={heroDashboard} 
                  alt="Competition Management Dashboard"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse-soft"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-pulse-soft delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;