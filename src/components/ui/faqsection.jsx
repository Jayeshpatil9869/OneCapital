"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FAQSection({
    title = "Product & Account Help",
    subtitle = "Frequently Asked Questions",
    description = "Get instant answers to the most common questions about your account, product setup, and updates.",
    buttonLabel = "Browse All FAQs →",
    onButtonClick,
    faqsLeft,
    faqsRight,
    className,
}) {
    return (
        <section className={cn("w-full max-w-5xl mx-auto py-16 px-4", className)}>
            {/* Header */}
            <div className="text-center mb-10">
                <p className="text-sm text-muted-foreground font-medium tracking-wide mb-2 text-[#00C9A7]">
                    {subtitle}
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-[#0D1B2A]">
                    {title}
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                    {description}
                </p>
                <Button variant="default" className="rounded-full bg-[#00C9A7] hover:bg-[#00B395] text-white border-0" onClick={onButtonClick}>
                    {buttonLabel}
                </Button>
            </div>

            {/* FAQs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {[faqsLeft, faqsRight].map((faqColumn, columnIndex) => (
                    <Accordion
                        key={columnIndex}
                        type="single"
                        collapsible
                        className="space-y-4"
                    >
                        {faqColumn.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${columnIndex}-${i}`}>
                                <AccordionTrigger className="text-base font-medium text-[#0D1B2A]">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                                    <div className="min-h-[40px] transition-all duration-200 ease-in-out">
                                        {faq.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                ))}
            </div>
        </section>
    );
}
