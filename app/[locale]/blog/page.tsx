import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Vondera',
  description: 'E-commerce tips, platform updates, success stories, and media buying insights from Vondera.',
};

export default function BlogPage() {
  const posts = [
    {
      title: '10 Tips to Boost Your E-commerce Sales in 2025',
      excerpt: 'Discover proven strategies to increase your online store revenue and customer engagement.',
      category: 'E-commerce Tips',
      date: '2025-01-15',
      readTime: '5 min read',
      image: '/images/blog-1.jpg',
    },
    {
      title: 'Introducing VMedia: Connect with Professional Media Buyers',
      excerpt: 'Learn how our new marketplace helps merchants scale their advertising efforts.',
      category: 'Platform Updates',
      date: '2025-01-10',
      readTime: '3 min read',
      image: '/images/blog-2.jpg',
    },
    {
      title: 'Success Story: How Ahmed Scaled to $100K/Month',
      excerpt: 'Discover how one merchant used Vondera to build a thriving online business.',
      category: 'Success Stories',
      date: '2025-01-05',
      readTime: '7 min read',
      image: '/images/blog-3.jpg',
    },
    {
      title: 'Facebook Ads Best Practices for MENA Merchants',
      excerpt: 'Expert tips on running successful Facebook ad campaigns in the Middle East.',
      category: 'Media Buying',
      date: '2025-01-01',
      readTime: '6 min read',
      image: '/images/blog-4.jpg',
    },
    {
      title: 'Mobile Commerce: Why Your Store Needs a Mobile App',
      excerpt: 'Explore the benefits of having a dedicated mobile app for your e-commerce business.',
      category: 'Mobile Commerce',
      date: '2024-12-28',
      readTime: '4 min read',
      image: '/images/blog-5.jpg',
    },
    {
      title: 'Payment Gateways in Egypt: A Complete Guide',
      excerpt: 'Everything you need to know about accepting online payments in Egypt.',
      category: 'E-commerce Tips',
      date: '2024-12-20',
      readTime: '8 min read',
      image: '/images/blog-6.jpg',
    },
  ];

  const categories = ['All', 'E-commerce Tips', 'Platform Updates', 'Success Stories', 'Media Buying', 'Mobile Commerce'];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Vondera Blog</h1>
              <p className="text-xl text-gray-600">
                E-commerce insights, tips, and success stories to help you grow your online business
              </p>
            </div>
          </Container>
        </section>

        <section className="py-12 bg-white border-b border-gray-200">
          <Container>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} hover={true} className="flex flex-col">
                  <div className="aspect-video bg-gradient-to-br from-primary-200 to-secondary-200 rounded-t-xl"></div>
                  <CardHeader>
                    <Badge variant="default" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-xl hover:text-primary-600 transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                    <Link href="#" className="text-primary-600 hover:text-primary-700 flex items-center space-x-1">
                      <span>Read</span>
                      <ArrowRight size={16} />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
