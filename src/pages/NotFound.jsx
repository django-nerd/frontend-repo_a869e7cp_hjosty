import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] grid place-items-center bg-slate-950 text-white px-4">
      <div className="text-center">
        <h1 className="text-7xl font-semibold">404</h1>
        <p className="mt-2 text-slate-400">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="inline-block mt-6 px-5 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Back Home</Link>
      </div>
    </div>
  );
}
