import Reveal from "../components/Reveal";

const skills = [
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "MySQL",
  "IoT",
  "Git",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-28 scroll-mt-28">
      <Reveal>
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <p className="text-gray-400 mb-10">Technologies I work with</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="glass rounded-xl p-5 text-center transition duration-200 hover:scale-110 hover:text-cyan-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default SkillsSection;
