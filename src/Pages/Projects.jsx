import { projects } from "../data/projects";
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, liveLink, codeLink, image }) => {
  return (
    <div className="relative bg-white rounded-[25px] shadow-2xl p-2 transform hover:scale-105 transition-all duration-300">
      <div className="bg-gradient-to-br from-gray-800 to-blue-900 rounded-[25px] p-4">
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 rounded-[20px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100 opacity-30 rounded-[20px]"></div>
        </div>

        <div className="p-5">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>

          <div className="flex space-x-4">
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white py-2 rounded-lg text-center hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Live Demo
            </a>
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-sky-400 text-white py-2 rounded-lg text-center hover:bg-sky-500 transition-all duration-300 transform hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Adding PropTypes validation for ProjectCard
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,  // Fixes missing prop validation
  liveLink: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Projects = () => {
  const categorizedProjects = {
    easy: projects.filter(project => project.difficulty === "easy"),
    medium: projects.filter(project => project.difficulty === "medium"),
    hard: projects.filter(project => project.difficulty === "hard")
  };

  return (
    <section id="projects" className="p-8 bg-gradient-to-br from-white to-gray-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">My Projects</h2>

        {Object.entries(categorizedProjects).map(([difficulty, projectList]) => (
          <div key={difficulty} className="mb-12">
            
            {/* Section Title with Styled Box */}
            <div className="w-[90%] mx-auto bg-white shadow-xl rounded-[50px] p-5 flex justify-center items-center">
              <h3 className="text-2xl font-semibold text-gray-800 capitalize text-center">
                {difficulty} Level
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              {projectList.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  title={project.title} 
                  description={project.description} 
                  liveLink={project.liveLink} 
                  codeLink={project.codeLink} 
                  image={project.image} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ✅ Adding PropTypes validation for Projects
Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      liveLink: PropTypes.string.isRequired,
      codeLink: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
    })
  ),
};

export default Projects;
