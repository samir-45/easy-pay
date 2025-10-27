import Image from "next/image";
import Link from "next/link";
import Logo from '@/components/logo.svg'

// components/Footer.jsx
export default function Footer() {
    return (
        <footer className="bg-white py-12 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Logo + Description */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-1">
                            {/* <Logo /> */}
                            <Image
                                src={Logo}
                                alt="Logo"
                            />
                            <p className='font-bold text-xl sm:text-2xl pb-2'>Easy Pay</p>
                            
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                                Easy Pay offers secure, seamless, and fee-free payments for effortless global transactions.
                            </p>
                    </div>

                    <div className="flex gap-40">
                        {/* Short Links */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Short links</h4>
                            <ul className="space-y-2">
                                {['Features', 'How it works', 'Security', 'Testimonial'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Other Pages */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Other pages</h4>
                            <ul className="space-y-2">
                                {['Privacy policy', 'Terms & conditions', '404'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>



                    {/* Empty column for spacing on large screens */}
                    {/* <div className="hidden md:block"></div> */}
                </div>

                {/* Bottom Copyright with GLOW */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <p
                        className="text-sm text-gray-500"
                    >
                        2024. Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
                    </p>
                </div>
            </div>
        </footer>
    );
}