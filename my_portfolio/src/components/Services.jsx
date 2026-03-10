import { useState } from "react";
import {
  BiLayout,
  BiCodeAlt,
  BiChalkboard,
  BiRightArrowAlt,
  BiX,
  BiCheckCircle,
} from "react-icons/bi";

const Services = () => {
  // State to track which modal is open (null means all are closed, 0/1/2 indicates the specific service)
  const [activeModal, setActiveModal] = useState(null);

  // Added the specific offerings for each service
  const servicesData = [
    {
      title: "Ui/Ux \n Designer",
      icon: <BiLayout className="text-4xl text-blue-600 mb-6" />,
      offerings: [
        "I develop the user interface.",
        "Web page development.",
        "I create UX element interactions.",
        "I position your company brand.",
      ],
    },
    {
      title: "Frontend \n Developer",
      icon: <BiCodeAlt className="text-4xl text-blue-600 mb-6" />,
      offerings: [
        "Static websites using HTML and CSS.",
        "Static websites using frontend frameworks (Vue and React).",
        "Frontend Applications to be integrated with your backend service.",
      ],
    },
    {
      title: "Product \n Designer",
      icon: <BiChalkboard className="text-4xl text-blue-600 mb-6" />,
      offerings: [
        "User research and product strategy.",
        "Interactive prototyping and wireframing.",
        "Usability testing and analysis.",
        "Design system creation and management.",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 relative"
    >
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Services
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            What I offer
          </span>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 pt-12 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start"
            >
              {service.icon}

              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6 whitespace-pre-line leading-snug">
                {service.title}
              </h3>

              {/* Interactive View More Button - Now opens the specific modal */}
              <button
                onClick={() => setActiveModal(index)}
                className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 mt-auto group transition-colors"
              >
                View More
                <BiRightArrowAlt className="text-lg group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL OVERLAY & CONTENT --- */}
      {/* If activeModal is NOT null, render the modal */}
      {activeModal !== null && (
        <div
          // The dark translucent background
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          // Clicking the background closes the modal
          onClick={() => setActiveModal(null)}
        >
          <div
            // The modal box itself
            className="bg-white dark:bg-gray-800 w-full max-w-md p-8 rounded-3xl shadow-2xl relative transition-colors duration-300 transform scale-100 animate-[fadeIn_0.2s_ease-out]"
            // Stop clicks inside the modal from closing it
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button ('X') */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <BiX className="text-3xl" />
            </button>

            {/* Modal Title */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pr-8 whitespace-pre-line leading-snug">
              {servicesData[activeModal].title}
            </h3>

            {/* Modal Offerings List */}
            <ul className="space-y-6">
              {servicesData[activeModal].offerings.map((offering, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* The checkmark icon from your screenshot */}
                  <BiCheckCircle className="text-xl text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {offering}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
