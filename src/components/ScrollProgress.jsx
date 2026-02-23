import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / height) * 100;
      setWidth(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100]">
      <div
        className="h-full bg-cyan-400 transition-all duration-200"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ScrollProgress;