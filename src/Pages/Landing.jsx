import { LandingBanner } from '@features/landing/components/LandingBanner';
import { LandingAboutTRPG } from '@features/landing/components/LandingAboutTRPG';
import { LandingInfo } from '@features/landing/components/LandingInfo';
import { SmoothScroll } from '@components/SmoothScroll';

const Landing = () => {
  return (
    <div style={{ backgroundColor: '#121316', paddingBottom: 64 }}>
      <SmoothScroll>
        <LandingBanner />
        <LandingAboutTRPG />
        <LandingInfo />
      </SmoothScroll>
    </div>
  );
};

export default Landing;
