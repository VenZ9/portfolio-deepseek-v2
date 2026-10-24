import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef();
  const textRef = useRef();
  const subRef  = useRef();
  const ctaRef  = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(textRef.current,
        { opacity: 0, y: 100, rotateX: 30 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: 'power4.out' })
      .fromTo(subRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
      .fromTo(ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.4');

    gsap.to(heroRef.current, {
      y: 150,
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 z-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl float-delay"></div>
      </div>

      <h1 ref={textRef} className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 tracking-tight">
        <span className="text-gradient">Creative</span><br />
        <span className="text-white">Developer</span>
      </h1>

      <p ref={subRef} className="text-lg md:text-xl text-white/60 max-w-2xl mb-10">
        I craft immersive digital experiences with 3D, motion, and a touch of magic.
        Blending code and design to build the impossible.
      </p>

      <div ref={ctaRef} className="flex gap-4 flex-wrap justify-center">
        <a href="#projects" className="glass-strong px-8 py-3 rounded-full text-sm font-semibold hover:bg-white/20 transition-all pulse-glow">
          View Work <i className="fas fa-arrow-down ml-2 text-xs"></i>
        </a>
        <a href="#contact" className="px-8 py-3 rounded-full text-sm font-semibold border border-white/20 hover:border-white/50 transition-all">
          Get in Touch
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}
