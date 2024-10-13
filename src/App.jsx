import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <main className="px-4">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
