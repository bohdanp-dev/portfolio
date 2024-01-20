import { Inter } from 'next/font/google'
import './globals.css'
import {ThemeProvider} from "@/context/ThemeContext";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://portfolio-bohdanp.vercel.com/'),
  title: 'Bohdan Panchenko',
  description: 'Personal portfolio',
  keywords: ['React', 'JavaScript', 'Tailwind', 'Frontend'],
  creator: 'Bohdan Panchenko',
  openGraph: {                  //what is opengraph?
    title: 'Bohdan Panchenko',
    description: 'Personal portfolio',
    images: ['/images/avatar.png'],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: ['/favicon/favicon.ico'],
    apple: ['/favicon/apple-touch-icon.png'],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
        <html lang="en" style={{ scrollBehavior: 'smooth' }}>
        <body className={inter.className}>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
        </html>

  );
}