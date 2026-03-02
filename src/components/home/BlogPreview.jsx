import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const articles = [
    {
        title: 'Why Most Portfolio Management Services Underperform',
        category: 'PMS Insights',
        excerpt: 'An honest look at the fee structures and hidden costs that eat into your returns over a 10-year horizon.',
        date: 'March 15, 2026',
        readTime: '5 min read',
        slug: '/blog/pms-underperformance'
    },
    {
        title: 'Integrated Portfolio Approach vs Traditional Mutual Funds',
        category: 'Mutual Funds',
        excerpt: 'How active rebalancing and expert curation can add up to 2% annualized alpha to your portfolio.',
        date: 'March 10, 2026',
        readTime: '4 min read',
        slug: '/blog/ipa-vs-mutual-funds'
    },
    {
        title: 'Demystifying AIFs: Are Alternative Investments Right For You?',
        category: 'Alternative Assets',
        excerpt: 'A comprehensive guide to Category I, II, and III AIFs and how they fit into a HNI portfolio.',
        date: 'March 02, 2026',
        readTime: '7 min read',
        slug: '/blog/demystifying-aifs'
    }
];

const BlogPreview = () => {
    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] tracking-tight mb-4">
                            Insights & Expertise
                        </h2>
                        <p className="text-lg text-gray-600">
                            Unbiased, research-backed financial insights delivered straight by our investment committee.
                        </p>
                    </div>
                    <Link
                        to="/blog"
                        className="flex items-center text-[#00C9A7] font-semibold hover:text-[#0D1B2A] transition-colors"
                    >
                        View all articles
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                        >
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#00C9A7] bg-[#00C9A7]/10 px-3 py-1 rounded-full">
                                        {article.category}
                                    </span>
                                    <div className="flex items-center text-xs text-gray-400 font-medium">
                                        <Clock className="w-3.5 h-3.5 mr-1" />
                                        {article.readTime}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 group-hover:text-[#00C9A7] transition-colors line-clamp-2">
                                    <Link to={article.slug}>{article.title}</Link>
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-500">{article.date}</span>
                                    <Link
                                        to={article.slug}
                                        className="text-[#0D1B2A] font-medium group-hover:text-[#00C9A7] transition-colors flex items-center"
                                    >
                                        Read More
                                        <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
