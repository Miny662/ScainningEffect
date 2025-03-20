import type { Metadata } from 'next';
import './globals.css';
import { Layout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Scanning effect with depth map | Codrops',
  description: 'Scanning effect with depth map',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-white">
        <Layout></Layout>
        {children}
      </body>
    </html>
  );
}
