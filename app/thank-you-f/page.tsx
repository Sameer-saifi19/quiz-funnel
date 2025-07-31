'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThankyouFemale() {
    const router = useRouter();
    const [seconds, setSeconds] = useState(5); // Countdown starts at 5

    useEffect(() => {
        const countdown = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        const redirectTimer = setTimeout(() => {
            router.push('/product-female');
        }, 5000);

        return () => {
            clearInterval(countdown);
            clearTimeout(redirectTimer);
        };
    }, [router]);

    return (
        <div className='min-h-screen flex justify-center bg-[url(/Zipporah1.webp)] items-center '>
            <Image
                alt='logo'
                src={"/Logo.webp"}
                priority={true}
                className='absolute top-4 left-4 h-24 w-24 z-10 sm:h-32 sm:w-32'
                width={150}
                height={150}
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="sm:max-w-5xl px-4 sm:w-full text-center"
            >
                <h1 className="sm:text-6xl sm:font-bold font-semibold text-5xl text-primary">
                    Thank You for Subscribing! 🎉
                </h1>
                <p className="mt-4 text-xl text-pastle sm:text-4xl">
                    We&apos;ve successfully added you to our list. You&apos;ll be redirected to the homepage shortly.
                </p>
                <div className="mt-6">
                    <span className="text-lg text-pink-50">
                        Redirecting in {seconds} second{seconds !== 1 && 's'}...
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
