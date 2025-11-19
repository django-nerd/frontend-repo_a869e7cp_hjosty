import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'Prototype your first agent',
    features: ['1 Agent', '100 minutes/mo', 'Web widget', 'Community support']
  },
  {
    name: 'Pro',
    price: '$39',
    desc: 'Scale to your first customers',
    features: ['3 Agents', '2,000 minutes/mo', 'Phone + Web', 'Email support']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Security + scale for teams',
    features: ['Unlimited agents', 'SLA + SSO', 'Audit logs', 'Dedicated support']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(700px_250px_at_50%_0%,rgba(59,130,246,0.10),transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-semibold text-white"
          >
            Simple, transparent pricing
          </motion.h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Start free, upgrade when you scale. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 ${
                i === 1 ? 'ring-1 ring-fuchsia-400/30' : ''
              }`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-white text-xl font-medium">{t.name}</h3>
                  <p className="text-slate-400 text-sm">{t.desc}</p>
                </div>
                <div className="text-white text-3xl font-semibold">{t.price}<span className="text-sm font-normal text-slate-400">{t.price !== 'Custom' && '/mo'}</span></div>
              </div>
              <ul className="mt-6 space-y-2 text-slate-300 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#" className={`inline-flex w-full justify-center px-4 py-2 rounded-full font-medium transition ${
                  i === 1
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15'
                }`}>Choose {t.name}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
