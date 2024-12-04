import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AllProvider } from '@/components/provider.component';

const geistSans = Plus_Jakarta_Sans({
  variable: '--plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['400', '600', '800'],
});

export const metadata: Metadata = {
  title: 'Room Chat',
  description: 'Real Time Room Chat App with websocket',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className}`}>
        <AllProvider>{children}</AllProvider>
      </body>
    </html>
  );
}
