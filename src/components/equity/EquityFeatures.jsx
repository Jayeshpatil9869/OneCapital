import { motion } from 'framer-motion';
import { Target, Zap, ShieldAlert, CheckCircle2 } from 'lucide-react';

const features = [
    {
        icon: <Target className="w-6 h-6 text-[#1B8A5A]" />,
        title: 'Precision Stock Picking',
        description: 'We ignore the noise and focus on high-conviction ideas based on robust fundamentals and technical triggers.',
    },
    {
        icon: <Zap className="w-6 h-6 text-[#1B8A5A]" />,
        title: 'Actionable Alerts',
        description: 'Receive real-time buy, hold, and sell signals directly via WhatsApp and email with complete rationales.',
    },
    {
        icon: <ShieldAlert className="w-6 h-6 text-[#1B8A5A]" />,
        title: 'Active Risk Management',
        description: 'Every recommendation comes with strict stop-loss and target levels to protect capital and lock in gains.',
    },
];

const checklist = [
    'Model portfolio access',
    'Weekly market outlook reports',
    'Quarterly earnings analysis',
    'Direct Q&A with analysts',
];

const EquityFeatures = () => {
    return (
        <section className="py-20 md:py-28 bg-[#F0F6FF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
                            Empowering your trades with expert insights
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            Growthlane's Equity Advisory is designed for the modern investor who wants to retain full execution control but demands institutional-quality research.
                        </p>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-100">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 border border-gray-100"
                    >
                        <div className="bg-[#E6F9F5] rounded-xl p-6 mb-8 text-center border border-[#00C9A7]/20">
                            <span className="block text-[#0D1B2A] font-medium mb-1 uppercase tracking-wide text-sm">Transparency</span>
                            <div className="text-3xl font-extrabold text-[#00C9A7] mb-2">100% Objective</div>
                            <p className="text-[#1A3A6B] font-semibold text-lg">No hidden commissions.</p>
                            <p className="text-sm text-gray-500 mt-2">We charge a flat fee. We do not earn brokerage from your trades.</p>
                        </div>

                        <h4 className="text-xl font-bold text-[#0D1B2A] mb-6">Advisory Inclusions</h4>
                        <ul className="space-y-4">
                            {checklist.map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-[#00C9A7] mr-3 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default EquityFeatures;
