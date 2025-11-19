import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold">About Auralex</h1>
          <p className="mt-4 text-slate-300">We build voice-first AI agents that sound human, remember context, and take action. Our mission is to help every team provide delightful, on-brand conversations at scale.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-white text-lg font-medium">Our Approach</h3>
              <p className="text-slate-400 mt-2 text-sm">We combine reasoning models with real-time audio, memory, and tool-use. The result is an agent that speaks naturally and gets things done.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-white text-lg font-medium">Values</h3>
              <p className="text-slate-400 mt-2 text-sm">Privacy, reliability, and great UX. We design for trust and transparency from day one.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
