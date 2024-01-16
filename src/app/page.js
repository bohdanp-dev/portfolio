import HeroSection from '@/components/HeroSection';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-black">
        <Header />
        <div className="container mt-20 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />

        </div>
        <ScrollToTop />
        <Footer />
      </main>
  );
}
