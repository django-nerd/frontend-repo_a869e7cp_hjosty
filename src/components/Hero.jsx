import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] grid place-items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_30%_70%,rgba(251,191,36,0.10),transparent_35%)] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full bg-white/10 text-white/80 ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Live AI Voice Agent
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            Speak to the future.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-blue-400 to-amber-300"> Auralex</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            An AI voice agent that understands, reasons, and acts. Real-time, omni-channel, and delightfully human.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Get Started</a>
            <a href="#features" className="px-5 py-3 rounded-full bg-white/10 ring-1 ring-white/15 text-white hover:bg-white/15 transition">Explore Features</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
