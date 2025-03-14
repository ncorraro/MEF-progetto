import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ResetScrollInstantly = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // Si posiziona subito all'inizio
  }, [pathname]);

  return null;
};

export default ResetScrollInstantly;
