import {
  BiMailSend,
  BiMessageSquareDetail,
  BiRightArrowAlt,
} from "react-icons/bi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Contact Me
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Get in touch
          </span>
        </div>

        {/* Centered Contact Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-3xl mx-auto">
          {/* Email Card */}
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 flex-1 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <BiMailSend className="text-4xl text-blue-600 mb-4" />
            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              Email
            </h4>
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Uzamablessed@gmail.com
            </span>
            <a
              href="mailto:Uzamablessed@gmail.com"
              className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 mt-auto transition-colors"
            >
              Write me{" "}
              <BiRightArrowAlt className="text-lg group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 flex-1 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <BiMessageSquareDetail className="text-4xl text-blue-600 mb-4" />
            <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              WhatsApp
            </h4>
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              +234 902 242 2926
            </span>
            <a
              href="https://api.whatsapp.com/send?phone=2349022422926&text=Hello, I would like to talk about a project!"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 mt-auto transition-colors"
            >
              Message me{" "}
              <BiRightArrowAlt className="text-lg group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
