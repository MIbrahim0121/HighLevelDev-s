// import React from 'react';

// const ContactSection = () => {
//   return (
//     <section className="bg-white py-20 px-6">
//       <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
//         {/* Left Section */}
//         <div className="md:w-1/2">
//           <h2 className="text-4xl font-bold mb-4 text-gray-900">Let's Talk</h2>
//           <p className="text-gray-bg-gray-100 mb-6">
//             I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
//           </p>

//           <div className="space-y-4 text-gray-800">
//             <div className="flex items-center gap-2">
//               <span>📧</span>
//               <span>hafizibraheemsheikh295@gmail.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span>📞</span>
//               <span>+92 311 7187653</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span>📍</span>
//               <span>LAHORE, Pakistan</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Contact Form */}
//         <form className="md:w-1/2 space-y-6">
//           <div>
//             <label className="block text-gray-800 mb-2" htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               placeholder="Enter your name"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-800 mb-2" htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-800 mb-2" htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               rows="4"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               placeholder="Enter your message"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-bg-gray-100   font-semibold py-3 px-8 rounded-full transition"
//           >
//             Submit now
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0c88380c-c4d0-4294-b174-2879de3869d0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!");
    } else {
      toast.error("Failed to send message. Try again later.");
    }
  };

  return (
    <div id="contact" className="!mt-20">
      <ToastContainer />
      <div className="heading">
        <h1 className="text-4xl font-extrabold text-center !mt-8 underline">
          Get In Touch
        </h1>
      </div>
      <div className="min-h-screen flex items-center justify-center text-black p-6 md:!mt-6">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="!mt-8 !pl-5">
            <h2 className="md:text-5xl text-3xl font-bold name !pb-6">
              Let's Talk
            </h2>
            <p className="mt-4 text-black-200 !mb-4">
              We are currently available to take on new projects, so feel free to send us a
              message about anything that you want me to work on. You can contact anytime.
            </p>
            <div className="mt-6 space-y-4 !mb-4">
              <p className="flex items-center gap-3 !mb-3">
                <span className="text-xl">📧</span> geyasa4@gmail.com
              </p>
              <p className="flex items-center gap-3 !mb-3">
                <span className="text-xl">📞</span> +92 310 4168315
              </p>
              <p className="flex items-center gap-3 !mb-3">
                <span className="text-xl">📍</span>Lahore,Pakistan
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <form onSubmit={onSubmit} className="space-y-4 !ml-7 flex flex-col gap-4 md:!mt-5">
              <label className="name" htmlFor="">Name</label>
              <input type="text" name="name" placeholder="Enter your name" className="md:w-full w-[93%] !p-4 border-1      rounded-md outline-none" />
              <label className="name" htmlFor="">Email</label>
              <input type="email" name="email" placeholder="Enter your email" className="md:w-full w-[93%] !p-4 border-1   rounded-md outline-none" />
              <label className="name" htmlFor="">Message</label>
              <textarea name="message" placeholder="Enter your message" className="md:w-full w-[93%] !p-4 border-1   rounded-md outline-none h-32"></textarea>
              <button type="submit" className="bg-blue-500   font-semibold py-3 px-8 rounded-full transition text-white ">Submit now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;