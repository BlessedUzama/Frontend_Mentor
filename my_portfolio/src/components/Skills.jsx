import { BiBadgeCheck, BiCodeAlt, BiWrench, BiPalette } from "react-icons/bi";

const Skills = () => {
  
  const frontendSkills = [
    { name: "JavaScript", level: "Advanced", width: "90%" },
    { name: "React.js", level: "Intermediate", width: "70%" },
    { name: "Tailwind CSS", level: "Advanced", width: "85%" },
    { name: "Vue.js", level: "Intermediate", width: "65%" },
    { name: "HTML & CSS", level: "Advanced", width: "95%" },
  ];

  const toolsSkills = [
    { name: "Git & GitHub", level: "Intermediate", width: "75%" },
    { name: "Vite", level: "Intermediate", width: "70%" },
    { name: "Paystack API", level: "Basic", width: "40%" },
    { name: "Context API", level: "Intermediate", width: "75%" },
  ];

  const designSkills = [
    { name: "Figma", level: "Intermediate", width: "70%" },
    { name: "UI/UX Design", level: "Intermediate", width: "65%" },
    { name: "Wireframing", level: "Basic", width: "50%" },
    { name: "Prototyping", level: "Basic", width: "45%" },
  ];

  return (
    <section
      id="skills"
      className="py-24 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Skills
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            My technical level
          </span>
        </div>

        {/* Skills Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full mx-auto">
          {/* Box 1: Frontend Development */}
          
          <div className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            {/* Subtle blue top-border accent on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex flex-col items-center mb-8">
              <BiCodeAlt className="text-4xl text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Frontend
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between items-end mb-1">
                    <div className="flex items-center gap-2">
                      <BiBadgeCheck className="text-lg text-blue-600" />
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 leading-none">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                      {skill.level}
                    </span>
                  </div>
                  {/* The sleek progress bar */}
                  <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: skill.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2: Tools & Technologies */}
          <div className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex flex-col items-center mb-8">
              <BiWrench className="text-4xl text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Tools & Tech
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between items-end mb-1">
                    <div className="flex items-center gap-2">
                      <BiBadgeCheck className="text-lg text-blue-600" />
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 leading-none">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: skill.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Box 3: Product Designer */}
          <div className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex flex-col items-center mb-8">
              <BiPalette className="text-4xl text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Design
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {designSkills.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between items-end mb-1">
                    <div className="flex items-center gap-2">
                      <BiBadgeCheck className="text-lg text-blue-600" />
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 leading-none">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: skill.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
