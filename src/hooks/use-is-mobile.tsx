import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      setIsMobile(
        /android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i.test(
          userAgent,
        ),
      );
    };

    checkMobile();
  }, []);

  return isMobile;
};
