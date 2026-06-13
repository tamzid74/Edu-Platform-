"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Zap, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

const PromotionalBanner = () => {
  const features = [
    { icon: <Video className="w-5 h-5" />, title: "Interactive Live Classes" },
    { icon: <Zap className="w-5 h-5" />, title: "Smart Learning System" },
    { icon: <GraduationCap className="w-5 h-5" />, title: "Expert Mentors" },
    { icon: <Sparkles className="w-5 h-5" />, title: "AI Learning Assistance" },
  ];

  return (
    <section className="py-12 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 md:p-16 lg:p-20 text-white border border-white/10 shadow-2xl"
        >
          {/* Background Gradients/Glows */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-purple-300"
                >
                  The Future of Education
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Master English with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    Confidence
                  </span>{" "}
                  Learning
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-slate-400 max-w-lg"
                >
                  Unlock your potential with Bangladesh's most advanced learning
                  platform. Join thousands of students accelerating their
                  careers.
                </motion.p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                      {feature.icon}
                    </div>
                    <span className="font-medium text-sm md:text-base text-slate-200">
                      {feature.title}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 h-14 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 border-none transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
                >
                  Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>

            {/* Right Side - Image Composition */}
            <div className="relative h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center lg:justify-end">
              {/* Main Image Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group"
              >
                <img
                  src="https://images.unsplash.com/photo-1523240715639-963c6a0b171c?auto=format&fit=crop&q=80&w=1000"
                  alt="Students Learning"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />

                {/* Floating Stats Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center gap-4 shadow-2xl"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-medium">
                      Platform Growth
                    </p>
                    <p className="text-lg font-bold">10,000+ Students</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Floating Elements */}
              <motion.div
                animate={{ y: [0, 40, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 -right-10 w-64 h-64 rounded-full bg-purple-600/30 blur-[100px] -z-10"
              />
              <motion.div
                animate={{ y: [0, -40, 0], x: [0, -20, 0], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-blue-600/20 blur-[120px] -z-10"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default PromotionalBanner;
