'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, easeOut } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react";

export default function ProductFemale() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('https://accelevate8.co/QuizMWCZipporah/CTf')
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


                <div className='min-h-screen flex justify-center bg-[url(/Zipporah1.webp)] items-center '>
                    <Image alt='logo' src={"/Logo.webp"} priority={true} className='absolute top-4 left-4 h-24 w-24 z-10 sm:h-32 sm:w-32' width={150} height={150}></Image>


                    <div className="max-w-6xl flex flex-col items-center">
                        <h2 className="uppercase text-primary text-2xl sm:text-5xl font-bold font-bebas tracking-wide">You embody the archetype of</h2>
                        <motion.h1 initial={{ x: 200, opacity: 0 }}  
                            animate={{ x: 0, opacity: 1 }}    // Move to center
                            transition={{ duration: 0.8, ease: easeOut, delay: 0.3 }} className="uppercase text-pastle text-[6rem] sm:text-[14rem] font-bebas font-semibold leading-none mb-2">
                            Zipporah
                        </motion.h1>
                        <h2 className="uppercase text-3xl sm:text-5xl text-primary font-bebas font-medium">The</h2>
                        <motion.h2 initial={{ x: 200, opacity: 0 }}  // Start from right (off-screen)
                            animate={{ x: 0, opacity: 1 }}    // Move to center
                            transition={{ duration: 0.8, ease: easeOut, delay: 0.40 }} className="uppercase text-3xl sm:text-7xl text-orange font-bebas font-bold">Sacred Feminine Partner</motion.h2>
                        <motion.h2 initial={{ x: -200, opacity: 0 }}  // Start from right (off-screen)
                            animate={{ x: 0, opacity: 1 }}    // Move to center
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }} className="uppercase text-3xl sm:text-7xl text-primary font-bebas font-bold">Of divine legacy</motion.h2>
                        <h3 className="uppercase font-bebas text-2xl sm:text-5xl text-primary tracking-wide mt-4">While Moses walked with God,</h3>
                        <h2 className="uppercase font-bebas text-2xl sm:text-5xl text-pastle font-semibold">Zipporah walked beside him in faith.</h2>
                    </div>
                </div>

                {/* Female Screen 2 */}
                <div className="min-h-screen bg-[url(/Moses2.webp)] bg-cover bg-center flex justify-center items-center px-4">
                    <div className="max-w-5xl text-white font-dmSans text-lg sm:text-3xl font-semibold space-y-10">
                        <motion.p
                            ref={ref1}
                            variants={animLeft}
                            initial="hidden"
                            animate={inView1 ? 'visible' : 'hidden'}
                        >
                            As Moses&apos;s wife, Zipporah&apos;s role was vital in fulfilling divine destiny...
                            <br />Often behind the scenes, but never out of alignment.
                        </motion.p>

                        <motion.p
                            ref={ref2}
                            variants={animRight}
                            initial="hidden"
                            animate={inView2 ? 'visible' : 'hidden'}
                            className="italic underline"
                        >
                            And now is the time to step into the role God created for you.
                        </motion.p>

                        <motion.p
                            ref={ref3}
                            variants={animLeft}
                            initial="hidden"
                            animate={inView3 ? 'visible' : 'hidden'}
                        >
                            The manifestation code Moses used to part the Red Sea has now been decoded.
                        </motion.p>

                        <motion.p
                            ref={ref4}
                            variants={animRight}
                            initial="hidden"
                            animate={inView4 ? 'visible' : 'hidden'}
                        >
                            It activates the part of your brain to hear divine guidance and attract miraculous provision.
                        </motion.p>

                        <motion.p
                            ref={ref5}
                            variants={animLeft}
                            initial="hidden"
                            animate={inView5 ? 'visible' : 'hidden'}
                        >
                            This powerful breakthrough isn&apos;t just for ancient prophets...
                            <br />It&apos;s for women ready to step into their full spiritual inheritance.
                        </motion.p>
                    </div>
                </div>

                {/* Female Screen 3 */}
                <div className="min-h-screen bg-[url(/Moses3.webp)] bg-cover bg-center flex justify-center items-center px-4">
                    <div className="max-w-6xl text-center" ref={ref}>
                        <h3 className="text-primary text-2xl sm:text-4xl font-dmSans font-semibold">
                            This is the moment your soul has chosen to discover what it is...<br />So you can fulfill your...
                        </h3>
                        <motion.h1 variants={slideRightVariant}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'} className="text-pastle uppercase text-[5rem] sm:text-[10rem] leading-none font-bold font-bebas mt-4">
                            Divine Calling
                        </motion.h1>
                        <motion.h2 variants={slideRightVariant}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'} className="text-orange text-4xl sm:text-6xl font-bebas font-semibold mb-8">From God.</motion.h2>
                        <motion.a
                            animate={{ scale: 1, rotate: [3, -3] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: 'reverse',
                                duration: 0.3,
                                ease: easeOut,
                                scale: { type: 'spring', bounce: 0.1 }
                            }}
                            href="https://www.moseswealthcode.com/mwc-vsl-ct-l2h1-219"
                            className="py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-black rounded-3xl text-sm sm:text-xl font-bold inline-block"
                        >
                            Reveal the Moses Wealth Code Breakthrough Now!
                        </motion.a>
                        <a
                            href="https://accelevate8.co/QuizMWCZipporah/CTf"
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