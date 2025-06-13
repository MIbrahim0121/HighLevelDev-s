import React from 'react';

const SupportSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-around px-8 py-16 max-w-4xl mx-auto">
      {/* Left Text Content */}
      <div className="lg:w-1/2 w-[100vw]  ">
        <h1 className="md:text-4xl text-3xl text-center times font-extrabold  mb-6">
          24/7 White Labeled <br className='hidden' />
          Support for You & <br className='hidden' />
          Your Clients
        </h1>
        <p className="text-lg text-black text-center mb-8">
          At Keep Generating, we’ve got you covered. Our 
         <br /> white-labeled support includes
          comprehensive  <br />tutorials, seamless onboarding, technical assistance, <br /> powerful add-ons,
          and dedicated Slack support. Just <br /> bring in your clients, and we’ll handle the rest.
        </p>
        <button className="bg-black ml-[25%] text-white px-6 py-3 rounded-full font-semibold">
          Book My Free Session
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-[30vw]  mb-10 lg:mb-0 flex justify-center">
        <img
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/JMJZWbA5pRPsgXczu2x0/media/681bb2b04199b27b4755bc06.png" // Replace with your image URL
          alt="Support Illustration"
          className="w-full max-w-md h-auto"
        />
      </div>
    </section>
  );
};

export default SupportSection;
