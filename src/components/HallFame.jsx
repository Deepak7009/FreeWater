import React from "react";

const HallFame = () => {
  const names = [
    'miro nevanpää aka "the first"',
    "Uplift Digital, LLC",
    "Sydney",
    "Torge Johannes Witt",
    "Thom Monahan",
    "Uncle Flamingo",
    "Hartmann Beteiligungs GmbH",
    "Frederico Moreira",
    "Frederic Herr",
    "Guillermo Borges",
    "Alex A.",
    "Alexa Wollney",
    "Taylor Doucet",
    "Josh Renken",
    "dpk",
  ];

  // Function to split the array into chunks of 3
  const chunkArray = (array, chunkSize) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  const nameChunks = chunkArray(names, 3);

  return (
    <div className="container mx-auto p-4">
      <div className="  p-4  my-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  mb-2">Hall of Fame</h1>
        <p className="text-lg md:text-xl lg:text-[20px] mt-4">
          Welcome to the FreeWater Hall of Fame, where we recognize the
          contributions of those who have made a meaningful impact on our
          mission of providing free and accessible water for all. Each person on
          this list has donated at least $50 to help us in our efforts to make
          free water a reality. Though it may seem like a small amount, their
          contributions have made a big difference in our efforts to promote the
          idea that water is a basic human right, not a privilege. We are proud
          to honor these individuals by inducting them into our Hall of Fame,
          where their names will remain for life, as a testament to their
          commitment to a better world.
        </p>
      </div>
      <div className="bg-black text-white rounded-[20px] p-4 mb-4">
        <div className="block md:table w-full">
          <table className="min-w-full border-white rounded-[20px]">
            <tbody className="block md:table-row-group text-[20px]">
              {nameChunks.map((chunk, chunkIndex) => (
                <tr key={chunkIndex} className="block md:table-row text-center">
                  {chunk.map((name, index) => (
                    <td
                      key={index}
                      className="block md:table-cell py-2 px-4 border-b border-white py-8"
                    >
                      {name}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HallFame;
