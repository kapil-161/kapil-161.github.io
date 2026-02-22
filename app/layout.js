import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import DisableRightClick from '@/components/DisableRightClick';

export const metadata = {
  metadataBase: new URL('https://bhattaraikapil.com.np'),
  title: {
    default: 'Kapil Bhattarai | Agricultural Data Scientist & Crop Modeling Consultant',
    template: '%s | Kapil Bhattarai',
  },
  description:
    'Agricultural Data Scientist specializing in crop modeling (DSSAT), geospatial analytics, and machine learning solutions for agribusinesses, research institutions, and government agencies.',
  keywords: [
    'Kapil Bhattarai',
    'agricultural data scientist',
    'crop modeling consultant',
    'DSSAT expert',
    'precision agriculture',
    'geospatial analytics',
    'machine learning agriculture',
    'University of Florida',
    'GIS agriculture',
    'remote sensing crops',
  ],
  authors: [{ name: 'Kapil Bhattarai' }],
  creator: 'Kapil Bhattarai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhattaraikapil.com.np',
    siteName: 'Kapil Bhattarai',
    title: 'Kapil Bhattarai | Agricultural Data Scientist & Crop Modeling Consultant',
    description:
      'Crop modeling (DSSAT), geospatial analytics, and machine learning solutions for agriculture.',
    images: [{ url: '/images/hero_profile.webp', width: 400, height: 407 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@KD_Bhattarai',
  },
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
              ],
            }),
          }}
        />
      </head>
      <body>
        <DisableRightClick />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
