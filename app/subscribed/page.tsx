import Image from "next/image";

export default function alreadySubscribed() {
    return (
        <>
            <div className='min-h-screen flex justify-center bg-[url(/Moses1.webp)] items-center '>
                <Image alt='logo' src={"/Logo.webp"} priority={true} className='absolute top-4 left-4 h-24 w-24 z-10 sm:h-32 sm:w-32' width={150} height={150}></Image>
                <div
                    
                    className="sm:max-w-5xl px-4 sm:w-full text-center"
                >
                    <h1 className="sm:text-6xl sm:font-bold text-5xl font-semibold text-a">You are already Subscribed! 🎉</h1>
                </div>
            </div>
        </>
    )
}