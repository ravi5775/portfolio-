import { Brain, Shield, TrendingUp, Award, Bot, Cloud, Lock } from "lucide-react";

const stats = [
  { icon: Brain, value: "87.3%", label: "Medical ML Accuracy", color: "primary" },
  { icon: Shield, value: "22+", label: "Projects Delivered", color: "cyber" },
  { icon: Bot, value: "LLMs", label: "Chatbot Expert", color: "llm" },
  { icon: Cloud, value: "AWS", label: "Certified", color: "aws" },
];

const getColorClass = (color: string) => {
  const colors: Record<string, string> = {
    primary: "text-primary",
    cyber: "text-cyber",
    llm: "text-llm",
    aws: "text-aws",
  };
  return colors[color] || "text-primary";
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-16 rounded-full" />

        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass p-8 md:p-10 rounded-2xl border border-primary/20 glow-primary">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              <span className="text-gradient">Passionate Technologist & Problem Solver</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Fourth-year B.Tech student at <span className="text-primary font-semibold">The Apollo University</span> specializing 
              in AI & Data Science with extensive hands-on experience in machine learning, ethical hacking, 
              full-stack development, and cloud computing.
            </p>
            
            {/* Highlighted expertise */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-llm/10 rounded-xl border border-llm/20">
                <Bot className="w-6 h-6 text-llm" />
                <div>
                  <p className="font-semibold text-llm">LLM Expert</p>
                  <p className="text-xs text-muted-foreground">Offline AI Chatbots</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-aws/10 rounded-xl border border-aws/20">
                <Cloud className="w-6 h-6 text-aws" />
                <div>
                  <p className="font-semibold text-aws">AWS Certified</p>
                  <p className="text-xs text-muted-foreground">Cloud Infrastructure</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-cyber/10 rounded-xl border border-cyber/20">
                <Lock className="w-6 h-6 text-cyber" />
                <div>
                  <p className="font-semibold text-cyber">Ethical Hacker</p>
                  <p className="text-xs text-muted-foreground">Penetration Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group glass p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:glow-primary text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className={`w-8 h-8 ${getColorClass(stat.color)} mb-4 mx-auto group-hover:scale-110 transition-transform`} />
              <div className={`text-3xl md:text-4xl font-bold ${getColorClass(stat.color)} mb-2`}>
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
