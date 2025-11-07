import { Metadata } from 'next';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LegalContent from '@/components/legal/LegalContent';

export const metadata: Metadata = {
  title: 'Terms of Service - Vondera',
  description: 'Terms and conditions for using Vondera e-commerce platform',
};

export default function TermsPage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using Vondera's platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      title: '2. Use License',
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Vondera's platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

• Modify or copy the materials
• Use the materials for any commercial purpose
• Attempt to decompile or reverse engineer any software contained on Vondera's platform
• Remove any copyright or other proprietary notations from the materials
• Transfer the materials to another person or "mirror" the materials on any other server`,
    },
    {
      title: '3. Account Terms',
      content: `You must be 18 years or older to use this Service. You must be a human. Accounts registered by "bots" or other automated methods are not permitted. You are responsible for maintaining the security of your account and password. Vondera cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.

You are responsible for all content posted and activity that occurs under your account. One person or legal entity may not maintain more than one free account.`,
    },
    {
      title: '4. Payment Terms',
      content: `For monthly payment plans, the service is billed in advance on a monthly basis and is non-refundable. All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities.

For any upgrade or downgrade in plan level, your credit card that you provided will automatically be charged the new rate on your next billing cycle. Downgrading your Service may cause the loss of features or capacity of your Account.`,
    },
    {
      title: '5. Cancellation and Termination',
      content: `You are solely responsible for properly canceling your account. You can cancel your account at any time by going to your account settings. All of your content will be immediately deleted from the Service upon cancellation.

Vondera, in its sole discretion, has the right to suspend or terminate your account and refuse any and all current or future use of the Service for any reason at any time.`,
    },
    {
      title: '6. Modifications to Service',
      content: `Vondera reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. Vondera shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.`,
    },
    {
      title: '7. Prohibited Uses',
      content: `You may not use Vondera for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms or viruses or any code of a destructive nature.

A breach or violation of any of the Terms will result in an immediate termination of your Services.`,
    },
    {
      title: '8. Intellectual Property',
      content: `The Service and its original content, features, and functionality are and will remain the exclusive property of Vondera and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Vondera.`,
    },
    {
      title: '9. Limitation of Liability',
      content: `In no event shall Vondera, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.`,
    },
    {
      title: '10. Governing Law',
      content: `These Terms shall be governed and construed in accordance with the laws of Egypt, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.`,
    },
    {
      title: '11. Changes to Terms',
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.`,
    },
    {
      title: '12. Contact Us',
      content: `If you have any questions about these Terms, please contact us at:

Email: legal@vondera.com
Address: Cairo, Egypt`,
    },
  ];

  return (
    <>
      <AnnouncementBanner />
      <Header />
      <main className="min-h-screen">
        <LegalContent
          title="Terms of Service"
          lastUpdated="January 1, 2024"
          sections={sections}
        />
      </main>
      <Footer />
    </>
  );
}
