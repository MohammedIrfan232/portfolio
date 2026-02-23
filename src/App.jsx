import Navbar from "./layouts/Navbar";
import IntroSection from "./sections/IntroSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;