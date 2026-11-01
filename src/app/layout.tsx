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
  title: 'Rayhan Pervej – Full Stack & GenAI Engineer',
  description:
    'Portfolio of Rayhan Pervej, Junior Solution Developer at Shadhin Lab LLC. Full stack engineer building backend APIs, React and Next.js apps, agentic AI systems and RAG chatbots.',
  keywords: [
    'Full Stack Engineer',
    'Backend Developer',
    'Python',
    'Django',
    'Next.js',
    'GenAI Engineer',
    'Agentic AI',
    'LLM',
    'LangChain',
    'RAG',
    'Software Engineer',
    'Bangladesh',
    'Dhaka',
    'Rayhan Pervej',
  ],
  authors: [{ name: 'Rayhan Pervej', url: 'https://github.com/Rayhan-Pervej' }],
  openGraph: {
    title: 'Rayhan Pervej – Full Stack & GenAI Engineer',
    description: 'Full stack and GenAI engineer portfolio: backend, Next.js, agentic AI and LLM systems',
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
