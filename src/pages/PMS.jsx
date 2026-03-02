import PMSHero from '../components/pms/PMSHero';
import PMSFeatures from '../components/pms/PMSFeatures';
import PMSPerformance from '../components/pms/PMSPerformance';
import PMSTeam from '../components/pms/PMSTeam';

const PMS = () => {
    return (
        <div className="bg-white">
            <PMSHero />
            <PMSFeatures />
            <div className="w-full bg-[#1A2E44] h-px opacity-10"></div>
            <PMSPerformance />
            <PMSTeam />
        </div>
    );
};

export default PMS;
