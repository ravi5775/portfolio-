import { MessageSquareCode, Scan, Mic2, ServerCog, HeartPulse, Activity, ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

// Project images
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectKidney from "@/assets/project-kidney.jpg";
import projectSmarthome from "@/assets/project-smarthome.jpg";
import projectAws from "@/assets/project-aws.jpg";
import projectSymptom from "@/assets/project-symptom.jpg";
import projectDiabetes from "@/assets/project-diabetes.jpg";

const projects = [
  {
    icon: MessageSquareCode,
    title: "Offline AI Chatbot System",
    description: "Built advanced offline AI chatbot using open-source LLMs and local network topology. Achieved 100% privacy with no internet dependency, using transformer models for natural language understanding.",
    tech: ["Open-Source LLMs", "Transformers", "Local Network", "Python"],
    featured: true,
    color: "llm",
    image: projectChatbot,
  },
  {
    icon: Scan,
    title: "Kidney Stone Prediction System",
    description: "Developed ML models achieving 87.3% accuracy for predicting kidney stone formation using real-time serum data. Optimized F2-score > 0.86 for medical relevance.",
    tech: ["Machine Learning", "XGBoost", "Python", "SQL"],
    featured: true,
    color: "ai",
    image: projectKidney,
  },
  {
    icon: Mic2,
    title: "Voice-Controlled Smart Home Chatbot",
    description: "Intelligent voice-controlled chatbot for home automation with 92% recognition accuracy across multiple accents. Real-time response latency of 1.5s.",
    tech: ["NLP", "Voice Recognition", "AI", "IoT"],
    featured: true,
    color: "llm",
    image: projectSmarthome,
  },
  {
    icon: ServerCog,
    title: "AI Course Registration System (AWS)",
    description: "Deployed secure, AI-driven system on AWS EC2 handling 500+ registrations/minute. Implemented SQL injection prevention, improving security by 60%.",
    tech: ["AWS EC2", "Security", "High RPM", "Cloud"],
    featured: true,
    color: "aws",
    image: projectAws,
  },
  {
    icon: HeartPulse,
    title: "Medical Symptom Chatbot",
    description: "API-free symptom-based chatbot built with Python for secure local analysis. Reduced misdiagnosis rates by 25% through interactive suggestions.",
    tech: ["Python", "Healthcare AI", "SQL", "NLP"],
    featured: true,
    color: "cyber",
    image: projectSymptom,
  },
  {
    icon: Activity,
    title: "Diabetes Prediction Model",
    description: "AI-based diabetes prediction achieving 92% accuracy with Streamlit web app. Implemented feature selection and hyperparameter tuning.",
    tech: ["Streamlit", "ML", "Healthcare", "Python"],
    featured: true,
    color: "data",
    image: projectDiabetes,
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string; glow: string; gradient: string }> = {
    primary: { bg: "bg-primary/15", text: "text-primary", border: "border-primary/40", glow: "hover:glow-primary", gradient: "from-primary/20 to-transparent" },
    llm: { bg: "bg-llm/15", text: "text-llm", border: "border-llm/40", glow: "hover:glow-secondary", gradient: "from-llm/20 to-transparent" },
    aws: { bg: "bg-aws/15", text: "text-aws", border: "border-aws/40", glow: "hover:glow-accent", gradient: "from-aws/20 to-transparent" },
    cyber: { bg: "bg-cyber/15", text: "text-cyber", border: "border-cyber/40", glow: "hover:glow-cyber", gradient: "from-cyber/20 to-transparent" },
    ai: { bg: "bg-ai/15", text: "text-ai", border: "border-ai/40", glow: "hover:glow-ai", gradient: "from-ai/20 to-transparent" },
    data: { bg: "bg-data/15", text: "text-data", border: "border-data/40", glow: "hover:glow-data", gradient: "from-data/20 to-transparent" },
    dev: { bg: "bg-dev/15", text: "text-dev", border: "border-dev/40", glow: "hover:glow-dev", gradient: "from-dev/20 to-transparent" },
  };
  return colors[color] || colors.primary;
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-llm/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-aws/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyber/10 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full animate-gradient" style={{ backgroundSize: '200% 200%' }} />
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Showcasing AI-powered solutions, LLM chatbots, and cloud-deployed applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            return (
              <div
                key={project.title}
                className={`group relative glass rounded-3xl overflow-hidden border-2 ${colorClasses.border} transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${colorClasses.glow} ${
                  isVisible ? 'animate-slide-in-scale' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses.gradient} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className={`absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 ${colorClasses.bg} backdrop-blur-sm ${colorClasses.text} text-xs font-bold rounded-full border ${colorClasses.border}`}>
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className={`absolute bottom-4 left-4 p-3 ${colorClasses.bg} backdrop-blur-sm rounded-xl border ${colorClasses.border} group-hover:scale-110 transition-transform`}>
                    <project.icon className={`w-6 h-6 ${colorClasses.text}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`text-xl font-bold ${colorClasses.text} group-hover:text-opacity-90 transition-colors line-clamp-2`}>
                      {project.title}
                    </h3>
                    {project.link && (
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="text-muted-foreground hover:text-primary flex-shrink-0 ml-2"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs ${colorClasses.bg} ${colorClasses.text} rounded-full font-medium border ${colorClasses.border} transition-all duration-300 hover:scale-105`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${colorClasses.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-10 py-7 text-lg glow-primary transition-all duration-300 hover:scale-105 group"
          >
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              View Full Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;