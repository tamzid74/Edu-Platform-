"use client";

import React from "react";
import { motion } from "framer-motion";
import { Radio, Book, HelpCircle } from "lucide-react";
import Container from "@/components/layout/Container";

const SpotlightCard = ({ children, className, innerClassName, variants, whileHover }) => {
  const divRef = React.useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const glowColor = "rgba(99,102,241,0.9)";

  return (
    <motion.div
      ref={divRef}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={whileHover || { y: -5, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
      className={`relative group w-full h-full shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem] cursor-default p-[2px] bg-white/10 overflow-hidden lg:min-h-[320px] ${className || ''}`}
    >
      {/* Border Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.8) 0%, ${glowColor} 15%, transparent 40%)`,
        }}
      />
      
      {/* Inner Card content */}
      <div className={`relative z-10 w-full h-full rounded-[1.4rem] md:rounded-[2.4rem] overflow-hidden flex flex-col items-center justify-center text-center transition-colors duration-300 ${innerClassName || 'bg-zinc-950 p-6'}`}>
        {children}
      </div>
    </motion.div>
  );
};

const FeatureBento = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-10 md:py-20 bg-black text-white overflow-hidden">
      <Container>
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Students are getting from <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
              Online Batches
            </span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-3 lg:gap-6 max-w-6xl mx-auto"
        >
          {/* Card 1: 10 Weekly Live Classes */}
          <SpotlightCard
            variants={itemVariants}
            className="col-span-7 lg:col-span-4 order-1 lg:order-1"
            innerClassName="bg-zinc-950 p-4 lg:p-10 flex flex-col justify-center items-center"
          >
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Radio className="w-8 h-8 lg:w-14 lg:h-14 mb-2 lg:mb-4 text-white transition-colors" strokeWidth={2.5} />
            </motion.div>
            <span className="text-4xl lg:text-[6rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500 leading-none group-hover:scale-110 transition-transform duration-500 relative z-10 tracking-tighter">
              10
            </span>
            <p className="mt-2 lg:mt-4 text-[10px] lg:text-[1.35rem] font-bold text-white transition-colors relative z-10 text-center">
              Weekly live classes
            </p>
          </SpotlightCard>

          {/* Card 2: Masterbook */}
          <SpotlightCard
            variants={itemVariants}
            className="col-span-5 lg:col-span-4 order-2 lg:order-2"
            innerClassName="bg-zinc-950 p-4 lg:p-10 flex flex-col justify-center items-center"
          >
            <div className="flex justify-center gap-1 lg:gap-2 mb-2 lg:mb-6 relative z-10">
               {/* 3 stacked books */}
               <motion.div whileHover={{ y: -5, rotate: -20 }} className="-mr-2 lg:-mr-4 z-10">
                 <div className="w-8 h-10 lg:w-16 lg:h-20 bg-pink-500 rounded-sm lg:rounded-md -rotate-12 border border-white/20 shadow-lg flex items-center justify-center">
                    <span className="text-[5px] lg:text-xs font-black text-white rotate-90 tracking-widest">MASTER</span>
                 </div>
               </motion.div>
               <motion.div whileHover={{ y: -5, rotate: 0 }} className="z-20">
                 <div className="w-8 h-10 lg:w-16 lg:h-20 bg-yellow-400 rounded-sm lg:rounded-md border border-white/20 shadow-lg flex items-center justify-center">
                    <span className="text-[5px] lg:text-xs font-black text-black rotate-90 tracking-widest">MASTER</span>
                 </div>
               </motion.div>
               <motion.div whileHover={{ y: -5, rotate: 20 }} className="-ml-2 lg:-ml-4 z-10">
                 <div className="w-8 h-10 lg:w-16 lg:h-20 bg-orange-200 rounded-sm lg:rounded-md rotate-12 border border-white/20 shadow-lg flex items-center justify-center">
                    <span className="text-[5px] lg:text-xs font-black text-black rotate-90 tracking-widest">MASTER</span>
                 </div>
               </motion.div>
            </div>
            <p className="font-bold text-[9px] lg:text-xl leading-tight group-hover:text-white transition-colors relative z-10 text-center">
              Printed masterbook with<br/>extra notes
            </p>
          </SpotlightCard>

          {/* Card 3: SuperPrep */}
          <SpotlightCard
            variants={itemVariants}
            className="col-span-12 lg:col-span-4 order-6 lg:order-3"
            innerClassName="bg-zinc-950 p-6 lg:p-12 flex flex-col justify-center items-center"
          >
            <h3 className="relative z-10 text-2xl lg:text-5xl font-black text-white italic mb-1 lg:mb-4 group-hover:scale-105 transition-transform text-center">
               <span className="text-pink-500">Super</span>Prep
            </h3>
            <p className="relative z-10 text-[10px] lg:text-lg font-bold text-white text-center">
              Exam Preparation through Unlimited MCQ Practice
            </p>
          </SpotlightCard>

          {/* Card 4: Recorded Classes */}
          <SpotlightCard
            variants={itemVariants}
            className="col-span-7 lg:col-span-4 order-5 lg:order-4"
            innerClassName="bg-zinc-950 p-4 lg:p-8 flex flex-row lg:flex-col items-center justify-center text-left lg:text-center gap-3 lg:gap-6"
          >
             <Radio className="w-8 h-8 lg:w-12 lg:h-12 text-white shrink-0 group-hover:animate-pulse lg:mb-2" strokeWidth={2} />
             <div className="flex flex-col relative z-10 items-start lg:items-center">
                <p className="text-[9px] lg:text-sm font-bold text-white/80">Missed class? No issue!</p>
                <h3 className="text-sm lg:text-3xl font-bold text-blue-400 leading-tight my-0.5 lg:my-2">Recorded classes</h3>
                <p className="text-[9px] lg:text-sm font-bold text-white/80">are there.</p>
             </div>
          </SpotlightCard>

          {/* Card 5: Homework */}
          <SpotlightCard
            variants={itemVariants}
            className="col-span-5 lg:col-span-4 order-4 lg:order-5"
            innerClassName="bg-zinc-950 p-0 relative flex flex-col justify-center items-center"
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" 
              alt="Homework"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0" />
            <div className="absolute inset-0 flex items-center justify-center p-3 lg:p-8 text-center z-10">
               <p className="text-[10px] lg:text-xl font-bold leading-snug text-white drop-shadow-md">
                 Homework and weekly tests in addition to classes
               </p>
            </div>
          </SpotlightCard>

          {/* Card 6: SuperSolve */}
          <SpotlightCard
            variants={itemVariants}
            className="col-span-12 lg:col-span-4 order-3 lg:order-6"
            innerClassName="bg-gradient-to-r from-purple-800 via-pink-600 to-orange-500 p-6 lg:p-12 relative overflow-hidden flex flex-col justify-center items-center"
          >
             <div className="absolute -bottom-4 -right-4 w-16 h-16 lg:w-32 lg:h-32 bg-red-500 rounded-full blur-sm opacity-80" />
             <div className="absolute -bottom-2 -right-2 w-12 h-12 lg:w-24 lg:h-24 bg-red-400 rounded-full shadow-2xl" />
             
             <h3 className="text-3xl lg:text-5xl font-black text-white italic mb-1 lg:mb-4 group-hover:scale-105 transition-transform leading-none relative z-10 text-center">
               <span className="text-purple-300">Super</span>Solve
             </h3>
             <p className="font-bold text-[10px] lg:text-lg leading-tight text-white relative z-10 text-center">
               TenTen is your study partner for 24-hour doubt solving.
             </p>
          </SpotlightCard>
        </motion.div>

      </Container>
    </section>
  );
};

export default FeatureBento;
