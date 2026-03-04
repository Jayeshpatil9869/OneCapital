import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, CheckCircle2, Building2, Brain, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
    {
        icon: <Building2 className="w-6 h-6 text-[#00C9A7]" />,
        title: 'Premium Workspace',
        desc: 'Based out of BKC, Mumbai with state-of-the-art infrastructure.'
    },
    {
        icon: <Brain className="w-6 h-6 text-[#00C9A7]" />,
        title: 'Continuous Learning',
        desc: 'Sponsorships for CFA, CFP, and quantitative finance certifications.'
    },
    {
        icon: <Coffee className="w-6 h-6 text-[#00C9A7]" />,
        title: 'Culture',
        desc: 'Flat hierarchy, outcome-driven, with comprehensive health benefits.'
    }
];

const openPositions = [
    {
        title: 'Quantitative Research Analyst',
        department: 'Investment Strategy',
        experience: '2-4 Years',
        type: 'Full-time'
    },
    {
        title: 'Senior Wealth Manager',
        department: 'Client Relations',
        experience: '5+ Years',
        type: 'Full-time'
    },
    {
        title: 'Frontend Developer (React)',
        department: 'Technology',
        experience: '3+ Years',
        type: 'Full-time'
    }
];

const Careers = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen bg-[#0D1B2A]">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center space-x-2 text-[#00C9A7] font-semibold tracking-wide text-sm uppercase mb-4 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                            <Briefcase className="w-4 h-4" />
                            <span>Careers at 1Capital</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Shape the future of <span className="text-[#00C9A7]">wealth management.</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            We are a team of quantitative analysts, seasoned wealth managers, and technologists building the next-generation investment platform.
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
                            <CheckCircle2 className="w-5 h-5 text-[#00C9A7]" /> Fast-growing firm
                            <CheckCircle2 className="w-5 h-5 text-[#00C9A7] ml-4" /> Meritocratic culture
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                            alt="Office Environment" 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-white font-semibold text-lg">“We hire for intellect, integrity, and intensity. In that order.”</p>
                            <p className="text-[#00C9A7] text-sm font-bold mt-2">— Vikram Sanghavi</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-[#F8F9FA] py-20 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#0D1B2A]">Why join us?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-[#E6F9F5] rounded-xl flex items-center justify-center mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Open Positions */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h2 className="text-3xl font-bold text-[#0D1B2A] mb-10 text-center">Open Positions</h2>
                
                <div className="space-y-4">
                    {openPositions.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-gray-200 hover:border-[#00C9A7] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg group flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-[#0D1B2A] mb-2 group-hover:text-[#00C9A7] transition-colors">{job.title}</h3>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">{job.department}</span>
                                    <span>{job.experience}</span>
                                    <span>{job.type}</span>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0 flex items-center text-[#0D1B2A] font-semibold group-hover:text-[#00C9A7] transition-colors">
                                Apply Now <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-16 text-center bg-[#F0F6FF] rounded-2xl p-10 border border-blue-100">
                    <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">Don't see a fit?</h3>
                    <p className="text-gray-600 mb-6 max-w-lg mx-auto">We are always looking for exceptional talent. Send your resume to our careers team.</p>
                    <a href="mailto:careers@1capital.in" className="inline-flex items-center justify-center px-6 py-3 bg-[#0D1B2A] text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                        Email careers@1capital.in
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Careers;
