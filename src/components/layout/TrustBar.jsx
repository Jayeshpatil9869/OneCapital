import { ShieldCheck, Lock, Building2, Award } from 'lucide-react';

const TrustBar = () => {
    return (
        <div className="bg-[#112437] py-6 border-t border-[#1A2E44]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm text-gray-300 font-medium">
                    <div className="flex items-center">
                        <ShieldCheck className="w-5 h-5 text-[#00C9A7] mr-2" />
                        <div>
                            <div className="text-white font-semibold">SEBI Registered</div>
                            <div className="text-xs text-gray-400">INA0000xxxxx</div>
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-8 bg-[#1A2E44]"></div>

                    <div className="flex items-center">
                        <Award className="w-5 h-5 text-[#00C9A7] mr-2" />
                        <div>
                            <div className="text-white font-semibold">ISO 27001 Certified</div>
                            <div className="text-xs text-gray-400">Global security standard</div>
                        </div>
                    </div>

                    <div className="hidden lg:block w-px h-8 bg-[#1A2E44]"></div>

                    <div className="flex items-center">
                        <Lock className="w-5 h-5 text-[#00C9A7] mr-2" />
                        <div>
                            <div className="text-white font-semibold">256-bit Encryption</div>
                            <div className="text-xs text-gray-400">Bank-grade security</div>
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-8 bg-[#1A2E44]"></div>

                    <div className="flex items-center">
                        <Building2 className="w-5 h-5 text-[#00C9A7] mr-2" />
                        <div>
                            <div className="text-white font-semibold">ICICI Bank</div>
                            <div className="text-xs text-gray-400">Official Custodian</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
