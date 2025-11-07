import { Metadata } from 'next';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LegalContent from '@/components/legal/LegalContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - Vondera',
  description: 'Privacy policy and data protection information for Vondera users',
};

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect information you provide directly to us when you create an account, make a purchase, or communicate with us. This includes:

• Name, email address, and contact information
• Payment information (processed securely through our payment partners)
• Store information and business details
• Product listings and inventory data
• Customer data you input into our platform
• Usage data and analytics
• Communications with our support team`,
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send you technical notices and support messages
• Respond to your comments and questions
• Monitor and analyze trends and usage
• Detect, prevent, and address technical issues
• Personalize and improve your experience
• Send you marketing communications (with your consent)`,
    },
    {
      title: '3. Information Sharing',
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:

• Service providers who assist in our operations (payment processors, hosting providers, email services)
• VMedia media buyers (only the information necessary for order fulfillment)
• Legal authorities when required by law
• With your consent or at your direction`,
    },
    {
      title: '4. Data Security',
      content: `We take data security seriously and implement appropriate technical and organizational measures to protect your data:

• 256-bit SSL encryption for all data transmission
• Encrypted data storage
• Regular security audits and penetration testing
• Access controls and authentication
• Employee training on data protection
• Incident response procedures

While we strive to protect your data, no method of transmission over the Internet is 100% secure.`,
    },
    {
      title: '5. Data Retention',
      content: `We retain your information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.

Upon account deletion, we will delete or anonymize your personal data within 30 days, except where we are required to retain it by law.`,
    },
    {
      title: '6. Your Rights',
      content: `Depending on your location, you may have the following rights regarding your personal data:

• Access: Request a copy of your personal data
• Rectification: Correct inaccurate or incomplete data
• Erasure: Request deletion of your data
• Restriction: Limit how we use your data
• Portability: Receive your data in a portable format
• Object: Object to processing of your data
• Withdraw consent: Withdraw consent for data processing

To exercise these rights, please contact us at privacy@vondera.com`,
    },
    {
      title: '7. Cookies and Tracking',
      content: `We use cookies and similar tracking technologies to:

• Keep you signed in
• Remember your preferences
• Understand how you use our platform
• Improve our services
• Provide relevant advertising

You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features.`,
    },
    {
      title: '8. Third-Party Services',
      content: `Our platform integrates with third-party services (payment gateways, shipping providers, social media platforms). These services have their own privacy policies. We are not responsible for their privacy practices.

We encourage you to review the privacy policies of any third-party services you use through our platform.`,
    },
    {
      title: '9. International Data Transfers',
      content: `Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.`,
    },
    {
      title: '10. Children's Privacy',
      content: `Our Service is not intended for users under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.`,
    },
    {
      title: '11. GDPR Compliance',
      content: `For users in the European Economic Area (EEA), we comply with GDPR requirements:

• Lawful basis for processing your data
• Data protection by design and default
• Data Protection Impact Assessments when required
• Appointment of a Data Protection Officer
• Compliance with data subject rights
• Data breach notification procedures`,
    },
    {
      title: '12. Changes to Privacy Policy',
      content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this privacy policy periodically.`,
    },
    {
      title: '13. Contact Us',
      content: `If you have questions about this privacy policy or our data practices, please contact us:

Email: privacy@vondera.com
Data Protection Officer: dpo@vondera.com
Address: Cairo, Egypt

For GDPR-related inquiries, please specify "GDPR Request" in your subject line.`,
    },
  ];

  return (
    <>
      <AnnouncementBanner />
      <Header />
      <main className="min-h-screen">
        <LegalContent
          title="Privacy Policy"
          lastUpdated="January 1, 2024"
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}
