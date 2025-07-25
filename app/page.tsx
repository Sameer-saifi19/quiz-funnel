'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AstroQuizPage() {
  const [step, setStep] = useState('landing');
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const { register, watch } = useForm<{ name: string; email: string; phone: string }>();


  useEffect(() => {
    if (typeof window !== 'undefined' && performance?.getEntriesByType) {
      const navEntries = performance.getEntriesByType('navigation');
      const isHardReload = navEntries.length && (navEntries[0] as PerformanceNavigationTiming).type === 'reload';
      if (isHardReload) {
        localStorage.removeItem('astroQuizState');
      }
    }
  }, []);


  const sharedQuestions = [
    'Which of these life paths feels most like yours?',
    'How do you handle divine nudges or dreams that won’t go away?',
    'What role do you naturally take in relationships or community?',
    'What’s your current season of life feel like?',
    'Which Bible quote resonates most deeply with you?',
    'What legacy do you hope to leave?',
  ];

  const optionsByGender = {
    male: [
      [
        'I’ve been through exile or failure, but sense it was shaping me for a higher mission.',
        'I’ve felt the weight of responsibility I didn’t ask for, but can’t ignore.',
        'I’ve wrestled with identity, yet still feel chosen for something greater.',
        'I’ve had moments where I had to walk alone in faith.'
      ],
      [
        'I question them — not because I don’t believe, but because I wonder if I’m enough.',
        'I ask for signs or clarity before I move forward.',
        'I feel called, but sometimes fear I’ll mess it up.',
        'I eventually obey, even if I resist at first.'
      ],
      [
        'I step into leadership, even if reluctantly.',
        'I often carry a message or calling that others don’t yet understand.',
        'I guide others through change or transformation.',
        'I’m the one people turn to when spiritual clarity is needed.'
      ],
      [
        'A wilderness season — preparation for what’s coming.',
        'A calling season — something divine is awakening in me.',
        'A wrestling season — I’m facing inner doubts but know I must rise.',
        'A commissioning season — I sense I’m being sent for something big.'
      ],
      [
        '“Who am I, that I should go?” (Exodus 3:11)',
        '“Here I am… even if I don’t feel ready.” (Exodus 3:4)',
        '“I will be with you.” (Exodus 3:12)',
        '“Speak to the people… and lead them out.” (Exodus 3:10, 6:13)'
      ],
      [
        'Leading others into freedom and purpose.',
        'Being remembered for answering the call, despite fear.',
        'Shifting generations through obedience to divine purpose.',
        'Creating a path where others once saw only bondage.'
      ]
    ],
    female: [
      [
        'I’ve supported someone else’s calling while honoring my own strength.',
        'I’ve made quiet sacrifices few will ever know — but God sees.',
        'I’ve protected my family or faith with bold decisions.',
        'I’ve walked a sacred path behind the scenes.'
      ],
      [
        'I act with spiritual boldness when it matters most.',
        'I trust God’s timing and protect what’s sacred.',
        'I quietly discern, then move decisively.',
        'I honor my instincts and spiritual authority as a woman of faith.'
      ],
      [
        'I’m the spiritual protector of my home or space.',
        'I offer strength from behind the scenes — calm, steady, powerful.',
        'I hold space for others to rise while never forgetting my own path.',
        'I act when no one else will, even when it costs me.'
      ],
      [
        'A hidden season — I’m not in the spotlight, but I matter deeply.',
        'A watchful season — I’m guarding something sacred.',
        'A strengthening season — I’m growing deeper roots of faith.',
        'A threshold season — I’m about to take a courageous step.'
      ],
      [
        '“A wise woman builds her home.” (Proverbs 14:1)',
        '“She stepped in boldly when everything was at stake.” (Exodus 4:25)',
        '“Strength and dignity are her clothing.” (Proverbs 31:25)',
        '“She opens her mouth with wisdom.” (Proverbs 31:26)'
      ],
      [
        'Creating spiritual safety for generations to come.',
        'Being remembered for courageous, faith-filled action.',
        'Uplifting others through quiet strength and sacred love.',
        'Protecting what matters most, even when no one sees it.'
      ]
    ],
  };

  const isQuestionStep = step.startsWith('male') || step.startsWith('female');
  const currentQuestionIndex = isQuestionStep ? parseInt(step.split('-')[1]) : 0;

  useEffect(() => {
    const saved = localStorage.getItem('astroQuizState');
    if (saved) {
      const { step, gender, answers } = JSON.parse(saved);
      setStep(step);
      setGender(gender);
      setAnswers(answers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('astroQuizState', JSON.stringify({ step, gender, answers }));
  }, [step, gender, answers]);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = option;
    setAnswers(newAnswers);

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < sharedQuestions.length) {
      setStep(`${gender}-${nextIndex}`);
    } else {
      setStep('info');
    }
  };

  const goBack = () => {
    const prevIndex = currentQuestionIndex - 1;
    if (prevIndex >= 0) {
      setStep(`${gender}-${prevIndex}`);
    } else {
      setStep('gender');
    }
  };

  const resetQuiz = () => {
    setStep('landing');
    setGender(null);
    setAnswers([]);
    localStorage.removeItem('astroQuizState');
  };



  // eslint-disable-next-line
  const onSubmit = (data: { name: string; email: string; phone: string }) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);

    setStep('product');
    localStorage.removeItem('astroQuizState');

    setTimeout(() => {
      const redirectUrl =
        gender === 'male'
          ? 'https://www.moseswealthcode.com/mwc-vsl-ct-l2h1-219'
          : 'https://www.moseswealthcode.com/mwc-vsl-ct-l2h1-219';
      window.location.href = redirectUrl;
    }, 60000);
  };

  const Overlay: React.FC<{ children: React.ReactNode; backgroundImage: string }> = ({ children, backgroundImage }) => (
    <div className="min-h-screen flex flex-col justify-between" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <header className="relative z-10 p-4 sm:p-6 text-white text-lg sm:text-xl font-bold">
        <Image width={150} height={150} className='w-24 h-24' src={"Logo.webp"} alt='Logo'></Image>
      </header>

      <main className="relative z-10 flex-grow flex justify-center px-4 sm:px-6 text-white">
        {children}
      </main>
    </div>
  );

  const renderLanding = () => (
    <Overlay backgroundImage="LP1.webp">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col mt-14 items-center mx-auto px-4"
      >
        <motion.div className='flex flex-col '>

          <motion.h1 className="text-4xl primary-color sm:text-6xl uppercase font-bebas text-left sm:leading-14 mb-4">
            which
          </motion.h1>

          <motion.h1 className="text-6xl primary-color leading-6 text- sm:text-9xl font-bebas uppercase sm:leading-20 mb-4">
            Bible Character
          </motion.h1>

          <motion.h1 className="text-4xl primary-color text-right text- sm:text-6xl uppercase sm:leading-14 font-bebas  mb-4">
            Are You Most Like?
          </motion.h1>

        </motion.div>

        <motion.div className='flex flex-col justify-center items-center' >
          <p className="text-lg primary-color font-dmSans mb-2 text-center sm:text-2xl">
            Unlock your God-given Abundance Blueprint in just 7 simple questions.
          </p>
          <p className="text-lg mb-1 primary-color font-dmSans sm:text-2xl">Over 10,000 lives transformed.</p>
          <p className="text-xm mb-8 primary-color font-dmSans sm:text-2xl">Now it’s your turn.</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.2, bounce: 0.1 },
          }}

          onClick={() => setStep('gender')}
          className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-md transition text-sm sm:text-base"
        >
          Start the Quiz Now - It’s Free
        </motion.button>
      </motion.div>
    </Overlay>
  );

  const renderGender = () => (
    <Overlay backgroundImage="QP1.webp">
      <div className="flex items-center mt-28 justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[rgba(255,255,255,0.42)] p-6 sm:p-8 rounded-4xl w-full max-w-md border border-white/20 shadow-xl text-center"
        >
          <div className='bg-[url(/Box1.webp)] bg-center rounded-xl  '>
            <h2 className="font-text-xl tracking-wider sm:text-3xl py-2 font-bebas mb-4">Are you Male or Female?</h2>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => {
                setGender('male');
                setAnswers([]);
                setStep('male-0');
              }}
              className="w-full py-3 px-4 border text-left  font-dmSans font-bold dark-brown border-white/30 bg-[rgba(255,255,255,0.42)] hover:bg-[rgba(255,255,255,0.20)] rounded-xl text-sm sm:text-xl"
            >
              Male
            </button>
            <button
              onClick={() => {
                setGender('female');
                setAnswers([]);
                setStep('female-0');
              }}
              className="w-full py-3 px-4 border dark-brown text-left font-dmSans font-bold border-white/30 bg-[rgba(255,255,255,0.42)] hover:bg-[rgba(255,255,255,0.20)] rounded-xl text-sm sm:text-xl"
            >
              Female
            </button>
          </div>
        </motion.div>
      </div>
    </Overlay>
  );

  const renderQuestion = () => {
    const index = currentQuestionIndex;
    const question = sharedQuestions[index];
    const options = gender ? optionsByGender[gender][index] : [];

    return (
      <Overlay backgroundImage="QP2.webp">
        <div className="flex items-center mt-8 justify-center w-full h-full">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[rgba(255,255,255,0.42)] p-6 sm:p-8 rounded-4xl w-full max-w-xl border border-white/20 shadow-xl text-center"
          >

            <div className='bg-[url(/Box1.webp)] bg-center rounded-xl  '>
              <h2 className="font-bebas text-xl sm:text-3xl py-2 mb-4">{question}</h2>
            </div>

            <div className="space-y-3">
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  className={`w-full py-3 px-4 border text-left  font-dmSans font-bold dark-brown border-white/30 bg-[rgba(255,255,255,0.42)] hover:bg-[rgba(255,255,255,0.20)] rounded-xl text-sm sm:text-xl ${answers[index] === opt
                    ? 'bg-yellow-500 text-black font-semibold'
                    : 'border-white/30 hover:bg-white/10'
                    }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-6 text-xs text-white">
              {index > 0 && (
                <button onClick={goBack} className="text-sm text-white cursor-pointer hover:text-yellow-300">
                  ← Go Back
                </button>
              )}
            </div>
          </motion.div>
        </div>

      </Overlay>
    );
  };

  const renderInfoForm = () => (

    <div className='bg-[url(/QP2.webp)] px-4 min-h-screen flex flex-col justify-center items-center '>
      <header className='absolute top-4 left-4 z-50'>
        <Image alt='logo' src={"Logo.webp"} className='h-24 w-24' width={150} height={150}></Image>
      </header>

      {/* Form API Call  */}

      {gender === 'male' ? (
        <>

          <form method="post" className="bg-[rgba(255,255,255,0.42)] p-6 sm:p-8 rounded-4xl w-full max-w-xl border border-white/20 shadow-xl text-center" acceptCharset="UTF-8" action="https://www.aweber.com/scripts/addlead.pl" >

            <div className='bg-[url(/Box1.webp)] bg-center rounded-xl'>
              <h2 className="font-bebas text-xl sm:text-3xl py-2 tracking-wider mb-4">Enter Your Info</h2>
            </div>

            <div className='hidden'>
              <input type="hidden" name="meta_web_form_id" value="931623795" />
              <input type="hidden" name="meta_split_id" value="" />
              <input type="hidden" name="listname" value="awlist6899920" />
              <input type="hidden" name="redirect" value="https://quiz-funnel-six.vercel.app/redirect-m" id="redirect_e211f13f397e7f6083bde9de1cad9070" />
              <input type="hidden" name="meta_redirect_onlist" value="https://quiz-funnel-six.vercel.app/subscribed" />
              <input type="hidden" name="meta_adtracking" value="Quiz_Funnel_Sign_Up_Form_(Male)" />
              <input type="hidden" name="meta_message" value="1" />
              <input type="hidden" name="meta_required" value="name,email" />

              <input type="hidden" name="meta_tooltip" value="" />
            </div>
            <div id="af-form-931623795" className="af-form"><div id="af-body-931623795" className="af-body af-standards">
              <div className="af-element">
                <label className="previewLabel hidden" htmlFor="awf_field-118238004">Name:</label>
                <div className="af-textWrap">
                  <input id="awf_field-118238004" {...register('name')} placeholder='Name' type="text" name="name" className="w-full py-3 px-4 border text-left  font-dmSans font-bold dark-brown border-white/30 bg-[rgba(255,255,255,0.42)] hover:bg-[rgba(255,255,255,0.20)] rounded-xl text-sm sm:text-xl mb-4" tabIndex={500} />
                </div>
                <div className="af-clear"></div>
              </div><div className="af-element">
                <label className="previewLabel hidden " htmlFor="awf_field-118238005">Email:</label>
                <div className="af-textWrap">
                  <input className="w-full py-3 px-4 border text-left  font-dmSans font-bold dark-brown border-white/30 bg-[rgba(255,255,255,0.42)] hover:bg-[rgba(255,255,255,0.20)] rounded-xl text-sm sm:text-xl mb-4" id="awf_field-118217368" type="email" tabIndex={501} placeholder='Email' {...register('email')} />
                </div><div className="af-clear"></div>
              </div><div className="af-element buttonContainer">
                <input name="submit" className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base" type="submit" value="Submit" tabIndex={502} disabled={
                  !watch('name') ||
                  !watch('email')
                } />
                <button
                  onClick={resetQuiz}
                  type="button"
                  className="mt-4 text-white block w-full text-center cursor-pointer text-sm hover:text-yellow-300"
                >
                  ← Start Over
                </button>
                <div className="af-clear"></div>
              </div>
            </div>
            </div>
            <div className='hidden'><Image width={0} height={0} src="https://forms.aweber.com/form/displays.htm?id=nMyMbEzM7Jys" alt="logo" /></div>

          </form>


        </>
      ) : (<>

        <form method="post" className="bg-[rgba(255,255,255,0.42)] p-6 sm:p-8 rounded-4xl w-full max-w-xl border border-white/20 shadow-xl text-center" acceptCharset="UTF-8" action="https://www.aweber.com/scripts/addlead.pl" >

          <div className='bg-[url(/Box1.webp)] bg-center rounded-xl'>
            <h2 className="font-bebas text-xl sm:text-3xl py-2 tracking-wider mb-4">Enter Your Info</h2>
          </div>

          <div className='hidden'>
            <input type="hidden" name="meta_web_form_id" value="359719133" />
            <input type="hidden" name="meta_split_id" value="" />
            <input type="hidden" name="listname" value="awlist6899921" />
            <input type="hidden" name="redirect" value="https://biblecharacterquiz.com/thank-you/f" id="redirect_cae1bfd88dc067218ddb2f9d7a611f72" />
            <input type="hidden" name="meta_redirect_onlist" value="https://biblecharacterquiz.com/thank-you/f" id="redirect_85b7552b82b4852f233616fba2abf577" />
            <input type="hidden" name="meta_redirect_onlist" value="https://biblecharacterquiz.com/subscribed" />
            <input type="hidden" name="meta_adtracking" value="Quiz_Funnel_Sign_Up_Form_(Female)" />
            <input type="hidden" name="meta_message" value="1" />
            <input type="hidden" name="meta_required" value="name,email" />



            <input type="hidden" name="meta_tooltip" value="" />
          </div>
          <div id="af-form-359719133" className="af-form"><div id="af-body-359719133" className="af-body af-standards">
            <div className="af-element">
              <label className="previewLabel hidden" htmlFor="awf_field-118238026">Name:</label>
              <div className="af-textWrap">
                <input id="awf_field-118238026" {...register('name')} placeholder='Name' type="text" name="name" className="w-full py-3 px-4 border text-left  font-dmSans font-bold dark-brown border-white/30 bg-[rgba(255,255,255,0.42)] hover:bg-[rgba(255,255,255,0.20)] rounded-xl text-sm sm:text-xl mb-4" tabIndex={500} />
              </div>
              <div className="af-clear"></div>
            </div><div className="af-element">
              <label className="previewLabel hidden " htmlFor="awf_field-118238026">Email:</label>
              <div className="af-textWrap">
                <input className="w-full py-3 px-4 border text-left  font-dmSans font-bold dark-brown border-white/30 bg-[rgba(255,255,255,0.42)] hover:bg-[rgba(255,255,255,0.20)] rounded-xl text-sm sm:text-xl mb-4" id="awf_field-118219806" type="email" tabIndex={501} placeholder='Email' {...register('email')} />
              </div><div className="af-clear"></div>
            </div><div className="af-element buttonContainer">
              <input name="submit" className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base" type="submit" value="Submit" tabIndex={502} disabled={
                !watch('name') ||
                !watch('email')
              } />
              <button
                onClick={resetQuiz}
                type="button"
                className="mt-4 text-white block w-full text-center cursor-pointer text-sm hover:text-yellow-300"
              >
                ← Start Over
              </button>
              <div className="af-clear"></div>
            </div>
          </div>
          </div>
          <div className='hidden'><Image width={0} height={0} alt='aweber' src="https://forms.aweber.com/form/displays.htm?id=zKyc7IycjMzM" />
          </div>

        </form>
      </>)}

    </div>

  );

  const renderProduct = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="min-h-screen w-full text-white text-center">
        {gender === 'male' ? (
          <>
            {/* Male Screen 1 */}
            <div className="min-h-screen bg-[url(/Moses1.webp)] bg-cover bg-center flex flex-col items-center justify-center px-4">
              <Image src="/Logo.webp" className="absolute w-24 h-24 sm:w-38 sm:h-38 top-4 left-4 z-10" alt="Logo" />
              <div className="max-w-4xl flex flex-col items-center">
                <h2 className="uppercase primary-color text-2xl sm:text-4xl font-bold font-bebas tracking-wide">
                  You embody the archetype of
                </h2>
                <h1 className="uppercase orange text-[6rem] sm:text-[11rem] font-bold leading-none font-bebas tracking-wider mb-4">
                  Moses
                </h1>
                <h2 className="uppercase primary-color text-2xl sm:text-4xl font-medium font-bebas tracking-wide">
                  and your mission is
                </h2>
                <h1 className="uppercase azure text-4xl sm:text-6xl font-semibold mb-1">Divine power</h1>
                <h2 className="uppercase primary-color text-4xl sm:text-6xl font-semibold mb-4">and purpose</h2>
                <h3 className="uppercase primary-color text-2xl sm:text-4xl font-bebas mb-1">
                  You were born to <span className="azure underline">Lead, Liberate</span>
                </h3>
                <h2 className="uppercase azure text-2xl sm:text-4xl font-bebas underline">and Transform</h2>
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
                <h3 className="primary-color text-2xl sm:text-4xl font-semibold font-dmSans">So you can fulfill your</h3>
                <h1 className="orange uppercase text-[5rem] sm:text-[10rem] leading-none font-bold font-bebas mt-4">
                  Divine Calling
                </h1>
                <h2 className="azure text-4xl sm:text-6xl font-semibold font-bebas mb-8">From God.</h2>
                <a
                  href="https://www.moseswealthcode.com/mwc-vsl-ct-l2h1-219"
                  className="py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-black rounded-3xl text-sm sm:text-xl font-bold inline-block"
                >
                  Reveal the Moses Wealth Code Breakthrough Now!
                </a>
                <button
                  onClick={() => setStep('info')}
                  className="mt-6 py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-black rounded-3xl text-sm sm:text-xl font-bold inline-block"
                >
                  Continue to Unlock Your Blueprint →
                </button>

                <a
                  href="https://www.moseswealthcode.com/mwc-vsl-ct-l2h1-219"
                  className="underline text-yellow-300 text-sm block mt-4"
                >
                  Click here if not redirected
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Female Screen 1 */}
            <div className="min-h-screen bg-[url(/Zipporah1.webp)] bg-cover bg-center flex flex-col items-center justify-center px-4">
              <Image src="/Logo.webp" className="absolute top-4 left-4 z-10 h-24 w-24 sm:w-38 sm:h-38" alt="Logo" />
              <div className="max-w-6xl flex flex-col items-center">
                <h2 className="uppercase primary-color text-2xl sm:text-4xl font-bold font-bebas tracking-wide">You embody the archetype of</h2>
                <h1 className="uppercase pastle text-[6rem] sm:text-[10rem] font-bebas font-semibold leading-none mb-2">
                  Zipporah
                </h1>
                <h2 className="uppercase text-3xl sm:text-5xl primary-color font-bebas font-medium">The</h2>
                <h2 className="uppercase text-3xl sm:text-5xl orange font-bebas font-bold">Sacred Feminine Partner</h2>
                <h2 className="uppercase text-3xl sm:text-5xl primary-color font-bebas font-bold">Of divine legacy</h2>
                <h3 className="uppercase font-bebas text-2xl sm:text-4xl primary-color tracking-wide mt-4">While Moses walked with God,</h3>
                <h2 className="uppercase font-bebas text-2xl sm:text-4xl pastle font-semibold">Zipporah walked beside him in faith.</h2>
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
                <h3 className="primary-color text-2xl sm:text-4xl font-dmSans font-semibold">
                  This is the moment your soul has chosen to discover what it is...<br />So you can fulfill your...
                </h3>
                <h1 className="pastle uppercase text-[5rem] sm:text-[10rem] leading-none font-bold font-bebas mt-4">
                  Divine Calling
                </h1>
                <h2 className="orange text-4xl sm:text-6xl font-bebas font-semibold mb-8">From God.</h2>
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
          </>
        )}
      </div>
    </motion.div>
  );


  if (step === 'landing') return renderLanding();
  if (step === 'gender') return renderGender();
  if (isQuestionStep) return renderQuestion();
  if (step === 'info') return renderInfoForm();
  if (step === 'product') return renderProduct();
  return null;
}



