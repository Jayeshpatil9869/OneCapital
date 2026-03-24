import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('growthlane_cookie_consent');
        if (!consent) {
            // Small delay so it doesn't pop up instantly
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('growthlane_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('growthlane_cookie_consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none flex justify-center"
                >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-[#0D1B2A] font-bold text-lg">We value your privacy</h3>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="md:hidden text-gray-400 hover:text-gray-600"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                            <button
                                onClick={handleDecline}
                                className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
                            >
                                Reject All
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2.5 rounded-lg bg-[#0D1B2A] text-white font-medium hover:bg-[#1A2E44] transition-colors whitespace-nowrap shadow-md"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
