import React from 'react';
import { TestimonialsColumn } from '../ui/testimonials-columns-1';
import { motion } from 'framer-motion';

const testimonials = [
    {
        text: "1Capital's PMS approach revolutionized our portfolio strategy. Their transparency and deep market insight have delivered consistent alpha.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Priya Sharma",
        role: "Tech Entrepreneur",
    },
    {
        text: "Switching to their direct mutual fund advisory saved me thousands in hidden commissions. The flat-fee model is a game changer for serious investors.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Rohan Desai",
        role: "Senior Executive",
    },
    {
        text: "The dedicated wealth monitor provides incredible clarity. It's the first time I've had a truly holistic view of my entire family's net worth across asset classes.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Anjali Gupta",
        role: "Medical Professional",
    },
    {
        text: "Their Equity Advisory feels like having an institutional trading desk at your disposal. The rationale behind every stock pick is meticulously explained.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Vikram Mehta",
        role: "Corporate Lawyer",
    },
    {
        text: "I was skeptical about AIFs until 1Capital demystified them. Their access to exclusive private equity deals has significantly diversified my holdings.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Neha Patel",
        role: "Angel Investor",
    },
    {
        text: "The onboard process was incredibly smooth. They actually listen to your risk appetite instead of just pushing generic financial products.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Siddharth Rao",
        role: "Business Owner",
    },
    {
        text: "Finally, a wealth management firm that puts fiduciary duty first. Their unbiased advice has been crucial in planning for my children's education abroad.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Kavita Iyer",
        role: "Marketing Director",
    },
    {
        text: "The monthly performance reviews are comprehensive yet easy to digest. I always know exactly where my money is and how it's performing against benchmarks.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Arjun Reddy",
        role: "Software Architect",
    },
    {
        text: "1Capital helped me consolidate a fragmented portfolio spanning a decade. The resulting efficiency has tangibly accelerated my timeline to financial independence.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Rahul Verma",
        role: "Management Consultant",
    },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
    return (
        <section className="bg-[#F8F9FA] py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#E5F9F4] text-[#00C9A7] font-semibold text-sm mb-6">
                        Client Success Stories
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
                        Trusted by High-Net-Worth Individuals
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Hear from investors who have transformed their wealth journey with our institutional-grade expertise.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
                </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#00C9A7] opacity-[0.03] rounded-full mix-blend-multiply filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0D1B2A] opacity-[0.03] rounded-full mix-blend-multiply filter blur-3xl pointer-events-none" />
        </section>
    );
};

export default Testimonials;
