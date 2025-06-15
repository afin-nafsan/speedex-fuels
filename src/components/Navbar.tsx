'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Vision & Mission', href: '#vision-mission' },
    { name: 'Products', href: '#products' },
    { name: 'Contact Us', href: '#contact' },
];

const Navbar = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuState(false);
        }
    };

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed group z-20 w-full px-1">
                <div className={cn(
                    'mx-auto mt-1 max-w-6xl px-2 transition-all duration-300 lg:px-4',
                    isScrolled && 'bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm max-w-4xl lg:px-3'
                )}>
                    <div className="relative flex flex-wrap items-center justify-between gap-2 py-1 lg:gap-0 lg:py-2">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-blue-600" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-blue-600" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            onClick={(e) => handleClick(e, item.href)}
                                            className="text-gray-700 hover:text-blue-600 font-medium tracking-wide transition-colors duration-200">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/95 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-100 p-6 shadow-2xl shadow-gray-200/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                onClick={(e) => handleClick(e, item.href)}
                                                className="text-gray-700 hover:text-blue-600 font-medium tracking-wide transition-colors duration-200">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-200 transition-colors duration-200">
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow transition-all duration-200">
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/speedex-logo.png"
            alt="Speedex Fuel Logo"
            width={80}
            height={23}
            className={cn("object-contain mix-blend-multiply dark:mix-blend-normal", className)}
            style={{ 
                WebkitMaskImage: 'linear-gradient(black, black)',
                maskImage: 'linear-gradient(black, black)',
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat'
            }}
            priority
        />
    );
};

export default Navbar; 