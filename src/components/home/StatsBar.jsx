import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const Counter = ({ value, label, prefix = '', suffix = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 1500, bounce: 0 });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Intl.NumberFormat('en-IN').format(Math.floor(latest))}${suffix}`;
            }
        });
    }, [springValue, prefix, suffix]);

    return (
        <div className="text-center">
            <div
                ref={ref}
                className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-2 tracking-tight"
            >
                {prefix}0{suffix}
            </div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">{label}</div>
        </div>
    );
};

const StatsBar = () => {
    return (
        <section className="bg-white py-16 border-b border-gray-100 relative z-20 -mt-10 lg:-mt-16 mx-4 sm:mx-6 lg:mx-8 rounded-2xl shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-gray-100">
                    <Counter value={500} prefix="₹" suffix="+ Cr" label="Assets Under Management" />
                    <Counter value={98} suffix="%" label="Client Retention Rate" />
                    <Counter value={1000} suffix="+" label="Portfolios Tracked Daily" />
                    <Counter value={15} suffix="+ Years" label="Team Experience" />
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
