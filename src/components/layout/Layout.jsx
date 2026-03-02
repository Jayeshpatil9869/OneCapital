import { Outlet } from 'react-router-dom';
import { Header } from '../ui/header-2';
import Footer from './Footer';
import TrustBar from './TrustBar';
import FloatingWhatsApp from './FloatingWhatsApp';
import CookieConsent from './CookieConsent';
import TopTicker from './TopTicker';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen relative font-sans">
            <TopTicker />
            <Header />
            <main className="flex-grow w-full relative">
                <Outlet />
            </main>
            <TrustBar />
            <Footer />
            <FloatingWhatsApp />
            <CookieConsent />
        </div>
    );
};

export default Layout;
