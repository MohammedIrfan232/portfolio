import Reveal from "../components/Reveal";

const IntroSection = () => {
  return (
    <Reveal>
      <section id="intro" className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-5xl font-bold text-slate-900">Mohammed Irfan S</h1>

        <p className="mt-4 text-xl text-gray-600">Student Developer</p>

        <p className="mt-4 max-w-xl text-gray-500">
          Focused on developing practical software solutions using Java and web
          technologies with experience in IoT-based systems for real-world
          applications.
        </p>

        <div className="mt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border rounded-lg hover:bg-gray-100 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    </Reveal>
  );
};

export default IntroSection;