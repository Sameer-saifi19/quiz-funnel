"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const questions = [
    "Which of these life paths feels most like yours?",
    "How do you handle divine nudges or dreams that won’t go away?",
    "What role do you naturally take in relationships or community?",
    "What’s your current season of life feel like?",
    "Which Bible quote resonates most deeply with you?",
    "What legacy do you hope to leave?",
];

const femaleOptions = [
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
]

export default function FemaleQuestions() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<string[]>(
        Array(questions.length).fill("")
    );
    const router = useRouter();

    const handleOptionSelect = (answer: string) => {
        const updated = [...answers];
        updated[currentQuestion] = answer;
        setAnswers(updated);

        if (currentQuestion < femaleOptions.length - 1) {
            setTimeout(() => setCurrentQuestion(currentQuestion + 1), 200);
        } else {
            setTimeout(() => {
                console.log("Submitted Answers:", updated);
                router.push('/female-info')
            }, 200);
        }
    };

    return (
        <>
            <div className="min-h-screen flex justify-center bg-[url(/QP2.webp)] items-center px-4">
                <Image
                priority={true}
                    alt="logo"
                    src={"/Logo.webp"}
                    className="absolute top-4 left-4 h-24 w-24 z-10 sm:h-30 sm:w-30"
                    width={150}
                    height={150}
                ></Image>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[rgba(255,255,255,0.42)] p-6 sm:p-8 rounded-4xl w-full max-w-xl border border-white/20 shadow-xl text-center"
                >
                    <div className='bg-[url(/Box1.webp)] bg-center rounded-xl  '>
                        <h2 className="font-bebas text-xl sm:text-3xl py-2 mb-4">{questions[currentQuestion]}</h2>
                    </div>

                    <div className="space-y-3">
                        {femaleOptions[currentQuestion].map((opt) => (
                            <button
                                key={opt}
                                onClick={() => handleOptionSelect(opt)}
                                className={`w-full py-3 px-4 border text-left text-red-beech-900 font-dmSans font-bold text- border-white/30 bg-[rgba(255,255,255,0.42)] hover:bg-[rgba(255,255,255,0.20)] rounded-xl text-sm sm:text-xl ${answers[currentQuestion] === opt
                                    ? 'bg-yellow-500 text-yellow-500 font-semibold'
                                    : 'border-white/30 hover:bg-white/10'
                                    }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-between mt-6 text-xs text-white">
                        {currentQuestion > 0 && (
                            <button

                                className="text-sm text-white cursor-pointer hover:text-yellow-300"
                            >
                                ← Go Back
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>

        </>
    );
}
