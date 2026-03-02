import { motion } from 'framer-motion';
import { FileEdit, Target, CreditCard, LayoutDashboard, LineChart } from 'lucide-react';

const steps = [
    {
        icon: <FileEdit className="w-5 h-5 text-white" />,
        title: 'Complete Risk Profile',
        desc: 'Take a short digital questionnaire to assess your financial goals.'
    },
    {
        icon: <Target className="w-5 h-5 text-white" />,
        title: 'Get Custom Portfolio',
        desc: 'Matched perfectly to your specific goals and risk appetite.'
    },
    {
        icon: <CreditCard className="w-5 h-5 text-white" />,
        title: 'Fund Account securely',
        desc: 'Fast, secure, and direct bank-linked transfer.'
    },
    {
        icon: <LayoutDashboard className="w-5 h-5 text-white" />,
        title: 'Sit Back & Handle',
        desc: 'Experts actively monitor and rebalance your portfolio.'
    },
    {
        icon: <LineChart className="w-5 h-5 text-white" />,
        title: 'Track Performance',
        desc: 'Real-time visibility via our mobile app or web dashboard.'
    }
];

const Process = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] tracking-tight mb-4">
                        How it works
                    </h2>
                    <p className="text-lg text-gray-600">
                        A seamless, transparent journey from your first deposit to long-term wealth generation.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gray-100 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative text-center flex flex-col items-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#0D1B2A] flex items-center justify-center shadow-lg border-4 border-white mb-6 z-10 hover:bg-[#00C9A7] transition-colors cursor-default">
                                    {step.icon}
                                </div>

                                <h3 className="text-[#0D1B2A] font-bold text-lg mb-2">
                                    <span className="text-[#00C9A7] mr-1">{index + 1}.</span> {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
