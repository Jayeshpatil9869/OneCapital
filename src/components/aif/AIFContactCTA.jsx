import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIFContactCTA = () => {
    return (
        <section className="py-20 md:py-28 bg-white border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#0D1B2A] rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Pattern */}
                    <div className="absolute top-0 right-0 -mx-16 -my-16 opacity-10 pointer-events-none">
                        <svg width="400" height="400" fill="none" viewBox="0 0 400 400">
                            <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
                            <defs>
                                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(200)">
                                    <stop stopColor="#00C9A7" />
                                    <stop offset="1" stopColor="#00C9A7" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Alternative Investments Require Expert Nuance.
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Because AIFs involve complex structures, lock-in periods, and high minimum commitments, we exclusively handle these placements through direct consultation to ensure they align with your broader portfolio strategy.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-[#00C9A7] text-[#0D1B2A] text-lg font-bold rounded-xl hover:bg-[#00E5BF] transition-all transform hover:scale-105"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Schedule an AIF Call
                            </Link>
                            <a
                                href="mailto:aif@growthlane.in"
                                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-gray-600 text-white text-lg font-bold rounded-xl hover:bg-gray-800 hover:border-gray-500 transition-all"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                Email our Team
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AIFContactCTA;
