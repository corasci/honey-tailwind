'use client';
import { useState } from 'react';

const steps = [
  { question: 'What type of product?', options: ['Beverage', 'Capsule', 'Powder', 'Topical'] },
  { question: 'Target benefit?', options: ['Energy', 'Calm', 'Focus', 'Immunity'] },
  { question: 'Delivery timeframe?', options: ['Prototype in 4 weeks', 'Full launch in 3 months'] },
  { question: 'Intended market?', options: ['US', 'EU', 'Both'] },
];

export default function BuilderPage() {
  const [answers, setAnswers] = useState<string[]>([]);
  const currentStep = answers.length;
  const done = currentStep === steps.length;

  const handleClick = (answer: string) => {
    setAnswers([...answers, answer]);
  };

  return (
    <main className="min-h-screen bg-white text-black p-8">
      <h2 className="text-3xl font-semibold mb-4">Product Profile Builder</h2>
      {!done ? (
        <div>
          <p className="mb-4">{steps[currentStep].question}</p>
          <div className="space-y-2">
            {steps[currentStep].options.map((option) => (
              <button key={option} className="block border px-4 py-2 w-full text-left" onClick={() => handleClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="mb-2">Thanks! Here&apos;s your draft profile:</p>
          <ul className="list-disc pl-6">
            {steps.map((step, index) => (
              <li key={step.question}><strong>{step.question}</strong>: {answers[index]}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
