const ProjectTabs = ({ projects, selectedProjectId, onProjectSelect, isDarkMode }) => {
  return (
    <div className={`flex flex-wrap gap-2 p-1 rounded-xl ${
      isDarkMode 
        ? "bg-dark-surface/50 border border-dark-border/50" 
        : "bg-white/80 border border-gray-200/60 backdrop-blur-sm"
    }`}>
      {projects.map((project) => (
        <button
          key={project.id}
          onClick={() => onProjectSelect(project.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selectedProjectId === project.id
              ? isDarkMode
                ? "bg-lime-green text-dark-bg"
                : "bg-lime-green text-white"
              : isDarkMode
              ? "text-gray-300 hover:bg-dark-surface/80 hover:text-white"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          {project.name}
        </button>
      ))}
    </div>
  );
};

export default ProjectTabs;
