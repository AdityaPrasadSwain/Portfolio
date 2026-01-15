import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Briefcase, GraduationCap, Code, User, Star } from 'lucide-react';
import { profile } from '../data/profile';

const Page = forwardRef((props, ref) => {
    return (
        <div className="page-content h-full w-full bg-white backdrop-blur-xl border border-black/5 p-6 md:p-10 shadow-2xl rounded-r-lg text-textMain overflow-hidden relative" ref={ref}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col">
                {props.children}
            </div>
            {/* Page Number */}
            <div className="absolute bottom-4 right-6 text-textSoft/50 text-xs font-mono">
                {props.number}
            </div>
        </div>
    );
});

const Cover = forwardRef((props, ref) => {
    return (
        <div className="page-content h-full w-full bg-gradient-to-br from-white to-slate-100 border-r-4 border-r-black/5 p-8 shadow-2xl rounded-r-lg text-textMain flex flex-col justify-center items-center text-center relative overflow-hidden" ref={ref}>
            {/* Abstract Cover Art */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(56,189,248,0.4),transparent_60%)]"></div>

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mb-8 inline-block p-6 rounded-full bg-black/5 border border-black/10 backdrop-blur-xl shadow-[0_0_30px_rgba(56,189,248,0.2)]"
                >
                    <User size={48} className="text-primary" />
                </motion.div>

                <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                    {profile.name}
                </h1>
                <p className="text-lg text-secondary tracking-[0.2em] uppercase mb-10 font-light">
                    Resume Book
                </p>

                <div className="px-4 py-2 bg-black/5 rounded-lg border border-black/5 text-sm text-textSoft">
                    <span className="animate-pulse mr-2">●</span> Available for Hire
                </div>
            </div>
        </div>
    );
});

const ResumeBook = () => {
    return (
        <div className="flex justify-center items-center w-full relative z-20 py-10">
            <HTMLFlipBook
                width={450}
                height={650}
                showCover={true}
                mobileScrollSupport={true}
                className="shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                maxShadowOpacity={0.2}
            >
                {/* Cover Page */}
                <Cover />

                {/* Page 1: Summary & Skills */}
                <Page number="01">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-primary/20 text-primary">
                            <Star size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-textMain">Profile Overview</h2>
                    </div>

                    <p className="text-textSoft leading-relaxed text-sm mb-8 text-justify">
                        {profile.objective}
                    </p>

                    <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">Core Tech Stack</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {profile.skills.backend.slice(0, 6).map(skill => (
                            <span key={skill} className="px-2 py-1 bg-black/5 border border-black/10 rounded-md text-xs text-textMain">
                                {skill}
                            </span>
                        ))}
                        {profile.skills.ai.slice(0, 3).map(skill => (
                            <span key={skill} className="px-2 py-1 bg-secondary/10 border border-secondary/20 rounded-md text-xs text-secondary">
                                {skill}
                            </span>
                        ))}
                    </div>
                </Page>

                {/* Page 2: Experience (Internship) */}
                <Page number="02">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-violet-500/20 text-violet-400">
                            <Briefcase size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-textMain">Experience</h2>
                    </div>

                    <div className="relative border-l border-black/10 pl-6 ml-2 space-y-8">
                        <div className="relative group">
                            <div className="absolute -left-[29px] top-1 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_#818cf8]"></div>
                            <h3 className="text-lg font-bold text-textMain">{profile.internship.role}</h3>
                            <p className="text-primary text-sm mb-2">{profile.internship.company}</p>
                            <div className="inline-block px-2 py-1 bg-black/5 rounded text-[10px] text-textSoft mb-3">
                                {profile.internship.duration}
                            </div>
                            <p className="text-sm text-textSoft leading-relaxed">
                                Focused on {profile.internship.focus}. Contributed to backend architecture and implemented core features.
                            </p>
                        </div>
                    </div>
                </Page>

                {/* Page 3: Education */}
                <Page number="03">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                            <GraduationCap size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-textMain">Education</h2>
                    </div>

                    <div className="space-y-6">
                        {profile.education.map((edu, index) => (
                            <div key={index} className="bg-black/5 p-4 rounded-xl border border-black/5 hover:border-black/10 transition-colors">
                                <h3 className="font-bold text-textMain text-sm">{edu.degree}</h3>
                                <p className="text-xs text-secondary mb-1">{edu.institution}</p>
                                <div className="flex justify-between items-center text-[10px] text-textSoft mt-2">
                                    <span>{edu.year}</span>
                                    <span className="text-textMain bg-black/10 px-2 py-0.5 rounded">Score: {edu.score}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Page>

                {/* Page 4: Projects (New request) */}
                <Page number="04">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                            <Code size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-textMain">Key Projects</h2>
                    </div>

                    <div className="space-y-6">
                        {profile.projects.slice(0, 3).map((project, index) => ( // Show top 3
                            <div key={index} className="bg-black/5 p-4 rounded-xl border border-black/5 hover:border-black/10 transition-colors">
                                <h3 className="font-bold text-textMain text-sm">{project.title}</h3>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] text-secondary">{project.category}</span>
                                </div>
                                <p className="text-[10px] text-textSoft leading-snug mb-2 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                    {project.tech.slice(0, 3).map(t => (
                                        <span key={t} className="px-1.5 py-0.5 bg-black/10 text-[9px] text-textMain rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Page>

                {/* Back Cover */}
                <Cover />

            </HTMLFlipBook>
        </div>
    );
};

export default ResumeBook;
