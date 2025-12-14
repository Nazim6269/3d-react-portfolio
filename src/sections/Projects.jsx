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

              <img
                src={project.img}
                alt={project.title}
                className="w-full rounded-lg mb-4"
              />

              {/* Project Info */}
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-white-50 text-sm mt-2">{project.des}</p>

              {/* Tech Icons */}
              <div className="flex gap-2 mt-4">
                {project.iconLists.map((icon, i) => (
                  <img key={i} src={icon} alt="tech" className="w-6 h-6" />
                ))}
              </div>

              {/* Project Link */}
              <Link
                to={project.link}
                onClick={(e) => e.stopPropagation()}
                className="inline-block mt-4 text-purple-400 hover:text-purple-300 font-medium"
              >
                View Project →
              </Link>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
