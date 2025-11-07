import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Target, Users, Zap, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Vondera',
  description: 'Learn about Vondera - the all-in-one e-commerce platform for MENA. Our mission is to make e-commerce accessible to everyone.',
};

export default function AboutPage() {
  const values = [
    { icon: Target, title: 'Mission-Driven', description: 'Making e-commerce accessible to everyone in MENA' },
    { icon: Users, title: 'Customer-First', description: 'Your success is our success' },
    { icon: Zap, title: 'Innovation', description: 'Constantly improving and adding new features' },
    { icon: Heart, title: 'Community', description: 'Building a supportive merchant ecosystem' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                We Make E-commerce Much Easier
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Vondera is an all-in-one e-commerce platform designed specifically for the MENA region. We believe that starting and growing an online business should be accessible to everyone, regardless of technical expertise.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-white">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} hover={true}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon size={32} className="text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 bg-gray-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, Vondera was created to address the unique challenges faced by e-commerce merchants in the MENA region. We noticed that existing platforms didn't cater to local payment methods, language preferences, or the specific needs of Arabic-speaking merchants.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, Vondera powers over 10,000 active stores across the Middle East and North Africa, processing millions in transactions and helping merchants build successful online businesses.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary-600">10K+</div>
                  <div className="text-gray-600">Active Stores</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600">$50M+</div>
                  <div className="text-gray-600">GMV Processed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600">15+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
