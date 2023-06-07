import { Inter } from 'next/font/google';
import Script from 'next/script';

import '../styles/preflight.css';
import '../styles/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ChrisK-7777',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script defer data-domain="chrisk-7777.com" src="https://plausible.io/js/script.js" />
      </body>
    </html>
  );
}
