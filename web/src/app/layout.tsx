import {Analytics} from '@vercel/analytics/react';
import type {Metadata} from 'next';
import {
  Dancing_Script,
  Inconsolata,
  Lato,
  Nunito,
  Rubik,
} from 'next/font/google';

import './globals.scss';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--dancing-script',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--lato',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  variable: '--nunito',
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--rubik',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--inconsolata',
});

export const metadata: Metadata = {
  title: 'Aishwary Vishwakarma: Welcome To My Portfolio',
  description:
    'Recent BE graduate who have a great interest in Web development. I am a self taught developer and have a great interest in learning new technologies. A very good team player with great problem-solving ability and currently sitting in a dark-room with coffee and looking into dark-theme VS code.',
  creator: 'Aishwary Vishwakarma',
  keywords:
    'Aishwary Vishwakarma, Portfolio, Web Developer, React, Next.js, JavaScript, TypeScript, CSS, HTML',
  applicationName: 'Aishwary Vishwakarma Portfolio',
  authors: [
    {
      name: 'Aishwary Vishwakarma',
      url: 'https://aishwary.vercel.app/',
    },
  ],
  category: 'Portfolio',
  abstract:
    'Recent BE graduate who have a great interest in Web development. I am a self taught developer and have a great interest in learning new technologies. A very good team player with great problem-solving ability and currently sitting in a dark-room with coffee and looking into dark-theme VS code.',
  metadataBase: new URL('https://aishwary.vercel.app/'),
  openGraph: {
    title: 'Aishwary Vishwakarma: Welcome To My Portfolio',
    description:
      'Recent BE graduate who have a great interest in Web development. I am a self taught developer and have a great interest in learning new technologies. A very good team player with great problem-solving ability and currently sitting in a dark-room with coffee and looking into dark-theme VS code.',
    type: 'website',
    url: 'https://aishwary.vercel.app/',
    images: [
      {
        url: '/Self.JPEG',
      },
    ],
    siteName: 'Aishwary Vishwakarma',
    countryName: 'India',
    locale: 'en_IN',
    emails: ['aishwaryvishwakarma23@gmail.com'],
  },
  twitter: {
    title: 'Aishwary Vishwakarma: Welcome To My Portfolio',
    description:
      'Recent BE graduate who have a great interest in Web development. I am a self taught developer and have a great interest in learning new technologies. A very good team player with great problem-solving ability and currently sitting in a dark-room with coffee and looking into dark-theme VS code.',
    card: 'summary_large_image',
    creator: 'Aishwary Vishwakarma',
    images: [
      {
        url: '/Self.JPEG',
      },
    ],
  },
  publisher: 'Aishwary Vishwakarma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${dancingScript.variable} ${lato.variable} ${nunito.variable} ${rubik.variable} ${inconsolata.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
