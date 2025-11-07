import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CareersHero from '@/components/careers/CareersHero';
import WhyJoinUs from '@/components/careers/WhyJoinUs';
import OpenPositions from '@/components/careers/OpenPositions';
import TeamCulture from '@/components/careers/TeamCulture';
import Benefits from '@/components/careers/Benefits';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'careers' });

  return {
    title: 'Careers at Vondera - Join Our Team',
    description: 'Join Vondera and help build the future of e-commerce in MENA. Explore open positions and grow your career with us.',
    keywords: 'careers, jobs, Vondera careers, MENA tech jobs, e-commerce jobs, software engineer jobs',
  };
}

export default function CareersPage() {
  return (
    <>
      <AnnouncementBanner />
      <Header />
      <main className="min-h-screen">
        <CareersHero />
        <WhyJoinUs />
        <OpenPositions />
        <TeamCulture />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
