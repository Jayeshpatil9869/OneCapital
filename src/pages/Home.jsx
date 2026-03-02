import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import ProductsGrid from '../components/home/ProductsGrid';
import Differentiators from '../components/home/Differentiators';
import Process from '../components/home/Process';
import Testimonials from '../components/home/Testimonials';
import AppCTA from '../components/home/AppCTA';
import BlogPreview from '../components/home/BlogPreview';

const Home = () => {
    return (
        <div className="bg-white">
            <Hero />
            <StatsBar />
            <div className="pt-8">
                <ProductsGrid />
            </div>
            <Differentiators />
            <Process />
            <Testimonials />
            <AppCTA />
            <BlogPreview />
        </div>
    );
};

export default Home;
