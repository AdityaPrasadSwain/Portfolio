import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2, Database, Layout, ShieldCheck, Sparkles,
    Cpu, Globe, Zap, Search
} from 'lucide-react';
import profile from '../data/profile';

const CustomIcon = ({ name, size = 24 }) => {
    const icons = {
        'Hibernate': <img src="https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg" alt="Hibernate" className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" style={{ width: size, height: size }} />,
        'Spring Boot': <img src="https://static-00.iconduck.com/assets.00/spring-icon-2048x2044-8840j17v.png" alt="Spring Boot" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'Kafka': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Apache_kafka_logo.svg/1200px-Apache_kafka_logo.svg.png" alt="Kafka" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'Redis': <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Redis_Logo.svg/1200px-Redis_Logo.svg.png" alt="Redis" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'JWT': <img src="https://jwt.io/img/pic_logo.svg" alt="JWT" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'OAuth2': <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Oauth_logo.svg" alt="OAuth2" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'OpenAI': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png" alt="OpenAI" className="w-full h-full object-contain animate-pulse" style={{ width: size, height: size }} />,
        'React JS': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" className="w-full h-full object-contain animate-spin-slow" style={{ width: size, height: size }} />,
        'Antigravity': <img src="/antigravity.png" alt="Antigravity" className="w-full h-full object-contain animate-pulse shadow-[0_0_20px_rgba(56,189,248,0.5)] rounded-full" style={{ width: size, height: size }} />,
        'Java': <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" alt="Java" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'PostgreSQL': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="PostgreSQL" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'MongoDB': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png" alt="MongoDB" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'Maven': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Apache_Maven_logo.svg/1200px-Apache_Maven_logo.svg.png" alt="Maven" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'Docker': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_Logo.svg/1200px-Docker_Logo.svg.png" alt="Docker" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'Git': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png" alt="Git" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'Postman': <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'JavaScript': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/1200px-JavaScript-logo.png" alt="JavaScript" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'HTML': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="HTML" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'CSS': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'Tailwind': <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="Tailwind" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'Spring Security': <img src="https://static-00.iconduck.com/assets.00/spring-security-icon-2048x2048-osgc4sc5.png" alt="Spring Security" className="w-full h-full object-contain" style={{ width: size, height: size }} />,
        'JPA': <img src="https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg" alt="JPA" className="w-full h-full object-contain filter brightness-150" style={{ width: size, height: size }} />,
    };
    return icons[name] || <Code2 size={size} />;
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState('backend');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'backend', label: 'Backend', icon: Database },
        { id: 'auth_tools', label: 'Auth & Tools', icon: ShieldCheck },
        { id: 'ai_future', label: 'AI & Future', icon: Sparkles },
        { id: 'frontend', label: 'Frontend', icon: Layout },
    ];

    const filteredSkills = useMemo(() => {
        const currentSkills = profile.skills[activeTab];
        if (!searchQuery) return currentSkills;
        return currentSkills.filter(skill =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [activeTab, searchQuery]);

    return (
        <section id="skills" className="py-32 relative bg-surface overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mb-4">
                            EXPERTISE<span className="text-primary italic">.</span>
                        </h2>
                        <p className="text-textSoft text-lg font-light tracking-widest uppercase mb-12">Technical Arsenal & Tooling</p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto mb-16 group">
                            <div className="absolute inset-0 bg-primary/30 blur-3xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700 rounded-full" />
                            <div className="relative glass-card-premium rounded-full flex items-center px-8 py-5 border-white/10 group-focus-within:border-primary/50 transition-all duration-500 shadow-xl group-focus-within:shadow-primary/20">
                                <Search className="text-textSoft group-focus-within:text-primary transition-colors" size={24} />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search skills, tools, technologies..."
                                    className="w-full bg-transparent border-none outline-none px-6 text-white placeholder-white/20 font-display font-bold text-xl"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="text-textSoft hover:text-white transition-colors"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-20">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveTab(cat.id);
                                    setSearchQuery(''); // Reset search on tab change for better UX
                                }}
                                className={`px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === cat.id ? 'bg-white text-black shadow-2xl scale-110' : 'glass-main text-textSoft hover:text-white hover:bg-white/5'}`}
                            >
                                <span className="flex items-center gap-2">
                                    <cat.icon size={14} />
                                    {cat.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeTab}-${searchQuery}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                            >
                                {filteredSkills.length > 0 ? (
                                    filteredSkills.map((skill, index) => (
                                        <motion.div
                                            key={`${activeTab}-${skill}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.03 }}
                                            className="group"
                                        >
                                            <div className="glass-card-premium aspect-square rounded-[2rem] flex flex-col items-center justify-center p-6 text-center border border-white/5 group-hover:border-primary/40 transition-all duration-500">
                                                <div className="mb-4 text-white group-hover:text-primary transition-colors group-hover:scale-110 duration-500">
                                                    <CustomIcon name={skill} size={40} />
                                                </div>
                                                <span className="text-[10px] font-black text-white/50 group-hover:text-white uppercase tracking-widest transition-colors">
                                                    {skill}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="col-span-full py-20 text-center">
                                        <p className="text-textSoft font-display text-2xl font-bold uppercase tracking-widest opacity-50">No matches found for "{searchQuery}"</p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Marquee effect for all skills at bottom */}
                    <div className="mt-32 relative py-10 overflow-hidden opacity-10">
                        <div className="flex whitespace-nowrap animate-shimmer">
                            {[...profile.skills.backend, ...profile.skills.ai_future, ...profile.skills.auth_tools, ...profile.skills.frontend].map((s, i) => (
                                <span key={i} className="text-6xl md:text-9xl font-display font-black text-white mx-12 tracking-tighter uppercase italic">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
};

export default Skills;
