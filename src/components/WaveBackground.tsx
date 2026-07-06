import { motion } from "motion/react";

export default function WaveBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-slate-50 to-blue-50" />
      
      {/* Wave Elements */}
      <div className="absolute bottom-0 left-0 w-[200%] opacity-20">
        <svg
          viewBox="0 0 1000 100"
          className="animate-wave relative block w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40 C 150 100, 350 0, 500 40 C 650 80, 850 0, 1000 40 L 1000 100 L 0 100 Z"
            fill="url(#wave-gradient-1)"
          />
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-4 left-0 w-[200%] opacity-15">
        <svg
          viewBox="0 0 1000 100"
          className="animate-wave relative block w-full h-[150px] [animation-duration:15s] [animation-delay:-5s]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40 C 150 100, 350 0, 500 40 C 650 80, 850 0, 1000 40 L 1000 100 L 0 100 Z"
            fill="url(#wave-gradient-2)"
          />
          <defs>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Subtle Grid Pattern for AI Tech Feel */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
    </div>
  );
}
