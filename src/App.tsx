import Phrase from "./components/phrase/phrase";
import MainHome from "./components/main/mainHome";
import About from "./components/about/about";

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
    </>
  );
}

export default App;
