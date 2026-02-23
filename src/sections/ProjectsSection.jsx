import { useState } from "react";
import Reveal from "../components/Reveal";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects"; // use central data

const ProjectsSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-28 scroll-mt-28"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-gray-400 mb-10">Things I’ve built</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelected(project)}
              className="glass rounded-2xl p-6 transition duration-200 hover:-translate-y-1 hover:scale-[1.03] hover:text-cyan-300 hover:bg-white/5"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-400 text-sm">
                <strong>Problem:</strong> {project.problem}
              </p>

              <p className="text-gray-400 text-sm mt-2">
                <strong>Solution:</strong> {project.solution}
              </p>

              <div className="flex gap-2 mt-4 flex-wrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-white/10 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-4 text-sm px-3 py-1 border rounded hover:bg-white/10 hover:text-cyan-400 transition"
                >
                  🔗 GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default ProjectsSection;
