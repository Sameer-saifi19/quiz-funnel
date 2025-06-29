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
    'What element are you most drawn to?',
    'Which celestial body influences you the most?',
    'Choose a mystical symbol that resonates with you:',
    'When do you feel most energized?',
    'What’s your ideal spiritual tool?',
    'Which spirit animal speaks to your soul?',
    'Pick the mythological archetype that inspires you:',
  ];

  const sharedOptions = [
    ['Fire 🔥', 'Water 🌊', 'Earth 🌍', 'Air 🌬️'],
    ['The Sun ☀️', 'The Moon 🌙', 'Venus 💖', 'Mars 💢'],
    ['Pentagram 🔯', 'Yin Yang ☯️', 'Eye of Horus 👁️', 'Tree of Life 🌳'],
    ['Sunrise 🌅', 'Noon ☀️', 'Sunset 🌇', 'Midnight 🌌'],
    ['Tarot Cards 🃏', 'Crystal Ball 🔮', 'Runes 🪙', 'Meditation Beads 📿'],
    ['Wolf 🐺', 'Owl 🦉', 'Butterfly 🦋', 'Snake 🐍'],
    ['The Warrior 🛡️', 'The Healer 🌿', 'The Seer 🔮', 'The Trickster 🎭'],
  ];

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
    const options = sharedOptions[index];

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
              <button onClick={goBack} className="cursor-pointer text-sm hover:text-yellow-300">
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

        {!name || !email || !phone ? (
          <p className="text-xs text-red-200 mb-3">Please fill out all fields</p>
        ) : null}

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
