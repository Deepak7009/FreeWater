import React, { useState, useRef, useEffect } from "react";

const Accordion = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const contentRefs = useRef([]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    // Calculate heights of all elements on initial render
    contentRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.maxHeight = ref.scrollHeight + "px";
      }
    });
  }, []);

  const faqData = [
    {
      category: "GENERAL",
      questions: [
        {
          question: "How is FreeWater Free?",
          answer:
            "FreeWater is paid for by ads that are printed directly onto aluminum bottles and paper cartons. Ten cents per beverage is donated to charity to fight the global water crisis.",
        },
        {
          question: "Will you ship FreeWater to me?",
          answer:
            "We are working around the clock to launch our free 12 pack program. Just pay for the shipping and the water is free and each water donates to charity too.",
        },
        {
          question: "Why aluminum bottles and paper cartons?",
          answer:
            "Looking carefully at the pros and cons of both aluminum bottles and paper cartons, we know neither is perfect – but both are far more sustainable than plastic bottles. Our long term goal is to cultivate, manufacture, fill, distribute, and recycle all our beverages in 100% hemp cartons from the same location.",
        },
        {
          question: "Why BPA free?",
          answer:
            "The majority of bottled water is contaminated with the chemical BPA. High levels of BPA have been linked to diseases such as hormonal disruption, diabetes, high blood pressure, infertility, breast cancer, and hazardous effects on the brain and behavior of infants and young children.",
        },
        {
          question: "What charities do you donate to?",
          answer:
            "We are currently contributing our donations to Well Aware and Charity Water.",
        },
        {
          question: "How can I help FreeWater?",
          answer:
            "Please help us to spread the word by sharing our project on social media and with your friends and family.",
        },
      ],
    },
    {
      category: "Distribution",
      questions: [
        {
          question: "How do I distribute FreeWater?",
          answer:
            "We are currently looking to partner with distribution points in the lower 48 states. In most cases, our ideal distribution partnerships are with retail stores and outlets. However, we may be willing to partner with the right individuals to distribute FreeWater in their town. Please fill out the contact form on our distribution page / leave a detailed message and someone from our team will get back to you ASAP.",
        },
        {
          question: "Can I get FreeWater delivered?",
          answer:
            "Retail outlets need to commit to distributing a minimum of one pallet of FreeWater per month. The location needs to be enticing enough to line up advertisers to cover the cost of the product/distribution. Each location will need to advertise that they are a FreeWater distributor by posting a sign on their window and on their website if applies. We will also market your location for you. Individuals who wish to “officially” distribute FreeWater must be hand selected by our team to ensure that they are a good fit.",
        },
        {
          question: "Do distributers have to advertise?",
          answer: "No, but that is the fastest way to get started.",
        },
      ],
    },
    {
      category: "Advertising",
      questions: [
        {
          question: "How much does it cost to advertise?",
          answer: `It depends on several factors:
            1) Aluminum bottles or paper cartons?
            2) The number of units?
            3) Are we distributing the water or are you distributing the water?
            4) The location of distribution?
            5) Do you have a graphic designer on staff or do you need us to design it for you?
            6) Are you splitting the ad space with someone else?`,
        },
        {
          question: "How long does it take to place an advertising order?",
          answer: `Aluminum Bottles
            Roughly six weeks from design approval and payment. However, you should always place your order as far in advance as possible if you have a time sensitive project.
            Paper cartons
            The current lead time for paper cartons is 4 months.`,
        },
        {
          question: "How does FreeWater compare to other advertising mediums?",
          answer:
            "FreeWater is the best brand loyalty platform on Earth and there are unique opportunities to incorporate this new and exciting medium into most ad budgets.",
        },
        {
          question: "How do I advertise?",
          answer: "To advertise, please visit https://freewater.io",
        },
        {
          question: "How do I advertise with FreeWater?",
          answer:
            "To advertise with FreeWater, please visit https://freewater.io/advertise",
        },
      ],
    },
    {
      category: "Other",
      questions: [
        {
          question: "Can I use FreeWater as a fundraising tool?",
          answer:
            "We will create special partnerships for 501(c)(3) organizations or any other positive community outlets such as church groups, sports programs, and schools. Partners who are using FreeWater as a fundraiser must be able to sell all the ad space themselves and we will contribute between ten and twenty five cents per beverage to the partner depending on the quantity and the price at which the product is sold.",
        },
        {
          question: "Will you offer other free products in the future?",
          answer:
            "Yes, we are launching a free supermarket / Amazon 2.0, and FreeWater is simply our first product. We have created a handful of processes that will enable the free and profitable distribution of nearly every type of product that can be purchased in COSTCO today. This includes food, beverages, clothing, medicine, computers, transportation, and travel. Each category of product will donate a percentage of its revenue to a different charitable cause.",
        },
        {
          question: "How do I invest?",
          answer: `Please visit and fill out the form making sure to type "investor" as a subject line. https://freewater.io/contact-us`,
        },
      ],
    },
  ];

  return (
    <div className="w-full mb-4 overflow-hidden text-center perspective-[1000px]">
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="my-8 pb-10">
          <h1 className="text-2xl font-serif">{section.category}</h1>
          <div className="flex justify-center w-screen">
            <ul className="space-y-2 w-3/4">
              {section.questions.map((faq, index) => (
                <li
                  key={index}
                  className="border-2 p-4 bg-white my-2 rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <button
                    onClick={() => toggleFaq(`${sectionIndex}-${index}`)}
                    className="w-full fw-bolder text-left text-2xl font-semibold flex justify-between items-center"
                  >
                    <p>{faq.question}</p>
                    <span>
                      {openFaq === `${sectionIndex}-${index}` ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    ref={(el) =>
                      (contentRefs.current[`${sectionIndex}-${index}`] = el)
                    }
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaq === `${sectionIndex}-${index}`
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="mt-2 text-black text-start">{faq.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
