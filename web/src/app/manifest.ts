import type {MetadataRoute} from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aishwary Vishwakarma Portfolio',
    short_name: 'Aishwary',
    description:
      'Portfolio of Aishwary Vishwakarma — web developer specialising in React, Next.js and TypeScript.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0c0c03',
    theme_color: '#0c0c03',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
