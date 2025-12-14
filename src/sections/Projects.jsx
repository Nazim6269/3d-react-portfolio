import { Link } from "react-router-dom";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="A small selection of recent projects"
          sub="⭐️ My projects showcase"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {projects.map((project, index) => (
            <GlowCard card={project} key={project.id} index={index}>
              {/* Project Image */}
              {/* <img
                src={project.screenshots?.[0]}
                alt={project.title}
                className="w-full rounded-lg mb-4"
              /> */}

              {/* Project Info */}
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-white-50 text-sm mt-2">{project.des}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project?.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4 mt-4">
                <Link
                  to={project.demoLink}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="text-purple-400 hover:text-purple-300 font-medium"
                >
                  Live Demo →
                </Link>

                <Link
                  to={project.githubLink}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-400 hover:text-gray-300 font-medium"
                >
                  GitHub →
                </Link>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
