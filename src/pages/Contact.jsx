import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">
                        Let's discuss your portfolio.
                    </h1>
                    <p className="text-xl text-gray-600">
                        Schedule a no-obligation consultation with our wealth experts.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-[#0D1B2A] text-white p-10 rounded-3xl"
                    >
                        <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <Phone className="w-6 h-6 text-[#00C9A7] mr-4" />
                                <span>+91 99999 00000</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-6 h-6 text-[#00C9A7] mr-4" />
                                <span>hello@1capital.in</span>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-[#00C9A7] mr-4 shrink-0" />
                                <span>1Capital House, BKC<br />Mumbai, Maharashtra 400051</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-[#F8F9FA] p-10 rounded-3xl border border-gray-100"
                    >
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Interest Area</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent outline-none transition-all bg-white">
                                    <option>Portfolio Management Services (PMS)</option>
                                    <option>Alternative Investment Funds (AIF)</option>
                                    <option>Mutual Fund Advisory</option>
                                    <option>Wealth Monitor</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full mt-4 py-4 bg-[#00C9A7] text-[#0D1B2A] font-bold rounded-xl hover:bg-[#00E5BF] transition-colors">
                                Request Callback
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
