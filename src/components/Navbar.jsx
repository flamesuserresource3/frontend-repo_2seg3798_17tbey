import { Rocket } from 'lucide-react';

export default function Navbar() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" onClick={(e) => handleNavClick(e, 'top')} className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-rose-500 text-white shadow-sm">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-xl font-semibold tracking-tight">Nuvyn</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#approach" onClick={(e) => handleNavClick(e, 'approach')} className="hover:text-gray-900 transition-colors">Approach</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors">Start a project</a>
          </div>
        </div>
      </div>
    </header>
  );
}
