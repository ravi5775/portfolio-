import { Shield, Bot, Cloud, Rocket, CheckCircle, Award, Lock } from "lucide-react";

const achievements = [
  {
    icon: Bot,
    title: "AI Competition Finalist",
    description: "Ranked in top 5% among 200+ participants in AI & Machine Learning competitions, showcasing innovative solutions in healthcare and automation.",
    color: "llm",
  },
  {
    icon: Cloud,
    title: "AWS Certified Professional",
    description: "Certified in AWS Cloud Computing and Google Cloud Platform, with hands-on experience deploying high-RPM applications on EC2 infrastructure.",
    color: "aws",
  },
  {
    icon: Rocket,
    title: "22+ Freelance Projects",
    description: "Successfully delivered 22+ client projects in last 2 weeks, demonstrating exceptional productivity and diverse technical capabilities.",
    color: "primary",
  },
];

const securityHighlights = [
  "Performed comprehensive penetration testing on college systems",
  "Identified 5+ SQL injection vulnerabilities threatening student data",
  "Received official appreciation from college administration",
  "Collaborated with project vendor to develop new security strategies",
  "Implemented robust mitigation measures preventing future attacks",
  "Enhanced database security by 60% through SQL injection prevention",
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
    llm: { bg: "bg-llm/10", text: "text-llm", border: "border-llm/30" },
    aws: { bg: "bg-aws/10", text: "text-aws", border: "border-aws/30" },
    cyber: { bg: "bg-cyber/10", text: "text-cyber", border: "border-cyber/30" },
  };
  return colors[color] || colors.primary;
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-llm/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Key <span className="text-gradient">Achievements</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-16 rounded-full" />

        {/* Featured Achievement - Security */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative glass p-8 md:p-10 rounded-2xl border-2 border-cyber/40 overflow-hidden group hover:border-cyber/60 transition-all duration-300">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-cyber opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="absolute top-0 right-0 w-60 h-60 bg-cyber/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-llm/10 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-cyber/20 rounded-2xl animate-bounce-subtle">
                  <Shield className="w-10 h-10 text-cyber" />
                </div>
                <div>
                  <span className="px-3 py-1 text-xs font-bold bg-cyber/20 text-cyber rounded-full">FEATURED</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-cyber mt-2">
                    Critical Security Vulnerability Discovery
                  </h3>
                </div>
              </div>
              
              <p className="text-lg text-foreground font-medium mb-6 flex items-start gap-2">
                <Lock className="w-5 h-5 text-cyber flex-shrink-0 mt-1" />
                Saved thousands of students' sensitive data by identifying and reporting critical 
                security vulnerabilities in college website infrastructure.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {securityHighlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 bg-background/50 rounded-lg backdrop-blur border border-cyber/10 hover:border-cyber/30 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Achievements */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const colorClasses = getColorClasses(achievement.color);
            return (
              <div
                key={achievement.title}
                className={`group glass p-6 rounded-2xl border ${colorClasses.border} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-3 ${colorClasses.bg} rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <achievement.icon className={`w-6 h-6 ${colorClasses.text}`} />
                </div>
                <h3 className={`text-xl font-bold ${colorClasses.text} mb-3`}>
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
