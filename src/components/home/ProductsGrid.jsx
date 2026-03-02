import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, Briefcase, ActivitySquare, ArrowRight } from 'lucide-react';

const products = [
    {
        title: 'Integrated Portfolio (IPA)',
        tagline: 'Customized Mutual Fund Portfolios',
        min: '₹50,000',
        icon: <PieChart className="w-8 h-8 text-[#00C9A7]" />,
        link: '/mutual-funds',
        color: 'from-blue-500/10 to-transparent',
        border: 'hover:border-blue-500/30'
    },
    {
        title: 'Portfolio Management Services',
        tagline: 'Expert-Managed Equity Portfolios',
        min: '₹50 Lakhs',
        icon: <TrendingUp className="w-8 h-8 text-[#00C9A7]" />,
        link: '/pms',
        color: 'from-[#00C9A7]/10 to-transparent',
        border: 'hover:border-[#00C9A7]/30'
    },
    {
        title: 'Alternative Investments',
        tagline: 'Access Private Equity & VC',
        min: '₹25 Lakhs',
        icon: <Briefcase className="w-8 h-8 text-[#00C9A7]" />,
        link: '/aif',
        color: 'from-purple-500/10 to-transparent',
        border: 'hover:border-purple-500/30'
    },
    {
        title: 'Wealth Monitor',
        tagline: 'Free Portfolio Health Check',
        badge: 'FREE',
        icon: <ActivitySquare className="w-8 h-8 text-[#00C9A7]" />,
        link: '/wealth-monitor',
        color: 'from-orange-500/10 to-transparent',
        border: 'hover:border-orange-500/30'
    }
];

const ProductsGrid = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] tracking-tight mb-4">
                        Investment Solutions for Every Goal
                    </h2>
                    <p className="text-lg text-gray-600">
                        From managed mutual funds to exclusive private equity, access institutional-grade investment opportunities tailored to your risk profile.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden ${product.border}`}
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${product.color} rounded-bl-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="mb-6 relative z-10 flex justify-between items-start">
                                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-white transition-colors duration-300 shadow-sm border border-gray-100">
                                    {product.icon}
                                </div>
                                {product.badge && (
                                    <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {product.badge}
                                    </span>
                                )}
                            </div>

                            <div className="flex-grow relative z-10">
                                <h3 className="text-xl font-bold text-[#0D1B2A] mb-2 group-hover:text-[#00C9A7] transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm">
                                    {product.tagline}
                                </p>
                            </div>

                            <div className="relative z-10 pt-6 border-t border-gray-50 mt-auto flex items-center justify-between">
                                {product.min ? (
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Min. Investment</div>
                                        <div className="font-bold text-[#0D1B2A]">{product.min}</div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="text-xs text-[#16A34A] uppercase tracking-wider font-semibold">Cost</div>
                                        <div className="font-bold text-[#0D1B2A]">₹0 / Free forever</div>
                                    </div>
                                )}

                                <Link
                                    to={product.link}
                                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#00C9A7] group-hover:text-white transition-colors border border-gray-100 group-hover:border-transparent text-gray-400"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsGrid;
