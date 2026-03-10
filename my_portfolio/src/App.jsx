import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"; // <-- Import Contact
import Footer from "./components/Footer"; // <-- Import Footer

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />

        
        <Contact />
      </main>


      <Footer />
    </div>
  );
}

export default App;
