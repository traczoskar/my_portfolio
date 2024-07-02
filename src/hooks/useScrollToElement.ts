import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToElement = (elementId: string) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === `#${elementId}`) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash, elementId]);
};

export default useScrollToElement;
