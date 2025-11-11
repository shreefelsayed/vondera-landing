import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TrendingUp, Users, DollarSign, Star, Award, Target, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'VMedia - Media Buying Marketplace | Vondera',
  description: 'Connect with 10,000+ active merchants or offer your media buying services. Join the largest e-commerce media buying marketplace in MENA.',
};

export default function VMediaPage() {
  const benefits = [
    { icon: Users, title: 'Access 10K+ Merchants', description: 'Connect with active e-commerce stores looking for media buying expertise' },
    { icon: DollarSign, title: 'Set Your Own Rates', description: 'Complete control over your pricing and service packages' },
    { icon: TrendingUp, title: 'Track Earnings', description: 'Real-time dashboard to monitor your income and performance' },
    { icon: Star, title: 'Build Reputation', description: 'Verified reviews and ratings to attract more clients' },
    { icon: Award, title: 'Verified Badge', description: 'Get verified to stand out from the competition' },
    { icon: Shield, title: 'Secure Payments', description: 'Protected transactions with automated payouts' },
  ];

  const services = [
    'Facebook Ads Management',
    'Instagram Advertising',
    'Google Ads Campaigns',
    'TikTok Ads',
    'Snapchat Advertising',
    'Full-Funnel Marketing',
  ];

  const topMediaBuyers = [
    { name: 'Ahmed Hassan', rating: 4.9, projects: 156, earnings: '$12,500', specialty: 'Facebook & Instagram Ads' },
    { name: 'Sara Mohamed', rating: 4.8, projects: 203, earnings: '$15,200', specialty: 'Google Ads Expert' },
    { name: 'Omar Ali', rating: 4.7, projects: 98, earnings: '$8,900', specialty: 'TikTok Advertising' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-vmedia-50 via-white to-primary-50">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="vmedia" className="mb-6 text-base px-6 py-2">
                VMedia Marketplace
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Join the Largest Media Buying Marketplace in MENA
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with 10,000+ active e-commerce merchants or find professional media buyers to scale your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="vmedia" size="lg">
                  Join as Media Buyer
                </Button>
                <Button variant="outline" size="lg">
                  Find Media Buyers
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-vmedia-600">500+</div>
                  <div className="text-sm text-gray-600">Active Media Buyers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-vmedia-600">10K+</div>
                  <div className="text-sm text-gray-600">Merchants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-vmedia-600">$2M+</div>
                  <div className="text-sm text-gray-600">Ad Spend Managed</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Join VMedia?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} hover={true}>
                  <CardHeader>
                    <div className="w-14 h-14 bg-vmedia-100 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon size={28} className="text-vmedia-600" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Service Categories
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-vmedia-300 hover:shadow-md transition-all"
                  >
                    <Zap size={24} className="text-vmedia-600 mx-auto mb-2" />
                    <div className="font-medium text-gray-900">{service}</div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Top Media Buyers */}
        <section className="py-20 bg-white">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Top Performing Media Buyers
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {topMediaBuyers.map((buyer, index) => (
                <Card key={index} hover={true}>
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-vmedia-400 to-vmedia-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {buyer.name.charAt(0)}
                    </div>
                    <CardTitle className="text-center">{buyer.name}</CardTitle>
                    <CardDescription className="text-center">{buyer.specialty}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating:</span>
                        <span className="font-semibold">⭐ {buyer.rating}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Projects:</span>
                        <span className="font-semibold">{buyer.projects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Earnings:</span>
                        <span className="font-semibold text-vmedia-600">{buyer.earnings}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Profile
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-vmedia-500 to-vmedia-600 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Earning?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join 500+ media buyers and start offering your services to 10,000+ active merchants today.
              </p>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                Create Your Profile Now
              </Button>
              <p className="mt-6 text-sm opacity-75">
                Free to join • No monthly fees • Commission-based pricing
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
