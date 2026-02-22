import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle title="Projects" subtitle="Some things I've built" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold">{p.title}</h3>

            {/* Problem */}
            <p className="mt-2 text-sm text-gray-600">
              <b>Problem:</b> {p.problem}
            </p>

            {/* Solution */}
            <p className="mt-1 text-sm text-gray-600">
              <b>Solution:</b> {p.solution}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-100 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
                >
                  GitHub
                </a>
              )}

              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;