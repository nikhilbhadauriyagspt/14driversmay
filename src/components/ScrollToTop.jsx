import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search, hash, key } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly on every navigation event
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname, search, hash, key]);

  return null;
};

export default ScrollToTop;
