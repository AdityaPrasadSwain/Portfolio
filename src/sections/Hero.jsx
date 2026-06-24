import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Sparkles, Github, Linkedin, Mail, ArrowRight, Layers, Instagram } from 'lucide-react';
import profile from '../data/profile';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = profile.roles;

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.1] mask-radial" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-hero-gradient opacity-30 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary shadow-neon-teal animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="px-5 py-2 glass-main rounded-full border border-primary/20 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-mono font-medium uppercase tracking-[0.3em] text-primary">Available for Collaboration</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold leading-tight tracking-normal text-white uppercase">
              HI, I AM <span className="text-gradient-neon text-glow-cobalt">ADITYA</span><span className="text-primary">.</span>
            </h1>
          </motion.div>

          {/* Dynamic Rotating Roles with Typing Effect */}
          <div className="h-12 mb-10 overflow-hidden relative w-full flex justify-center items-center">
            <div className="text-xl md:text-3xl font-display font-medium text-white/60 uppercase tracking-widest min-h-[1.5em] flex items-center">
              <span>{text}</span>
              <span className="w-1 h-8 bg-primary ml-1 animate-pulse" />
            </div>
          </div>

          {/* Subheadline and CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mb-16"
          >
            <p className="text-base md:text-lg text-textSoft font-light leading-relaxed mb-10 px-4">
              Engineering <span className="text-white font-medium">reliable systems</span> with precision and care. Backend specialist focused on building software that works for everyone.
            </p>

            <div className="relative w-full overflow-hidden mb-12 py-2">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

              <motion.div
                className="flex gap-4 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...Object.values(profile.skills).flat(), ...Object.values(profile.skills).flat()].map((skill, i) => (
                  <span
                    key={`${skill}-${i}`}
                    className="px-6 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-sm font-mono font-medium text-white/70 uppercase tracking-widest whitespace-nowrap shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="h-12 px-8 bg-primary text-black font-semibold uppercase tracking-widest rounded-xl shadow-neon-cobalt hover:shadow-primary/40 transition-all flex items-center gap-3 group text-xs"
              >
                See My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex items-center gap-4">
                {Object.entries(profile.socials).map(([platform, link], i) => (
                  platform !== 'email' && (
                    <motion.a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -5, color: '#38BDF8' }}
                      className="w-10 h-10 glass-main rounded-xl flex items-center justify-center text-white/40 border border-white/5 hover:border-primary/20 transition-all"
                    >
                      {platform === 'instagram' && <Instagram size={18} />}
                      {platform === 'linkedin' && <Linkedin size={18} />}
                      {platform === 'github' && <Github size={18} />}
                    </motion.a>
                  )
                ))}
              </div>
            </div>
          </motion.div>


        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-mono font-medium uppercase tracking-[0.4em] text-white/20">The Infrastructure</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
