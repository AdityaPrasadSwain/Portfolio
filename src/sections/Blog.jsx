import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, BookOpen } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable Backend Architectures",
      category: "Engineering",
      date: "Oct 15, 2023",
      readTime: "5 min read",
      description: "An deep dive into microservices, Kafka, and handling 10k+ concurrent users with zero downtime.",
      image: "/images/system_architect_visual_1772640355787.png"
    },
    {
      title: "The Future of Web Development with AI",
      category: "Technology",
      date: "Nov 02, 2023",
      readTime: "4 min read",
      description: "How AI is transforming the way we write code, design interfaces, and build user experiences.",
      image: "/images/ai_learning_mockup_v2_1772640537360.png"
    },
    {
      title: "Securing Spring Boot Applications",
      category: "Security",
      date: "Dec 10, 2023",
      readTime: "7 min read",
      description: "Implementing robust OAuth2 and JWT flows for enterprise-grade financial systems.",
      image: "/images/financial_metrics_visualization_1772658522572.png"
    }
  ];

  return (
    <section id="blog" className="py-32 relative bg-background overflow-hidden min-h-screen pt-40">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-6"
            >
              <BookOpen size={12} className="text-secondary animate-pulse" />
              <span className="text-[9px] font-mono font-medium text-white/40 uppercase tracking-[0.3em]">Insights & Articles</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-semibold text-white tracking-normal mb-6 uppercase leading-tight"
            >
              The <span className="text-gradient-neon">Blog</span><span className="text-secondary">.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-textSoft font-light max-w-xl leading-relaxed"
            >
              Thoughts on software engineering, design patterns, and the ever-evolving tech landscape.
            </motion.p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bento-card border border-white/10 flex flex-col overflow-hidden hover:border-primary/30 transition-all duration-500 rounded-2xl"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 glass-main rounded-full border border-white/10 text-[9px] font-mono font-medium text-white uppercase tracking-widest backdrop-blur-md">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-[10px] font-mono text-white/40 uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-white tracking-wide mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-textSoft font-light leading-relaxed mb-6">
                      {post.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <button className="flex items-center gap-2 text-xs font-mono font-medium text-secondary uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                      Read Article <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
