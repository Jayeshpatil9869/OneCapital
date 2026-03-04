import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative bg-[#0D1B2A] text-white pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background abstract elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#00C9A7] to-transparent blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        {/* <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C9A7] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C9A7]"></span>
                            </span>
                            <span className="text-sm font-medium text-gray-300">Managing ₹500+ Cr across India</span>
                        </div> */}

                        <h1 className="text-3xl lg:text-6xl xl:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Invest like the <span className="text-[#00C9A7]">experts.</span><br />
                            Grow wealth with a proven system.
                        </h1>

                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
                            You are building India's future, we are building yours. Access premium Portfolio Management Services and Mutual Funds traditionally reserved for the ultra-rich.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Link
                                to="/contact"
                                className="inline-flex justify-center items-center bg-[#00C9A7] hover:bg-[#00B395] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-[#00C9A7]/25 text-lg"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex justify-center items-center bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-semibold transition-all text-lg"
                            >
                                Get Free Portfolio Review
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-medium">
                            <div className="flex items-center">
                                <ShieldCheck className="w-5 h-5 text-[#00C9A7] mr-1.5" />
                                SEBI Registered
                            </div>
                            <div className="flex items-center">
                                <ShieldCheck className="w-5 h-5 text-[#00C9A7] mr-1.5" />
                                ISO 27001 Certified
                            </div>
                            <div className="flex items-center">
                                <ShieldCheck className="w-5 h-5 text-[#00C9A7] mr-1.5" />
                                256-bit Encryption
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[500px] aspect-square lg:aspect-auto lg:h-[90%] rounded-2xl bg-gradient-to-b from-[#112437] to-[#0D1B2A] border border-[#1A2E44] shadow-2xl p-6 overflow-hidden flex flex-col">
                            {/* Mock Dashboard UI */}
                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                <div>
                                    <div className="text-gray-400 text-sm mb-1">Total Portfolio Value</div>
                                    <div className="text-3xl font-bold text-white">₹ 1,24,50,000</div>
                                </div>
                                <div className="bg-[#16A34A]/20 text-[#16A34A] px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                                    <Activity className="w-4 h-4 mr-1" />
                                    +18.4%
                                </div>
                            </div>

                            <div className="space-y-4 flex-grow">
                                {[
                                    { name: "Portfolio Management (PMS)", amount: "₹ 75,000,000", color: "bg-[#00C9A7]" },
                                    { name: "Alternative Investments (AIF)", amount: "₹ 25,000,000", color: "bg-blue-500" },
                                    { name: "Mutual Funds (IPA)", amount: "₹ 24,50,000", color: "bg-purple-500" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-300 text-sm">{item.name}</span>
                                            <span className="text-white font-medium">{item.amount}</span>
                                        </div>
                                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${Math.random() * 40 + 40}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative chart lines */}
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#00C9A7]/20 to-transparent pointer-events-none opacity-50" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
