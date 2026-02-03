import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-white pt-20 pb-10 overflow-hidden border-t border-gray-200">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-50 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-gray-900 tracking-tight">
                            {profile.name.split(' ')[0]}
                            <span className="text-primary">.</span>
                        </h2>
                        <p className="text-gray-500 max-w-xs leading-relaxed">
                            Crafting digital experiences with code and creativity. Let's build something extraordinary together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 group w-fit"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-all" />
                                        <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-6">Connect</h3>
                        <div className="flex flex-wrap gap-4">
                            <a href={profile.social.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300">
                                <Github size={20} />
                            </a>
                            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-gray-50 border border-gray-100 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href={profile.social.instagram} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-gray-50 border border-gray-100 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href={`mailto:${profile.email}`} className="p-3 rounded-full bg-gray-50 border border-gray-100 hover:border-primary hover:bg-blue-50 hover:text-primary transition-all duration-300">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all group"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} className="text-gray-400 group-hover:text-primary group-hover:-translate-y-1 transition-all" />
                    </button>
                </div>
            </div>
        </footer>
    )
}
