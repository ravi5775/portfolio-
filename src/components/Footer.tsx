import { Github, Linkedin, Mail, Cpu, ShieldCheck, Cloud } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-gradient">PA</span>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-llm" />
              <ShieldCheck className="w-4 h-4 text-cyber" />
              <Cloud className="w-4 h-4 text-aws" />
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2025 Pavan Adabala. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ravi5775"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-adabala-512879307"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors hover:scale-110 transform"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:indian.75.rc@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;