import "./App.css";
import NavBar from "./sections/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Footer from "./sections/Footer/Footer";
import Volunteer from "./sections/Volunteer_and_Involvement/VandI";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <Volunteer />
      <Footer />
    </>
  );
}

export default App;
