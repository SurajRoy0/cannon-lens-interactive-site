"use client";

import { useEffect, useRef } from "react";

const textSelectors = "a, button, p, h1, h2, h3, h4, h5, h6, span, em, strong, small, label, li";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const verticalRef = useRef<HTMLSpanElement>(null);
  const horizontalRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const vertical = verticalRef.current;
    const horizontal = horizontalRef.current;
    if (!dot || !vertical || !horizontal || !window.matchMedia("(pointer: fine)").matches) return;

    const move = (event: PointerEvent) => {
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      vertical.style.transform = `translateX(${event.clientX}px)`;
      horizontal.style.transform = `translateY(${event.clientY}px)`;
      dot.style.opacity = "1";
      vertical.style.opacity = "1";
      horizontal.style.opacity = "1";
    };
    const over = (event: PointerEvent) => { dot.dataset.text = (event.target as Element).closest(textSelectors) ? "true" : "false"; };
    const leave = () => { dot.style.opacity = "0"; vertical.style.opacity = "0"; horizontal.style.opacity = "0"; };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerover", over); document.documentElement.removeEventListener("mouseleave", leave); };
  }, []);

  return <div className="pointer-events-none fixed inset-0 z-50 hidden md:block" aria-hidden="true">
    <span ref={verticalRef} className="absolute inset-y-0 left-0 w-px bg-line opacity-0 transition-opacity duration-150" />
    <span ref={horizontalRef} className="absolute left-0 top-0 h-px w-full bg-line opacity-0 transition-opacity duration-150" />
    <div ref={dotRef} data-text="false" className="group absolute left-0 top-0 grid size-5 place-items-center rounded-full bg-black opacity-0 transition-[width,height,opacity] duration-200">

    </div>
  </div>;
}
