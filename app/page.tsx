'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AstroQuizPage() {
  const [step, setStep] = useState('landing');
  const [gender, setGender] = useState(null);
  const [answers, setAnswers] = useState([]);

  const { register, handleSubmit, watch } = useForm();
  const name = watch('name');
  const email = watch('email');
  const phone = watch('phone');

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
  const progressPercentage = Math.round((currentQuestionIndex / sharedQuestions.length) * 100);

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

  const handleSelect = (option) => {
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

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);

    fetch('https://www.aweber.com/scripts/addlead.pl', {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });

    setStep('product');
    localStorage.removeItem('astroQuizState');

    setTimeout(() => {
      const redirectUrl =
        gender === 'male'
          ? 'https://your-male-product.com'
          : 'https://your-female-product.com';
      window.location.href = redirectUrl;
    }, 60000);
  };

  const backgroundWrapperStyle = {
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const Overlay = ({ children }) => (
    <div className="min-h-screen flex flex-col justify-between" style={backgroundWrapperStyle}>
      <header className="relative z-10 p-4 sm:p-6 text-white text-lg sm:text-xl font-bold">
        📖 Bible Identity Quiz
      </header>

      {isQuestionStep && (
        <div className="w-full bg-white/20 h-2">
          <motion.div
            className="bg-yellow-400 h-full"
            initial={false}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </div>
      )}

      <main className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 text-white">
        {children}
      </main>

      <footer className="relative z-10 p-4 text-center text-xs sm:text-sm text-white bg-black bg-opacity-30">
        © 2025 DivineDestiny. All rights reserved.
      </footer>
    </div>
  );

  const renderLanding = () => (
    <Overlay>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto px-4"
      >
        <h1 className="text-2xl sm:text-4xl font-serif mb-4">
          Which Bible Character Are You Most Like?
        </h1>
        <p className="text-base sm:text-lg mb-2">
          Discover the ancient power hidden within your soul.
        </p>
        <p className="text-sm sm:text-base mb-4">
          Unlock your God-given Abundance Blueprint in just 7 simple questions.
        </p>
        <p className="text-xs mb-6">Over 10,000 lives transformed. Now it’s your turn.</p>
        <button
          onClick={() => setStep('gender')}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-md transition text-sm sm:text-base"
        >
          Start the Quiz Now - It’s Free
        </button>
      </motion.div>
    </Overlay>
  );

  const renderGender = () => (
    <Overlay>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl w-full max-w-md border border-white/20 shadow-xl text-center"
      >
        <h2 className="font-serif text-xl sm:text-2xl mb-4">Are you Male or Female?</h2>
        <div className="space-y-3">
          <button
            onClick={() => {
              setGender('male');
              setAnswers([]);
              setStep('male-0');
            }}
            className="w-full py-3 px-4 border border-white/30 hover:bg-white/10 rounded-xl text-sm sm:text-base"
          >
            Male
          </button>
          <button
            onClick={() => {
              setGender('female');
              setAnswers([]);
              setStep('female-0');
            }}
            className="w-full py-3 px-4 border border-white/30 hover:bg-white/10 rounded-xl text-sm sm:text-base"
          >
            Female
          </button>
        </div>
      </motion.div>
    </Overlay>
  );

  const renderQuestion = () => {
    const index = currentQuestionIndex;
    const question = sharedQuestions[index];
    const options = gender ? optionsByGender[gender][index] : [];

    return (
      <Overlay>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl w-full max-w-md border border-white/20 shadow-xl text-center"
        >
          <h2 className="font-serif text-xl sm:text-2xl mb-4">{question}</h2>
          <div className="space-y-3">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                className={`w-full py-3 px-4 border rounded-xl transition text-sm sm:text-base ${
                  answers[index] === opt
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
      </Overlay>
    );
  };

  const renderInfoForm = () => (
    <Overlay>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl w-full max-w-md border border-white/20 shadow-xl"
      >
        <h2 className="font-serif text-xl sm:text-2xl mb-4 text-center">Enter Your Info</h2>

        <input
          type="text"
          placeholder="Name"
          {...register('name')}
          className="w-full mb-3 px-4 py-2 rounded-xl bg-white/10 border border-white/30 text-white text-sm sm:text-base"
        />

        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          className="w-full mb-3 px-4 py-2 rounded-xl bg-white/10 border border-white/30 text-white text-sm sm:text-base"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          {...register('phone')}
          className="w-full mb-6 px-4 py-2 rounded-xl bg-white/10 border border-white/30 text-white text-sm sm:text-base"
        />

        <button
          type="submit"
          disabled={!name || !email || !phone}
          className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
        >
          See My Result
        </button>

        <button
          onClick={resetQuiz}
          type="button"
          className="mt-4 text-white block w-full text-center cursor-pointer text-sm hover:text-yellow-300"
        >
          ← Start Over
        </button>
      </form>
    </Overlay>
  );

  const renderProduct = () => (
    <Overlay>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-serif mb-4">Unlock Your Divine Destiny 💫</h2>
        <p className="text-white/80 mb-4 text-sm sm:text-base">
          Redirecting you to your personalized blessing in 60 seconds...
        </p>
        <a
          href={
            gender === 'male'
              ? 'https://your-male-product.com'
              : 'https://your-female-product.com'
          }
          className="underline text-yellow-300 text-sm"
        >
          Click here if not redirected
        </a>
      </motion.div>
    </Overlay>
  );

  if (step === 'landing') return renderLanding();
  if (step === 'gender') return renderGender();
  if (isQuestionStep) return renderQuestion();
  if (step === 'info') return renderInfoForm();
  if (step === 'product') return renderProduct();
  return null;
}
