import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Worship Weekly — Gospel Groove Collective',
  description: 'Multi-day live worship streaming and 24/7 gospel radio. Music, community, and divine healing.',
  keywords: ['worship', 'gospel', 'streaming', 'live', 'healing', 'positive vibes'],
  openGraph: {
    title: 'Worship Weekly — Gospel Groove Collective',
    description: 'Multi-day live worship streaming and 24/7 gospel radio.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink-900 text-white overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Fade-in Animation Script */}
        <script dangerouslySetInnerHTML={{__html: `
          const io = new IntersectionObserver(entries => {
            entries.forEach(e => {
              if (e.isIntersecting) e.target.classList.add('visible');
            });
          }, { threshold: 0.1 });
          document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
        `}} />
      </body>
    </html>
  );
}
