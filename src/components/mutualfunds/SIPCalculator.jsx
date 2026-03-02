import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

const SIPCalculator = () => {
    const [mode, setMode] = useState('SIP'); // 'SIP' or 'Lumpsum'
    const [investment, setInvestment] = useState(25000); // Monthly or One-time
    const [years, setYears] = useState(10);
    const [returnRate, setReturnRate] = useState(12);

    // Calculate directly for real-time updates
    let totalValue = 0;
    let totalInvested = 0;

    if (mode === 'SIP') {
        const i = returnRate / 100 / 12;
        const n = years * 12;
        totalValue = investment * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
        totalInvested = investment * n;
    } else {
        const r = returnRate / 100;
        totalValue = investment * Math.pow(1 + r, years);
        totalInvested = investment;
    }

    const estimatedReturns = totalValue - totalInvested;

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(val);
    };

    // Calculate percentages for the graph
    const investedPct = totalValue > 0 ? (totalInvested / totalValue) * 100 : 0;
    const returnsPct = totalValue > 0 ? (estimatedReturns / totalValue) * 100 : 0;

    // SVG Circle Math for Donut Chart
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const investedDasharray = `${(investedPct / 100) * circumference} ${circumference}`;
    const returnsDasharray = `${(returnsPct / 100) * circumference} ${circumference}`;
    const returnsDashoffset = -((investedPct / 100) * circumference);

    return (
        <section className="py-20 md:py-28 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6 flex items-center justify-center gap-3">
                        <Calculator className="w-8 h-8 text-[#00C9A7]" />
                        Wealth Calculator
                    </h2>
                    <p className="text-gray-600 text-lg">
                        See the power of compounding. Estimate your wealth creation based on disciplined SIPs or a strategic Lumpsum investment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-5xl mx-auto">
                    {/* Controls */}
                    <div className="space-y-8">
                        {/* Tabs */}
                        <div className="flex p-1 bg-gray-100 rounded-xl mb-6">
                            <button
                                onClick={() => setMode('SIP')}
                                className={cn(
                                    "flex-1 py-3 text-sm font-bold rounded-lg transition-all",
                                    mode === 'SIP' ? "bg-white text-[#0D1B2A] shadow-md" : "text-gray-500 hover:text-gray-900"
                                )}
                            >
                                Monthly SIP
                            </button>
                            <button
                                onClick={() => setMode('Lumpsum')}
                                className={cn(
                                    "flex-1 py-3 text-sm font-bold rounded-lg transition-all",
                                    mode === 'Lumpsum' ? "bg-white text-[#0D1B2A] shadow-md" : "text-gray-500 hover:text-gray-900"
                                )}
                            >
                                One-time Lumpsum
                            </button>
                        </div>

                        {/* Investment Amount */}
                        <div>
                            <div className="flex justify-between mb-2 items-center">
                                <label className="font-semibold text-[#0D1B2A]">
                                    {mode === 'SIP' ? 'Monthly Investment' : 'Total Investment'}
                                </label>
                                <div className="flex items-center bg-[#E6F9F5] px-2 py-1.5 rounded-md border border-[#00C9A7]/30 focus-within:ring-2 focus-within:ring-[#00C9A7]/50 transition-all">
                                    <span className="text-[#00C9A7] font-bold mr-1 text-sm">₹</span>
                                    <input
                                        type="number"
                                        min={mode === 'SIP' ? "500" : "5000"}
                                        value={investment}
                                        onChange={(e) => setInvestment(Number(e.target.value))}
                                        className="bg-transparent text-[#00C9A7] font-bold outline-none w-24 text-right appearance-none [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none text-sm md:text-base"
                                    />
                                </div>
                            </div>
                            <input
                                type="range"
                                min={mode === 'SIP' ? "5000" : "50000"}
                                max={mode === 'SIP' ? "500000" : "10000000"}
                                step={mode === 'SIP' ? "1000" : "50000"}
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00C9A7]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium overflow-hidden">
                                <span>{mode === 'SIP' ? '₹5K' : '₹50K'}</span>
                                <span>{mode === 'SIP' ? '₹5L' : '₹1Cr'}</span>
                            </div>
                        </div>

                        {/* Investment Period */}
                        <div>
                            <div className="flex justify-between mb-2 items-center">
                                <label className="font-semibold text-[#0D1B2A]">Investment Period (Years)</label>
                                <div className="flex items-center bg-[#E6F9F5] px-2 py-1.5 rounded-md border border-[#00C9A7]/30 focus-within:ring-2 focus-within:ring-[#00C9A7]/50 transition-all">
                                    <input
                                        type="number"
                                        min="1" max="50"
                                        value={years}
                                        onChange={(e) => setYears(Number(e.target.value))}
                                        className="bg-transparent text-[#00C9A7] font-bold outline-none w-12 text-right appearance-none [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none text-sm md:text-base"
                                    />
                                    <span className="text-[#00C9A7] font-bold ml-1 text-sm">Yr</span>
                                </div>
                            </div>
                            <input
                                type="range"
                                min="1" max="40" step="1"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00C9A7]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                                <span>1 Yr</span>
                                <span>40 Yrs</span>
                            </div>
                        </div>

                        {/* Expected Return */}
                        <div>
                            <div className="flex justify-between mb-2 items-center">
                                <label className="font-semibold text-[#0D1B2A]">Expected Return Rate</label>
                                <div className="flex items-center bg-[#E6F9F5] px-2 py-1.5 rounded-md border border-[#00C9A7]/30 focus-within:ring-2 focus-within:ring-[#00C9A7]/50 transition-all">
                                    <input
                                        type="number"
                                        min="1" max="50" step="0.1"
                                        value={returnRate}
                                        onChange={(e) => setReturnRate(Number(e.target.value))}
                                        className="bg-transparent text-[#00C9A7] font-bold outline-none w-14 text-right appearance-none [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none text-sm md:text-base"
                                    />
                                    <span className="text-[#00C9A7] font-bold ml-1 text-sm">% p.a.</span>
                                </div>
                            </div>
                            <input
                                type="range"
                                min="8" max="25" step="0.5"
                                value={returnRate}
                                onChange={(e) => setReturnRate(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00C9A7]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                                <span>8%</span>
                                <span>25%</span>
                            </div>
                        </div>
                    </div>

                    {/* Results Output */}
                    <div className="bg-[#0D1B2A] rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#00C9A7]/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10 space-y-6">
                            <div className="grid grid-cols-2 gap-4 border-b border-gray-800 pb-6">
                                <div>
                                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span> Invested
                                    </p>
                                    <p className="text-xl font-semibold text-white">
                                        {formatCurrency(totalInvested)}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#00C9A7]"></span> Returns
                                    </p>
                                    <p className="text-xl font-semibold text-[#00C9A7]">
                                        {formatCurrency(estimatedReturns)}
                                    </p>
                                </div>
                            </div>

                            {/* Graph Visualization: Professional Donut Chart */}
                            <div className="pt-2 pb-4 flex justify-center items-center">
                                <div className="relative w-56 h-56 lg:w-64 lg:h-64">
                                    <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90 drop-shadow-2xl">
                                        {/* Background Circle */}
                                        <circle cx="100" cy="100" r="80" fill="transparent" stroke="#1f2937" strokeWidth="20" />
                                        {/* Invested Slice */}
                                        <circle
                                            cx="100" cy="100" r="80" fill="transparent"
                                            stroke="#d1d5db" strokeWidth="20"
                                            strokeDasharray={investedDasharray}
                                            strokeLinecap="round"
                                            className="transition-all duration-700 ease-out"
                                        />
                                        {/* Returns Slice */}
                                        <circle
                                            cx="100" cy="100" r="80" fill="transparent"
                                            stroke="#00C9A7" strokeWidth="20"
                                            strokeDasharray={returnsDasharray}
                                            strokeDashoffset={returnsDashoffset}
                                            strokeLinecap="round"
                                            className="transition-all duration-700 ease-out"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Total Value</span>
                                        <span className="text-white font-extrabold text-2xl lg:text-3xl tracking-tight">{formatCurrency(totalValue)}</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-6 py-4 bg-[#00C9A7] hover:bg-[#00E5BF] text-[#0D1B2A] font-bold rounded-xl transition-colors shadow-[0_0_15px_rgba(0,201,167,0.2)]">
                                Start Building Wealth
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SIPCalculator;
