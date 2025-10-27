'use client';

import { Sparkles, ArrowRight, Check, Star, Zap, Shield } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
const Card = ({
    className,
    children
}) => <div className={cn('rounded-xl border-none bg-black text-white  shadow-sm', className)}>
        {children}
    </div>;
const CardHeader = ({
    className,
    children
}) => <div className={cn('flex flex-col space-y-1.5 p-6', className)}>
        {children}
    </div>;
const CardTitle = ({
    className,
    children
}) => <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)}>
        {children}
    </h3>;
const CardDescription = ({
    className,
    children
}) => <div className={cn('text-sm text-muted-foreground', className)}>
        {children}
    </div>;
const CardContent = ({
    className,
    children
}) => <div className={cn('p-6 pt-0', className)}>
        {children}
    </div>;
const CardFooter = ({
    className,
    children
}) => <div className={cn('flex items-center p-6 pt-0', className)}>
        {children}
    </div>;
const AnimatedNumber = ({
    value,
    format,
    className
}) => {
    const [currentValue, setCurrentValue] = useState(0);
    const animationFrameRef = useRef(null);
    const startTimeRef = useRef(null);
    useEffect(() => {
        const duration = 500;
        const animate = timestamp => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }
            const progress = (timestamp - startTimeRef.current) / duration;
            const easedProgress = Math.min(1, progress);
            const newValue = easedProgress * value;
            setCurrentValue(newValue);
            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                setCurrentValue(value);
                startTimeRef.current = null;
            }
        };
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        startTimeRef.current = null;
        animationFrameRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [value]);
    const formatter = new Intl.NumberFormat('en-US', {
        style: format.style,
        currency: format.currency,
        maximumFractionDigits: format.maximumFractionDigits
    });
    return <span className={className}>{formatter.format(currentValue)}</span>;
};
const plans = [{
    id: 'starter',
    name: 'Free Plan',
    icon: Star,
    price: {
        monthly: 'Free forever',
        yearly: 'Free forever'
    },
    description: 'Free for personal payments.',
    features: ['Up to 100 transections per month', 'Basic AI model access', 'Community support', 'Basic proud protection', 'Email support'],
    cta: 'Get Free Plan'
}, {
    id: 'pro',
    name: 'Advanced',
    icon: Zap,
    price: {
        monthly: 90,
        yearly: 75
    },
    description: 'Minimal fees for advanced transactions',
    features: ['Up to 1000 transections per month', 'Premium AI model access', 'Priority email support', 'Advanced proud protection', 'Detailed transaction reports'],
    cta: 'Get Advanced Plan',
    popular: true
}, {
    id: 'enterprise',
    name: 'Business',
    icon: Shield,
    price: {
        monthly: 'Contact for pricing',
        yearly: 'Contact for pricing'
    },
    description: 'Premium business transactions',
    features: ['Unlimited transections per month', 'Dedicated technical account manager', 'Premium proud protection', 'Detailed transaction reports', 'Priority email & chat support'],
    cta: 'Get Business Plan'
}];
export default function PricingDM() {
    const [frequency, setFrequency] = useState('monthly');
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return <div className="not-prose relative flex w-full flex-col gap-16 overflow-hidden px-4 py-16 text-center sm:px-8">

        <div className="flex flex-col items-center justify-center gap-8">
            { }
            <header className="text-center">
                <p className="text-sm font-semibold tracking-wide text-purple-600">PRICING</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">Simple transparent pricing no hidden fees</h2>
            </header>
            { }
            <motion.div initial={{
                opacity: 0,
                scale: 0.95
            }} animate={{
                opacity: 1,
                scale: 1
            }} transition={{
                duration: 0.4,
                delay: 0.2
            }}>
                <div className="inline-block rounded-full bg-muted/30 p-1 shadow-sm">
                    <div className="flex bg-transparent">
                        <button onClick={() => setFrequency('monthly')} className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", frequency === 'monthly' ? 'bg-background shadow-sm' : 'bg-transparent hover:bg-muted/50')}>
                            Monthly
                        </button>
                        <button onClick={() => setFrequency('yearly')} className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", frequency === 'yearly' ? 'bg-background shadow-sm' : 'bg-transparent hover:bg-muted/50')}>
                            Yearly
                            <span className="ml-2 inline-flex items-center rounded-full border border-transparent bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/15">
                                20% off
                            </span>
                        </button>
                    </div>
                </div>
            </motion.div>

            { }
            <div className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                {plans.map((plan, index) => <motion.div key={plan.id} initial={{
                    opacity: 0,
                    y: 20
                }} animate={{
                    opacity: 1,
                    y: 0
                }} transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.1
                }} whileHover={{
                    y: -5
                }} className="flex">
                    <Card
                        className={cn(
                            'relative h-full w-full text-left transition-all duration-300 hover:shadow-lg',
                            plan.popular
                                ? 'bg-black text-white shadow-xl'
                                : 'bg-white hover:border-primary/30 text-white'
                        )}
                    >

                        { }
                        {plan.popular && <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                            <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground shadow-sm">
                                <Sparkles className="mr-1 h-3.5 w-3.5" />
                                Most Popular
                            </span>
                        </div>}
                        <CardHeader className={cn('pb-4', plan.popular && 'pt-8 text-white')}>
                            <div className="flex items-center gap-2">
                                { }
                                <CardTitle className={cn('text-xl font-bold text-primary', plan.popular && 'text-white')}>
                                    {plan.name}
                                </CardTitle>
                            </div>
                            <CardDescription className="mt-3 space-y-2">
                                { }
                                <p className={cn('text-sm', plan.popular ? 'text-gray-300' : 'text-foreground')}>{plan.description}</p>
                                { }
                                <div className="pt-2">
                                    {typeof plan.price[frequency] === 'number' ? <div className="flex items-baseline">
                                        <AnimatedNumber className={cn('text-3xl font-bold', plan.popular ? 'text-white' : 'text-foreground')} format={{
                                            style: 'currency',
                                            currency: 'USD',
                                            maximumFractionDigits: 0
                                        }} value={plan.price[frequency]} />
                                        <span className="ml-1 text-sm text-gray-300">
                                            /month, billed {frequency}
                                        </span>
                                    </div> : <span className={cn('text-2xl font-bold', plan.popular ? 'text-primary' : 'text-foreground')}>
                                        {plan.price[frequency]}
                                    </span>}
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-3 pb-6">
                            { }
                            {plan.features.map((feature, featureIndex) => <motion.div key={featureIndex} initial={{
                                opacity: 0,
                                x: -5
                            }} animate={{
                                opacity: 1,
                                x: 0
                            }} transition={{
                                duration: 0.3,
                                delay: 0.5 + featureIndex * 0.05
                            }} className="flex items-center gap-2 text-sm">
                                <div className={cn('flex h-5 w-5 items-center justify-center rounded-full', plan.popular ? 'bg-primary/10 text-white' : 'bg-secondary text-secondary-foreground')}>
                                    <Check className="h-3.5 w-3.5" />
                                </div>
                                <span className={plan.popular ? 'text-gray-300' : 'text-muted-foreground'}>
                                    {feature}
                                </span>
                            </motion.div>)}
                        </CardContent>
                        <CardFooter>
                            { }
                            <div className='w-full h-full'>
                                <button className={cn('inline-flex items-end justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full group', plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20' : 'border border-input bg-background hover:border-primary/30 hover:bg-primary/5 text-primary')}>
                                {plan.cta}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                            </div>
                        </CardFooter>

                        { }
                        {plan.popular ? (
                            <div className="pointer-events-none absolute inset-0 rounded-lg" />
                        ) : (
                            <div className="pointer-events-none absolute inset-0 rounded-lg border border-transparent opacity-0 transition-opacity duration-300 hover:border-primary/10 hover:opacity-100" />
                        )}
                    </Card>
                </motion.div>)}
            </div>
        </div>
    </div>;
}