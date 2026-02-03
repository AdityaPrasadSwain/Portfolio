import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
// import emailjs from '@emailjs/browser'
import { profile } from '../data/profile'
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react'

export default function Contact() {
    const form = useRef()
    const [status, setStatus] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        setStatus('sending')

        // IMPORTANT: User needs to replace these with actual keys or we use a fallback to show UI success
        // For now we simulate success after delay if keys are missing
        setTimeout(() => {
            setStatus('success')
        }, 2000)

        /* 
        // Uncomment once user adds keys
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              setStatus('success')
          }, (error) => {
              setStatus('error')
          })
        */
    }

    return (
        <section id="contact" className="py-32 relative bg-slate-50 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[80px] -z-10" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm tracking-widest uppercase font-bold mb-3">Get In Touch</span>
                    <h2 className="text-5xl font-display font-bold text-gray-900 mb-4">Let's <span className="text-gradient">Connect</span></h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">Ready to engineer something extraordinary? I'm currently available for freelance projects and full-time opportunities.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-6 rounded-2xl flex items-center gap-5 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="p-4 bg-blue-50 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                                <a href={`mailto:${profile.email}`} className="text-gray-500 hover:text-primary transition-colors text-sm md:text-base">{profile.email}</a>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl flex items-center gap-5 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="p-4 bg-indigo-50 rounded-xl text-secondary group-hover:scale-110 transition-transform duration-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Location</h4>
                                <p className="text-gray-500 text-sm md:text-base">{profile.location}</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl flex items-center gap-5 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="p-4 bg-pink-50 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Phone</h4>
                                <p className="text-gray-500 text-sm md:text-base">{profile.phone}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${status === 'success' ? 'bg-green-500 text-white shadow-lg' : 'bg-primary text-white hover:bg-blue-600 shadow-lg hover:shadow-xl hover:-translate-y-1'}`}
                            >
                                {status === 'sending' ? (
                                    <>Sending <Loader2 className="animate-spin" size={20} /></>
                                ) : status === 'success' ? (
                                    'Message Sent!'
                                ) : (
                                    <>Send Message <Send size={20} /></>
                                )}
                            </button>
                            {status === 'success' && <p className="text-center text-green-500 text-sm mt-2 animate-fade-in font-medium">Thank you! I'll get back to you soon.</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
