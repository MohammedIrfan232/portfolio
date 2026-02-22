import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";

const skills = ["Java", "JavaScript", "HTML", "CSS", "React.js", "MySQL"];

const SkillsSection = () => {
  return (
    <Reveal>
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border rounded-lg py-3 text-center shadow-sm hover:shadow transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

export default SkillsSection;