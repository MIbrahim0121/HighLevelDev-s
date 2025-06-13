// // AboutUs.jsx
// import React from 'react';
// import TeamCards from './TeamCards';

// const AboutUs = () => {
//   return (
//     <div className="px-6 py-16 bg-gray-50 text-gray-800 max-w-7xl mx-auto text-center">
//       {/* Header */}
//       <h1 className="text-5xl font-extrabold mb-16 text-blue-700 tracking-tight">
//         About <span className="text-gray-900">HighLevelDev's</span>
//       </h1>

//       {/* Who We Are */}
//       <section className="mb-20">
//         <h2 className="text-3xl font-semibold mb-4 text-black">Who We Are</h2>
//         <p className="text-lg leading-relaxed max-w-3xl mx-auto">
//           HighLevelDev's is a forward-thinking team of digital professionals passionate about helping businesses grow through smart automation and innovative websites. Our squad includes two experienced GoHighLevel (GHL) experts and one creative web developer—together, we build powerful, conversion-focused digital solutions.
//         </p>
//       </section>

//       {/* Mission & Vision */}
//       <section className="mb-20">
//         <h2 className="text-3xl font-semibold mb-4 text-black">Our Mission</h2>
//         <p className="text-lg leading-relaxed max-w-3xl mx-auto">
//           To empower businesses with high-converting automation workflows, stunning websites, and efficient systems that help them scale fast.
//         </p>

//         <h2 className="text-3xl font-semibold mt-12 mb-4 text-black">Our Vision</h2>
//         <p className="text-lg leading-relaxed max-w-3xl mx-auto">
//           We aim to become the go-to partner for startups, coaches, and agencies seeking GHL expertise and modern digital presence.
//         </p>
//       </section>

//       {/* Why Choose Us */}
//       <section className="mb-20 bg-white rounded-xl shadow-md p-8">
//         <h2 className="text-3xl font-semibold mb-6 text-black">Why Choose Us?</h2>
//         <ul className="list-disc list-inside text-lg space-y-2 text-left max-w-2xl mx-auto">
//           <li>✅ Certified GoHighLevel automation specialists</li>
//           <li>✅ Conversion-focused website development</li>
//           <li>✅ Results-driven strategies tailored to your brand</li>
//           <li>✅ Quick support, clear communication, and transparent pricing</li>
//         </ul>
//       </section>

//       {/* Team Section */}
//       <TeamCards />

//       {/* CTA */}
//       <section className="mt-28">
//         <p className="text-xl font-medium mb-6">Have a project in mind? Let’s build something amazing together.</p>
//         <a
//           href="/contact"
//           className="inline-block bg-black text-white px-8 py-4 text-lg rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
//         >
//           Contact Us
//         </a>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;



// AboutUs.jsx
import React from 'react';
import TeamCards from './TeamCards';

const AboutUs = () => {
  return (
    <div className="px-6 py-16 bg-gray-50 text-gray-800 max-w-7xl mx-auto text-center">
      {/* Header */}
      <h1 className="text-5xl font-extrabold mb-16 text-blue-700 tracking-tight">
        About <span className="text-gray-900">HighLevelDev's</span>
      </h1>

      {/* Who We Are + Mission + Vision (side by side) */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 text-left">
          <div className="flex-1 max-w-sm">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600 text-center md:text-left">Our Mission</h2>
            <p className="text-base leading-relaxed">
              To empower businesses with high-converting automation workflows, stunning websites, and efficient systems that help them scale fast.
            </p>
          </div>

          <div className="flex-1 max-w-sm">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600 text-center md:text-left">Who We Are</h2>
            <p className="text-base leading-relaxed">
              HighLevelDev's is a forward-thinking team of digital professionals passionate about helping businesses grow through smart automation and innovative websites. Our squad includes two experienced GoHighLevel (GHL) experts and one creative web developer—together, we build powerful, conversion-focused digital solutions.
            </p>
          </div>


          <div className="flex-1 max-w-sm">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600 text-center md:text-left">Our Vision</h2>
            <p className="text-base leading-relaxed">
              We aim to become the go-to partner for startups, coaches, and agencies seeking GHL expertise and modern digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20 bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">Why Choose Us?</h2>
        <ul className="list-none list-inside  text-lg space-y-2 text-center max-w-2xl mx-auto">
          <li> Conversion-focused website development</li>
          <li> Certified GoHighLevel automation specialists</li>
          <li> Results-driven strategies tailored to your brand</li>
          <li> Quick support, clear communication, and transparent pricing</li>
        </ul>
      </section>

      {/* Team Section */}
      <TeamCards />

      {/* CTA */}
      <section className="mt-28">
        <p className="text-xl font-medium mb-6">Have a project in mind? Let’s build something amazing together.</p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 text-lg rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;


