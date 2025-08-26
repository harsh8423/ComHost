import { Card } from "@/components/ui/card";
import { BarChart3, Kanban, Calendar, MessageSquare, Activity, GitBranch } from "lucide-react";
import kanbanFeature from "@/assets/kanban-feature.jpg";
import calendarFeature from "@/assets/calendar-feature.jpg";
import chatFeature from "@/assets/chat-feature.jpg";

const features = [
  {
    icon: BarChart3,
    title: "Team Dashboard",
    description: "Get complete visibility into your competition with real-time analytics, performance metrics, and progress tracking. Monitor team activities, submission rates, and engagement levels with customizable widgets and automated reports.",
    benefits: ["Real-time analytics", "Custom KPI tracking", "Automated reporting", "Performance insights"],
    image: kanbanFeature,
    direction: "left"
  },
  {
    icon: Kanban,
    title: "File Uploads & Management",
    description: "Centralized document management system with version control, secure sharing, and organized file structures. Support for all file types with preview capabilities, comment threads, and approval workflows.",
    benefits: ["Version control", "Secure file sharing", "Preview & annotations", "Approval workflows"],
    image: kanbanFeature,
    direction: "right"
  },
  {
    icon: Kanban,
    title: "Kanban Board",
    description: "Visual task management with drag-and-drop functionality, custom workflows, and automated status updates. Create swimlanes, set priorities, assign team members, and track progress from ideation to completion.",
    benefits: ["Drag & drop interface", "Custom workflows", "Team assignments", "Progress tracking"],
    image: kanbanFeature,
    direction: "left"
  },
  {
    icon: Calendar,
    title: "Event Calendar",
    description: "Comprehensive scheduling system with mentor sessions, workshops, deadlines, and milestones. Automated reminders, timezone handling, calendar integrations, and booking management for seamless event coordination.",
    benefits: ["Automated reminders", "Timezone support", "Calendar sync", "Booking management"],
    image: calendarFeature,
    direction: "right"
  },
  {
    icon: MessageSquare,
    title: "Chat Room",
    description: "Multi-channel communication platform with threaded conversations, file sharing, and video calls. Dedicated channels for teams, mentors, and organizers with moderation tools and message history.",
    benefits: ["Multi-channel support", "File sharing", "Video integration", "Message moderation"],
    image: chatFeature,
    direction: "left"
  },
  {
    icon: Activity,
    title: "Activity Logs",
    description: "Comprehensive audit trail with detailed logging of all platform activities. Track user actions, system events, and competition milestones with filtering, search capabilities, and exportable reports.",
    benefits: ["Complete audit trail", "Advanced filtering", "Searchable history", "Export capabilities"],
    image: kanbanFeature,
    direction: "right"
  },
  {
    icon: GitBranch,
    title: "GitHub Integration",
    description: "Seamless repository integration with automatic commit tracking, code review workflows, and contribution analytics. Link repositories, track coding progress, and evaluate technical submissions directly from the platform.",
    benefits: ["Repository linking", "Commit tracking", "Code reviews", "Contribution analytics"],
    image: kanbanFeature,
    direction: "left"
  }
];

const FeatureShowcase = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Host Competitions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From team management to real-time collaboration, our platform provides 
            all the tools necessary for successful competition hosting.
          </p>
        </div>
        
        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLeft = feature.direction === "left";
            
            return (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isLeft ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Content */}
                <div 
                  className={`animate-slide-in-${feature.direction} ${
                    !isLeft ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div 
                        key={benefitIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">
                    <span>Available Now</span>
                    <div className="w-2 h-2 bg-primary rounded-full ml-2 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Image */}
                <div 
                  className={`animate-slide-in-${isLeft ? "right" : "left"} ${
                    !isLeft ? "lg:col-start-1" : ""
                  }`}
                >
                  <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;