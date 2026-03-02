import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    const links = [
        { label: 'Mutual Funds', href: '/mutual-funds' },
        { label: 'PMS', href: '/pms' },
        { label: 'AIF', href: '/aif' },
        { label: 'Equity Advisory', href: '/equity-advisory' },
        { label: 'Wealth Monitor', href: '/wealth-monitor' },
        { label: 'About', href: '/about' },
        { label: 'FAQs', href: '/faqs' },
    ];

    const location = useLocation();
    const lightHeroPages = ['/about', '/faqs', '/contact'];
    const isLightHero = lightHeroPages.includes(location.pathname);

    // Determine text colors based on scroll state and hero background theme
    const logoColor = (!scrolled && !open && !isLightHero) ? "text-white" : "text-[#0D1B2A]";
    const navLinkColor = (!scrolled && !open && !isLightHero) ? "text-gray-200 hover:text-white hover:bg-white/10" : "text-gray-700 hover:text-[#00C9A7]";
    const menuIconColor = (!scrolled && !open && !isLightHero) ? "text-white hover:bg-white/10" : "text-[#0D1B2A] hover:bg-gray-100";

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn(
                'fixed z-50 mx-auto w-full max-w-7xl border-b border-transparent md:rounded-b-2xl md:transition-all md:ease-out left-1/2 -translate-x-1/2',
                {
                    'top-0 bg-white/80 supports-[backdrop-filter]:bg-white/60 border-gray-200/50 backdrop-blur-xl md:top-4 md:max-w-6xl md:shadow-md md:border':
                        scrolled && !open,
                    'top-0 bg-white/95 md:bg-white/95 md:h-auto': open,
                },
                !scrolled && !open ? 'top-8 bg-transparent border-transparent pt-4 pb-2' : ''
            )}
        >
            <nav
                className={cn(
                    'flex h-16 w-full items-center justify-between px-4 md:h-14 md:transition-all md:ease-out',
                    {
                        'md:px-6': scrolled,
                    },
                )}
            >
                <Link to="/" className="flex-shrink-0 flex items-center">
                    <span className={cn("text-2xl font-bold tracking-tight transition-colors duration-300", logoColor)}>
                        1Capital<span className="text-[#00C9A7]">.</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-1 md:flex overflow-x-auto mx-4 no-scrollbar">
                    {links.map((link, i) => (
                        <Link key={i} className={cn(buttonVariants({ variant: 'ghost' }), 'font-medium whitespace-nowrap transition-colors duration-300', navLinkColor)} to={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden items-center md:flex">
                    <Link to="/contact">
                        <Button className="bg-[#00C9A7] border-0 hover:bg-[#00B395] text-white transition-colors duration-300">Get Started</Button>
                    </Link>
                </div>

                <Button size="icon" variant="ghost" onClick={() => setOpen(!open)} className={cn("md:hidden transition-colors duration-300", menuIconColor)}>
                    <MenuToggleIcon open={open} className="size-6 cursor-pointer" duration={300} />
                </Button>
            </nav>

            <div
                className={cn(
                    'bg-white/95 backdrop-blur-lg absolute top-full right-0 bottom-0 left-0 z-50 flex flex-col overflow-auto border-t md:hidden h-[calc(100vh-4rem)]',
                    open ? 'block' : 'hidden',
                )}
            >
                <div className="flex h-full w-full flex-col justify-between gap-y-2 p-6">
                    <div className="grid gap-y-2">
                        <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Navigation</div>
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                className={cn(buttonVariants({
                                    variant: 'ghost',
                                    className: 'justify-start text-lg py-6',
                                }), 'text-[#0D1B2A] font-semibold hover:text-[#00C9A7] hover:bg-gray-50')}
                                to={link.href}
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4 mt-8 pb-8">
                        <Link to="/contact" onClick={() => setOpen(false)}>
                            <Button className="w-full bg-[#0D1B2A] text-white py-6 text-lg hover:bg-gray-800 border-0">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
