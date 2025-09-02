 
import { ComparisonSection } from "@/components/comparison-section";
import { FavoritesSection } from "@/components/favorites-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <ComparisonSection />
      <FavoritesSection />
    </main>
  );
}
