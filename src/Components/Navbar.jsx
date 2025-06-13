import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white md:w-[90vw]  rounded-xl  md:ml-15  py-4  shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">HighLevelDev's</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">24/7 Support</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Automations</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Funnels & Websites</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Voice Ai's</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">About Me</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Testimonials</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1">
          <a href="#" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-md">Home</a>
          <a href="#" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-md">24/7 Support</a>
          <a href="#" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-md">Automations</a>
          <a href="#" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-md">Funnels & Websites</a>
          <a href="#" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-md">Voice Ai's</a>
          <a href="#" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-md">About Me</a>
          <a href="#" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-md">Testimonials</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;