"use client"
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [{ name: 'Sophia Martinez', role: 'Entrepreneur', content: 'Finally, a payment solution that just works. The speed and clarity make managing my online business so much easier. Every transaction feels smooth, fast, and secure — exactly how it should be.', rating: 5, }, { name: 'Liam Anderson', role: 'Developer', content: 'This app completely changed how I handle client payments. It’s fast, transparent, and I can track everything in real time. No delays, no hidden fees — just pure convenience.', rating: 5, }, { name: 'Olivia Carter', role: 'Startup Founder', content: 'We integrated this payment platform into our app, and the results were incredible. Our customers love the simplicity and reliability. It’s built for the future of digital transactions.', rating: 5, }, { name: 'Noah Patel', role: 'Finance Manager', content: 'I’ve used dozens of payment tools, but this one stands out. It’s intuitive, beautifully designed, and always reliable. The user-friendly interface makes every transaction effortless.', rating: 5, }, { name: 'Ava Johnson', role: 'Content Creator', content: 'Managing payments used to be stressful, but not anymore. The transparency and speed of this platform give me total confidence every time I get paid. It’s a game changer for freelancers.', rating: 5, }, { name: 'William Chen', role: 'Tech Consultant', content: 'The app delivers on every promise — fast, secure, and simple. I love how it eliminates the usual payment friction and makes transactions feel instant and worry-free.', rating: 5, }, { name: 'Mia Roberts', role: 'UX Researcher', content: 'What I appreciate most is how user-centric this platform feels. Everything is streamlined and logical. It’s clear they’ve designed this with real users in mind, not just numbers.', rating: 5, }, { name: 'James Parker', role: 'Business Owner', content: 'I rely on this payment app daily. It’s reliable, transparent, and integrates seamlessly with my business tools. My team and customers both love it — highly recommended.', rating: 5, },];

export default function TestimonialSlider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            swiperRef.current.params.navigation
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2">
                {/* Header */}
                <div className="text-left mb-12">
                    <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
                        Testimonial
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                        We’ve built trust with reviews from real users
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                        Boost your credibility by featuring genuine testimonials from real
                        users, showcasing their positive experiences and satisfaction with
                        Monks Pay services.
                    </p>
                    {/* Navigation buttons */}
                    <div className="flex justify-start gap-3 mt-6">
                        <button
                            ref={prevRef}
                            className="w-12 h-12 rounded-full cursor-pointer bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition"
                            aria-label="Previous"
                        >
                            <svg
                                className="w-6 h-6 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <button
                            ref={nextRef}
                            className="w-12 h-12 rounded-full bg-black shadow-md flex items-center justify-center cursor-pointer transition"
                            aria-label="Next"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Swiper */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={22}
                        slidesPerView={1}
                        breakpoints={{
                            1024: {
                                slidesPerView: 1.5,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="h-full sm:h-10/12 "
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between">
                                    {/* Stars */}
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-xl">
                                                ★
                                            </span>
                                        ))}
                                    </div>

                                    {/* Text */}
                                    <p className="text-gray-700 text-base leading-relaxed flex-grow">
                                        {testimonial.content}
                                    </p>

                                    {/* Author */}
                                    <div className="mt-6 flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-200 border-2 border-dashed rounded-full" />
                                        <div>
                                            <p className="font-semibold text-gray-900">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
