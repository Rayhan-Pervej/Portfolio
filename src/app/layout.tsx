import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: '/images/fabicon/favicon.ico',
  },
  title: 'Rayhan Pervej – Software Engineer',
  description:
    'Portfolio of Rayhan Pervej, Junior Solution Developer at Shadhin Lab LLC. Specializing in Flutter, Python, AI/LLM, and RAG systems.',
  keywords: [
    'Flutter Developer',
    'Python',
    'AI Engineer',
    'LangChain',
    'RAG',
    'Software Engineer',
    'Bangladesh',
    'Dhaka',
    'Rayhan Pervej',
  ],
  authors: [{ name: 'Rayhan Pervej', url: 'https://github.com/Rayhan-Pervej' }],
  openGraph: {
    title: 'Rayhan Pervej – Software Engineer',
    description: 'Flutter & AI/LLM Developer Portfolio',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
