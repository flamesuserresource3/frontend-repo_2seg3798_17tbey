import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative text-gray-900 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.06),transparent_50%)]">
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
