import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Rileva il percorso della pagina

  useEffect(() => {
    window.scrollTo(0, 0); // Scorri all'inizio della pagina quando cambia l'URL
  }, [pathname]);

  return null;
};

export default ScrollToTop;
