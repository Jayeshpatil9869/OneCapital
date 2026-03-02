import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F0F6FF] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-12 md:p-20 rounded-3xl shadow-xl border border-gray-100 max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">
                        Insights <span className="text-[#00C9A7]">Repository</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Our in-house research team is currently preparing a series of deep-dive macroeconomic reports and sector analyses. The publishing platform will launch shortly.
                    </p>

                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#1A3A6B]">
                        <div className="px-8 py-3 bg-white rounded-full text-[#1A3A6B] font-bold text-sm tracking-widest uppercase">
                            Launching Q3 2026
                        </div>
                    </div>

                    <div className="mt-16 pt-10 border-t border-gray-100">
                        <p className="text-gray-500 mb-6">In the meantime, explore our active portfolio models.</p>
                        <div className="flex justify-center gap-4">
                            <Link to="/equity-advisory" className="text-[#00C9A7] font-bold hover:text-[#0D1B2A] transition-colors flex items-center">
                                Equity Strategies <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
