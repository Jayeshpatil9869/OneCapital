import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen overflow-hidden bg-[#0D1B2A]">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00C9A7]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 p-12 md:p-20 rounded-3xl shadow-2xl border border-white/10 max-w-4xl mx-auto backdrop-blur-md"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Insights <span className="text-[#00C9A7]">Repository</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Our in-house research team is currently preparing a series of deep-dive macroeconomic reports and sector analyses. The publishing platform will launch shortly.
                    </p>

                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#1A3A6B]">
                        <div className="px-8 py-3 bg-[#0D1B2A] rounded-full text-[#00C9A7] font-bold text-sm tracking-widest uppercase">
                            Launching Q3 2026
                        </div>
                    </div>

                    <div className="mt-16 pt-10 border-t border-white/10">
                        <p className="text-gray-400 mb-6 font-medium">In the meantime, explore our active portfolio models.</p>
                        <div className="flex justify-center gap-4">
                            <Link to="/equity-advisory" className="text-white hover:text-[#00C9A7] font-bold transition-colors flex items-center group">
                                Equity Strategies <ArrowRight className="ml-2 w-4 h-4 text-[#00C9A7] group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
