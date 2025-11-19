import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-full text-sm transition-colors ${
          isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-blue-500/20 to-amber-400/30 blur-xl"></div>
              <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-fuchsia-500 to-blue-500 grid place-items-center">
                <Sparkles size={18} className="text-white" />
              </div>
            </div>
            <span className="text-white font-semibold tracking-tight">Auralex</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItem({ to: '/', label: 'Home' })}
            {navItem({ to: '/features', label: 'Features' })}
            {navItem({ to: '/pricing', label: 'Pricing' })}
            {navItem({ to: '/about', label: 'About' })}
            {navItem({ to: '/contact', label: 'Contact' })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/pricing" className="px-4 py-2 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Get Started</Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItem({ to: '/', label: 'Home' })}
              {navItem({ to: '/features', label: 'Features' })}
              {navItem({ to: '/pricing', label: 'Pricing' })}
              {navItem({ to: '/about', label: 'About' })}
              {navItem({ to: '/contact', label: 'Contact' })}
              <Link to="/pricing" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full bg-white text-slate-900 font-medium text-center mt-2">Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
