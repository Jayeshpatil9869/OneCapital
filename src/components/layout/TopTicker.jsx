import React, { useState, useEffect } from 'react';

const API_KEY = "XGDDQIWS6A9WLLQM";
const CACHE_KEY = "alpha_vantage_ticker_cache";
const CACHE_TIME_MS = 60 * 60 * 1000; // 1 Hour

// Fallback items in case of API limits/failure
const fallbackItems = [
    { label: "NIFTY 50:", value: "22,010.50 (+0.38%)", color: "text-green-500" },
    { label: "GOLD:", value: "INR62,450 (+0.12%)", color: "text-yellow-500" },
    { label: "GROWTHLANE.IN GROWTH:", value: "Alpha Strategy (+2.1%)", color: "text-blue-400" },
    { label: "SENSEX:", value: "72,450.20 (+0.45%)", color: "text-green-500" },
    { label: "BANK NIFTY:", value: "46,811.75 (-0.15%)", color: "text-red-500" },
    { label: "USD/INR:", value: "82.90 (-0.05%)", color: "text-red-500" }
];

const TopTicker = () => {
    const [tickerItems, setTickerItems] = useState(fallbackItems);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                // Check Cache first to avoid hitting AV's strict 25/day limit randomly during dev
                const cachedData = localStorage.getItem(CACHE_KEY);
                if (cachedData) {
                    const { data, timestamp } = JSON.parse(cachedData);
                    if (Date.now() - timestamp < CACHE_TIME_MS) {
                        setTickerItems(data);
                        return;
                    }
                }

                const response = await fetch(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`);
                const result = await response.json();

                if (result.top_gainers && result.most_actively_traded) {
                    // Combine 3 gainers and 3 most active
                    const liveStocks = [
                        ...result.most_actively_traded.slice(0, 3),
                        ...result.top_gainers.slice(0, 3)
                    ];

                    const formattedItems = liveStocks.map(stock => {
                        const isPositive = !stock.change_percentage.startsWith('-');
                        const color = isPositive ? 'text-green-500' : 'text-red-500';
                        return {
                            label: `${stock.ticker} (US):`,
                            value: `$${stock.price} (${stock.change_percentage})`,
                            color: color
                        };
                    });

                    if (formattedItems.length > 0) {
                        setTickerItems(formattedItems);
                        localStorage.setItem(CACHE_KEY, JSON.stringify({
                            data: formattedItems,
                            timestamp: Date.now()
                        }));
                    }
                }
            } catch (error) {
                console.error("Failed to fetch live market data:", error);
            }
        };

        fetchMarketData();
    }, []);

    // Duplicate string arrays for smooth infinite scroll illusion
    const displayItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

    return (
        <div className="bg-[#0D1B2A] text-white text-xs md:text-sm font-bold py-2.5 overflow-hidden whitespace-nowrap relative z-50 border-b border-[#00C9A7]/20 shadow-md">
            <div className="flex animate-[marquee_80s_linear_infinite] w-max hover:[animation-play-state:paused]">
                {displayItems.map((item, index) => (
                    <div key={index} className="flex space-x-1 mx-6 items-center">
                        <span className="text-gray-300">{item.label}</span>
                        <span className={item.color}>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopTicker;
