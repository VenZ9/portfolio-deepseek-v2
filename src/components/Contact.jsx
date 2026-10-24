import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: textRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section id="contact" className="relative py-24 px-6 flex flex-col items-center justify-center text-center z-10">
      <div className="glass-strong p-10 md:p-16 rounded-3xl max-w-2xl w-full" ref={textRef}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          Join my Discord community for behind-the-scenes content, project updates, and exclusive resources.
        </p>
        <a
          href="https://discord.gg/yourinvite"
          target="_blank"
          rel="noopener noreferrer"
          className="discord-btn inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold text-lg"
        >
          <i className="fab fa-discord text-2xl"></i>
          Join the Discord
          <i className="fas fa-arrow-right text-sm"></i>
        </a>
        <div className="mt-8 flex justify-center gap-6 text-white/40">
          <a href="#" className="hover:text-white transition-colors text-xl"><i className="fab fa-github"></i></a>
          <a href="#" className="hover:text-white transition-colors text-xl"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-white transition-colors text-xl"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <footer className="mt-16 text-white/20 text-sm">
        &copy; {new Date().getFullYear()} Creative Dev. Crafted with 3D & love.
      </footer>
    </section>
  );
        }
