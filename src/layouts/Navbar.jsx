import { useEffect, useState } from "react";

const sections = ["home", "skills", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 glass rounded-full px-8 py-3 flex gap-8 z-50">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`relative capitalize transition ${
            active === id ? "text-cyan-400" : "text-gray-300"
          }`}
        >
          {id}

          {/* underline */}
          <span
            className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
              active === id ? "w-full" : "w-0"
            }`}
          />
        </a>
      ))}
    </nav>
  );
};

export default Navbar;