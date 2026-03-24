import React from 'react';
import { FAQSection } from '@/components/ui/faqsection';
import { Link } from 'react-router-dom';

const Faqs = () => {
    const faqsLeft = [
        {
            question: "What makes Growthlane different from traditional wealth managers?",
            answer: "We offer institutional-grade investment strategies (like AIFs and customized PMS) combined with a transparent, flat-fee structure. We eliminate hidden commissions and focus purely on delivering alpha aligned with your goals."
        },
        {
            question: "Is there a minimum investment amount required?",
            answer: "Minimum investment amounts vary by product. PMS strategies typically require ₹50 Lakhs, while AIFs range from ₹1 Crore to ₹5 Crores depending on the specific fund structure."
        },
        {
            question: "Are my investments safe with Growthlane?",
            answer: "Yes. We operate under strict SEBI guidelines as a registered Investment Advisor and Portfolio Manager. All assets are held in your name with a secure, regulated custodian, ensuring complete transparency and safety."
        },
        {
            question: "How do you construct an Equity Advisory portfolio?",
            answer: "Our research team employs a rigorous bottom-up fundamental analysis approach combined with macroeconomic top-down overlays. We focus on high-quality businesses with sustainable competitive advantages and strong corporate governance."
        }
    ];

    const faqsRight = [
        {
            question: "How often will I receive portfolio updates?",
            answer: "You will have 24/7 access to your live portfolio dashboard. Additionally, we provide detailed monthly performance reviews and quarterly strategy calls with your dedicated wealth manager."
        },
        {
            question: "Can you manage my existing mutual fund portfolio?",
            answer: "Absolutely. Our Wealth Review Tool can analyze your existing holdings. We can then restructure your portfolio towards direct plans, eliminating trail commissions and optimizing for better long-term returns."
        },
        {
            question: "What is an Alternative Investment Fund (AIF)?",
            answer: "An AIF is a privately pooled investment vehicle that collects funds from sophisticated investors to invest in asset classes beyond traditional stocks and bonds, such as private equity, venture capital, and distressed assets."
        },
        {
            question: "How are your fees structured?",
            answer: "Our fees are completely transparent. Depending on the service (Advisory, PMS, or AIF), we charge either a flat percentage on Assets Under Management (AUM) or a combination of fixed fee and performance fee above a hurdle rate."
        }
    ];

    return (
        <div className="bg-[#F8F9FA] pt-20 pb-20 w-full min-h-screen">
            <FAQSection
                title="Investment & Account Help"
                subtitle="Frequently Asked Questions"
                description="Get clear answers regarding our investment strategies, fee structures, and the onboarding process."
                buttonLabel={
                    <Link to="/contact">Contact Support →</Link>
                }
                faqsLeft={faqsLeft}
                faqsRight={faqsRight}   
            />
        </div>
    );
};

export default Faqs;
