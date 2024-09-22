"use client";
import React, { useState, useEffect } from "react";

export default function NotFound() {
  const [glitchText, setGlitchText] = useState("404");
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    if (isGlitching) {
      const chars = "01!@#$%^&*()_+-={}[]|;:,.<>?";
      const newText = "404"
        .split("")
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join("");
      setGlitchText(newText);
    } else {
      setGlitchText("404");
    }
  }, [isGlitching]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black font-mono text-green-500">
      {/* Matrix rain background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="animate-matrix-rain absolute top-0 text-xs"
            style={{ left: `${i * 10}%`, animationDelay: `${i * 0.1}s` }}
          >
            {[...Array(100)].map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? "1" : "0"}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Glitch effect */}
      <h1
        className={`relative mb-8 text-8xl font-bold ${isGlitching ? "animate-glitch" : ""}`}
      >
        <span className="absolute left-0 top-0 -ml-2 text-red-500 opacity-70">
          {glitchText}
        </span>
        <span className="absolute left-0 top-0 ml-2 text-blue-500 opacity-70">
          {glitchText}
        </span>
        {glitchText}
      </h1>

      <p className="mb-8 text-center text-2xl">
        Reality not found.
        <br />
        The system cannot locate the path specified.
      </p>

      <a
        href="/"
        className="group relative overflow-hidden rounded bg-green-500 px-6 py-3 text-black transition-colors hover:bg-green-400"
      >
        <span className="relative z-10">Return to Reality</span>
        <span className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-20"></span>
      </a>

      <style jsx>{`
        @keyframes matrixRain {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-5px, 5px);
          }
          40% {
            transform: translate(-5px, -5px);
          }
          60% {
            transform: translate(5px, 5px);
          }
          80% {
            transform: translate(5px, -5px);
          }
          100% {
            transform: translate(0);
          }
        }
        .animate-matrix-rain {
          animation: matrixRain 10s linear infinite;
        }
        .animate-glitch {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
            infinite;
        }
      `}</style>
    </div>
  );
}
