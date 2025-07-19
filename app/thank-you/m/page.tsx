"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url(/Moses1.png)]">
       <header className='absolute top-4 left-4 z-50'>
        <img src={"/Logo.png"} className='h-24 w-24' width={150} height={150}></img>
      </header>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sm:max-w-5xl px-4 sm:w-full text-center"
      >
        <h1 className="sm:text-6xl sm:font-bold text-5xl font-semibold primary-color">Thank You for Subscribing! 🎉</h1>
        <p className="mt-4 text-xl primary-color sm:text-4xl">
          We’ve successfully added you to our list. You’ll be redirected to the homepage shortly.
        </p>
        <div className="mt-6">
          <span className="text-lg text-blue-50">Redirecting in 5 seconds...</span>
        </div>
      </motion.div>
    </div>
  );
}
