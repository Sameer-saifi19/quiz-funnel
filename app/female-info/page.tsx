'use client'

import Image from "next/image";
import { useForm } from 'react-hook-form';


export default function FemaleInfo() {
    const { register, watch } = useForm<{ name: string; email: string; }>();
    return (
        <>
            <div className='min-h-screen flex justify-center bg-[url(/QP1.webp)] items-center px-4'>
                <Image alt='logo' src={"/Logo.webp"} priority={true} className='absolute top-4 left-4 h-24 w-24 z-10 sm:h-30 sm:w-30' width={150} height={150}></Image>

                <form method="post" className="bg-[rgba(255,255,255,0.42)] p-6 sm:p-8 rounded-4xl w-full max-w-xl border border-white/20 shadow-xl text-center" acceptCharset="UTF-8" action="https://www.aweber.com/scripts/addlead.pl" >

                    <div className='bg-[url(/Box1.webp)] bg-center rounded-xl'>
                        <h2 className="font-bebas text-xl sm:text-3xl py-2 tracking-wider mb-4">Enter Your Info</h2>
                    </div>

                    <div className='hidden'>
                        <input type="hidden" name="meta_web_form_id" value="359719133" />
                        <input type="hidden" name="meta_split_id" value="" />
                        <input type="hidden" name="listname" value="awlist6899921" />
                        <input type="hidden" name="redirect" value="https://biblecharacterquiz.com/thank-you-f" id="redirect_929dcf6ff2c8db7ebac4112154381b67" />
                        <input type="hidden" name="meta_redirect_onlist" value="https://biblecharacterquiz.com/subscribed" />
                        <input type="hidden" name="meta_adtracking" value="Quiz_Funnel_Sign_Up_Form_(Female)" />
                        <input type="hidden" name="meta_message" value="1" />
                        <input type="hidden" name="meta_required" value="name,email" />



                        <input type="hidden" name="meta_tooltip" value="" />
                    </div>
                    <div id="af-form-359719133" className="af-form"><div id="af-body-359719133" className="af-body af-standards">
                        <div className="af-element">
                            <label className="previewLabel hidden" htmlFor="awf_field-118242235">Name:</label>
                            <div className="af-textWrap">
                                <input id="awf_field-118242235" {...register('name')} placeholder='Name' type="text" name="name" className="w-full py-3 px-4 border text-left  font-dmSans font-bold text-red-beech-900 border-white/30 bg-[rgba(255,255,255,0.42)] hover:bg-[rgba(255,255,255,0.20)] rounded-xl text-sm sm:text-xl mb-4" tabIndex={500} />
                            </div>
                            <div className="af-clear"></div>
                        </div><div className="af-element">
                            <label className="previewLabel hidden " htmlFor="awf_field-118242236">Email:</label>
                            <div className="af-textWrap">
                                <input className="w-full py-3 px-4 border text-left  font-dmSans font-bold text-red-beech-900 border-white/30 bg-[rgba(255,255,255,0.42)] hover:bg-[rgba(255,255,255,0.20)] rounded-xl text-sm sm:text-xl mb-4" id="awf_field-118242236" type="email" tabIndex={501} placeholder='Email' {...register('email')} />
                            </div><div className="af-clear"></div>
                        </div><div className="af-element buttonContainer">
                            <input name="submit" className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base" type="submit" value="Submit" tabIndex={502} disabled={
                                !watch('name') ||
                                !watch('email')
                            } />
                            <div className="af-clear"></div>
                        </div>
                    </div>
                    </div>

                </form>
            </div>
        </>
    )
}