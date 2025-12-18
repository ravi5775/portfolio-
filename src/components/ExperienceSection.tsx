import { Briefcase, Calendar, MapPin, Sparkles, Rocket, Target, Award, Zap, Star } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "Apollo Hospital, Chittoor",
    location: "Healthcare Technology",
    duration: "45 days",
    project: "Kidney Stone Disease Prediction using Serum Data",
    color: "llm",
    icon: Target,
    milestone: "Healthcare AI Breakthrough",
    year: "2023",
    highlights: [
      "Developed and deployed ML models achieving 87.3% accuracy for kidney stone prediction",
      "Conducted extensive data preprocessing on medical parameters (calcium, uric acid, creatinine, pH)",
      "Implemented multiple classification algorithms (Logistic Regression, SVM, Random Forest, XGBoost)",
      "Built enhanced interactive dashboards providing real-time risk probability insights",
      "Optimized database queries for handling large patient records efficiently",
    ],
  },
  {
    title: "Data Science Intern",
    company: "Belong (Flyzy Project)",
    location: "IT and Services",
    duration: "4 weeks",
    project: "Flight Cancellation Analysis and Prediction",
    color: "primary",
    icon: Rocket,
    milestone: "First Industry Experience",
    year: "2024",
    highlights: [
      "Developed predictive models to analyze and forecast flight cancellations for Flyzy",
      "Gained hands-on exposure to real-world datasets and industry workflows",
      "Enhanced skills in Python, statistics, and advanced machine learning techniques",
      "Worked with Belong Data Science Team under mentorship",
    ],
  },
  {
    title: "Freelance Developer & Consultant",
    company: "Self-Employed",
    location: "Multiple Domains",
    duration: "Ongoing",
    project: "22+ Projects Delivered (Last 2 Weeks)",
    color: "aws",
    icon: Award,
    milestone: "Independent Success",
    year: "2025",
    highlights: [
      "Rapid development and deployment of AI/ML, web development, and security solutions",
      "Built custom chatbots, automation systems, and data analysis platforms",
      "Provided cybersecurity consultation and vulnerability assessment services",
      "Delivered cloud-based solutions optimized for performance and scalability",
    ],
  },
];


const getColorClasses = (color: string) => {
  const colors: Record<string, { text: string; bg: string; border: string; glow: string; gradient: string }> = {
    primary: { 
      text: "text-primary", 
      bg: "bg-primary", 
      border: "border-primary/30", 
      glow: "shadow-[0_0_40px_hsl(var(--primary)/0.5)]",
      gradient: "from-primary/20 to-primary/5"
    },
    llm: { 
      text: "text-llm", 
      bg: "bg-llm", 
      border: "border-llm/30", 
      glow: "shadow-[0_0_40px_hsl(var(--llm)/0.5)]",
      gradient: "from-llm/20 to-llm/5"
    },
    aws: { 
      text: "text-aws", 
      bg: "bg-aws", 
      border: "border-aws/30", 
      glow: "shadow-[0_0_40px_hsl(var(--aws)/0.5)]",
      gradient: "from-aws/20 to-aws/5"
    },
    cyber: { 
      text: "text-cyber", 
      bg: "bg-cyber", 
      border: "border-cyber/30", 
      glow: "shadow-[0_0_40px_hsl(var(--cyber)/0.5)]",
      gradient: "from-cyber/20 to-cyber/5"
    },
  };
  return colors[color] || colors.primary;
};

// Floating particles component
const FloatingParticles = ({ color }: { color: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 rounded-full bg-${color} opacity-40`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

const TimelineCard = ({ exp, index, isLast }: { exp: typeof experiences[0]; index: number; isLast: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const colorClasses = getColorClasses(exp.color);
  const IconComponent = exp.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "-30px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePosition({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative mb-20 last:mb-0 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Year badge */}
      <div className={`absolute -left-24 top-6 hidden lg:flex items-center transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
        <span className={`text-2xl font-bold ${colorClasses.text}`}>{exp.year}</span>
      </div>

      {/* Milestone marker with pulse ring */}
      <div className={`absolute left-0 -translate-x-1/2 flex flex-col items-center transition-all duration-500 ${isVisible ? "scale-100" : "scale-0"}`}>
        {/* Pulse rings */}
        <div className={`absolute w-20 h-20 rounded-full ${colorClasses.bg} opacity-20 animate-ping`} style={{ animationDuration: "2s" }} />
        <div className={`absolute w-16 h-16 rounded-full ${colorClasses.bg} opacity-30 animate-ping`} style={{ animationDuration: "2s", animationDelay: "0.5s" }} />
        
        <div 
          className={`relative w-14 h-14 rounded-full ${colorClasses.bg} flex items-center justify-center ${colorClasses.glow} transition-all duration-300 z-10 ${isHovered ? "scale-125 rotate-12" : ""}`}
        >
          <IconComponent className="w-7 h-7 text-background" />
          {/* Orbiting stars */}
          {isHovered && (
            <>
              <Star className="absolute -top-1 -right-1 w-3 h-3 text-background animate-spin" style={{ animationDuration: "3s" }} />
              <Zap className="absolute -bottom-1 -left-1 w-3 h-3 text-background animate-bounce" />
            </>
          )}
        </div>
        
        {/* Milestone label */}
        <div className={`mt-3 px-4 py-1.5 rounded-full text-xs font-bold ${colorClasses.bg} text-background whitespace-nowrap transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-90"}`}>
          {exp.milestone}
        </div>

        {/* Connecting line to next milestone */}
        {!isLast && (
          <div className={`absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-20 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className={`w-full h-full bg-gradient-to-b ${colorClasses.gradient} rounded-full`}>
              <div className={`w-full bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse h-1/3`} />
            </div>
          </div>
        )}
      </div>

      {/* Experience card with 3D tilt */}
      <div 
        className={`relative glass p-6 md:p-8 rounded-3xl border-2 ${colorClasses.border} ml-14 md:ml-20 transition-all duration-300 overflow-hidden ${isHovered ? `${colorClasses.glow}` : ""}`}
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale(1.02)` 
            : "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`} />
        
        {/* Floating particles */}
        {isHovered && <FloatingParticles color={exp.color} />}

        {/* Animated border */}
        <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-${exp.color} to-transparent animate-shimmer`} />
          <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-${exp.color} to-transparent animate-shimmer`} style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Corner accents with animation */}
        <div className={`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 ${colorClasses.border} rounded-tl-3xl transition-all duration-500 ${isHovered ? "w-28 h-28 border-t-3 border-l-3" : ""}`} />
        <div className={`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 ${colorClasses.border} rounded-br-3xl transition-all duration-500 ${isHovered ? "w-28 h-28 border-b-3 border-r-3" : ""}`} />

        <div className="flex flex-wrap items-start justify-between gap-4 mb-5 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2 lg:hidden">
              <span className={`text-sm font-bold ${colorClasses.text} px-2 py-0.5 rounded-full`} style={{ backgroundColor: `hsl(var(--${exp.color}) / 0.15)` }}>
                {exp.year}
              </span>
            </div>
            <h3 className={`text-xl md:text-2xl font-bold ${colorClasses.text} mb-1 flex items-center gap-2`}>
              {exp.title}
              <Sparkles className={`w-5 h-5 ${colorClasses.text} transition-all duration-300 ${isHovered ? "animate-spin scale-125" : ""}`} style={{ animationDuration: "2s" }} />
            </h3>
            <p className="text-foreground font-semibold text-lg">{exp.company}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span className={`flex items-center gap-2 transition-all duration-300 ${isHovered ? `${colorClasses.text}` : ""}`}>
              <Calendar className="w-4 h-4" />
              {exp.duration}
            </span>
            <span className={`flex items-center gap-2 transition-all duration-300 ${isHovered ? `${colorClasses.text}` : ""}`}>
              <MapPin className="w-4 h-4" />
              {exp.location}
            </span>
          </div>
        </div>

        <div 
          className={`flex items-center gap-2 mb-5 px-4 py-2.5 ${colorClasses.text} rounded-xl w-fit transition-all duration-300 border ${colorClasses.border} ${isHovered ? "translate-x-2 scale-105" : ""}`} 
          style={{ backgroundColor: `hsl(var(--${exp.color}) / 0.1)` }}
        >
          <Briefcase className={`w-4 h-4 ${isHovered ? "animate-bounce" : ""}`} />
          <span className="font-semibold text-sm">{exp.project}</span>
        </div>

        <ul className="space-y-3 relative z-10">
          {exp.highlights.map((highlight, i) => (
            <li
              key={i}
              className={`flex items-start gap-3 text-muted-foreground text-sm transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"} ${isHovered ? "text-foreground" : ""}`}
              style={{ transitionDelay: `${(index * 200) + (i * 100)}ms` }}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${colorClasses.bg} mt-1.5 flex-shrink-0 transition-all duration-300 ${isHovered ? "scale-150 animate-pulse" : ""}`} />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Stats badge */}
        <div className={`mt-6 flex items-center gap-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${index * 200 + 500}ms` }}>
          <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${colorClasses.bg} text-background flex items-center gap-1.5`}>
            <Award className="w-3 h-3" />
            Key Achievement
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrolled = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight + windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-28 bg-card relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-llm/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-aws/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        
        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              animation: `float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through impactful roles in AI, Machine Learning, and Software Development
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative pl-12 md:pl-16 lg:pl-32">
            {/* Animated timeline line with glow */}
            <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-1 bg-muted/10 rounded-full overflow-hidden">
              <div 
                className="w-full bg-gradient-to-b from-primary via-llm to-aws rounded-full transition-all duration-500 relative"
                style={{ height: `${scrollProgress * 100}%` }}
              >
                {/* Glowing tip */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_20px_white,0_0_40px_hsl(var(--primary))]" />
              </div>
            </div>

            {experiences.map((exp, index) => (
              <TimelineCard 
                key={exp.title + exp.company} 
                exp={exp} 
                index={index} 
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
