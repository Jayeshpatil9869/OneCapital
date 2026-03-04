import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
    const { slug } = useParams();
    
    // Find the specific post based on the slug
    const post = blogPosts.find(p => p.slug === slug);

    // If no post is found for this slug, we can redirect or show a 404
    if (!post) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="bg-[#F8F9FA] min-h-screen pt-20">
            {/* Hero Section */}
            <section className="bg-[#0D1B2A] text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#00C9A7] to-transparent blur-[80px] transform -translate-y-1/2" />
                </div>
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Breadcrumbs */}
                        <div className="flex items-center text-sm text-gray-400 mb-8">
                            <Link to="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <span className="text-gray-300">Insights</span>
                        </div>

                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0D1B2A] bg-[#00C9A7] px-3 py-1 rounded-full mb-6">
                            {post.category}
                        </span>
                        
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            {post.title}
                        </h1>
                        
                        <div className="flex flex-wrap items-center text-sm text-gray-300 gap-6">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-[#00C9A7]" />
                                {post.date}
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-[#00C9A7]" />
                                {post.readTime}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100"
                    >
                        <div className="prose prose-lg max-w-none text-gray-700">
                            {post.content.map((paragraph, index) => (
                                <p key={index} className="mb-6 leading-relaxed text-lg">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100 pb-2">
                            <Link 
                                to="/" 
                                className="inline-flex items-center text-[#0D1B2A] font-medium hover:text-[#00C9A7] transition-colors group"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
