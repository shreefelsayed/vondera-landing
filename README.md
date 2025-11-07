# Vondera Landing Page

A modern, conversion-optimized SaaS landing page for Vondera - an all-in-one e-commerce platform for the MENA region. Built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Multi-language Support**: English and Arabic (RTL) with easy scalability
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap
- **High Performance**: Optimized images, code splitting, lazy loading
- **Modern UI**: Clean design with smooth animations using Framer Motion
- **Conversion Focused**: Strategic CTAs, trust indicators, social proof

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Form Validation**: React Hook Form + Zod
- **Icons**: Lucide React

## Project Structure

```
vondera-landing/
├── app/
│   ├── [locale]/           # Localized pages
│   │   ├── page.tsx        # Homepage
│   │   ├── layout.tsx      # Root layout with i18n
│   │   ├── vmedia/         # VMedia marketplace page
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── blog/           # Blog listing
│   │   └── ...             # Other pages
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt configuration
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Container.tsx
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── AnnouncementBanner.tsx
│   └── sections/           # Page sections
│       ├── HeroSection.tsx
│       ├── MediaBuyerSpotlight.tsx
│       ├── MobileAppsSection.tsx
│       ├── FeaturesSection.tsx
│       ├── SubProductsSection.tsx
│       ├── PricingSection.tsx
│       └── FAQSection.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── messages/
│   ├── en.json             # English translations
│   └── ar.json             # Arabic translations
├── public/
│   ├── images/             # Images
│   └── icons/              # Icons
├── i18n.ts                 # i18n configuration
├── middleware.ts           # Next.js middleware for i18n
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies

```

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd vondera-landing
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update environment variables in `.env`:
```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_FB_PIXEL_ID=your_facebook_pixel_id
NEXT_PUBLIC_CONTACT_EMAIL=info@vondera.app
NEXT_PUBLIC_IOS_APP_URL=your_ios_app_url
NEXT_PUBLIC_ANDROID_APP_URL=your_android_app_url
NEXT_PUBLIC_API_URL=https://api.vondera.app
NEXT_PUBLIC_SITE_URL=https://vondera.app
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

### Main Pages
- **Homepage** (`/`) - Hero, features, products, pricing, FAQ
- **VMedia Marketplace** (`/vmedia`) - Dedicated page for media buyers
- **About** (`/about`) - Company information and values
- **Contact** (`/contact`) - Contact form and information
- **Blog** (`/blog`) - Blog post listings

### Additional Pages (Templates)
- Careers (`/careers`)
- Partners (`/partners`)
- Developers (`/developers`)
- Mobile Apps (`/apps`)
- Tutorials (`/tutorials`)

## Key Components

### UI Components

- **Button**: Multiple variants (primary, secondary, outline, ghost, vmedia)
- **Card**: Flexible card component with header, content, footer
- **Badge**: Status and category badges
- **Container**: Responsive container with size variants

### Sections

- **HeroSection**: Main hero with CTAs, stats, and app badges
- **MediaBuyerSpotlight**: VMedia marketplace promotion
- **MobileAppsSection**: Mobile app features and downloads
- **FeaturesSection**: Platform features grid
- **SubProductsSection**: VMedia, VPay, VFunnel, VInbox, VCommunity
- **PricingSection**: Pricing tiers with features
- **FAQSection**: Accordion-style FAQ

### Layout Components

- **Header**: Sticky navigation with language switcher
- **Footer**: Multi-column footer with newsletter signup
- **AnnouncementBanner**: Dismissible top banner for VMedia

## Internationalization (i18n)

The application supports English and Arabic with full RTL (Right-to-Left) support.

### Adding a New Language

1. Create translation file in `messages/[locale].json`
2. Add locale to `i18n.ts`:
```typescript
export const locales = ['en', 'ar', 'new-locale'] as const;
```
3. Update `middleware.ts` if needed
4. Translations will automatically be available at `/new-locale`

### Using Translations

```typescript
import { useTranslations } from 'next-intl';

function Component() {
  const t = useTranslations('namespace');
  return <div>{t('key')}</div>;
}
```

## Styling

### Tailwind CSS

Custom theme configuration in `tailwind.config.ts`:
- Primary color: Blue (#0066FF)
- Secondary color: Purple
- VMedia color: Green
- Custom animations and keyframes
- RTL support utilities

### Adding Custom Styles

Global styles in `app/globals.css`:
- Custom fonts (Inter for LTR, Tajawal for RTL)
- RTL-specific adjustments
- Utility classes

## SEO Optimization

### Metadata

Each page includes:
- Title and description
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Structured Data

JSON-LD structured data for:
- Organization
- Products
- Software Applications
- FAQ pages

### Sitemap & Robots

- Dynamic sitemap generation (`/sitemap.xml`)
- Robots.txt configuration (`/robots.txt`)

## Performance Optimization

- Image optimization with `next/image`
- Font optimization with `next/font`
- Code splitting per route
- Lazy loading for heavy components
- Dynamic imports for client-side components

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)
- `NEXT_PUBLIC_FB_PIXEL_ID` - Facebook Pixel ID (optional)
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email
- `NEXT_PUBLIC_IOS_APP_URL` - iOS app store URL
- `NEXT_PUBLIC_ANDROID_APP_URL` - Google Play store URL
- `NEXT_PUBLIC_API_URL` - Backend API URL

## Brand Guidelines

### Colors
- **Primary**: Blue (#0066FF) - Tech-forward, trustworthy
- **Secondary**: Purple - Creative, innovative
- **VMedia**: Green (#22c55e) - Growth, success

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Inter (LTR), Tajawal (RTL)
- **Line Height**: 1.6-1.8 for readability

### Design Principles
- Clean and minimal
- Generous whitespace
- Conversion-focused CTAs
- Trust indicators throughout
- Mobile-first approach

## Key Features Implemented

### Main Product (Vondera)
- Website builder with 20 themes
- Multi-channel selling
- Inventory management
- Order processing
- AI-powered analytics
- Marketing automation
- Team collaboration
- Mobile apps (iOS/Android)

### Sub-Products
1. **VMedia** - Media buying marketplace
2. **VPay** - Payment gateway
3. **VFunnel** - Sales funnel builder
4. **VInbox** - Social media inbox
5. **VCommunity** - Merchant network

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

Proprietary - All rights reserved by Vondera

## Contact

- **Email**: Info@vondera.app
- **Phone**: +20 10 70068383
- **Address**: Dokki, Giza, Egypt
- **Website**: https://vondera.app

## Support

For technical support or questions:
- Email: Info@vondera.app
- Response time: 24-48 hours

---

Built with ❤️ by the Vondera team
