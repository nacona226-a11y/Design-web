import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import WaveBackground from "./components/WaveBackground";

export default function App() {
  const avatarUrl = "/src/assets/images/christin_tao_avatar_1783336032936.jpg";

  return (
    <div className="relative min-h-screen">
      <WaveBackground />
      <Navbar />
      
      <main>
        <Hero avatarUrl={avatarUrl} />
        
        <div id="经验">
          <Experience />
        </div>
        
        {/* Placeholder for "Achievements" section if needed, 
            but for now the core requirements are in Hero and Experience */}
      </main>
      
      <Contact />
    </div>
  );
}
