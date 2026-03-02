import { motion } from 'framer-motion';
import { UploadCloud, FileSearch, TrendingUp } from 'lucide-react';

const steps = [
    {
        icon: <UploadCloud className="w-8 h-8 text-[#00C9A7]" />,
        title: '1. Securely Upload',
        description: 'Provide your NSDL/CDSL CAS (Consolidated Account Statement) or latest portfolio snapshot. Your data is encrypted and completely secure.',
    },
    {
        icon: <FileSearch className="w-8 h-8 text-[#00C9A7]" />,
        title: '2. Expert Analysis',
        description: 'Our proprietary models and human analysts review your asset allocation, fee structures, and historical risk metrics.',
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-[#00C9A7]" />,
        title: '3. Actionable Outlook',
        description: 'We present a detailed restructuring plan that cuts hidden fees and aligns your investments with your stated financial goals.',
    },
];

const WealthMonitorSteps = () => {
    return (
        <section className="py-20 md:py-28 bg-[#F8F9FA]" id="upload">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
                        Three steps to portfolio clarity
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Stop guessing. Our Wealth Monitor health check is a complimentary service designed to give you an objective second opinion on your life's savings.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">

                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gray-300 border-dashed border-t-2"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center relative z-10"
                        >
                            <div className="w-24 h-24 rounded-full bg-[#E6F9F5] flex items-center justify-center mb-6 shadow-inner ring-8 ring-white">
                                {step.icon}
                            </div>

                            <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Upload Box CTA */}
                <div className="mt-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-10 flex flex-col items-center text-center hover:border-[#00C9A7] transition-colors cursor-pointer group"
                    >
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E6F9F5] transition-colors">
                            <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-[#00C9A7] transition-colors" />
                        </div>
                        <h4 className="text-xl font-bold text-[#0D1B2A] mb-2">Click to upload or drag and drop</h4>
                        <p className="text-gray-500 text-sm mb-6">Supports PDF (CAS Statements) up to 10MB</p>
                        <button className="px-6 py-3 bg-[#0D1B2A] text-white font-semibold rounded-lg hover:bg-[#1A3A6B] transition-colors">
                            Select File
                        </button>
                        <p className="text-xs text-gray-400 mt-4 max-w-md mx-auto">
                            By uploading, you agree to our privacy policy. Your data is encrypted and will not be shared with third parties.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default WealthMonitorSteps;
