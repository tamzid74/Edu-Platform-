"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Sparkles,
  FileQuestion,
  BookOpen,
  Award,
  Play,
  MessageCircle,
} from "lucide-react";

const programFeatures = [
  {
    id: "live-class",
    title: "লাইভ ও রেকর্ডেড ক্লাস",
    icon: Video,
    mockup: {
      phoneTitle: "Shorolipi Live Class",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
      floatingCard1: {
        tag: "লাইভ ক্লাস",
        time: "আজ বিকেল ৪:০০টা",
        btnText: "ক্লাসে যোগ দাও",
      },
      floatingCard2: {
        tag: "বাংলা ১ম পত্র",
        title: "কবিতার ছন্দ ও অলংকার — মজার অ্যানিমেশন দিয়ে শেখো",
        time: "৪:০০pm - ৫:০০pm | ৬০ মিনিট",
        btnText: "এখনই জয়েন করো",
      },
      joinedCount: "৮৪৮ জন শিশু",
      chatCount: "৯৯",
    },
  },
  {
    id: "animated-videos",
    title: "অ্যানিমেটেড ভিডিও লেসন",
    icon: Sparkles,
    mockup: {
      phoneTitle: "Animation Lessons",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=600",
      floatingCard1: {
        tag: "কার্টুন অ্যানিমেশন",
        time: "বিজ্ঞান ৫ম শ্রেণি",
        btnText: "ভিডিও দেখো",
      },
      floatingCard2: {
        tag: "মজার ভিডিও",
        title: "সৌরজগৎ ও গ্রহ-নক্ষত্র — রঙিন অ্যানিমেশনে শেখো",
        time: "১২ মিনিট | ফুল HD অ্যানিমেশন",
        btnText: "ভিডিও প্লে করো",
      },
      joinedCount: "৫,২৩০ বার দেখা",
      chatCount: "৬৭",
    },
  },
  {
    id: "practice-mcq",
    title: "মজার MCQ কুইজ",
    icon: FileQuestion,
    mockup: {
      phoneTitle: "Fun Quiz Time!",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600",
      floatingCard1: {
        tag: "কুইজ গেম",
        time: "যেকোনো সময় খেলো",
        btnText: "কুইজ শুরু করো",
      },
      floatingCard2: {
        tag: "গণিত কুইজ",
        title: "ভগ্নাংশ ও দশমিক — ১০টি মজার প্রশ্ন খেলো!",
        time: "১০ প্রশ্ন | ১০ মিনিট",
        btnText: "খেলতে শুরু করো",
      },
      joinedCount: "১২,৪৫০ কুইজ",
      chatCount: "৩৪",
    },
  },
  {
    id: "class-notes",
    title: "রঙিন ক্লাস নোট",
    icon: BookOpen,
    mockup: {
      phoneTitle: "Colorful Notes",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
      floatingCard1: {
        tag: "স্মার্ট নোট",
        time: "ছবি ও রঙ দিয়ে তৈরি",
        btnText: "নোট দেখো",
      },
      floatingCard2: {
        tag: "বাংলা ব্যাকরণ",
        title: "সন্ধি ও সমাস — মজার ছড়ায় মনে রাখো",
        time: "১৮ পৃষ্ঠা | রঙিন পিডিএফ",
        btnText: "পিডিএফ ডাউনলোড",
      },
      joinedCount: "৯,৮৮০ ডাউনলোড",
      chatCount: "২১",
    },
  },
  {
    id: "smart-notes",
    title: "মাইন্ড ম্যাপ ও চার্ট",
    icon: Sparkles,
    mockup: {
      phoneTitle: "Mind Map Studio",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=600",
      floatingCard1: {
        tag: "ভিজ্যুয়াল চার্ট",
        time: "শর্টকাটে মনে রাখো",
        btnText: "চার্ট দেখো",
      },
      floatingCard2: {
        tag: "রঙিন মাইন্ড ম্যাপ",
        title: "মানব দেহের অঙ্গপ্রত্যঙ্গ — ছবিতে দেখে মনে রাখো",
        time: "১০ পৃষ্ঠা | ইন্টারেক্টিভ",
        btnText: "মাইন্ড ম্যাপ খোলো",
      },
      joinedCount: "৭,৬৫০ বার শেয়ার",
      chatCount: "৪১",
    },
  },
  {
    id: "report-card",
    title: "রিপোর্ট কার্ড ও পুরস্কার",
    icon: Award,
    mockup: {
      phoneTitle: "My Progress & Badges",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
      floatingCard1: {
        tag: "স্টার ব্যাজ অর্জন",
        time: "এই সপ্তাহে ৩টি ব্যাজ পেয়েছো!",
        btnText: "ব্যাজ দেখো",
      },
      floatingCard2: {
        tag: "মাসিক রিপোর্ট",
        title: "তোমার পড়াশোনার অগ্রগতি ও পুরস্কারের তালিকা",
        time: "গড় নম্বর: ৯২% | সুপার স্টার 🌟",
        btnText: "রিপোর্ট দেখো",
      },
      joinedCount: "অভিভাবক যাচাইকৃত",
      chatCount: "৫",
    },
  },
];

export default function AcademicProgramSection() {
  const [activeTab, setActiveTab] = useState(programFeatures[0].id);
  const currentFeature = programFeatures.find((f) => f.id === activeTab);

  return (
    <section className="w-full py-16 bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-600 text-white relative overflow-hidden">
      {/* Playful Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-yellow-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-8 right-0 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
      {/* Polka Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1.5px,transparent_1.5px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-bold backdrop-blur-sm"
          >
            🎒 শিশুদের জন্য বিশেষ প্রোগ্রাম
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow"
          >
            Shorolipi প্রোগ্রামে যা যা শেখা যাবে
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-purple-100 text-sm md:text-base"
          >
            মজায় মজায় শেখো — প্রতিটি বিষয় হবে সহজ, রঙিন ও আনন্দময়!
          </motion.p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-center">
          {/* Left Column: Tab List */}
          <div className="space-y-3 relative z-20">
            {programFeatures.map((feature) => {
              const Icon = feature.icon;
              const isActive = feature.id === activeTab;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`w-full flex items-center p-3.5 rounded-xl transition-all duration-300 relative text-left group ${
                    isActive
                      ? "bg-white text-slate-900 border-2 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.4)] font-bold scale-[1.02] z-10"
                      : "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                  }`}
                >
                  <div className="flex items-center space-x-3 w-full">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isActive
                          ? "bg-purple-600 text-white"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold leading-snug flex-1">
                      {feature.title}
                    </span>
                  </div>
                  {/* Active Yellow Pointer Triangle */}
                  {isActive && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[14px] border-l-yellow-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Teal Mockup Box with Phone */}
          <div className="bg-[#5BA8B8] rounded-[2rem] p-6 md:p-10 relative overflow-visible shadow-2xl min-h-[480px] flex items-center justify-center border border-white/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-[260px] mx-auto flex items-center justify-center"
              >
                {/* Smartphone Mockup */}
                <div className="w-full aspect-[9/18] bg-[#1E293B] border-[10px] border-slate-950 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-950 rounded-b-xl z-30 flex items-center justify-center">
                    <div className="w-8 h-1 bg-slate-800 rounded-full" />
                  </div>
                  {/* Header */}
                  <div className="bg-purple-900 pt-7 pb-2 px-3 border-b border-purple-800 flex items-center space-x-2 text-white z-20">
                    <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-[9px] font-black text-slate-900">
                      S
                    </div>
                    <span className="text-[10px] font-bold truncate">
                      {currentFeature.mockup.phoneTitle}
                    </span>
                  </div>
                  {/* Screen */}
                  <div className="relative flex-1 bg-slate-950 overflow-hidden flex items-center justify-center">
                    <img
                      src={currentFeature.mockup.image}
                      alt={currentFeature.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-purple-950/30 mix-blend-multiply" />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg animate-pulse">
                        <Play className="w-5 h-5 fill-slate-900 text-slate-900 ml-0.5" />
                      </div>
                    </div>
                  </div>
                  {/* Bottom Bar */}
                  <div className="bg-slate-900 p-3 border-t border-slate-800 flex items-center justify-between text-white z-20">
                    <div className="flex items-center space-x-1.5 bg-slate-800 px-2.5 py-1.5 rounded-full text-[10px]">
                      <MessageCircle className="w-3 h-3 text-yellow-400" />
                      <span>Chat</span>
                      <span className="bg-yellow-400 text-slate-900 text-[8px] px-1.5 rounded-full font-black">
                        {currentFeature.mockup.chatCount}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-300 font-medium">
                      {currentFeature.mockup.joinedCount}
                    </span>
                  </div>
                </div>

                {/* Floating Card 1 — Top Right */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="absolute -right-4 md:-right-10 top-10 bg-white rounded-2xl p-3.5 shadow-2xl border border-slate-100 max-w-[200px] space-y-2 z-40"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center text-base">
                      🎥
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 block font-medium">
                        বিষয়
                      </span>
                      <h5 className="text-[11px] font-bold text-slate-800">
                        {currentFeature.mockup.floatingCard1.tag}
                      </h5>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium leading-snug">
                    {currentFeature.mockup.floatingCard1.time}
                  </p>
                  <button className="w-full py-1.5 bg-purple-600 text-white rounded-lg text-[10px] font-bold shadow-md hover:bg-purple-700 transition-colors">
                    {currentFeature.mockup.floatingCard1.btnText}
                  </button>
                </motion.div>

                {/* Floating Card 2 — Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="absolute -left-4 md:-left-10 bottom-14 bg-white rounded-2xl p-3.5 shadow-2xl border border-slate-100 max-w-[220px] space-y-2 z-40"
                >
                  <span className="text-[9px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                    {currentFeature.mockup.floatingCard2.tag}
                  </span>
                  <h4 className="text-[11px] font-bold text-slate-800 line-clamp-2 leading-snug pt-0.5">
                    {currentFeature.mockup.floatingCard2.title}
                  </h4>
                  <p className="text-[9px] text-slate-500">
                    {currentFeature.mockup.floatingCard2.time}
                  </p>
                  <button className="w-full py-1.5 bg-purple-600 text-white rounded-xl text-[10px] font-bold shadow-md hover:bg-purple-700 transition-colors mt-0.5">
                    {currentFeature.mockup.floatingCard2.btnText}
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
