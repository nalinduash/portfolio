import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { PageFooter } from "@/components/PageFooter";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col">
        <TopBar />
        <main>
          <HeroSection />
          <Separator />
          <AboutSection />
          <Separator />
          <SkillsSection />
        </main>
        <PageFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
