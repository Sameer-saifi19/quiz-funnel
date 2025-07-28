'use client'

import Image from "next/image";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ProductFemale() {
    const router = useRouter();

    useEffect(() => {
      const timer = setTimeout( () => {
        router.push('/')
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

      
            <div className='min-h-screen flex justify-center bg-[url(/Zipporah1.webp)] items-center '>
                <Image alt='logo'  src={"/Logo.webp"} priority={true} className='absolute top-4 left-4 h-24 w-24 z-10 sm:h-32 sm:w-32' width={150} height={150}></Image>


                <div className="max-w-6xl flex flex-col items-center">
                    <h2 className="uppercase text-primary text-2xl sm:text-4xl font-bold font-bebas tracking-wide">You embody the archetype of</h2>
                    <h1 className="uppercase text-pastle text-[6rem] sm:text-[10rem] font-bebas font-semibold leading-none mb-2">
                        Zipporah
                    </h1>
                    <h2 className="uppercase text-3xl sm:text-5xl text-primary font-bebas font-medium">The</h2>
                    <h2 className="uppercase text-3xl sm:text-5xl text-orange font-bebas font-bold">Sacred Feminine Partner</h2>
                    <h2 className="uppercase text-3xl sm:text-5xl text-primary font-bebas font-bold">Of divine legacy</h2>
                    <h3 className="uppercase font-bebas text-2xl sm:text-4xl text-primary tracking-wide mt-4">While Moses walked with God,</h3>
                    <h2 className="uppercase font-bebas text-2xl sm:text-4xl text-pastle font-semibold">Zipporah walked beside him in faith.</h2>
                </div>
            </div>

            {/* Female Screen 2 */}
            <div className="min-h-screen bg-[url(/Moses2.webp)] bg-cover bg-center flex justify-center items-center px-4">
                <div className="max-w-5xl text-white font-dmSans text-lg sm:text-3xl font-semibold space-y-10">
                    <p>As Moses&apos;s wife, Zipporah&apos;s role was vital in fulfilling divine destiny...<br />Often behind the scenes, but never out of alignment.</p>
                    <p className="italic underline">And now is the time to step into the role God created for you.</p>
                    <p>The manifestation code Moses used to part the Red Sea has now been decoded.</p>
                    <p>It activates the part of your brain to hear divine guidance and attract miraculous provision.</p>
                    <p>This powerful breakthrough isn&apos;t just for ancient prophets...<br />It&apos;s for women ready to step into their full spiritual inheritance.</p>
                </div>
            </div>

            {/* Female Screen 3 */}
            <div className="min-h-screen bg-[url(/Moses3.webp)] bg-cover bg-center flex justify-center items-center px-4">
                <div className="max-w-6xl text-center">
                    <h3 className="text-primary text-2xl sm:text-4xl font-dmSans font-semibold">
                        This is the moment your soul has chosen to discover what it is...<br />So you can fulfill your...
                    </h3>
                    <h1 className="text-pastle uppercase text-[5rem] sm:text-[10rem] leading-none font-bold font-bebas mt-4">
                        Divine Calling
                    </h1>
                    <h2 className="text-orange text-4xl sm:text-6xl font-bebas font-semibold mb-8">From God.</h2>
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