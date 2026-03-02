import WealthMonitorHero from '../components/wealthmonitor/WealthMonitorHero';
import WealthMonitorSteps from '../components/wealthmonitor/WealthMonitorSteps';

const WealthMonitor = () => {
    return (
        <div className="bg-white">
            <WealthMonitorHero />
            <WealthMonitorSteps />
        </div>
    );
};

export default WealthMonitor;
