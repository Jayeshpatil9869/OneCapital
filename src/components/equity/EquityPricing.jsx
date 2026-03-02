import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Alpha Trader",
        price: "₹25,000",
        period: "per year",
        description: "Ideal for active traders seeking high-frequency short-term momentum ideas.",
        features: [
            "2-3 swing trade ideas per week",
            "Real-time entry & exit WhatsApp alerts",
            "Pre-market daily brief",
            "Technical chart setups"
        ],
        isPopular: false
    },
    {
        name: "Long-Term Wealth",
        price: "₹45,000",
        period: "per year",
        description: "Designed for investors building a robust, long-term compounding portfolio.",
        features: [
            "Model portfolio of 15-20 multi-baggers",
            "In-depth research reports (PDF)",
            "Quarterly portfolio rebalancing alerts",
            "Macro-economic trend updates",
            "Direct email access to advisory desk"
        ],
        isPopular: true
    }
];

const EquityPricing = () => {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
                        Transparent, Flat-Fee Pricing
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Choose the advisory model that fits your trading frequency and investment horizon. No profit sharing, no hidden brokerage costs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className={`rounded-2xl p-8 relative ${plan.isPopular
                                    ? 'bg-[#0D1B2A] text-white shadow-2xl ring-4 ring-[#00C9A7]/30 transform md:-translate-y-4'
                                    : 'bg-white border border-gray-200 text-[#0D1B2A] shadow-sm'
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                                    <span className="bg-[#00C9A7] text-[#0D1B2A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className={`mb-6 ${plan.isPopular ? 'text-gray-400' : 'text-gray-600'}`}>
                                {plan.description}
                            </p>

                            <div className="mb-8">
                                <span className="text-4xl font-extrabold">{plan.price}</span>
                                <span className={`text-sm ml-2 ${plan.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {plan.period}
                                </span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.isPopular ? 'text-[#00C9A7]' : 'text-[#1B8A5A]'}`} />
                                        <span className={plan.isPopular ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${plan.isPopular
                                        ? 'bg-[#00C9A7] text-[#0D1B2A] hover:bg-[#00E5BF]'
                                        : 'bg-[#F0F6FF] text-[#1A3A6B] hover:bg-[#E1EDFF]'
                                    }`}
                            >
                                Subscribe Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EquityPricing;
