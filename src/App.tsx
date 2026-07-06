import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import WaveBackground from "./components/WaveBackground";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <WaveBackground />
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="经验">
          <Experience />
        </div>
      </main>
      
      <Contact />
    </div>
  );
}
