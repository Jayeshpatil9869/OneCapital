import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import PMS from './pages/PMS';
import AIF from './pages/AIF';
import EquityAdvisory from './pages/EquityAdvisory';
import MutualFunds from './pages/MutualFunds';
import WealthMonitor from './pages/WealthMonitor';
import About from './pages/About';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pms" element={<PMS />} />
          <Route path="aif" element={<AIF />} />
          <Route path="equity-advisory" element={<EquityAdvisory />} />
          <Route path="mutual-funds" element={<MutualFunds />} />
          <Route path="wealth-monitor" element={<WealthMonitor />} />
          <Route path="about" element={<About />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
