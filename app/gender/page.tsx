'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Gender() {
    const router = useRouter();
    return (
        <>
            <div className='min-h-screen flex justify-center bg-[url(/QP1.webp)] items-center px-4'>
                <Image alt='logo' priority={true} src={"/Logo.webp"} className='absolute top-4 left-4 h-24 w-24 z-10 sm:h-30 sm:w-30' width={150} height={150}></Image>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[rgba(255,255,255,0.42)] p-6 sm:p-8 rounded-4xl w-full max-w-xl sm:h-90  border border-white/20 shadow-xl text-center"
                >
                    <div className='bg-[url(/Box1.webp)] bg-center sm:rounded-3xl rounded-xl '>
                        <motion.h2 initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-2xl tracking-wider sm:text-5xl p-4 sm:py-6 font-bebas mb-4">Are you Male or Female?</motion.h2>
                    </div>
                    <div className="space-y-3">
                        <motion.button
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            onClick={() => {
                                router.push('/male-questions');
                            }}
                            className="w-full py-3 px-4 border text-left  font-dmSans font-bold text-red-beech-900 border-white/30 bg-[rgba(255,255,255,0.42)] hover:bg-[rgba(255,255,255,0.20)] rounded-xl text-sm sm:text-4xl sm:mb-4 sm:mt-4"
                        >
                            Male
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: 0.2
                            }}
                            onClick={() => {
                                router.push('/female-questions');
                            }}
                            className="w-full py-3 px-4 border text-red-beech-900 text-left font-dmSans font-bold border-white/30 bg-[rgba(255,255,255,0.42)] hover:bg-[rgba(255,255,255,0.20)] rounded-xl text-sm sm:text-4xl"
                        >
                            Female
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </>
    )
}