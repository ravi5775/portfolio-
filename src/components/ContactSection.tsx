import { Mail, Github, Linkedin, MapPin, Bot, Shield, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* 3D-like gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-llm/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
        
        <p className="text-xl text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Open to opportunities in AI R&D, Cybersecurity, Data Science, and Full-Stack Development
        </p>

        {/* Expertise badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-llm/30">
            <Bot className="w-5 h-5 text-llm" />
            <span className="text-sm font-medium text-llm">LLM & AI Chatbots</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-aws/30">
            <Cloud className="w-5 h-5 text-aws" />
            <span className="text-sm font-medium text-aws">AWS Cloud Solutions</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-cyber/30">
            <Shield className="w-5 h-5 text-cyber" />
            <span className="text-sm font-medium text-cyber">Cybersecurity</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            asChild
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-primary transition-all duration-300 hover:scale-105"
          >
            <a href="mailto:indian.75.rc@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 glass"
          >
            <a href="https://github.com/ravi5775" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
          <a
            href="mailto:indian.75.rc@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            indian.75.rc@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/pavan-adabala-512879307"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Chittoor, Andhra Pradesh, India
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
