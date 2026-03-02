import { motion } from 'framer-motion';
import { Rocket, Building, Briefcase } from 'lucide-react';

const categories = [
    {
        icon: <Rocket className="w-8 h-8 text-[#00C9A7]" />,
        title: 'Category I AIF',
        subtitle: 'Venture Capital & Angel Funds',
        description: 'Invest in early-stage startups, SMEs, and sectors considered socially or economically desirable by the government. These funds often benefit from special incentives and pass-through status.',
        metrics: [
            { label: 'Focus', value: 'Start-ups, Infrastructure' },
            { label: 'Risk Profile', value: 'High' },
            { label: 'Horizon', value: '7-10 Years' },
        ],
        sebi: 'IN/AIF1/21-22/1001'
    },
    {
        icon: <Building className="w-8 h-8 text-[#00C9A7]" />,
        title: 'Category II AIF',
        subtitle: 'Private Equity & Debt Funds',
        description: 'Funds that do not undertake leverage other than to meet day-to-day operational requirements. Includes real estate funds, private equity funds, and funds for distressed assets.',
        metrics: [
            { label: 'Focus', value: 'Unlisted Cos, Real Estate' },
            { label: 'Risk Profile', value: 'Medium-High' },
            { label: 'Horizon', value: '5-8 Years' },
        ],
        sebi: 'IN/AIF2/21-22/1002'
    },
    {
        icon: <Briefcase className="w-8 h-8 text-[#00C9A7]" />,
        title: 'Category III AIF',
        subtitle: 'Hedge Funds & Complex Strategies',
        description: 'Funds employing complex trading strategies, including leverage through investment in listed or unlisted derivatives. Designed for absolute returns across market cycles.',
        metrics: [
            { label: 'Focus', value: 'Public Equities, Derivatives' },
            { label: 'Risk Profile', value: 'Very High' },
            { label: 'Horizon', value: '3-5 Years' },
        ],
        sebi: 'IN/AIF3/21-22/1003'
    }
];

const AIFCategories = () => {
    return (
        <section className="py-20 md:py-28 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
                        Explore AIF Opportunities
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Alternative Investment Funds are classified into three distinct categories by SEBI, each catering to different investment thesis and risk appetites.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#00C9A7]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {cat.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-1">{cat.title}</h3>
                            <p className="text-[#1A3A6B] font-semibold mb-4">{cat.subtitle}</p>

                            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                {cat.description}
                            </p>

                            <div className="bg-[#F0F6FF] rounded-xl p-5 mb-6">
                                <dl className="space-y-3">
                                    {cat.metrics.map((metric, i) => (
                                        <div key={i} className="flex justify-between items-center text-sm">
                                            <dt className="text-gray-500 font-medium">{metric.label}</dt>
                                            <dd className="text-[#0D1B2A] font-bold text-right">{metric.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            <div className="pt-4 border-t border-gray-100 text-center">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider block mb-1">SEBI Reg No.</span>
                                <span className="text-sm text-gray-600 font-mono">{cat.sebi}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIFCategories;
