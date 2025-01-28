import Script from 'next/script';
import './preflight.css';
import './globals.css';
import Header from '@/components/Header';
import TagList from '@/components/TagList';
import { dankMonoReg } from '@/config/fonts';
import Footer from '@/components/Footer';
import styles from './layouts.module.css';
import { siteMetadata } from './siteMetadata';
import { getTheme } from '@/util/getTheme';
import dynamic from 'next/dynamic';
import { siteInfo } from '@/config/siteInfo';

const SetTheme = dynamic(() => import('@/components/SetTheme'), {
  ssr: false,
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProd = process.env.NEXT_PUBLIC_IS_PROD === 'true';
  const {
    leftSpacerGrid,
    mainContentContainer,
    pageGrid,
    tagListContainer,
    themeToggleContainer,
  } = styles;

  return (
    <html lang='en' className={`${dankMonoReg.className}`}>
      <head>
        <Script
          id='themeToggle'
          dangerouslySetInnerHTML={{ __html: getTheme }}
        />
      </head>
      <body>
        {isProd && (
          <Script
            defer
            data-domain={siteInfo.appUrl}
            src={process.env.NEXT_PUBLIC_PL_URL}
          />
        )}
        <Header />
        <div className={themeToggleContainer}>
          <SetTheme />
        </div>

        <div className={pageGrid}>
          <div className={leftSpacerGrid} />
          <div className={mainContentContainer}>
            {children}
            <Footer />
          </div>
          <div className={tagListContainer}>
            <TagList />
          </div>
        </div>
      </body>
    </html>
  );
}
