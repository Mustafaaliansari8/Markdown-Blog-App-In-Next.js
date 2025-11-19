"use client";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";

import { Button } from "@/components/ui/button";
import Typed from "typed.js";

export default function Home() {
    const el = useRef(null);
    const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['coding', 'web designing', 'blogging', 'gaming', 'learning'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="animate-"]').forEach((el) => observer.observe(el));

    return () => {
      typed.destroy();
      observer.disconnect();
    };
  }, []);
  
  return (
    <main>
      <section id="animate-hero" className={`container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center transition-all duration-1000 ${isVisible['animate-hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline" style={{textDecorationColor: '#6028ff'}}><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3" style={{'--focus-color': '#6028ff'}}>
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image 
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            width={500}
            height={500}
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section id="animate-pricing" className={`py-20 bg-gray-50 dark:bg-gray-900 transition-all duration-1000 ${isVisible['animate-pricing'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Simple Pricing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Choose the plan that works for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:scale-105 transition-all duration-500 ${isVisible['animate-pricing'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Free</h3>
              <p className="text-4xl font-bold mb-6" style={{color: '#6028ff'}}>$0<span className="text-lg text-gray-600 dark:text-gray-400">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600 dark:text-gray-400">✓ 5 Projects</li>
                <li className="text-gray-600 dark:text-gray-400">✓ Basic Support</li>
                <li className="text-gray-600 dark:text-gray-400">✓ Community Access</li>
              </ul>
              <Button variant="outline" className="w-full">Get Started</Button>
            </div>

            <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 border-2 hover:scale-105 transition-all duration-500 delay-150 ${isVisible['animate-pricing'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{borderColor: '#6028ff'}}>
              <div className="text-center mb-4">
                <span className="text-white px-3 py-1 rounded-full text-sm" style={{backgroundColor: '#6028ff'}}>Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6" style={{color: '#6028ff'}}>$19<span className="text-lg text-gray-600 dark:text-gray-400">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600 dark:text-gray-400">✓ Unlimited Projects</li>
                <li className="text-gray-600 dark:text-gray-400">✓ Priority Support</li>
                <li className="text-gray-600 dark:text-gray-400">✓ Advanced Features</li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>

            <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:scale-105 transition-all duration-500 delay-300 ${isVisible['animate-pricing'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-6" style={{color: '#6028ff'}}>$49<span className="text-lg text-gray-600 dark:text-gray-400">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600 dark:text-gray-400">✓ Everything in Pro</li>
                <li className="text-gray-600 dark:text-gray-400">✓ Dedicated Support</li>
                <li className="text-gray-600 dark:text-gray-400">✓ Custom Solutions</li>
              </ul>
              <Button variant="outline" className="w-full">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="animate-features" className={`py-20 bg-white dark:bg-gray-800 transition-all duration-1000 ${isVisible['animate-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Discover what makes us different</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`text-center p-6 transition-all duration-700 ${isVisible['animate-features'] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#6028ff'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Fast Performance</h3>
              <p className="text-gray-600 dark:text-gray-400">Lightning fast loading times and optimized performance</p>
            </div>

            <div className={`text-center p-6 transition-all duration-700 delay-150 ${isVisible['animate-features'] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#6028ff'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Reliable</h3>
              <p className="text-gray-600 dark:text-gray-400">99.9% uptime guarantee with robust infrastructure</p>
            </div>

            <div className={`text-center p-6 transition-all duration-700 delay-300 ${isVisible['animate-features'] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#6028ff'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Secure</h3>
              <p className="text-gray-600 dark:text-gray-400">Enterprise-grade security to protect your data</p>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}
