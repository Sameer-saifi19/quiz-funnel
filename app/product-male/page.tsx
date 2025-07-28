'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProductMale() {
    const router = useRouter();
    
        useEffect(() => {
          const timer = setTimeout( () => {
            router.push('https://www.moseswealthcode.com/mwc-vsl-ct-l2h1-219')
          }, 60000)
        
          return () => {
            clearTimeout(timer)
          }
        }, [router])

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
                        <h2 className="uppercase text-primary text-2xl sm:text-4xl font-bold font-bebas tracking-wide">
                            You embody the archetype of
                        </h2>
                        <h1 className="uppercase text-orange text-[6rem] sm:text-[11rem] font-bold leading-none font-bebas tracking-wider mb-4">
                            Moses
                        </h1>
                        <h2 className="uppercase text-primary text-2xl sm:text-4xl font-medium font-bebas tracking-wide">
                            and your mission is
                        </h2>
                        <h1 className="uppercase text-azure text-4xl sm:text-6xl font-semibold mb-1">Divine power</h1>
                        <h2 className="uppercase text-primary text-4xl sm:text-6xl font-semibold mb-4">and purpose</h2>
                        <h3 className="uppercase text-primary text-2xl sm:text-4xl font-bebas mb-1">
                            You were born to <span className="text-azure underline">Lead, Liberate</span>
                        </h3>
                        <h2 className="uppercase text-azure text-2xl sm:text-4xl font-bebas underline">and Transform</h2>
                    </div>
                </div>

                {/* Male Screen 2 */}
                <div className="min-h-screen bg-[url(/Moses2.webp)] bg-cover bg-center flex justify-center items-center px-4">
                    <div className="max-w-5xl text-white font-dmSans text-lg sm:text-3xl font-semibold space-y-10">
                        <p>But you&apos;ve been stuck in the desert far too long...<br />Moses didn&apos;t start out feeling confident.</p>
                        <p>He questioned his worth. He ran from his calling.</p>
                        <p>But once he heard God&apos;s voice and aligned with his divine mission...<br />
                            <span className="font-tinos underline italic">Everything Changed</span>
                        </p>
                        <p>Your brain holds the same manifestation code Moses used to part the Red Sea and lead his people to abundance.</p>
                        <p>A neuroscientific breakthrough has decoded it. It activates the same part of your brain Moses used to hear divine guidance.</p>
                        <p><span className="font-tinos underline italic">This is the moment</span> your soul has chosen to discover what it is.</p>
                    </div>
                </div>

                {/* Male Screen 3 */}
                <div className="min-h-screen bg-[url(/Moses3.webp)] bg-cover bg-center flex justify-center items-center px-4">
                    <div className="max-w-6xl text-center">
                        <h3 className="text-primary text-2xl sm:text-4xl font-semibold font-dmSans">So you can fulfill your</h3>
                        <h1 className="text-orange uppercase text-[5rem] sm:text-[10rem] leading-none font-bold font-bebas mt-4">
                            Divine Calling
                        </h1>
                        <h2 className="text-azure text-4xl sm:text-6xl font-semibold font-bebas mb-8">From God.</h2>
                        <a
                            href="https://www.moseswealthcode.com/mwc-vsl-ct-l2h1-219"
                            className="py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-black rounded-3xl text-sm sm:text-xl font-bold inline-block"
                        >
                            Reveal the Moses Wealth Code Breakthrough Now!
                        </a>
                        <a
                            href="https://www.moseswealthcode.com/mwc-vsl-ct-l2h1-219"
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