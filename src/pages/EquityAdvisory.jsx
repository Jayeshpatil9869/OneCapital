import EquityHero from '../components/equity/EquityHero';
import EquityFeatures from '../components/equity/EquityFeatures';
import EquityPricing from '../components/equity/EquityPricing';

const EquityAdvisory = () => {
    return (
        <div className="bg-white">
            <EquityHero />
            <EquityFeatures />
            <div className="w-full bg-[#1A2E44] h-px opacity-10"></div>
            <EquityPricing />
        </div>
    );
};

export default EquityAdvisory;
