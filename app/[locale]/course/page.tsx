import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/course/AnnouncementBar';
import FooterAnnouncementBar from '@/components/course/FooterAnnouncementBar';
import CourseHero from '@/components/course/CourseHero';
import WhyDifferent from '@/components/course/WhyDifferent';
import SalesProof from '@/components/course/SalesProof';
import EnhancedRoadmap from '@/components/course/EnhancedRoadmap';
import WhoIsThisFor from '@/components/course/WhoIsThisFor';
import Testimonials from '@/components/course/Testimonials';
import CourseFAQ from '@/components/course/CourseFAQ';
import FinalCTA from '@/components/course/FinalCTA';

export const metadata: Metadata = {
  title: 'كورس الميديا بايينج المجاني - تعلم الإعلانات الرقمية مع Vondera',
  description: 'كورس شامل مجاني يعلّمك الميديا بايينج خطوة بخطوة. تعلم إعلانات Meta وTikTok وSnapchat من الصفر للاحتراف. ابدأ دلوقتي مجانًا!',

  openGraph: {
    title: 'كورس الميديا بايينج المجاني - اتعلم واكسب من الإعلانات',
    description: 'كورس عملي 100% يعلّمك الميديا بايينج من الصفر. حقق دخل إضافي من خلال إدارة الإعلانات على Meta، TikTok و Snapchat. سجل مجانًا الآن!',
    type: 'website',
    locale: 'ar_EG',
    url: 'https://vondera.app/ar/course',
    siteName: 'Vondera',
    images: [
      {
        url: 'https://vondera.app/course%20image.jpg',
        width: 1200,
        height: 630,
        alt: 'كورس الميديا بايينج المجاني - Vondera'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'كورس الميديا بايينج المجاني - Vondera',
    description: 'تعلم الميديا بايينج من الصفر للاحتراف. كورس عملي شامل على Meta و TikTok و Snapchat. سجل مجانًا!',
    images: ['https://vondera.app/course%20image.jpg'],
    creator: '@VonderaApp',
    site: '@VonderaApp'
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },

  alternates: {
    canonical: 'https://vondera.app/ar/course',
    languages: {
      'ar-EG': 'https://vondera.app/ar/course',
      'x-default': 'https://vondera.app/ar/course',
    }
  },

  keywords: 'كورس ميديا بايينج, تعلم الإعلانات, Meta Ads, TikTok Ads, Snapchat Ads, كورس مجاني, الميديا بايينج, إعلانات فيسبوك, إعلانات انستجرام, تعلم التسويق الرقمي, Vondera',

  authors: [{ name: 'Vondera' }],
  
  other: {
    'og:phone_number': '+201234567890',
    'og:email': 'support@vondera.app',
  }
};

export default function CoursePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'كورس الميديا بايينج والإعلانات الرقمية',
            description: 'كورس شامل يعلّمك الميديا بايينج خطوة بخطوة على منصات Meta و TikTok و Snapchat',
            provider: {
              '@type': 'Organization',
              name: 'Vondera',
              sameAs: 'https://vondera.app',
              logo: 'https://vondera.app/logo.png'
            },
            offers: {
              '@type': 'Offer',
              category: 'مجاني',
              price: '0',
              priceCurrency: 'EGP'
            },
            coursePrerequisites: 'لا يتطلب خبرة سابقة',
            educationalLevel: 'من المبتدئين للمحترفين',
            inLanguage: 'ar',
            availableLanguage: 'ar',
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'عبر الإنترنت',
              courseWorkload: 'PT20H'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              ratingCount: '800',
              bestRating: '5',
              worstRating: '1'
            },
            image: 'https://vondera.app/course%20image.jpg'
          })
        }}
      />

      <AnnouncementBar />
      <div className="sticky top-0 z-40">
        <Header variant="solid" position="relative" />
      </div>
      <main className="min-h-screen bg-white">
        <CourseHero />
        <SalesProof />
        <WhyDifferent />
        <EnhancedRoadmap />
        <WhoIsThisFor />
        <Testimonials />
        <CourseFAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FooterAnnouncementBar />

      <a
        href="https://wa.me/+201234567890?text=مرحباً! عندي استفسار عن كورس الميديا بايينج"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  );
}
