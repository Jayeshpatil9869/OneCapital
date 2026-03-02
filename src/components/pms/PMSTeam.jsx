import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const team = [
    {
        name: 'Vikram Sanghavi',
        role: 'Principal Officer & Co-Founder',
        experience: 'Ex-Kotak Wealth, 22+ Years Exp.',
        bio: 'Pioneered quantitative equity strategies for UHNIs across India. Previously managed over ₹12,000 Cr in active equity assets.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256'
    },
    {
        name: 'Aditi Sharma',
        role: 'Lead Fund Manager',
        experience: 'Ex-IIFL AMC, 15+ Years Exp.',
        bio: 'Specialist in mid-cap and emerging market equities. Consistently delivered top-quartile alpha over a 10-year horizon.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256'
    }
];

const PMSTeam = () => {
    return (
        <section className="py-20 md:py-28 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
                        Managed by people who've done it before.
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Your wealth is actively managed by veterans who have navigated multiple market cycles and successfully protected capital during downturns.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow"
                        >
                            <div className="relative mb-6">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full object-cover border-4 border-[#F0F6FF] group-hover:border-[#00C9A7] transition-colors duration-300"
                                />
                                <a href="#" className="absolute bottom-0 right-0 bg-[#0A66C2] text-white p-1.5 rounded-full hover:bg-[#004182] transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            </div>

                            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-1">{member.name}</h3>
                            <p className="text-[#1A3A6B] font-semibold mb-2">{member.role}</p>
                            <p className="text-sm font-medium text-[#00C9A7] uppercase tracking-wider mb-4">{member.experience}</p>

                            <p className="text-gray-600 leading-relaxed">
                                {member.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PMSTeam;
