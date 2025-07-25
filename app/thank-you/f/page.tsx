'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup if user navigates away
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url(/Zipporah1.webp)]">
       <header className='absolute top-4 left-4 z-50'>
        <Image alt='logo' src={"/Logo.webp"} className='h-24 w-24' width={150} height={150}></Image>
      </header>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sm:max-w-5xl px-4 sm:w-full text-center"
      >
        <h1 className="sm:text-6xl sm:font-bold font-semibold text-5xl primary-color">Thank You for Subscribing! 🎉</h1>
        <p className="mt-4 text-xl pastle sm:text-4xl">
          We&apos;ve successfully added you to our list. You&apos;ll be redirected to the homepage shortly.
        </p>
        <div className="mt-6">
          <span className="text-lg text-pink-50">Redirecting in 5 seconds...</span>
        </div>
      </motion.div>
    </div>
  );
}
