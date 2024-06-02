import { useState, useEffect, useCallback } from "react";

const useBottomScrollListener = (callback?: () => void) => {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= fullHeight) {
      setIsBottom(true);
      if (callback) callback();
    } else {
      setIsBottom(false);
    }
  }, [callback]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return isBottom;
};

export default useBottomScrollListener;
