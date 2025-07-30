'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, Variants } from 'framer-motion';

export default function Home() {


  const DropText = ({ text, className = '' }: { text: string; className?: string }) => {
    const letters = Array.from(text);

    const container: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.05,
        },
      },
    };

    const child: Variants = {
      hidden: {
        y: -40,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring' as const,
          damping: 10,
          stiffness: 300,
        },
      },
    };

    return (
      <motion.h1
        className={className}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>
    );
  };



  const router = useRouter();
  return (
    <div className='min-h-screen flex justify-center bg-[url(/LP1.webp)] items-center '>
      <Image alt='logo' src={"/Logo.webp"} className='absolute top-4 left-4 h-24 w-24 z-10 sm:h-32 sm:w-32' width={150} height={150}></Image>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col mt-14 items-center mx-auto px-4"
      >
        <motion.div className='flex flex-col '>

          <DropText
            text="which"
            className="text-4xl text-primary sm:text-6xl uppercase font-bebas text-left sm:leading-14 mb-4"
          />

          <DropText
            text="Bible Character"
            className="text-6xl text-primary leading-6 sm:text-9xl font-bebas uppercase sm:leading-20 mb-4"
          />

          <DropText
            text="Are You Most Like?"
            className="text-4xl text-primary text-right sm:text-6xl uppercase sm:leading-14 font-bebas mb-4"
          />

        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='flex flex-col justify-center items-center' >
          <p className="text-lg text-primary font-dmSans mb-2 text-center sm:text-2xl">
            Unlock your God-given Abundance Blueprint in just 7 simple questions.
          </p>
          <p className="text-lg mb-1 text-primary font-dmSans sm:text-2xl">Over 10,000 lives transformed.</p>
          <p className="text-xm mb-8 text-primary font-dmSans sm:text-2xl">Now it’s your turn.</p>
        </motion.div>

        <motion.button
          animate={{ rotate: [10, -10] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.3,
            ease: 'easeInOut',
          }}

          onClick={() => {
            router.push('/gender')
          }}
          className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-md transition text-sm sm:text-base"
        >
          Start the Quiz Now - It’s Free
        </motion.button>
      </motion.div>
    </div>
  );
}
