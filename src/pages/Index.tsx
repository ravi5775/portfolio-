import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pavan Adabala | AI/ML Engineer & Cybersecurity Specialist</title>
        <meta
          name="description"
          content="Portfolio of Pavan Adabala - AI/ML Engineer, Cybersecurity Specialist, and Full-Stack Developer. Specializing in machine learning, ethical hacking, and cloud computing."
        />
        <meta
          name="keywords"
          content="Pavan Adabala, AI Engineer, ML Engineer, Cybersecurity, Ethical Hacking, Full Stack Developer, AWS, Python, Machine Learning"
        />
        <meta property="og:title" content="Pavan Adabala | AI/ML Engineer & Cybersecurity Specialist" />
        <meta
          property="og:description"
          content="Portfolio of Pavan Adabala - AI/ML Engineer, Cybersecurity Specialist, and Full-Stack Developer."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pavanadabala.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
