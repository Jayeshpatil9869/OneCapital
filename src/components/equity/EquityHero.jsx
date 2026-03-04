import { motion } from 'framer-motion';
import { ChevronRight, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const EquityHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0D1B2A]">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#00C9A7]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center space-x-2 text-[#00C9A7] font-semibold tracking-wide text-sm uppercase mb-6 bg-white/5 border border-white/10 px-5 py-2 rounded-full">
                            <LineChart className="w-5 h-5" />
                            <span>Equity Advisory Services</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Institutional-grade <span className="text-[#00C9A7]">equity research</span> for the individual investor.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed mx-auto">
                            Retain full control of your trading account while receiving actionable, high-conviction stock recommendations backed by our proprietary quantitative models.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex justify-center items-center px-8 py-4 bg-[#00C9A7] text-[#0D1B2A] text-lg font-bold rounded-xl hover:bg-[#00E5BF] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,201,167,0.3)]"
                            >
                                Start Your Trial
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                        <div className="flex items-center justify-center space-x-8 text-sm text-gray-400 border-t border-gray-800 pt-6 w-full max-w-2xl mx-auto">
                            <div>
                                <span className="block font-semibold text-white">Advisory Fee</span>
                                <span>Fixed Annual Subscription</span>
                            </div>
                            <div className="w-px h-8 bg-gray-800"></div>
                            <div>
                                <span className="block font-semibold text-white">Control</span>
                                <span>You execute the trades, we advise</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EquityHero;
