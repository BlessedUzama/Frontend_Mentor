import { BiLinkExternal, BiLogoGithub, BiRightArrowAlt } from "react-icons/bi";
import Ecommerce from "../assets/E-commerce.png";
import markdown from "../assets/markdown.png";
import Frontendmentor from "../assets/Frontendmentor.png";

const Portfolio = () => {
  const projectsData = [
    {
      id: 1,
      title: "Customer E-Commerce Store",
      description:
        "A fully functional, responsive e-commerce web application with global state management for cart logic and Paystack integration.",
      image: Ecommerce,
      techStack: ["React", "Vite", "Context API", "Paystack"],
      githubUrl: "https://github.com/BlessedUzama/e-commerce-store.git",
      demoUrl: "https://e-commerce-store-sepia-pi.vercel.app/",
    },
    {
      id: 2,
      title: "Currency Converter Capstone",
      description:
        "A dynamic currency converter application integrating external APIs for real-time exchange rates and interactive data handling.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop", // Replace with your actual project screenshot
      techStack: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
      githubUrl: "https://github.com/BlessedUzama/Capstone-Project",
      demoUrl: "#", // Add your live link here
    },
    {
      id: 3,
      title: "Vue.js SPA Suite",
      description:
        "A collection of dynamic web applications including a content blog and a real-time markdown previewer using component-based architecture.",
      image: markdown,
      techStack: ["Vue.js", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/BlessedUzama/markdown-preview-vue.git",
      demoUrl: "https://markdown-preview-vue-eight.vercel.app/",
    },
    {
      id: 4,
      title: "Frontend Mentor Solutions",
      description:
        "A series of pixel-perfect, accessible web design challenges translating complex UI/UX designs into responsive code.",
      image: Frontendmentor,
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/BlessedUzama/Frontend_Mentor",
      demoUrl: "https://frontend-mentor-recipe-page-lake.vercel.app/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Portfolio
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Most recent work
          </span>
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Project Image Box */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content Box */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl transition-colors"
                  >
                    Live Demo <BiLinkExternal className="text-lg" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2.5 rounded-xl transition-colors"
                  >
                    Code <BiLogoGithub className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
