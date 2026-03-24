import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const comparisons = [
    {
        old: 'RMs rarely track your portfolio and reach out only to sell.',
        new: 'We track the market’s impact on your portfolio daily.',
    },
    {
        old: 'Delayed action on your portfolio due to manual processes.',
        new: 'Algorithm-assisted systems automatically capitalize on opportunities.',
    },
    {
        old: 'Hidden commissions and opaque fee structures.',
        new: '100% transparent reporting on changes, impact, and fees.',
    },
    {
        old: 'Generic products pushed to meet sales targets.',
        new: 'Unbiased, data-driven decisions tailored to your risk personality.',
    },
];

const Differentiators = () => {
    return (
        <section className="py-24 bg-[#F8F9FA] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] tracking-tight mb-4">
                            Traditional wealth management is broken.
                        </h2>
                        <p className="text-lg text-gray-600">
                            We eliminated conflicts of interest and manual delays to build a data-driven platform that puts fiduciary duty first.
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
                >
                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        {/* Old Way */}
                        <div className="p-8 md:p-12 bg-gray-50/50">
                            <h3 className="text-2xl font-bold text-gray-400 mb-8 tracking-tight">
                                Traditional Approach
                            </h3>
                            <ul className="space-y-6">
                                {comparisons.map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                                        <span className="text-gray-500 leading-relaxed font-medium">{item.old}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* New Way */}
                        <div className="p-8 md:p-12 bg-[#0D1B2A] text-white">
                            <h3 className="text-2xl font-bold text-[#00C9A7] mb-8 tracking-tight">
                                Growthlane Precision
                            </h3>
                            <ul className="space-y-6">
                                {comparisons.map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <CheckCircle2 className="w-6 h-6 text-[#00C9A7] shrink-0 mt-0.5" />
                                        <span className="text-gray-200 leading-relaxed font-medium">{item.new}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Differentiators;
