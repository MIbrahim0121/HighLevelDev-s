import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Typewriter logic
    const typeTimeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        // Typing phase
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (isDeleting && displayText.length > 0) {
        // Deleting phase
        setDisplayText(prev => prev.slice(0, -1));
      } else if (isDeleting && displayText.length === 0) {
        // Switch back to typing
        setIsDeleting(false);
        setCurrentIndex(0);
      } else if (!isDeleting && currentIndex === text.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), delay);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => {
      clearInterval(cursorInterval);
      clearTimeout(typeTimeout);
    };
  }, [currentIndex, displayText, isDeleting, text, speed, delay]);

  return (
    <span className="inline-flex dancing font-extrabold  text-4xl md:text-7xl items-center">
      {displayText}
      <span className={`h-10   w-2 bg-black ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
};
const HeroSection = () => {
  return (
    <div className="min-h-screen md:-mt-7  flex items-center justify-center px-4 ">
      <div className="max-w-4xl mx-auto text-center">
        {/* Welcome text with typewriter effect */}

        <p className='md:text-[100px] mb-7 font-[900] text-5xl montserrat  bg-gradient-to-r from-[#424455] to-[#7D7D81] bg-clip-text text-transparent  '> Welcome to</p>
        <div className="text-lg md:text-xl font-medium text-gray-600 mb-2 h-8 flex justify-center">
          <div className="text-lg  md:text-xl font-medium text-gray-600 mb-2 h-8 flex justify-center">
            <Typewriter
            className="pt-6 "
              text="GHL-World"
              speed={150}
              delay={2000}  // Pause for 2 seconds before deleting
            />
          </div>        </div>
        {/* Rest of your content remains the same */}
        <div className="mt-10 mb-5">
          <span className=' md:text-3xl text-2xl font-bold text-gray-800' > GA -</span> 
          <span className=' md:text-3xl md:font-normal text-2xl font-semibold
           text-gray-800' >Your CRM Expert</span>
        </div>

        <p className="text-lg md:text-[17px] text-black mb-8 leading-relaxed">
          Streamline your agency's operations and scale effortlessly with expert GoHighLevel services. From CRM setup and custom workflows to media buying and detailed analytics, I handle the heavy lifting so you can focus on growing your business. Whether it's building high-converting funnels or navigating A2P registration, I provide the tools and strategies to optimize your marketing and client management. Let’s take your agency to the next level!        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <button className="bg-black  text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg">
            Web Developer
          </button>
          <button className="border-2  bg-black text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300">
GHL Expert          </button>
          <button className="border-2  bg-black text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300">
AI Expert          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;






