import React from 'react';
import gys from '../assets/gys2.png'
// import { Card, CardContent } from "@/components/ui/card";

export default function AbtGys() {
  return (
    <div className="min-h-screen bg-white p-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About GHAYAS AHMED!</h1>
          {/* <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
            Founder. Builder. GHL Noob (But Not Really).
          </p> */}
          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
               <p>I’m <b>GHAYAS</b> — an automation strategist, and GoHighLevel expert who’s turned trial and error into a powerful playbook. But here’s the real story: I didn’t get here by playing it safe. I got here by breaking the rules, rebuilding them, and figuring it out my own way.</p>
            <p>While most people use GoHighLevel just to “get by,” I’ve been busy pushing its limits — developing custom tools, designing powerful add‑ons, optimizing funnels, and turning messy systems into smooth, scalable solutions. From workflows that drive real conversions to white‑labeled add‑ons that outperform the best in the industry, I’m not just using HighLevel — I’m making it smarter.</p>
            <p>But what I do is about more than just software. I’m in the business of proving something. Proving that great ideas deserve great execution. Proving you don't need a fancy title or a Silicon Valley badge to build something remarkable. Proving that someone with the drive to learn — one integration, one campaign, and one piece of code at a time — can create freedom, impact, and a legacy.</p>
            <p>That's what brings me back every day — not just to develop tech, but to empower agencies, marketers, and small business owners to grow smarter and breathe easier.</p>
            <p>Whether it’s designing a custom booking bot, dialing in conversations with Conversational AI, integrating with Zapier, Pabbly, or other CRMs, or tailoring a workflow to match a unique business — I’m driven by the same mission: To make sure no potential is left wasted — mine or yours.</p>
                        <p>In addition to automation, I'm also a passionate web developer. I specialize in building modern, responsive user interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS. From clean landing pages to full-featured web apps, I bring ideas to life with performance-focused frontend development. Whether you're looking to craft a seamless user experience or turn a design into code, I’ve got the tools and the mindset to make it happen.</p>

          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center">
          <img
            src={gys} // Replace with your image path
            alt="GHAYAS"
            className="w-full h-[100%] max-w-sm md:-mt-100"
          />
          {/* <img
            src="/images/certified-badge.png" // Replace with badge image path
            alt="Certified Admin Badge"
            className="w-40 md:w-52 -mt-16"
          /> */}
        </div>
      </div>
    </div>
  );
}
