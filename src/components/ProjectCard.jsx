import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function ProjectCard({ project, index }) {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 80, rotateX: 15 },
      {
        opacity: 1, y: 0, rotateX: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="project-card glass p-6 rounded-2xl flex flex-col gap-3 relative overflow-hidden group">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      <div className="flex items-center justify-between z-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-white/60">{project.tag}</span>
        <i className="fas fa-arrow-up-right-from-square text-white/40 group-hover:text-white transition-colors"></i>
      </div>
      <h3 className="text-2xl font-bold z-10">{project.title}</h3>
      <p className="text-sm text-white/70 z-10 leading-relaxed">{project.desc}</p>
      <div className="mt-auto pt-4 z-10">
        <div className="h-1 w-12 bg-white/20 rounded-full group-hover:w-24 transition-all duration-500"></div>
      </div>
    </div>
  );
}
