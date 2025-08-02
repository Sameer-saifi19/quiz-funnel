'use client'

import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion, easeOut } from "framer-motion";

export default function ProductMale() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('https://accelevate8.co/QuizMWCMoses/CTm')
        }, 60000)

        return () => {
            clearTimeout(timer)
        }
    }, [router])

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    const slideRightVariant = {
        hidden: { x: 200, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: easeOut, delay: 0.3 },
        },
    };


    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.2 });

    const animLeft = {
        hidden: { opacity: 0, x: -80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: easeOut },
        },
    };

    const animRight = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: easeOut },
        },
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2 }}
            >


                <div className='min-h-screen flex justify-center bg-[url(/Moses1.webp)] items-center '>
                    <Image alt='logo' src={"/Logo.webp"} priority={true} className='absolute top-4 left-4 h-24 w-24 z-10 sm:h-32 sm:w-32' width={150} height={150}></Image>



                    {/* Male Screen 1 */}
                    <div className="max-w-4xl flex flex-col items-center">
                        <h2 className="uppercase text-primary text-2xl sm:text-5xl font-bold font-bebas tracking-wide">
                            You embody the archetype of
                        </h2>
                        <motion.h1 initial={{ x: 200, opacity: 0 }}  // Start from right (off-screen)
                            animate={{ x: 0, opacity: 1 }}    // Move to center
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }} className="uppercase text-orange text-[6rem] sm:text-[14rem] font-bold leading-none font-bebas tracking-wider mb-4">
                            Moses
                        </motion.h1>
                        <h2 className="uppercase text-primary text-2xl sm:text-5xl font-medium font-bebas tracking-wide">
                            and your mission is
                        </h2>
                        <motion.h1 initial={{ x: 200, opacity: 0 }}  // Start from right (off-screen)
                            animate={{ x: 0, opacity: 1 }}    // Move to center
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.40 }} className="uppercase text-azure text-4xl sm:text-7xl font-semibold mb-1">Divine power</motion.h1>
                        <motion.h2 initial={{ x: 200, opacity: 0 }}  // Start from right (off-screen)
                            animate={{ x: 0, opacity: 1 }}    // Move to center
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }} className="uppercase text-primary text-4xl sm:text-7xl font-semibold mb-4">and purpose</motion.h2>
                        <h3 className="uppercase text-primary text-2xl sm:text-5xl font-bebas mb-1">
                            You were born to <span className="text-azure underline">Lead, Liberate</span>
                        </h3>
                        <h2 className="uppercase text-azure text-2xl sm:text-5xl font-bebas underline">and Transform</h2>
                    </div>
                </div>

                {/* Male Screen 2 */}
                <div className="min-h-screen bg-[url(/Moses2.webp)] bg-cover bg-center flex justify-center items-center px-4">
                    <div className="max-w-5xl text-white font-dmSans text-lg sm:text-3xl font-semibold space-y-10">
                        <motion.p
                            ref={ref1}
                            variants={animLeft}
                            initial="hidden"
                            animate={inView1 ? 'visible' : 'hidden'}
                        >
                            But you&apos;ve been stuck in the desert far too long...
                            <br />
                            Moses didn&apos;t start out feeling confident.
                        </motion.p>

                        <motion.p
                            ref={ref2}
                            variants={animRight}
                            initial="hidden"
                            animate={inView2 ? 'visible' : 'hidden'}
                        >
                            He questioned his worth. He ran from his calling.
                        </motion.p>

                        <motion.p
                            ref={ref3}
                            variants={animLeft}
                            initial="hidden"
                            animate={inView3 ? 'visible' : 'hidden'}
                        >
                            But once he heard God&apos;s voice and aligned with his divine mission...
                            <br />
                            <motion.span
                                variants={animRight}
                                initial="hidden"
                                animate={inView3 ? 'visible' : 'hidden'}
                                className="font-tinos underline italic inline-block"
                            >
                                Everything Changed
                            </motion.span>
                        </motion.p>

                        <motion.p
                            ref={ref4}
                            variants={animRight}
                            initial="hidden"
                            animate={inView4 ? 'visible' : 'hidden'}
                        >
                            Your brain holds the same manifestation code Moses used to part the Red Sea and lead his people to abundance.
                        </motion.p>

                        <motion.p
                            ref={ref5}
                            variants={animLeft}
                            initial="hidden"
                            animate={inView5 ? 'visible' : 'hidden'}
                        >
                            A neuroscientific breakthrough has decoded it. It activates the same part of your brain Moses used to hear divine guidance.
                        </motion.p>

                        <motion.p
                            ref={ref6}
                            variants={animRight}
                            initial="hidden"
                            animate={inView6 ? 'visible' : 'hidden'}
                        >
                            <motion.span
                                variants={animLeft}
                                initial="hidden"
                                animate={inView6 ? 'visible' : 'hidden'}
                                className="font-tinos underline italic inline-block"
                            >
                                This is the moment
                            </motion.span>{' '}
                            your soul has chosen to discover what it is.
                        </motion.p>
                    </div>
                </div>

                {/* Male Screen 3 */}
                <div className="min-h-screen bg-[url(/Moses3.webp)] bg-cover bg-center flex justify-center items-center px-4">
                    <div className="max-w-6xl text-center" ref={ref}>
                        <h3 className="text-primary text-2xl sm:text-4xl font-semibold font-dmSans">
                            So you can fulfill your
                        </h3>

                        <motion.h1
                            variants={slideRightVariant}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            className="text-orange uppercase text-[5rem] sm:text-[10rem] leading-none font-bold font-bebas mt-4"
                        >
                            Divine Calling
                        </motion.h1>

                        <motion.h2
                            variants={slideRightVariant}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            className="text-azure text-4xl sm:text-6xl font-semibold font-bebas mb-8"
                        >
                            From God.
                        </motion.h2>

                        <motion.a
                            animate={{ scale: 1, rotate: [3, -3] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: 'reverse',
                                duration: 0.3,
                                ease: easeOut,
                                scale: { type: 'spring', bounce: 0.1 }
                            }}
                            href="https://accelevate8.co/QuizMWCMoses/CTm"
                            className="py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-black rounded-3xl text-sm sm:text-xl font-bold inline-block"
                        >
                            Reveal the Moses Wealth Code Breakthrough Now!
                        </motion.a>

                        <a
                            href="https://accelevate8.co/QuizMWCMoses/CTm"
                            className="underline text-yellow-300 text-sm block mt-4"
                        >
                            Click here if not redirected
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}