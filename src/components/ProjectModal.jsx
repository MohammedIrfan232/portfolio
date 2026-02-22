import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl p-6 max-w-lg w-full shadow-xl"
      >
        {/* Title */}
        <h3 className="text-2xl font-semibold">{project.title}</h3>

        {/* Problem */}
        <p className="mt-3 text-gray-600">
          <b>Problem:</b> {project.problem}
        </p>

        {/* Solution */}
        <p className="mt-2 text-gray-600">
          <b>Solution:</b> {project.solution}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t) => (
            <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 border rounded hover:bg-gray-100"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectModal;