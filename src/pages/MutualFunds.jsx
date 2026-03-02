import MutualFundsHero from '../components/mutualfunds/MutualFundsHero';
import MutualFundsFeatures from '../components/mutualfunds/MutualFundsFeatures';
import SIPCalculator from '../components/mutualfunds/SIPCalculator';

const MutualFunds = () => {
    return (
        <div className="bg-white">
            <MutualFundsHero />
            <MutualFundsFeatures />
            <SIPCalculator />
        </div>
    );
};

export default MutualFunds;
