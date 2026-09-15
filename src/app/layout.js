import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://rustom-portfolio.vercel.app'),
  title: 'Rustom Yadav | Software Engineer',
  description:
    'Portfolio of Rustom Yadav, Software Engineer and system architecture enthusiast, Building scalable web ecosystems with Generative & Agentic AI Systems',
  keywords: [
    'Software Engineer',
    'Rustom Yadav',
    'System Design',
    'Generative AI',
    'Agentic AI',
    'MERN Stack',
    'Next.js',
    'FastAPI',
    'Docker',
    'GitHub Actions',
    'Full Stack Developer',
    'Web Developer',
    'Machine Learning Engineer',
    'Developer',
    'Rustom',
  ],
  authors: [{ name: 'Rustom Yadav' }],
  creator: 'Rustom Yadav',
  publisher: 'Rustom Yadav',
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Rustom Yadav | Software Engineer',
    description:
      'Software Engineer building Softwares and systems with AI & JavaScript, TypeScript and Python.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rustom-portfolio.vercel.app/',
    siteName: 'Rustom Yadav',
    images: [
      {
        url: '/rustom-yadav.jpg',
        width: 1200,
        height: 630,
        alt: 'Rustom Yadav',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rustom Yadav | Software Engineer',
    description:
      'Portfolio of Rustom Yadav, Software Engineer and system architecture enthusiast, Building scalable web ecosystems with Generative & Agentic AI Systems',
    images: ['/rustom-yadav.jpg'],
  },
  verification: {
    google: '05nsT381gB_XfIpgl1CwfoTdRSgjVwLPVoQMuUBYeu0',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rustom Yadav',
    url: 'https://rustom-portfolio.vercel.app',
    image: 'https://rustom-portfolio.vercel.app/rustom-yadav.jpg',
    jobTitle: 'Software Engineer',
    description:
      'Software Engineer building Softwares and systems with AI & JavaScript, TypeScript and Python.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://github.com/rustom-yadav',
      'https://linkedin.com/in/rustom-yadav',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <div id="main" className="min-w-0 w-full overflow-x-hidden min-h-screen">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
