import { motion } from 'framer-motion';
import { Users, Percent, Search, BarChart3, Smartphone, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: <Users className="w-6 h-6 text-[#00C9A7]" />,
        title: 'Expert-Led Portfolios',
        description: 'Founded by wealth managers with a proven ₹500+ Cr managed track record.',
    },
    {
        icon: <Percent className="w-6 h-6 text-[#00C9A7]" />,
        title: 'Skin In The Game (PMS)',
        description: '0% fixed fee, 10% profit sharing only. We only win when you win.',
    },
    {
        icon: <Search className="w-6 h-6 text-[#00C9A7]" />,
        title: 'Unbiased Advice',
        description: 'Zero commissions from fund companies. Purely client-interest driven.',
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-[#00C9A7]" />,
        title: 'Diversified Assets',
        description: 'Equity, Debt, Gold, and Alternative investments all under one roof.',
    },
    {
        icon: <Smartphone className="w-6 h-6 text-[#00C9A7]" />,
        title: 'Tech + Human Hybrid',
        description: 'AI-enabled onboarding plus a dedicated relationship manager for you.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-[#00C9A7]" />,
        title: 'Institutional Grade Safety',
        description: 'SEBI Regulated & ISO Certified. Your money is held securely by custodian banks.',
    }
];

const Differentiators = () => {
    return (
        <section className="py-24 bg-[#F8F9FA] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] tracking-tight mb-4">
                            Why India's smart money chooses 1Capital
                        </h2>
                        <p className="text-lg text-gray-600">
                            We eliminated the conflicts of interest in traditional wealth management to build a platform that truly works for you.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#0D1B2A]/5 flex items-center justify-center mb-6 group-hover:bg-[#00C9A7]/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
