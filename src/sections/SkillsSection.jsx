import SectionTitle from "../components/SectionTitle";
import { skills } from "../data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white border rounded-xl p-4 text-center shadow-sm hover:shadow transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;