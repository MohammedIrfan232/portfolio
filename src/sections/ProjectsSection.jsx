import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <SectionTitle title="Projects" subtitle="Some things I've built" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              onClick={() => setSelectedProject(p)}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>

              <p className="mt-2 text-sm text-gray-600">
                <b>Problem:</b> {p.problem}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                <b>Solution:</b> {p.solution}
              </p>

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
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ IMPORTANT — modal OUTSIDE section */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default ProjectsSection;