import { motion } from 'framer-motion';
import { Smartphone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppCTA = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#0D1B2A] rounded-3xl overflow-hidden shadow-2xl relative">
                    {/* Abstract Background */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00C9A7] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 px-8 py-12 md:p-16 text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                                Your wealth, <br />
                                <span className="text-[#00C9A7]">in your pocket.</span>
                            </h2>
                            <p className="text-lg text-gray-400 mb-8 max-w-lg">
                                Download the Growthlane app to track your portfolio in real-time, get actionable insights, and speak directly with your relationship manager.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {['Real-time portfolio tracking', 'Instant Wealth Monitor health checks', 'Direct access to your RM', 'Secure 256-bit encryption'].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-[#00C9A7] mr-3 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                <a href="https://play.google.com/store/apps/details?id=com.dwt.capital1" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-[#0D1B2A] px-8 py-3.5 rounded-xl font-bold flex justify-center items-center transition-colors">
                                    Get the App link
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative hidden lg:flex justify-center items-center"
                        >
                            <div className="relative w-72 h-[500px] bg-[#112437] rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden flex flex-col pt-8">
                                {/* iPhone notch */}
                                <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-3xl w-40 mx-auto z-20"></div>

                                {/* Mock UI */}
                                <div className="px-6 pb-6 pt-4 flex-grow relative z-10 ">
                                    <div className="flex justify-between items-center mb-8">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <Smartphone className="w-4 h-4 text-white" />
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <div className="text-sm text-gray-400 mb-1">Portfolio Value</div>
                                        <div className="text-3xl font-bold text-white">₹ 1.24 Cr</div>
                                        <div className="text-[#16A34A] text-sm font-medium mt-2">+2.4% today</div>
                                    </div>

                                    <div className="pb-8 flex flex-col items-center justify-center mt-2">
                                        <div className="bg-white p-3 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                                            <a href="https://play.google.com/store/apps/details?id=com.dwt.capital1" target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://play.google.com/store/apps/details?id=com.dwt.capital1"
                                                    alt="Growthlane App QR Code"
                                                    className="w-32 h-32 rounded-lg"
                                                />
                                            </a>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-4 text-center font-medium">Scan to download <br /> the Growthlane App</p>
                                    </div>
                                </div>

                                {/* Bottom Nav Mock */}
                                <div className="h-16 bg-[#1A2E44] border-t border-white/5 mt-auto flex justify-around items-center px-4 relative z-10">
                                    <div className="w-6 h-6 rounded-full bg-[#00C9A7]"></div>
                                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppCTA;
