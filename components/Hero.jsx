import React from "react";
import Image from "next/image";
import { NavBar } from "./NavBar";

export default function Hero() {
    return (
        <section className="relative overflow-hidden min-h-[600px] my-5 max-w-28/29 mx-auto rounded-3xl">

            {/* 🔹 Background Wrapper */}
            <div className="absolute inset-0 -z-10">
                <div className="relative w-full h-full">
                    <Image
                        src="/Hero-bg.svg" // ✅ make sure this path exists inside /public/images/
                        alt="Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Optional Overlay */}
                    <div className="absolute"></div>
                </div>
            </div>

            <NavBar></NavBar>

            {/* 🔹 Hero Content */}
            <div className="relative z-10 max-w-7xl px-6 lg:px-16 mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side */}
                    <div className="order-2 md:order-1 md:pr-8 text-white">
                        <div className="text-sm text-gray-500 font-semibold">
                            EASY PAYMENT
                        </div>
                        <h1 className="mt-4 text-4xl text-black md:text-5xl font-extrabold leading-tight">
                            Pay fast and smarter from anywhere
                        </h1>
                        <p className="mt-6 max-w-xl text-gray-500">
                            Experience the future of payments — fast, secure, and tailored for
                            the next generation of commerce. Simple setup, powerful features
                            and developer-friendly integration.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a
                                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
                                href="#pricing"
                            >
                                Get Started
                            </a>
                            <a
                                className="px-6 py-3 border border-white/50 text-white rounded-lg hover:bg-white/10 transition"
                                href="#how"
                            >
                                Live Demo
                            </a>
                        </div>

                        <div className="mt-6 flex items-center gap-3 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-blue-200/30"></div>
                                <div>Trusted by thousands</div>
                            </div>
                            <div className="h-5 w-px bg-white/40 mx-4"></div>
                            <div>Available on App Store & Google Play</div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="order-1 md:order-2">
                        <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm">
                            <div className="grid grid-cols-2 gap-0">
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 flex items-center justify-center">
                                    <Image
                                        src="/images/hero-left.png"
                                        alt="hero left"
                                        width={700}
                                        height={520}
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="bg-white p-6 flex items-center justify-center">
                                    <Image
                                        src="/images/hero-right.png"
                                        alt="hero right"
                                        width={700}
                                        height={520}
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
