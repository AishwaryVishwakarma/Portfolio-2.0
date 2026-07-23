import {ImageResponse} from 'next/og';

export const alt = 'Aishwary Vishwakarma — Welcome To My Portfolio';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'radial-gradient(circle at 20% 20%, #16170f 0%, #0c0c03 60%)',
          color: '#f4f5d6',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{fontSize: 32, color: '#7ddcde', letterSpacing: 2}}>
          Aishwary Vishwakarma
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: 24,
            maxWidth: 900,
          }}
        >
          Welcome To My Portfolio
        </div>
        <div
          style={{
            fontSize: 30,
            marginTop: 32,
            color: 'rgba(244, 245, 214, 0.7)',
          }}
        >
          Web Developer · React · Next.js · TypeScript
        </div>
        <div
          style={{
            marginTop: 48,
            height: 8,
            width: 220,
            borderRadius: 999,
            background: 'linear-gradient(90deg, #7ddcde, #f4f5d6)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
