import { useEffect, useRef, useState } from 'react';
import type { LottiePlayer } from 'lottie-web';


interface LottieAnimationProps{
    path: string,
    loop: boolean,
    autoplay: boolean,
}

export const LottieAnimation = ({path, loop, autoplay}: LottieAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop,
        autoplay,
        path,
      });

      return () => animation.destroy();
    }
  }, [autoplay, loop, lottie, path]);

  return (
    <div ref={ref} />
  );
};