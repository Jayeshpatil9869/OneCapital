import { motion } from 'framer-motion';
import { Activity, ArrowRight } from 'lucide-react';

const scrollToUpload = () => {
    const el = document.getElementById('cas-upload-box');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

const WealthMonitorHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0D1B2A]">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00C9A7]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
                <div className="max-w-xl md:w-1/2 mb-12 md:mb-0 md:pr-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center space-x-2 text-[#00C9A7] font-semibold tracking-wide text-sm uppercase mb-4">
                            <Activity className="w-5 h-5" />
                            <span>Free Portfolio Review</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Is your portfolio working as hard as <span className="text-[#00C9A7]">you do?</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                            Get an institutional-grade analysis of your current investments. We'll identify hidden fees, overlapping holdings, and opportunities to enhance your risk-adjusted returns.
                        </p>

                        <button
                            onClick={scrollToUpload}
                            className="inline-flex justify-center items-center px-8 py-4 bg-[#00C9A7] text-[#0D1B2A] text-lg font-bold rounded-xl hover:bg-[#00E5BF] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,201,167,0.3)] w-full sm:w-auto cursor-pointer"
                        >
                            Upload CAS Statement
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </motion.div>
                </div>

                {/* Visual Mockup Right Side */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl relative z-10 skew-y-2 transform transition-transform hover:skew-y-0 duration-500">
                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                <span className="text-white font-semibold">Portfolio Health Score</span>
                                <span className="text-3xl font-bold text-[#00C9A7]">72/100</span>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-[#00C9A7]/10 p-4 rounded-xl border border-[#00C9A7]/20">
                                    <span className="text-[#00C9A7] text-sm font-bold uppercase block mb-1">Issue Detected</span>
                                    <span className="text-white text-md">High portfolio overlap (42%). Diversification is lower than recommended.</span>
                                </div>
                                <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                                    <span className="text-red-400 text-sm font-bold uppercase block mb-1">Expense Leakage</span>
                                    <span className="text-white text-md">You are paying ₹1,25,000 extra annually in regular plan commissions.</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00C9A7]/20 blur-3xl -z-10 rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WealthMonitorHero;
