import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search, hash, key } = useLocation();

  useEffect(() => {
    // Scroll to top instantly on every navigation event to avoid forced reflows
    window.scrollTo(0, 0);
  }, [pathname, search, hash, key]);

  return null;
};

export default ScrollToTop;
