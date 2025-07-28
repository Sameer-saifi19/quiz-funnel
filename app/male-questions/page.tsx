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

const maleOptions = [
    [
        "I’ve been through exile or failure, but sense it was shaping me for a higher mission.",
        "I’ve felt the weight of responsibility I didn’t ask for, but can’t ignore.",
        "I’ve wrestled with identity, yet still feel chosen for something greater.",
        "I’ve had moments where I had to walk alone in faith.",
    ],
    [
        "I question them — not because I don’t believe, but because I wonder if I’m enough.",
        "I ask for signs or clarity before I move forward.",
        "I feel called, but sometimes fear I’ll mess it up.",
        "I eventually obey, even if I resist at first.",
    ],
    [
        "I step into leadership, even if reluctantly.",
        "I often carry a message or calling that others don’t yet understand.",
        "I guide others through change or transformation.",
        "I’m the one people turn to when spiritual clarity is needed.",
    ],
    [
        "A wilderness season — preparation for what’s coming.",
        "A calling season — something divine is awakening in me.",
        "A wrestling season — I’m facing inner doubts but know I must rise.",
        "A commissioning season — I sense I’m being sent for something big.",
    ],
    [
        "“Who am I, that I should go?” (Exodus 3:11)",
        "“Here I am… even if I don’t feel ready.” (Exodus 3:4)",
        "“I will be with you.” (Exodus 3:12)",
        "“Speak to the people… and lead them out.” (Exodus 3:10, 6:13)",
    ],
    [
        "Leading others into freedom and purpose.",
        "Being remembered for answering the call, despite fear.",
        "Shifting generations through obedience to divine purpose.",
        "Creating a path where others once saw only bondage.",
    ],
];

export default function MaleQuestions() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<string[]>(
        Array(questions.length).fill("")
    );
    const router = useRouter();

    const handleOptionSelect = (answer: string) => {
        const updated = [...answers];
        updated[currentQuestion] = answer;
        setAnswers(updated);

        if (currentQuestion < maleOptions.length - 1) {
            setTimeout(() => setCurrentQuestion(currentQuestion + 1), 200);
        } else {
            setTimeout(() => {
                console.log("Submitted Answers:", updated);
                router.push("/male-info");
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
                        {maleOptions[currentQuestion].map((opt) => (
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
