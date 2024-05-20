import Home from "./components/home/home";
import MainHome from "./components/main/mainHome";

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
      <Home />
    </>
  );
}

export default App;
