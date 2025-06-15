'use client'
import React, { useState, useEffect } from 'react'
import { Mail, SendHorizonal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                // type: 'spring',
                // bounce: 0.3,
                // duration: 1.5,
            },
        },
    },
}

const heroImages = [
    {
        src: "/hero-bg.jpg",
        alt: "Fuel Industry Background"
    },
    {
        src: "/hero-bg-2.jpg",
        alt: "Fuel Delivery Service"
    }
];

export function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen">
            {/* Background Images with Overlay */}
            <div className="absolute inset-0 z-0">
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-1000",
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 lg:pb-16 lg:pt-48">
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                    >
                        <h1 className="text-balance text-4xl font-medium text-white sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                            Your Trusted Fuel Partner in UAE
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-gray-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                            Providing premium quality fuel and reliable delivery services across Dubai and the UAE.
                        </p>

                        <form action="" className="mt-12 mx-auto max-w-sm">
                            <div className="bg-white/10 backdrop-blur-sm has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] pr-1.5 items-center rounded-[1rem] border border-white/20 shadow-lg has-[input:focus]:ring-2 lg:pr-0 hover:shadow-xl transition-shadow duration-300">
                                <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]" />
                                <input
                                    placeholder="Your mail address"
                                    className="h-12 w-full bg-transparent pl-12 text-white placeholder-gray-300 focus:outline-none"
                                    type="email"
                                />
                                <div className="md:pr-1.5 lg:pr-0">
                                    <Button
                                        aria-label="submit"
                                        size="sm"
                                        className="rounded-[0.5rem] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <span className="hidden md:block">Get a Quote</span>
                                        <SendHorizonal
                                            className="relative mx-auto size-5 md:hidden"
                                            strokeWidth={2}
                                        />
                                    </Button>
                                </div>
                            </div>
                        </form>

                        {/* Image Slider Indicators */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all duration-300",
                                        index === currentImageIndex 
                                            ? "bg-white w-4" 
                                            : "bg-white/50 hover:bg-white/75"
                                    )}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <div
                            aria-hidden
                            className="bg-radial from-primary/50 dark:from-primary/25 relative mx-auto mt-32 max-w-2xl to-transparent to-55% text-left"
                        >
                            <div className="bg-background/80 backdrop-blur-sm border-border/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                                <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--border),var(--border)_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
                            </div>
                            <div className="bg-muted/80 backdrop-blur-sm dark:bg-background/50 border-border/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                                <div className="bg-background/80 backdrop-blur-sm space-y-2 overflow-hidden rounded-[1.5rem] border p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                                    <div className="bg-muted/80 backdrop-blur-sm rounded-[1rem] p-4 pb-16 dark:bg-white/5"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5" />
                        </div>
                    </AnimatedGroup>
                </div>
            </div>
        </section>
    )
}

const AppComponent = () => {
    return null;
}