import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2, Database, Layout, ShieldCheck, Sparkles,
    Cpu, Globe, Zap, Search, Layers, Terminal, Activity,
    Shield, Microscope, ExternalLink, Box, Command,
    Workflow, Server, Cloud, Braces, Coffee, MessageSquare, Key, Github as GithubIcon, FileCode
} from 'lucide-react';
import profile from '../data/profile';

const CustomIcon = ({ name, size = 40, glow = 'rgba(0, 229, 255, 0.2)' }) => {
    // Primary mapping for SkillIcons.dev
    const skillIconsSlugs = {
        'Redis': 'redis', 'Kafka': 'kafka', 'RabbitMQ': 'rabbitmq', 'S3': 'aws',
        'Java': 'java', 'Spring Boot': 'spring', 'Hibernate': 'hibernate', 'JPA': 'hibernate',
        'SQL': 'mysql', 'MongoDB': 'mongodb', 'Docker': 'docker', 'K8s': 'kubernetes',
        'Git': 'git', 'Maven': 'maven', 'ELK Stack': 'elasticsearch', 'Prometheus': 'prometheus',
        'Spring Security': 'spring', 'React': 'react', 'PostgreSQL': 'postgres',
        'MySQL': 'mysql', 'Next.js': 'nextjs', 'Tailwind': 'tailwind', 'JavaScript': 'js',
        'C++': 'cpp', 'JUnit': 'jest', 'Mockito': 'jest', 'Microservices': 'kubernetes',
        'System Design': 'figma', 'Scalability': 'aws',
        'OpenAI API': 'openai', 'Prompt Engineering': 'openai'
    };

    // Secondary mapping for Simple Icons (Flat logos)
    const simpleIconsSlugs = {
        'New Relic': 'newrelic', 'Swagger': 'swagger', 'Aerospike': 'aerospike',
        'OAuth2': 'auth0', 'JWT': 'auth0'
    };

    // Special direct URLs
    const directUrls = {
    };

    let iconUrl = '';
    if (directUrls[name]) {
        iconUrl = directUrls[name];
    } else if (skillIconsSlugs[name]) {
        iconUrl = `https://skillicons.dev/icons?i=${skillIconsSlugs[name]}`;
    } else if (simpleIconsSlugs[name]) {
        iconUrl = `https://cdn.simpleicons.org/${simpleIconsSlugs[name]}/ffffff`;
    } else {
        iconUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${name}&backgroundColor=00e5ff&fontSize=40&fontWeight=900`;
    }

    return (
        <div className="relative group/icon flex items-center justify-center p-2" style={{ width: size + 20, height: size + 20 }}>
            <div
                className="absolute inset-0 blur-2xl opacity-10 group-hover/icon:opacity-40 transition-opacity duration-700 rounded-full"
                style={{ backgroundColor: glow }}
            />
            <img
                src={iconUrl}
                alt={name}
                className="relative z-10 w-full h-full object-contain group-hover/icon:scale-110 transition-all duration-700 ease-premium rounded-lg"
                style={{ filter: (name === 'LangChain' || skillIconsSlugs[name]) ? 'none' : 'drop-shadow(0 0 8px rgba(255,255,255,0.1))' }}
                onError={(e) => {
                    e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${name}&backgroundColor=00e5ff&fontSize=40&fontWeight=900`;
                }}
            />
        </div>
    );
};

const Skills = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Elite Stack', icon: Command, color: 'var(--primary)' },
        { id: 'languages', name: 'Languages', icon: Code2, color: 'var(--primary)' },
        { id: 'frameworks', name: 'Frameworks', icon: Layout, color: 'var(--secondary)' },
        { id: 'databases', name: 'Databases', icon: Database, color: 'var(--primary)' },
        { id: 'tools', name: 'Tools', icon: Terminal, color: 'var(--secondary)' },
        { id: 'ai', name: 'AI', icon: Sparkles, color: 'var(--primary)' }
    ];

    const allSkills = useMemo(() => {
        const flat = [];
        Object.entries(profile.skills).forEach(([category, skills]) => {
            skills.forEach(skill => flat.push({ name: skill, category }));
        });
        return flat;
    }, []);

    const filteredSkills = useMemo(() => {
        return allSkills.filter(skill => {
            const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory, allSkills]);

    const getGlowColor = (category) => {
        const cat = categories.find(c => c.id === category);
        return cat ? cat.color : 'rgba(0, 229, 255, 0.2)';
    };

    return (
        <section id="skills" className="py-24 relative bg-background overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Elite Header section */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-6"
                        >
                            <Sparkles size={12} className="text-primary animate-pulse" />
                            <span className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-[0.3em]">Mastered Technologies</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-6 uppercase italic leading-tight"
                        >
                            My Tech <span className="text-gradient-neon">Stack</span><span className="text-primary">.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-base md:text-lg text-textSoft font-light max-w-xl leading-relaxed"
                        >
                            The tools and technologies I use to <span className="text-white italic">build software</span> every day.
                        </motion.p>
                    </div>

                    {/* Integrated Search & Filter Hub */}
                    <div className="flex flex-col items-center gap-8 mb-16 max-w-5xl mx-auto">
                        {/* Row 1: Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="relative w-full max-w-xl group"
                        >
                            <input
                                type="text"
                                placeholder="Search skills..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-full py-4 pl-8 pr-14 text-sm text-white placeholder-white/20 outline-none focus:border-primary/30 focus:bg-white/[0.05] transition-all shadow-xl"
                            />
                            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={20} />
                        </motion.div>

                        {/* Row 2: Categories */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="w-full flex justify-center"
                        >
                            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4 md:pb-0 px-4 scroll-smooth max-w-full">
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`px-8 py-3 rounded-full text-xs font-bold transition-all duration-500 relative group min-w-max ${activeCategory === cat.id
                                            ? 'text-black'
                                            : 'text-white/40 hover:text-white border border-white/5'
                                            }`}
                                    >
                                        {activeCategory === cat.id && (
                                            <motion.div
                                                layoutId="activeCategoryPillStacked"
                                                className="absolute inset-0 bg-primary shadow-[0_0_20px_rgba(0,229,255,0.3)] rounded-full"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <div className="relative z-10 flex items-center gap-2">
                                            <cat.icon size={14} className={activeCategory === cat.id ? 'text-black' : 'group-hover:text-primary transition-colors'} />
                                            <span>{cat.name}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Elite Skill Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        <AnimatePresence mode="popLayout">
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    layout
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                    transition={{ duration: 0.4, delay: index * 0.01, ease: [0.23, 1, 0.32, 1] }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-white/[0.01] rounded-xl border border-white/5 group-hover:border-primary/20 transition-all duration-500" />

                                    <div className="relative p-3 flex flex-col items-center justify-between h-[110px] text-center">
                                        <div className="flex-1 flex items-center justify-center mb-3">
                                            <CustomIcon
                                                name={skill.name}
                                                size={40}
                                                glow={getGlowColor(skill.category)}
                                            />
                                        </div>

                                        <div>
                                            <h3 className="text-[11px] font-mono font-black text-white tracking-[0.15em] uppercase mb-1.5 group-hover:text-primary transition-colors">
                                                {skill.name}
                                            </h3>
                                            <div className="overflow-hidden h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto transition-all duration-500" />
                                            <p className="mt-1.5 text-[7px] font-mono font-bold text-white/20 uppercase tracking-[0.4em]">
                                                {skill.category}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover interaction glow */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 rounded-full"
                                        style={{ backgroundColor: getGlowColor(skill.category) }}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
