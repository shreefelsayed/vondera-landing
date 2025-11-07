'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function OpenPositions() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'engineering', 'design', 'product', 'marketing', 'sales'];

  const positions = [
    {
      id: 1,
      title: 'Senior Full-Stack Engineer',
      department: 'engineering',
      location: 'Cairo, Egypt (Hybrid)',
      type: 'Full-time',
      salary: '$60k - $90k',
      description:
        'Build and scale our core platform using Next.js, React, Node.js, and PostgreSQL. Lead technical decisions and mentor junior engineers.',
      requirements: ['5+ years experience', 'Next.js & React expertise', 'Node.js & PostgreSQL', 'System design'],
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$50k - $75k',
      description:
        'Design beautiful, intuitive user experiences for our merchant dashboard and mobile apps. Work closely with engineering and product teams.',
      requirements: ['3+ years UI/UX design', 'Figma expertise', 'Mobile design', 'User research'],
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'product',
      location: 'Dubai, UAE (Hybrid)',
      type: 'Full-time',
      salary: '$70k - $100k',
      description:
        'Own the product roadmap for our VMedia marketplace. Define features, prioritize work, and drive execution with cross-functional teams.',
      requirements: ['4+ years PM experience', 'E-commerce background', 'Data-driven', 'Stakeholder management'],
    },
    {
      id: 4,
      title: 'Growth Marketing Manager',
      department: 'marketing',
      location: 'Cairo, Egypt (Hybrid)',
      type: 'Full-time',
      salary: '$45k - $70k',
      description:
        'Drive user acquisition and activation through paid channels, SEO, content marketing, and partnerships across MENA.',
      requirements: ['3+ years growth marketing', 'Performance marketing', 'Analytics', 'MENA market knowledge'],
    },
    {
      id: 5,
      title: 'Enterprise Sales Executive',
      department: 'sales',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      salary: '$55k - $85k + Commission',
      description:
        'Sell Vondera to enterprise merchants in Saudi Arabia. Build relationships, run demos, and close deals.',
      requirements: ['2+ years B2B sales', 'SaaS experience', 'Arabic fluency', 'Hunter mentality'],
    },
    {
      id: 6,
      title: 'Frontend Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$50k - $75k',
      description:
        'Build pixel-perfect, responsive UIs using React, Next.js, and Tailwind CSS. Optimize for performance and accessibility.',
      requirements: ['3+ years React', 'Next.js experience', 'CSS/Tailwind', 'Performance optimization'],
    },
    {
      id: 7,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$60k - $85k',
      description:
        'Manage cloud infrastructure, CI/CD pipelines, monitoring, and security. Ensure 99.9% uptime for our platform.',
      requirements: ['AWS/GCP experience', 'Docker/Kubernetes', 'CI/CD pipelines', 'Monitoring & logging'],
    },
    {
      id: 8,
      title: 'Content Marketing Specialist',
      department: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$40k - $60k',
      description:
        'Create compelling content for our blog, social media, email campaigns, and video tutorials to educate merchants.',
      requirements: ['2+ years content marketing', 'Arabic & English', 'SEO knowledge', 'Video production'],
    },
  ];

  const filteredPositions =
    activeFilter === 'all' ? positions : positions.filter((p) => p.department === activeFilter);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Open
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Positions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect role and start making an impact
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium capitalize transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Positions List */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {filteredPositions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left - Job Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign size={16} />
                          <span>{position.salary}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{position.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {position.requirements.map((req, i) => (
                      <span
                        key={i}
                        className="bg-violet-50 text-violet-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right - CTA */}
                <div className="flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2 w-full lg:w-auto justify-center"
                  >
                    Apply Now
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No positions found */}
        {filteredPositions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No positions found in this category.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Don't see a position that fits? We're always looking for talented people.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-xl font-semibold hover:bg-violet-50 transition-colors"
          >
            Send Us Your Resume
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
