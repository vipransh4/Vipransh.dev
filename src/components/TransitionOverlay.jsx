import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./TransitionOverlay.css";

const EASE = "power4.inOut";

export function animateIn() {
  return new Promise((resolve) => {
    gsap.set(".block", { visibility: "visible", scaleY: 0 });
    gsap.to(".block", {
      scaleY: 1,
      duration: 1,
      stagger: {
        each: 0.1,
        from: "start",
        grid: "auto",
        axis: "x",
      },
      ease: EASE,
      onComplete: resolve,
    });
  });
}

export function animateOut() {
  return new Promise((resolve) => {
    gsap.set(".block", { scaleY: 1 });
    gsap.to(".block", {
      scaleY: 0,
      duration: 1,
      stagger: {
        each: 0.1,
        from: "start",
        grid: "auto",
        axis: "x",
      },
      ease: EASE,
      onComplete: resolve,
    });
  });
}

export default function TransitionOverlay() {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    animateOut().then(() => {
      gsap.set(".block", { visibility: "hidden" });
    });
  }, []);

  return (
    <div className="transition-overlay">
      <div className="transition-row row-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="block" />
        ))}
      </div>
      <div className="transition-row row-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="block" />
        ))}
      </div>
    </div>
  );
}
