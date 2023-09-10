import { Helmet } from 'react-helmet-async';
import { LandingBanner } from '@features/landing/components/LandingBanner';
import { LandingAboutTRPG } from '@features/landing/components/LandingAboutTRPG';
import { LandingInfo } from '@features/landing/components/LandingInfo';
import { LandingStore } from '@features/landing/components/LandingStore';
import { LandingContactUs } from '@features/landing/components/LandingContactUs';
import { SmoothScroll } from '@components/SmoothScroll';

const title = 'Master Is Always Right';
const description =
  'Відчиніть важкі двері й пориньте у світ, де фантазія не має меж. Тут, серед затаєних древніх руїн і сповнених небезпеками підземель, ваші персонажі почнуть свою грандіозну подорож.';

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* TODO: додати keywords (хто шарить які) */}
        <meta name="keywords" content="DnD 5e, НРІ" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/logo512.png" />
        <meta property="og:url" content={document.location.origin} />

        <meta name="twitter:card" content="/logo512.png" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/logo512.png" />
      </Helmet>
      <div style={{ backgroundColor: '#121316', paddingBottom: 64 }}>
        <SmoothScroll>
          <LandingBanner />
          <LandingAboutTRPG />
          <LandingInfo />
          <LandingStore />
          <LandingContactUs />
        </SmoothScroll>
      </div>
    </>
  );
};

export default Landing;
