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
  title: 'Aishwary Vishwakarma Portfolio',
  description: 'Created using NextJs backed by Sanity studio',
  creator: 'Aishwary Vishwakarma',
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
