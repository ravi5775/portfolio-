import { Github, Linkedin, Mail, ChevronDown, Bot, Shield, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import Scene3D from "./Scene3D";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* 3D Scene Background */}
      <Scene3D />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none z-[1]" />

      <div className="container relative z-10 text-center px-4">
        <div className="animate-fade-in-down">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-mono text-primary border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available for Opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-down animation-delay-100">
          <span className="text-foreground">Pavan </span>
          <span className="text-gradient">Adabala</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto">
          AI/ML Engineer | Cybersecurity Specialist | Full-Stack Developer
        </p>

        {/* Highlighted Skills */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up animation-delay-300">
          <div className="group flex items-center gap-2 px-4 py-2 glass rounded-full border border-llm/30 hover:border-llm/60 transition-all hover:glow-secondary cursor-default">
            <Bot className="w-5 h-5 text-llm" />
            <span className="text-sm font-semibold text-llm">LLM & Chatbots</span>
          </div>
          <div className="group flex items-center gap-2 px-4 py-2 glass rounded-full border border-aws/30 hover:border-aws/60 transition-all hover:glow-accent cursor-default">
            <Cloud className="w-5 h-5 text-aws" />
            <span className="text-sm font-semibold text-aws">AWS Certified</span>
          </div>
          <div className="group flex items-center gap-2 px-4 py-2 glass rounded-full border border-cyber/30 hover:border-cyber/60 transition-all hover:glow-cyber cursor-default">
            <Shield className="w-5 h-5 text-cyber" />
            <span className="text-sm font-semibold text-cyber">Cybersecurity</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up animation-delay-400">
          <span className="px-3 py-1 text-sm bg-card/80 backdrop-blur text-muted-foreground rounded-full border border-border">
            🏆 AI Finalist
          </span>
          <span className="px-3 py-1 text-sm bg-card/80 backdrop-blur text-muted-foreground rounded-full border border-border">
            💻 22+ Projects
          </span>
          <span className="px-3 py-1 text-sm bg-card/80 backdrop-blur text-muted-foreground rounded-full border border-border">
            🔐 Ethical Hacker
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-500">
          <Button 
            asChild
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-primary transition-all duration-300 hover:scale-105"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button 
            variant="outline" 
            asChild
            className="border-muted-foreground/30 text-foreground hover:bg-muted/50 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex justify-center gap-6 animate-fade-in-up animation-delay-600">
          <a 
            href="https://github.com/ravi5775" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:glow-primary rounded-full glass"
          >
            <Github className="w-7 h-7" />
          </a>
          <a 
            href="https://www.linkedin.com/in/pavan-adabala-512879307" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-110 hover:glow-secondary rounded-full glass"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a 
            href="mailto:indian.75.rc@gmail.com"
            className="p-3 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:glow-accent rounded-full glass"
          >
            <Mail className="w-7 h-7" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors z-10"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
