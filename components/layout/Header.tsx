'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('nav');
  const isRTL = locale === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    window.location.href = `/${newLocale}`;
  };

  return (
    <header
      className={cn(
        'fixed top-[52px] left-0 right-0 z-40 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Vondera</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" dir="ltr">
            <Link href={`/${locale}#features`} className="text-gray-700 hover:text-primary-500 transition-colors">
              {t('features')}
            </Link>
            <Link href={`/${locale}#pricing`} className="text-gray-700 hover:text-primary-500 transition-colors">
              {t('pricing')}
            </Link>
            <Link href={`/${locale}/vmedia`} className="text-vmedia-600 hover:text-vmedia-700 font-semibold transition-colors">
              {t('vmedia')}
            </Link>
            <Link href={`/${locale}/blog`} className="text-gray-700 hover:text-primary-500 transition-colors">
              {t('blog')}
            </Link>
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-primary-500 transition-colors">
              {t('about')}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-primary-500 transition-colors">
              {t('contact')}
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-500 transition-colors"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{locale === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <Button variant="ghost" size="sm">
              {t('login')}
            </Button>
            <Button variant="primary" size="sm">
              {t('signup')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-500"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-3">
              <Link
                href={`/${locale}#features`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('features')}
              </Link>
              <Link
                href={`/${locale}#pricing`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('pricing')}
              </Link>
              <Link
                href={`/${locale}/vmedia`}
                className="px-4 py-2 text-vmedia-600 font-semibold hover:bg-vmedia-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('vmedia')}
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('blog')}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <div className="px-4 pt-4 border-t border-gray-200 flex flex-col space-y-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center space-x-2 py-2 text-gray-700 hover:text-primary-500"
                >
                  <Globe size={18} />
                  <span>{locale === 'en' ? 'العربية' : 'English'}</span>
                </button>
                <Button variant="ghost" size="sm" className="w-full">
                  {t('login')}
                </Button>
                <Button variant="primary" size="sm" className="w-full">
                  {t('signup')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
