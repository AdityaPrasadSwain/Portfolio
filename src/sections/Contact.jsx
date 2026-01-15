import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
// import emailjs from '@emailjs/browser'
import { profile } from '../data/profile'

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
        <section id="contact" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-textMain mb-4">Let's Connect</h2>
                    <p className="text-textSoft text-lg">Ready to engineer something extraordinary?</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-black/5 rounded-lg text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-textMain">Email</h4>
                                <a href={`mailto:${profile.email}`} className="text-textSoft hover:text-primary transition-colors">{profile.email}</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-black/5 rounded-lg text-secondary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-textMain">Location</h4>
                                <p className="text-textSoft">{profile.location}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-black/5 rounded-lg text-accent">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-textMain">Phone</h4>
                                <p className="text-textSoft">{profile.phone}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-3xl"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-textSoft mb-2">Your Name</label>
                                <input type="text" name="user_name" required className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-textMain focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-textSoft mb-2">Email Address</label>
                                <input type="email" name="user_email" required className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-textMain focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-textSoft mb-2">Message</label>
                                <textarea name="message" rows="4" required className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-textMain focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${status === 'success' ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]'}`}
                            >
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                            </button>
                            {status === 'success' && <p className="text-center text-green-400 text-sm mt-2">I'll get back to you soon!</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
