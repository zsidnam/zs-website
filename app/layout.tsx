import type { Metadata } from 'next';

import { Scene } from '@/_experience/Scene';
import { Header } from '@/_layout/Header';
import { inter } from '@/_styles/fonts';
import setColorThemeScript from '@/_theme/setColorThemeScript';
import { ThemeStoreProvider } from '@/_theme/ThemeStoreContext';

import '@/_styles/globals.css';
import '@/_theme/theme.css';

export const metadata: Metadata = {
  title: 'Zac Sidnam',
  description: 'Portfolio website for Zac Sidnam',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Blocking script to set color mode preference before content is shown */}
        <script dangerouslySetInnerHTML={{ __html: setColorThemeScript }} />

        <ThemeStoreProvider>
          <Header />
          <Scene />
          {children}
        </ThemeStoreProvider>
      </body>
    </html>
  );
}
