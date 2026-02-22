import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import IntroSection from "../sections/IntroSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";

const Home = () => {
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

export default Home;