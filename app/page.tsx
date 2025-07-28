'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {

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

          <motion.h1 className="text-4xl text-primary sm:text-6xl uppercase font-bebas text-left sm:leading-14 mb-4">
            which
          </motion.h1>

          <motion.h1 className="text-6xl text-primary leading-6 text- sm:text-9xl font-bebas uppercase sm:leading-20 mb-4">
            Bible Character
          </motion.h1>

          <motion.h1 className="text-4xl text-primary text-right text- sm:text-6xl uppercase sm:leading-14 font-bebas  mb-4">
            Are You Most Like?
          </motion.h1>

        </motion.div>

        <motion.div className='flex flex-col justify-center items-center' >
          <p className="text-lg text-primary font-dmSans mb-2 text-center sm:text-2xl">
            Unlock your God-given Abundance Blueprint in just 7 simple questions.
          </p>
          <p className="text-lg mb-1 text-primary font-dmSans sm:text-2xl">Over 10,000 lives transformed.</p>
          <p className="text-xm mb-8 text-primary font-dmSans sm:text-2xl">Now it’s your turn.</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.2, bounce: 0.1 },
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
