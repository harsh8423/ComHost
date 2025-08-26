import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 gradient-cta text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Ready to Host Your Competition?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 opacity-90 animate-fade-in-up delay-200">
            Book a demo with our team or get in touch today to see how our platform 
            can transform your competition hosting experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-400">
            <Button 
              size="lg" 
              variant="secondary"
              className="group bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Schedule a Meeting
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Contact Sales
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost"
              className="group text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Call Us
            </Button>
          </div>
          
          <div className="mt-12 text-center opacity-80">
            <p className="text-sm">
              Join 500+ organizations already using our platform
            </p>
            <div className="flex justify-center items-center mt-4 space-x-8 opacity-60">
              <div className="text-xs font-medium">Harvard University</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-xs font-medium">Google</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-xs font-medium">MIT</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-xs font-medium">Microsoft</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse-soft"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse-soft delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse-soft delay-500"></div>
    </section>
  );
};

export default CTASection;