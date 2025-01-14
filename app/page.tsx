import { LandingHero } from '@/components/landing-hero';
import { AuthTabs } from '@/components/auth-tabs';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <LandingHero />
        <AuthTabs />
      </div>
    </main>
  );
}