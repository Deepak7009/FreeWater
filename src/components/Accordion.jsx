import React, { useState } from 'react';

const Accordion = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqData = [
        {
            category: 'GENERAL',
            questions: [
                {
                    question: 'How is FreeWater Free?',
                    answer: 'FreeWater is paid for by ads that are printed directly onto aluminum bottles and paper cartons. Ten cents per beverage is donated to charity to fight the global water crisis.'
                },
                {
                    question: 'Will you ship FreeWater to me?',
                    answer: 'We are working around the clock to launch our free 12 pack program. Just pay for the shipping and the water is free and each water donates to charity too.'
                },
                {
                    question: 'Why aluminum bottles and paper cartons?',
                    answer: 'Looking carefully at the pros and cons of both aluminum bottles and paper cartons, we know neither is perfect – but both are far more sustainable than plastic bottles. Our long term goal is to cultivate, manufacture, fill, distribute, and recycle all our beverages in 100% hemp cartons from the same location.'
                },
                {
                    question: 'Why BPA free?',
                    answer: 'The majority of bottled water is contaminated with the chemical BPA. High levels of BPA have been linked to diseases such as hormonal disruption, diabetes, high blood pressure, infertility, breast cancer, and hazardous effects on the brain and behavior of infants and young children.'
                },
                {
                    question: 'What charities do you donate to?',
                    answer: 'We are currently contributing our donations to Well Aware and Charity Water.'
                },
                {
                    question: 'How can I help FreeWater?',
                    answer: 'Please help us to spread the word by sharing our project on social media and with your friends and family.'
                }
            ]
        },
        {
            category: 'Distribution',
            questions: [
                {
                    question: 'Where can I find FreeWater?',
                    answer: 'FreeWater is distributed in select locations. Check our website for a list of distribution points.'
                },
                {
                    question: 'Can I get FreeWater delivered?',
                    answer: 'Yes, we offer delivery services in certain areas. Visit our delivery page for more information.'
                }
            ]
        },
        {
            category: 'Advertising',
            questions: [
                {
                    question: 'How do the ads on FreeWater work?',
                    answer: 'Advertisers pay to have their ads printed on FreeWater bottles and cartons, funding the free distribution of water.'
                },
                {
                    question: 'Can I advertise on FreeWater?',
                    answer: 'Yes, we offer advertising opportunities. Contact our sales team for more details.'
                }
            ]
        },
        {
            category: 'Other',
            questions: [
                {
                    question: 'Other1',
                    answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae similique quasi incidunt minima molestiae corporis voluptatibus culpa reiciendis quos animi.'
                },
                {
                    question: 'Other2',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, provident sint magni consequatur adipisci sit ad quo, sequi commodi laborum, ut nisi minima animi enim asperiores architecto. Quibusdam, corrupti molestias.'
                },
                {
                    question: 'Other3',
                    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur error totam mollitia, obcaecati voluptatem perferendis blanditiis, dolorum asperiores, voluptate fuga molestiae qui corporis assumenda animi vero incidunt est molestias rerum. Sapiente unde itaque libero commodi error voluptatem quae deserunt corporis.'
                }
            ]
        }
    ];

    return (
        <div className="w-full mb-4 overflow-hidden text-center">
            {faqData.map((section, sectionIndex) => (
                <div key={sectionIndex} className="my-8 pb-10">
                    <h1 className='text-2xl font-serif'>{section.category}</h1>
                    <h2 className="text-center text-5xl pt-4 font-bold mb-4 text-white">Frequently Asked Questions</h2>
                    <div className='flex justify-center w-screen'>
                        <ul className="space-y-2 w-3/4">
                            {section.questions.map((faq, index) => (
                                <li key={index} className="border-2 p-4 bg-white my-2 rounded-lg">
                                    <button
                                        onClick={() => toggleFaq(`${sectionIndex}-${index}`)}
                                        className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center"
                                    >
                                        <p>{faq.question}</p>
                                        <span>{openFaq === `${sectionIndex}-${index}` ? "-" : "+"}</span>
                                    </button>
                                    {openFaq === `${sectionIndex}-${index}` && (
                                        <p className="mt-2 text-black text-start" style={{transition}}>{faq.answer}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
