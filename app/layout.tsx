import Script from 'next/script';
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
      <head>
        <Script
          src="//tympanus.net/codrops/adpacks/analytics.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="text-white">
        <Layout />
        {children}
        <Script
          src="https://tympanus.net/codrops/adpacks/cda_sponsor.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
