import Phrase from "./components/phrase/phrase";
import MainHome from "./components/main/mainHome";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";

function App() {
  return (
    <>
      {" "}
      <style jsx global>{`
        ::selection {
          background-color: #ffcc00;
          color: #ffffff;
        }
      `}</style>
      <MainHome />
      <Phrase />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
