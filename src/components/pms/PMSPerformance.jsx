import { motion } from 'framer-motion';

const strategies = [
    {
        name: "Alpha Core Equity",
        focus: "Large & Mid-cap Leaders",
        return1Y: "+24.5%",
        return3Y: "+18.2%",
        sinceInception: "+19.8%",
        isPopular: true
    },
    {
        name: "Emerging Giants",
        focus: "Small & Micro-cap Potential",
        return1Y: "+38.1%",
        return3Y: "+22.4%",
        sinceInception: "+24.1%",
        isPopular: false
    },
    {
        name: "Dividend Yield Plus",
        focus: "High-yield Cash Cows",
        return1Y: "+14.2%",
        return3Y: "+12.8%",
        sinceInception: "+13.5%",
        isPopular: false
    }
];

const PMSPerformance = () => {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
                        Proven Performance Across Cycles
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our active strategies are designed to consistently outperform traditional benchmarks while meticulously managing downside risk.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="py-5 px-6 font-semibold text-gray-600 text-sm uppercase tracking-wider">Strategy</th>
                                    <th className="py-5 px-6 font-semibold text-gray-600 text-sm uppercase tracking-wider">Focus Area</th>
                                    <th className="py-5 px-6 font-semibold text-gray-600 text-sm uppercase tracking-wider">1Y Return</th>
                                    <th className="py-5 px-6 font-semibold text-gray-600 text-sm uppercase tracking-wider">3Y Return (CAGR)</th>
                                    <th className="py-5 px-6 font-semibold text-gray-600 text-sm uppercase tracking-wider">Since Inception</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {strategies.map((strategy, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        <td className="py-6 px-6 relative">
                                            {strategy.isPopular && (
                                                <span className="absolute top-2 left-6 bg-[#00C9A7]/10 text-[#00C9A7] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                                                    Most Selected
                                                </span>
                                            )}
                                            <div className="text-[#0D1B2A] font-bold text-lg mt-1">{strategy.name}</div>
                                        </td>
                                        <td className="py-6 px-6 text-gray-600 font-medium">{strategy.focus}</td>
                                        <td className="py-6 px-6 text-[#1B8A5A] font-bold text-lg">{strategy.return1Y}</td>
                                        <td className="py-6 px-6 text-[#1B8A5A] font-bold text-lg">{strategy.return3Y}</td>
                                        <td className="py-6 px-6 text-[#1B8A5A] font-bold text-lg">{strategy.sinceInception}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <p className="text-xs text-gray-400 mt-6 text-center max-w-4xl mx-auto leading-relaxed">
                    *Past performance is not indicative of future results. Returns are calculated using Time Weighted Rate of Return (TWRR) methodology as per SEBI guidelines. Figures are net of all performance and management fees, but gross of taxes. Data as of the last audited quarter. Investments in securities market are subject to market risks. Read all related documents carefully before investing.
                </p>
            </div>
        </section>
    );
};

export default PMSPerformance;
