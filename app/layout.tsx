import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Throwback Fitness | Wapda Town, Lahore',
  description: 'A focused training space in Wapda Town Society, Lahore. Start your fitness journey with Throwback Fitness.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
