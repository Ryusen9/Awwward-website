import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-zinc-500">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
