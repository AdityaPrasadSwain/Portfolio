import React from 'react';
import { motion } from 'framer-motion';
import { Server, Zap, Code2, ShieldCheck } from 'lucide-react';

const WhyHireMe = () => {
  const reasons = [
    {
      icon: Server,
      title: "Scalable Architecture",
      description: "I design robust, distributed backends capable of handling high throughput. From microservices to serverless, I build systems that grow with your user base without bottlenecks.",
      color: "text-primary",
      bgGlow: "shadow-glow-primary",
      borderColor: "border-primary/20",
      bgColor: "bg-primary/10"
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Millisecond latency matters. I optimize database queries, implement advanced caching strategies (Redis/Memcached), and ensure APIs respond instantly under heavy load.",
      color: "text-accent",
      bgGlow: "shadow-glow-accent",
      borderColor: "border-accent/20",
      bgColor: "bg-accent/10"
    },
    {
      icon: ShieldCheck,
      title: "Security & Reliability",
      description: "Zero-trust architecture, secure OAuth2/JWT integrations, and bulletproof data protection. I build systems that don't just run fast, but stay secure against vulnerabilities.",
      color: "text-primary",
      bgGlow: "shadow-glow-primary",
      borderColor: "border-primary/20",
      bgColor: "bg-primary/10"
    },
    {
      icon: Code2,
      title: "Clean & Maintainable",
      description: "I write self-documenting, modular code following SOLID principles. Your team will inherit a codebase that is easy to understand, test, and extend for future features.",
      color: "text-accent",
      bgGlow: "shadow-glow-accent",
      borderColor: "border-accent/20",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="why-hire-me" className="py-24 relative bg-background overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono font-medium text-textSoft uppercase tracking-[0.3em]">Value Proposition</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-semibold text-textMain tracking-normal mb-6 uppercase leading-tight"
            >
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Hire Me</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base text-textSoft font-light max-w-2xl leading-relaxed"
            >
              I bridge the gap between complex engineering challenges and seamless user experiences. 
              Here is what I bring to your engineering team.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative p-8 rounded-[2rem] bg-surface/50 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-colors duration-500 overflow-hidden"
              >
                {/* Subtle hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${reason.bgColor} border ${reason.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${reason.bgGlow}`}>
                    <reason.icon size={28} className={reason.color} />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-textMain mb-4">
                    {reason.title}
                  </h3>
                  
                  <p className="text-sm text-textSoft font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
