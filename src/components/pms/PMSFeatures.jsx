import { motion } from 'framer-motion';
import { Briefcase, BarChart, ShieldCheck, CheckCircle2 } from 'lucide-react';

const features = [
    {
        icon: <Briefcase className="w-6 h-6 text-[#1A3A6B]" />,
        title: 'Individual Demat Account',
        description: 'Unlike mutual funds, you hold direct ownership of securities in your own demat account.',
    },
    {
        icon: <BarChart className="w-6 h-6 text-[#1A3A6B]" />,
        title: 'Bespoke Strategy',
        description: 'Portfolios tailored to your specific risk appetite, timeline, and investment philosophy.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-[#1A3A6B]" />,
        title: 'High Transparency',
        description: 'Real-time visibility into all holdings, trades, and corporate actions.',
    },
];

const checklist = [
    'Zero exit load after 1 year',
    'Dedicated relationship manager',
    'Monthly performance review calls',
    'Automated tax harvesting',
];

const PMSFeatures = () => {
    return (
        <section className="py-20 md:py-28 bg-[#F0F6FF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: Features Grid */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
                            How PMS differs from standard mutual funds
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            Our Portfolio Management Services unlock a level of customization, direct ownership, and strategic agility that traditional pooled funds cannot offer.
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

                    {/* Right: Feature Highlights Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 border border-gray-100"
                    >
                        <div className="bg-[#E6F9F5] rounded-xl p-6 mb-8 text-center border border-[#00C9A7]/20">
                            <span className="block text-[#0D1B2A] font-medium mb-1 uppercase tracking-wide text-sm">Fee Structure</span>
                            <div className="text-3xl font-extrabold text-[#00C9A7] mb-2">0% Fixed</div>
                            <p className="text-[#1A3A6B] font-semibold text-lg">+ 10% Profit Sharing</p>
                            <p className="text-sm text-gray-500 mt-2">We only make money when you generate Alpha.</p>
                        </div>

                        <h4 className="text-xl font-bold text-[#0D1B2A] mb-6">The 1Capital Advantage</h4>
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

export default PMSFeatures;
