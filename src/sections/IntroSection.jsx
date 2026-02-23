import Reveal from "../components/Reveal";

const IntroSection = () => {
  return (
    <Reveal>
      <section
        id="home"
        className="max-w-6xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-12 items-center scroll-mt-28"
      >
        {/* TEXT */}
        <div>
          <p className="text-cyan-400 font-medium">Computer Science Student</p>

          <h1 className="text-5xl md:text-6xl font-bold mt-2 leading-tight ">
            Mohammed <br />
            <span className="text-cyan-400">Irfan S</span>
          </h1>

          <p className="mt-5 text-gray-400 max-w-md">
            Pre-final-year B.E CSE student at Panimalar Engineering College with
            strong interest in Web Development and Java Full Stack Development.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-xl glass hover:bg-white/5 transition hover:scale-105"
            >
              Resume
            </a>

            {/* View Work */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 transition hover:scale-105"
            >
              View Work
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/MohammedIrfan232"
              target="_blank"
              className="px-6 py-3 rounded-xl glass hover:bg-white/5 transition hover:scale-105"
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/mohammed-irfan-s-282776353/"
              target="_blank"
              className="px-6 py-3 rounded-xl glass hover:bg-white/5 transition hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="p-3 rounded-full glow-cyan">
            <img
              src="/profile.png"
              className="w-64 h-64 rounded-full object-cover scale-125"
              style={{ objectPosition: "center 30%" }}
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default IntroSection;
