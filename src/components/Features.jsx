import { motion } from 'framer-motion';
import { Brain, Waves, Globe2, Shield, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Reasoning Engine',
    desc: 'Chain-of-thought planning and tool-use to accomplish multi-step tasks with composable skills.'
  },
  {
    icon: Waves,
    title: 'Real-time Voice',
    desc: 'Low-latency duplex audio with expressive prosody tuned for warmth and clarity.'
  },
  {
    icon: Globe2,
    title: 'Omni-Channel',
    desc: 'Deploy on phone, web, chat, and WhatsApp with unified context and identity.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade',
    desc: 'SOC2-ready controls, role-based permissions, and audit trails by default.'
  },
  {
    icon: Sparkles,
    title: 'Personalized Memory',
    desc: 'Recall preferences and past interactions to make every conversation feel human.'
  },
  {
    icon: Zap,
    title: 'Fast Integrations',
    desc: 'Use our SDKs and webhooks to connect your stack in minutes, not weeks.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(124,58,237,0.12),transparent),radial-gradient(500px_200px_at_80%_20%,rgba(14,165,233,0.10),transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-semibold text-white"
          >
            Built for human-grade conversations
          </motion.h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Everything you need to launch an AI voice agent that sounds natural, remembers context, and gets things done.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-white/20 hover:from-white/10 transition overflow-hidden"
            >
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 bg-[radial-gradient(200px_80px_at_20%_-20%,rgba(168,85,247,0.25),transparent)] transition"></div>
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-white/10 grid place-items-center text-white">
                  <f.icon size={22} />
                </div>
                <h3 className="mt-5 text-white font-medium text-lg">{f.title}</h3>
                <p className="mt-2 text-slate-400 text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
