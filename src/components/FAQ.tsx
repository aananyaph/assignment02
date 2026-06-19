import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What are the prerequisites for this workshop?',
    answer:
      'No prior coding or robotics experience is needed! The workshop is designed for beginners aged 8–14. All your child needs is a computer or laptop with a stable internet connection and a curiosity to learn. We start from the basics and build up progressively.',
  },
  {
    question: 'What materials or software will my child need?',
    answer:
      'All software tools used in the workshop are free and browser-based. We use Scratch for introductory concepts, Python via an online IDE, and a robotics simulator. Detailed setup instructions are sent before the workshop begins — no physical robot kit is required.',
  },
  {
    question: 'How are the live classes structured?',
    answer:
      'Classes run 3 days a week (Mon, Wed, Fri) for 1.5 hours each session. Each class includes a short theory segment, a hands-on coding or building activity, and a Q&A period. Sessions are recorded so students can revisit them anytime during the course.',
  },
  {
    question: 'Will my child receive a certificate?',
    answer:
      'Absolutely! Every student who completes the workshop and presents their final project receives a Certificate of Completion from Kidrove. Outstanding projects also earn special recognition badges.',
  },
  {
    question: 'What is the refund policy?',
    answer:
      'We offer a full refund if you cancel within 48 hours of enrollment and before the workshop start date. After the workshop has started, we provide a 50% refund if requested within the first week. Please email support@kidrove.com for refund requests.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 md:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-primary-600/8 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-[7px] rounded-full bg-primary-500/10 text-primary-300 text-sm font-semibold tracking-wider uppercase mb-4 my-[7px]">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-4 py-[7px] my-[7px]">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg py-[7px] my-[7px]">
            Find answers to common questions about the workshop, schedule, and enrollment.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                id={`faq-item-${i}`}
                className={`rounded-2xl transition-all duration-300 py-[7px] my-[7px] ${
                  isOpen
                    ? 'glass shadow-lg shadow-primary-900/10'
                    : 'glass-light hover:bg-surface-card-hover'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-8 py-[7px] my-[7px] cursor-pointer text-center"
                  id={`faq-toggle-${i}`}
                  aria-expanded={isOpen}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors duration-300 flex-shrink-0 py-[7px] my-[7px] ${
                    isOpen
                      ? 'bg-primary-500/20 text-primary-300'
                      : 'bg-white/5 text-gray-500'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`flex-1 text-center px-4 text-base sm:text-lg font-semibold font-heading transition-colors duration-300 py-[7px] my-[7px] ${
                    isOpen ? 'text-white' : 'text-gray-200'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 py-[7px] my-[7px] ${
                    isOpen
                      ? 'bg-primary-500/20 rotate-180'
                      : 'bg-white/5'
                  }`}>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-8 pb-[7px] pt-[7px] text-center animate-slide-down py-[7px] my-[7px]">
                    <div className="text-gray-400 leading-relaxed text-center mx-auto max-w-2xl py-[7px] my-[7px]">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
