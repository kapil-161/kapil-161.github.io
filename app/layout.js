import './globals.css';
import { Inter, Source_Sans_3, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://bhattaraikapil.com.np'),
  title: {
    default: 'Kapil Bhattarai | Agricultural Data Scientist & Crop Modeling Researcher',
    template: '%s | Kapil Bhattarai',
  },
  description:
    'Agricultural Data Scientist and MS researcher specializing in crop modeling (DSSAT), geospatial analytics, and machine learning for agriculture. Open to ag-tech data science roles.',
  keywords: [
    'Kapil Bhattarai',
    'agricultural data scientist',
    'crop modeling researcher',
    'DSSAT researcher',
    'precision agriculture',
    'geospatial analytics',
    'machine learning agriculture',
    'University of Florida',
    'GIS agriculture',
    'remote sensing crops',
  ],
  authors: [{ name: 'Kapil Bhattarai' }],
  creator: 'Kapil Bhattarai',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhattaraikapil.com.np',
    siteName: 'Kapil Bhattarai',
    title: 'Kapil Bhattarai | Agricultural Data Scientist & Crop Modeling Researcher',
    description:
      'Crop modeling (DSSAT), geospatial analytics, and machine learning research in agriculture.',
    images: [{ url: '/images/og_image.png', width: 1200, height: 630, alt: 'Kapil Bhattarai — Agricultural Data Scientist' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@KD_Bhattarai',
    images: ['/images/og_image.png'],
  },
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);})();` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kapil Bhattarai',
              url: 'https://bhattaraikapil.com.np',
              jobTitle: 'Agricultural Data Scientist',
              description:
                'Graduate Research Assistant at University of Florida specializing in crop modeling, geospatial analytics, and machine learning.',
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'University of Florida',
              },
              sameAs: [
                'https://www.linkedin.com/in/kapil-bhattarai-792417192/',
                'https://github.com/kapil-161',
                'https://twitter.com/KD_Bhattarai',
                'https://www.youtube.com/@AFUStudio',
                'https://www.facebook.com/AFUPodcast',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
