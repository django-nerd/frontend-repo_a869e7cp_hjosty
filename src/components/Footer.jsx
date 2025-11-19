import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold">Auralex</h3>
            <p className="text-slate-400 text-sm mt-1">Conversational AI for every team.</p>
          </div>
          <nav className="flex items-center gap-4 text-slate-400 text-sm">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Auralex Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}
