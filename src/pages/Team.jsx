import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const leaders = [
    {
        name: 'Vikram Sanghavi',
        role: 'Principal Officer & Co-Founder',
        experience: 'Ex-Kotak Wealth, 22+ Years Exp.',
        bio: 'Pioneered quantitative equity strategies for UHNIs across India. Previously managed over ₹12,000 Cr in active equity assets. Recognized as a top voice in alternative investments.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400'
    },
    {
        name: 'Aditi Sharma',
        role: 'Lead Fund Manager',
        experience: 'Ex-IIFL AMC, 15+ Years Exp.',
        bio: 'Specialist in mid-cap and emerging market equities. Consistently delivered top-quartile alpha over a 10-year horizon. CFA Charterholder and frequent speaker at industry forums.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400'
    },
    {
        name: 'Rohan Desai',
        role: 'Head of Quantitative Research',
        experience: 'Ex-Goldman Sachs, 12+ Years Exp.',
        bio: 'Architect of our proprietary risk models and algorithmic trading systems. Holds a Ph.D. in Financial Mathematics and brings deep expertise in statistical arbitrage.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400'
    }
];

const Team = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen bg-[#0D1B2A]">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Managed by people who've <span className="text-[#00C9A7]">done it before.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Your wealth is actively managed by industry veterans who have navigated multiple market cycles, managed institutional capital, and successfully protected downside during downturns.
                    </p>
                </motion.div>
            </div>

            {/* Team Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {leaders.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#00C9A7] to-[#1A3A6B] rounded-full scale-[1.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg z-10"
                                />
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <a href="#" className="bg-[#0A66C2] text-white p-2 rounded-full hover:bg-[#004182] shadow-md transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a href="#" className="bg-[#0D1B2A] text-white p-2 rounded-full hover:bg-gray-800 shadow-md transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-2">{member.name}</h3>
                            <p className="text-[#1A3A6B] font-semibold text-lg mb-2">{member.role}</p>
                            <p className="inline-block px-3 py-1 bg-gray-50 border border-gray-100 text-xs font-bold text-[#00C9A7] rounded-full uppercase tracking-wider mb-6">
                                {member.experience}
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                {member.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Banner Section */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl backdrop-blur-md"
                 >
                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C9A7]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                     <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">We believe in <span className="text-[#00C9A7]">co-investing.</span></h3>
                     <p className="text-xl text-gray-400 max-w-2xl mx-auto relative z-10">
                         Our leadership team invests their own capital in the same strategies and funds that we recommend to our clients. 
                         Aligning our interests completely with yours.
                     </p>
                 </motion.div>
            </div>
        </section>
    );
};

export default Team;
