import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#0D1B2A] text-gray-300 py-16 border-t border-[#1A2E44]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <img 
                                src={logo} 
                                alt="GrowthLane Capital" 
                                className="h-12 w-auto brightness-0 invert" 
                            />
                        </Link>
                        <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-balance">
                            Building India's future by managing yours. Expert-led, technology-driven wealth management for affluent professionals.
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="text-gray-400 hover:text-[#00C9A7] transition-colors bg-[#112437] p-2 rounded-full">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#00C9A7] transition-colors bg-[#112437] p-2 rounded-full">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#00C9A7] transition-colors bg-[#112437] p-2 rounded-full">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Products</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/mutual-funds" className="hover:text-[#00C9A7] transition-colors">Mutual Funds (IPA)</Link></li>
                            <li><Link to="/pms" className="hover:text-[#00C9A7] transition-colors">Portfolio Management Services</Link></li>
                            <li><Link to="/aif" className="hover:text-[#00C9A7] transition-colors">Alternative Investment Funds</Link></li>
                            <li><Link to="/wealth-monitor" className="hover:text-[#00C9A7] transition-colors">Wealth Monitor</Link></li>
                        </ul>
                    </div>

                    {/* Learn & Company */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/about" className="hover:text-[#00C9A7] transition-colors">About Us</Link></li>
                            <li><Link to="/team" className="hover:text-[#00C9A7] transition-colors">Our Team</Link></li>
                            <li><Link to="/careers" className="hover:text-[#00C9A7] transition-colors">Careers</Link></li>
                            <li><Link to="/blog" className="hover:text-[#00C9A7] transition-colors">Insights & Blog</Link></li>
                            <li><Link to="/faqs" className="hover:text-[#00C9A7] transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start text-gray-400">
                                <Phone className="w-5 h-5 text-[#00C9A7] mr-3 mt-0.5" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <Mail className="w-5 h-5 text-[#00C9A7] mr-3 mt-0.5" />
                                <a href="mailto:hello@1capital.in" className="hover:text-[#00C9A7] transition-colors">hello@1capital.in</a>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <MapPin className="w-5 h-5 text-[#00C9A7] mr-3 mt-0.5 flex-shrink-0" />
                                <span className="leading-snug">Level 5, Financial District, BKC, Mumbai 400051</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Trust & Legal */}
                <div className="pt-8 border-t border-[#1A2E44] flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center md:justify-start">
                        <span>© {new Date().getFullYear()} GrowthLane Capital. All rights reserved.</span>
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-[#1A2E44] rounded text-gray-400 border border-[#2A3E54]">SEBI Reg: INA0000xxxxx</span>
                        <span className="px-3 py-1 bg-[#1A2E44] rounded text-gray-400 border border-[#2A3E54]">AMFI ARN: XXXXX</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
