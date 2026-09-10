import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CurrentlySection from "@/components/CurrentlySection";
import WorkGrid from "@/components/WorkGrid";
import JourneyTimeline from "@/components/JourneyTimeline";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Floating Glassmorphism Nav */}
      <Nav />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section with R3F 3D Neural Point Cloud Canvas */}
        <Hero />

        {/* 'Currently' Status Card */}
        <CurrentlySection />

        {/* Selected Work Bento Grid */}
        <WorkGrid />

        {/* Vertical Journey Timeline & Milestones */}
        <JourneyTimeline />
      </main>

      {/* Footer with Web3Forms Direct Transmission & Socials */}
      <ContactFooter />
    </div>
  );
}
