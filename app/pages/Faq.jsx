import React, { useState } from 'react';

const Faq = () => {
  const faqData = [
    {
      question: 'How long is the course duration?',
      answer: 'The course duration depends upon the selected course, and according to your current level of knowledge. It may also depend up on other factors.',
    },
    {
      question: 'How long is the course duration?',
      answer: 'Answer 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'How long is the course duration?',
      answer: 'Answer 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'How long is the course duration?',
      answer: 'Answer 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleFaq = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <section className="flex bg-[#F2F8FF]">
      {/* Left side content */}
      <div className="w-2/3 p-8 pt-32">
      <p className="text-[#0E64C9] text-sm mb-4 font-bold pl-20   ">FAQ</p>
        <h2 className="font-bold text-2xl md:text-3xl mb-4 pl-20 pr-80 ">Frequently asked questions</h2>
        <p className="text-semibold mb-4 pl-20 text-black text-opacity-50 pr-80">
        We offer full immigration support to United Kingdom, France and Estonia. 
        </p>
      </div>

      {/* Right side FAQ boxes */}
      <div className="w-1/2 p-8 mr-20 my-20">
        <div className="max-w-screen-xl">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-white text-black  p-4 mb-4 cursor-pointer rounded-lg ${
                expanded === index ? 'h-auto max-h-screen transition-max-h duration-3000 ease-in-out w-full' : 'max-h-20 transition-max-h duration-3000 ease-in-out w-full'
              }`}
              onClick={() => toggleFaq(index)}
              style={{
                maxHeight: expanded === index ? '1000px' : '80px',
                overflow: 'hidden',
              }}
            >
              <div className="flex justify-between items-center">
                <div className="font-bold">{item.question}</div>
                <div className="transform transition-transform">
                  {expanded === index ? '^' : '˅'}
                </div>
              </div>
              {expanded === index && (
                <div className="mt-2 text-left text-sm text-black text-opacity-50 ">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
