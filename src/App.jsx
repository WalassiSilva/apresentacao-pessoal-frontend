import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <main className="px-4">
        <Navbar />
        <Hero />
        <Projects />
      </main>
    </>
  );
}

export default App;
