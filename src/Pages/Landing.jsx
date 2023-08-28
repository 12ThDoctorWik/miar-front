import { LandingBanner } from '@features/landing/components/LandingBanner';
import { LandingAboutTRPG } from '@features/landing/components/LandingAboutTRPG';
import { LandingInfo } from '@features/landing/components/LandingInfo';
import { LandingStore } from '@features/landing/components/LandingStore';
import { LandingContactUs } from '@features/landing/components/LandingContactUs';
import { SmoothScroll } from '@components/SmoothScroll';

const Landing = () => {
  return (
    <div style={{ backgroundColor: '#121316', paddingBottom: 64 }}>
      <SmoothScroll>
        <LandingBanner />
        <LandingAboutTRPG />
        <LandingInfo />
        <LandingStore />
        <LandingContactUs />
      </SmoothScroll>
    </div>
  );
};

export default Landing;
