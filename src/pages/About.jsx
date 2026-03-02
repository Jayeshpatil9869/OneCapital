import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F8F9FA] min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">
                        Building India's <span className="text-[#00C9A7]">Financial Future.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-12">
                        1Capital was founded on a simple premise: Retail investors deserve institutional-grade wealth management without the hidden fees.
                    </p>

                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-left">
                        <h2 className="text-2xl font-bold text-[#0D1B2A] mb-4">Our Mission</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            To democratize access to premium financial products—like high-alpha PMS strategies and exclusive AIFs—previously reserved only for the ultra-wealthy. We align our success with yours through transparent, flat-fee structures.
                        </p>

                        <h2 className="text-2xl font-bold text-[#0D1B2A] mb-4">Regulatory Pedigree</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We operate strictly under SEBI guidelines as a registered Investment Advisor (RIA) and Portfolio Manager. Our foundation is built on absolute trust and fiduciary responsibility to our clients.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
