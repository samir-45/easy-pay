import React from "react";
import Image from "next/image";
import { NavBar } from "./NavBar";

export default function Hero() {
    return (
        <section className="relative  overflow-hidden min-h-[600px] my-5 max-w-28/29 mx-auto rounded-3xl">

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
            <div className=" z-10 max-w-7xl px-6 lg:px-16 mx-auto h-full mt-8 lg:mt-16">
                <div className="grid md:grid-cols-2 gap-16 sm:gap-8 items-center justify-center ">
                    {/* Left Side */}
                    <div className=" md:pr-8 text-white">
                        <div className="text-sm text-gray-500 font-semibold">
                            EASY PAYMENT
                        </div>
                        <h1 className="mt-2 text-4xl text-black md:text-5xl font-bold leading-tight">
                            

                            <span className="relative inline-block">
                                Pay fast and smarter
                                <span className="absolute -bottom-1 sm:-bottom-3 right-1/4 translate-x-1/2 lg:-right-10 lg:translate-x-0 w-[200px] sm:w-[280px] lg:w-[400px]">
                                    <Image
                                        src="/ico-5.svg"
                                        alt="underline vector"
                                        width={200}
                                        height={200}
                                        className="w-96"
                                    />
                                </span>
                            </span>

                            from anywhere
                        </h1>
                        <p className="mt-4 font-semibold max-w-xl text-gray-500">
                            Experience the future of payments - fast, secure, and tailored for
                            the next generation of commerce. Simple setup, powerful features
                            and developer-friendly integration.
                        </p>

                        {/* Store buttons */}
                        <div className="mt-8 flex flex-row  md:justify-start items-center gap-4">
                            <a
                                href="#"
                                className="flex items-center bg-black gap-2 px-3 py-2 rounded-lg  "
                            >
                                <Image
                                    src="/Apple.svg"
                                    alt="Download on the App Store"
                                    width={25}
                                    height={25}
                                    className="invert"
                                />
                                <div className="text-left -space-y-1">
                                    <p className="text-[12px] font-thin">Download on</p>
                                    <p className="font-bold text-sm sm:text-xl">App Store</p>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg  "
                            >
                                <Image
                                    src="/Playstore.svg"
                                    alt="Download on Google Play"
                                    width={25}
                                    height={25}
                                />
                                <div className="text-left -space-y-1">
                                    <p className="text-[12px] font-thin">Get It on</p>
                                    <p className="font-bold text-sm sm:text-xl">Google Play</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="">
                        <div className="md:w-1/2 sm:mt-10 md:mt-0 flex justify-center relative sm:absolute sm:bottom-20 sm:left-4/9">
                            {/* Image */}
                            <div className="z-50  w-full place-items-center">

                                <Image
                                    src="/man.svg"
                                    width={100}
                                    height={100}
                                    alt="Happy child learning"
                                    className="w-8/12 sm:w-10/12 2xl:w-8/12 z-50 relative sm:absolute  sm:-bottom-20 bottom-0 sm:-right-10"
                                />
                            </div>

                            {/* Btn - 1 */}
                            <div className="flex flex-col -space-y-2 sm:space-y-0 absolute z-50 left-0 sm:left-10 lg:left-30 bottom-1 sm:-bottom-16 lg:-bottom-10 lg:px-6 px-4 lg:py-2 py-2 rounded-lg gap-2 bg-white text-black">
                                <div>
                                    <p className="sm:text-xl font-semibold ">Payment Received</p>
                                    <p className=" text-lg font-semibold text-[#2E68FD]">+35,890.00</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className=" font-medium ">1th Jan, 2024</p>
                                    <div className="flex items-center">
                                        <p className=" text-sm text-[#37C390] font-medium">3.09%</p>
                                        <img src="/vector-1.svg" alt="arrow" />
                                    </div>
                                </div>

                            </div>
                            {/* Btn - 2 */}
                            <div className="flex absolute bottom-48 sm:bottom-64 lg:bottom-34 z-50 right-0 sm:-right-10 items-center sm:px-3 px-2 sm:py-2 py-2 rounded-xl w-fit gap-2 bg-white text-black">
                                <div>
                                    <img className="sm:w-20 w-10" src="/Avatars.svg" alt="" />
                                </div>
                                <div>
                                    <p className="sm:text-2xl font-bold ">120K+</p>
                                    <p className=" text-sm">Active users</p>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
