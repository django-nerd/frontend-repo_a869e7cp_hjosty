import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold">Contact</h1>
          <p className="mt-4 text-slate-300">We'd love to hear from you. Send us a note and we'll get back quickly.</p>
          <form className="mt-8 grid gap-4">
            <input placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-400/40" />
            <input placeholder="Email" type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-400/40" />
            <textarea placeholder="Message" rows="5" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-400/40" />
            <button className="justify-self-start px-5 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Send</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
