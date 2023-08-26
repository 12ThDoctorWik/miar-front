import { useState, useRef, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';

export const SmoothScroll = ({ children }) => {
  const [height, setHeight] = useState(window.innerHeight);
  const viewport = useRef(null);
  const fake = useRef(null);

  const handleScroll = () => {
    gsap.to(viewport.current, {
      duration: 1,
      y: -window.pageYOffset,
      ease: Power4.easeOut,
    });
  };

  useEffect(() => {
    if (!viewport.current) return;

    const observer = new ResizeObserver(elements => {
      for (let elem of elements) {
        const crx = elem.contentRect;
        setHeight(crx.height);
      }
    });

    observer.observe(viewport.current);
    document.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{
          overflowX: 'hidden',
          position: 'fixed',
        }}
        ref={viewport}
      >
        {children}
      </div>
      <div
        ref={fake}
        style={{
          height,
        }}
      />
    </>
  );
};
