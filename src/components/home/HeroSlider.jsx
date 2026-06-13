"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

const slides = [
  {
    id: 1,
    title: "Save 40% on skills that make you shine",
    subtitle:
      "Unlock your potential with Bangladesh's most advanced learning platform. Join thousands of students accelerating their careers.",
    cta: "Save on Shorolipi Plus",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    theme: "bg-blue-600",
    accent: "text-blue-200",
    badge: "Limited Time Offer",
    promoText: "40% OFF",
  },
  {
    id: 2,
    title: "Start building production-ready AI agents",
    subtitle:
      "Master the latest AI technologies and build the next generation of smart applications with expert guidance.",
    cta: "Enroll Now",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    theme: "bg-slate-50",
    textColor: "text-slate-900",
    subtitleColor: "text-slate-600",
    accent: "text-primary",
    badge: "AI & Machine Learning",
    isLight: true,
  },
  {
    id: 3,
    title: "Interactive Live Classes with Expert Mentors",
    subtitle:
      "Don't just watch, participate. Join our real-time interactive sessions and get your doubts cleared instantly.",
    cta: "Join Free Class",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
    theme: "bg-purple-700",
    accent: "text-purple-200",
    badge: "Live Learning",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    1;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full overflow-hidden py-6 md:py-10">
      {/* Background Animated Letters emerging from edges */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Letter A - Emerging from Left (Top-Left) */}
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[8%] left-[1%] md:left-[2%] text-[10rem] md:text-[20rem] font-black text-pink-500/35 select-none leading-none"
        >
          A
        </motion.div>

        {/* Letter D - Emerging from Top (Top-Right) */}
        <motion.div
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[5%] right-[1%] md:right-[2%] text-[12rem] md:text-[24rem] font-black text-purple-500/35 select-none leading-none"
        >
          D
        </motion.div>

        {/* Letter C - Emerging from Bottom (Bottom-Left) */}
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[5%] left-[1%] md:left-[2%] text-[12rem] md:text-[24rem] font-black text-amber-500/35 select-none leading-none"
        >
          C
        </motion.div>

        {/* Letter B - Emerging from Right (Bottom-Right) */}
        <motion.div
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.2, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[15%] right-[1%] md:right-[2%] text-[10rem] md:text-[20rem] font-black text-blue-500/35 select-none leading-none"
        >
          B
        </motion.div>
      </div>

      <Container className="relative z-10">
        <div className="relative h-[450px] md:h-[550px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className={`absolute inset-0 w-full h-full flex flex-col md:flex-row items-center ${slides[current].theme} ${slides[current].isLight ? "text-slate-900" : "text-white"}`}
            >
              {/* Content Side */}
              <div className="flex-1 p-8 md:p-16 lg:p-20 z-10 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${slides[current].isLight ? "bg-primary/10 text-primary" : "bg-white/20 text-white"}`}
                >
                  <Sparkles className="w-3 h-3" />
                  {slides[current].badge}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
                >
                  {slides[current].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`text-lg md:text-xl max-w-xl ${slides[current].isLight ? "text-slate-600" : "text-white/80"}`}
                >
                  {slides[current].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Button
                    size="lg"
                    className={`rounded-full px-8 h-14 text-lg font-bold shadow-lg transition-transform hover:scale-105 ${slides[current].isLight ? "bg-primary text-primary-foreground" : "bg-white text-slate-900 hover:bg-slate-100"}`}
                  >
                    {slides[current].cta}{" "}
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </div>

              {/* Image Side / Decorative Side */}
              <div className="hidden md:flex flex-1 relative h-full items-center justify-center p-8 overflow-hidden">
                {slides[current].promoText && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] lg:text-[180px] font-black leading-none text-white/20 select-none pointer-events-none"
                  >
                    {slides[current].promoText}
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative z-10 w-full max-w-[440px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
                >
                  <img
                    src={slides[current].image}
                    alt={slides[current].title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${slides[current].isLight ? "from-white/40" : "from-black/40"} to-transparent`}
                  />
                </motion.div>

                {/* Decorative Blobs */}
                <div
                  className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-30 ${slides[current].isLight ? "bg-primary/40" : "bg-white/40"}`}
                />
                <div
                  className={`absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-[100px] opacity-20 ${slides[current].isLight ? "bg-blue-400/40" : "bg-slate-900/40"}`}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-8 md:right-16 z-30 flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-8 left-8 md:left-16 z-30 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSlider;
