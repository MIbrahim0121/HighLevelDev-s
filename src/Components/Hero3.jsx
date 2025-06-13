import React from 'react';

const DFYServicesSection = () => {
  return (
    <section className="flex  items-center justify-between px-8 py-16 max-w-5xl mx-auto">
      {/* Left Image */}
      <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex flex-col-reverse md:flex-row justify-center">
        <img
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/JMJZWbA5pRPsgXczu2x0/media/681bb456d5b18df310b67bda.gif" // Replace with your actual image
          alt="DFY Service Illustration"
          className="w-full max-w-md h-auto"
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <h1 className="md:text-5xl w-full text-3xl tracking-tight font-extrabold  mb-6">
          Supercharge Your <br className='hidden' />
          Business with Our <br className='hidden' />
          Done-For-You <br className='hidden' />
          GoHighLevel <br className='hidden'/>
          Services
        </h1>
        <p className="text-lg tracking-tight text-black mb-4">
          At Keep Generating, we make your success our priority. Our Done-For-You (DFY)
          GoHighLevel services cover everything you need—from interactive tutorials and
          seamless onboarding to technical support, powerful add-ons, and responsive Slack
          support. We handle it all so you can focus on growing your business.
        </p>
        <p className="text-lg tracking-tight text-black mb-4">
          Whether you’re looking for custom funnel creation, CRM setup, email and SMS campaigns, or advanced automation, our expert team has you covered. With our streamlined process, we provide personalized solutions that fit your unique needs.
        </p>
        <p className="text-lg tracking-tight text-black mb-4">
         Ready to scale effortlessly? Book a free consultation today.
        </p>
         <button className="bg-black  text-white px-6 py-3 rounded-full font-semibold">
          Book My Free Session
        </button>
      </div>
    </section>
  );
};

export default DFYServicesSection;
