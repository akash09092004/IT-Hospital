import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "left",
  onLetterAnimationComplete = () => {},
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into individual characters or words
    let elements = [];
    
    if (splitType === "chars") {
      textRef.current.innerHTML = text
        .split("")
        .map((char) => `<span style="display: inline-block; overflow: hidden;">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");
      elements = textRef.current.querySelectorAll("span");
    } else if (splitType === "words") {
      textRef.current.innerHTML = text
        .split(" ")
        .map((word) => `<span style="display: inline-block; margin-right: 0.25em;">${word}</span>`)
        .join("");
      elements = textRef.current.querySelectorAll("span");
    }

    // Set initial state
    gsap.set(elements, from);

    // Create intersection observer for scroll trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate on scroll
            gsap.to(elements, {
              ...to,
              duration: duration,
              ease: ease,
              stagger: {
                each: delay / 1000,
              },
              onComplete: onLetterAnimationComplete,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: rootMargin,
      }
    );

    observer.observe(textRef.current);

    return () => observer.disconnect();
  }, [text, delay, duration, ease, splitType, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  return (
    <div
      ref={textRef}
      className={className}
      style={{
        textAlign: textAlign,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </div>
  );
};

export default SplitText;
