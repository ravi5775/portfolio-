import { BrainCircuit, ShieldCheck, BarChart3, Terminal, CloudCog, Sparkles, Cpu, Lock, Database, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    icon: Sparkles,
    title: "LLM & Chatbots",
    color: "llm",
    gradient: "bg-gradient-llm",
    featured: true,
    skills: ["Open-Source LLMs", "Transformers", "NLP", "Offline Chatbots", "Local Network AI", "Conversational AI", "RAG Systems"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    color: "cyber",
    gradient: "bg-gradient-cyber",
    featured: true,
    skills: ["Penetration Testing", "Kali Linux", "SQL Injection", "Web Security", "Vulnerability Assessment", "Network Security", "Ethical Hacking"],
  },
  {
    icon: CloudCog,
    title: "AWS & Cloud",
    color: "aws",
    gradient: "bg-gradient-accent",
    featured: true,
    skills: ["AWS EC2", "Cloud Computing", "Docker", "Kubernetes", "Google Cloud", "CI/CD", "High RPM Deployment"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    color: "ai",
    gradient: "bg-gradient-ai",
    featured: true,
    skills: ["Neural Networks", "Deep Learning", "PyTorch", "TensorFlow", "Scikit-learn", "Generative AI", "Classification Models"],
  },
  {
    icon: BarChart3,
    title: "Data Science",
    color: "data",
    gradient: "bg-gradient-data",
    featured: true,
    skills: ["Data Analysis", "Big Data", "Pandas", "NumPy", "Statistical Analysis", "Predictive Modeling"],
  },
  {
    icon: Terminal,
    title: "Full-Stack Dev",
    color: "dev",
    gradient: "bg-gradient-dev",
    featured: true,
    skills: ["Python", "Django", "Flask", "REST APIs", "JavaScript", "MySQL", "PostgreSQL"],
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string; glow: string; shadow: string }> = {
    primary: { bg: "bg-primary/15", text: "text-primary", border: "border-primary/40", glow: "hover:glow-primary", shadow: "shadow-primary/20" },
    secondary: { bg: "bg-secondary/15", text: "text-secondary", border: "border-secondary/40", glow: "hover:glow-secondary", shadow: "shadow-secondary/20" },
    accent: { bg: "bg-accent/15", text: "text-accent", border: "border-accent/40", glow: "hover:glow-accent", shadow: "shadow-accent/20" },
    llm: { bg: "bg-llm/15", text: "text-llm", border: "border-llm/40", glow: "hover:glow-secondary", shadow: "shadow-llm/20" },
    cyber: { bg: "bg-cyber/15", text: "text-cyber", border: "border-cyber/40", glow: "hover:glow-cyber", shadow: "shadow-cyber/20" },
    aws: { bg: "bg-aws/15", text: "text-aws", border: "border-aws/40", glow: "hover:glow-accent", shadow: "shadow-aws/20" },
    ai: { bg: "bg-ai/15", text: "text-ai", border: "border-ai/40", glow: "hover:glow-ai", shadow: "shadow-ai/20" },
    data: { bg: "bg-data/15", text: "text-data", border: "border-data/40", glow: "hover:glow-data", shadow: "shadow-data/20" },
    dev: { bg: "bg-dev/15", text: "text-dev", border: "border-dev/40", glow: "hover:glow-dev", shadow: "shadow-dev/20" },
  };
  return colors[color] || colors.primary;
};

const SkillsSection = () => {
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
    <section ref={sectionRef} id="skills" className="py-24 bg-card relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-llm/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyber/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-ai/10 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-data/10 rounded-full blur-3xl animate-pulse-glow animation-delay-700" />

      {/* Floating 3D elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Cpu className="w-16 h-16 text-llm" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-float animation-delay-200">
        <Lock className="w-12 h-12 text-cyber" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20 animate-float animation-delay-400">
        <Database className="w-14 h-14 text-data" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-float animation-delay-600">
        <Zap className="w-10 h-10 text-aws" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full animate-gradient" style={{ backgroundSize: '200% 200%' }} />
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Specialized in cutting-edge AI technologies, cybersecurity, and cloud infrastructure
          </p>
        </div>

        {/* All Skills - Enhanced Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className={`group relative glass p-8 rounded-3xl border-2 ${colorClasses.border} transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${colorClasses.glow} overflow-hidden card-3d ${
                  isVisible ? 'animate-slide-in-scale' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 ${category.gradient} opacity-5 group-hover:opacity-15 transition-all duration-500`} />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Dancing border effect */}
                <div className="absolute inset-0 rounded-3xl animate-border-dance opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10 card-3d-inner">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 ${colorClasses.bg} rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${colorClasses.shadow} shadow-lg`}>
                      <category.icon className={`w-8 h-8 ${colorClasses.text} group-hover:animate-bounce-subtle`} />
                    </div>
                    <h3 className={`text-xl font-bold ${colorClasses.text}`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 text-sm ${colorClasses.bg} ${colorClasses.text} rounded-full font-medium border ${colorClasses.border} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default`}
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;