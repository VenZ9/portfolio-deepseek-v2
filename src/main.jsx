import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// ---- Custom Cursor Logic ----
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursor-dot');

window.addEventListener('mousemove', (e) => {
  gsap.to(cursor, { x: e.clientX - 10, y: e.clientY - 10, duration: 0.2 });
  gsap.to(dot, { x: e.clientX - 3, y: e.clientY - 3, duration: 0.05 });
});

document.addEventListener('mouseover', (e) => {
  if (e.target.closest('a, button, .project-card')) {
    gsap.to(cursor, { scale: 2, borderColor: '#f472b6', duration: 0.3 });
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest('a, button, .project-card')) {
    gsap.to(cursor, { scale: 1, borderColor: 'rgba(255,255,255,0.5)', duration: 0.3 });
  }
});

// ---- Mount React App ----
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
