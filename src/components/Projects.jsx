import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4">
        Selected <span className="text-gradient">Works</span>
      </h2>
      <p className="text-white/50 mb-16 max-w-lg">
        A curated collection of projects that push the boundaries of web experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
