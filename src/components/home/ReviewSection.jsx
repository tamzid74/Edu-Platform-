"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Play, Gem, MonitorPlay, Wallet, BookOpen, X } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "সেরা কন্টেন্ট",
    icon: <Gem className="w-8 h-8 text-cyan-500" />,
    bgColor: "bg-cyan-100/50",
  },
  {
    title: "সহজ স্টাডি ম্যাটেরিয়াল",
    icon: <MonitorPlay className="w-8 h-8 text-purple-600" />,
    bgColor: "bg-purple-100/50",
  },
  {
    title: "স্বল্প খরচে অনেক কিছু",
    icon: <Wallet className="w-8 h-8 text-emerald-600" />,
    bgColor: "bg-emerald-100/50",
  },
  {
    title: "সাবলীল উপস্থাপনা",
    icon: <BookOpen className="w-8 h-8 text-rose-600" />,
    bgColor: "bg-rose-100/50",
  },
];

const reviews = [
  {
    id: 1,
    quote: "প্রতিটা কনসেপ্ট ক্লিয়ার করতে আমাকে অনেক বেশি হেল্প করেছে অ্যানিমেটেড লেসনগুলো",
    author: "নিবিড় কর্মকার",
    details: "Academic Program '25 SSC '25-এ সারাদেশে ১ম স্থান অর্জনকারী (প্রাপ্ত নম্বর - ১২৮৫)",
    videoThumbnail: "/images/student_video_thumbnail.png",
    videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso",
  },
  {
    id: 2,
    quote: "Shorolipi এর ক্লাসগুলো এতটাই গোছানো যে, আলাদা কোনো প্রাইভেটের দরকার হয়নি।",
    author: "সাদিয়া ইসলাম",
    details: "ঢাকা থেকে ২০২৩ ঢাবি ভর্তি পরীক্ষা - ২৫৩ তম",
    videoThumbnail: "/images/student_video_thumbnail.png",
    videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso",
  },
  {
    id: 3,
    quote: "বোর্ড পরীক্ষার আগে রিভিশন ক্লাসগুলো আমার রেজাল্ট ভালো করার মূল চাবিকাঠি ছিল।",
    author: "রাহুল দাস",
    details: "চট্টগ্রাম থেকে ২০২৪ এইচএসসি পরীক্ষায় জিপিএ-৫",
    videoThumbnail: "/images/student_video_thumbnail.png",
    videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso",
  },
  {
    id: 4,
    quote: "বোর্ড পরীক্ষার আগে রিভিশন ক্লাসগুলো আমার রেজাল্ট ভালো করার মূল চাবিকাঠি ছিল।",
    author: "রাহুল",
    details: "Dhaka থেকে ২০২3 এইচএসসি পরীক্ষায় জিপিএ-৫",
    videoThumbnail: "/images/student_video_thumbnail.png",
    videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso",
  }
];

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="w-full mt-12 mb-20">
      {/* Top Blue Background Section */}
      <div className="bg-[#7393B3] rounded-[2rem] px-8 md:px-12 lg:px-16 pt-12 md:pt-20 lg:pt-24 pb-52 md:pb-64 lg:pb-72 text-white max-w-7xl w-full mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              কেন Shorolipi-তে আস্থা রাখবে?
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-[480px]">
              সেরা মেন্টর ও সর্বাধুনিক প্রযুক্তির সাথে সারাদেশের ৩০
              লক্ষ+ শিক্ষার্থীর মানসম্মত পড়ালেখা ও পরীক্ষা
              প্রস্তুতির নির্ভরযোগ্য প্রতিষ্ঠান Shorolipi!
            </p>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#f2f4f8] rounded-xl p-4 flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`p-2.5 rounded-lg ${feature.bgColor} flex-shrink-0`}>
                  {feature.icon}
                </div>
                <h3 className="text-slate-800 font-bold text-[17px] md:text-lg">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Overlapping Review Slider */}
      <div className="max-w-5xl mx-auto relative -mt-40 z-10 px-4 sm:px-8">
        {/* Previous Button */}
        <button
          onClick={prevReview}
          className="hidden md:flex absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-14 h-14 items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-gray-50 transition-all hover:scale-105 border border-slate-100"
          aria-label="Previous Review"
        >
          <ChevronLeft className="w-6 h-6 text-blue-600" />
        </button>

        {/* Slider Container */}
        <div className="bg-white rounded-[1.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] p-6 md:p-10 overflow-hidden relative border border-slate-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-10 items-center"
            >
              {/* Review Text */}
              <div className="space-y-6 order-2 md:order-1 flex flex-col justify-center h-full">
                <div className="bg-blue-100/50 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Quote className="w-6 h-6 text-blue-600 fill-blue-600 transform rotate-180" />
                </div>
                
                <p className="text-lg md:text-[1.35rem] text-slate-600 font-medium leading-relaxed tracking-wide min-h-[100px]">
                  "{reviews[currentIndex].quote}"
                </p>
                
                <div className="space-y-1 pt-4">
                  <h4 className="text-lg font-bold text-slate-800">
                    {reviews[currentIndex].author}
                  </h4>
                  <p className="text-[13px] md:text-sm text-slate-500 leading-snug">
                    {reviews[currentIndex].details}
                  </p>
                </div>
              </div>

              {/* Video Thumbnail */}
              <div 
                onClick={() => setIsModalOpen(true)}
                className="hidden md:block relative aspect-[4/3] rounded-[1.25rem] overflow-hidden order-1 md:order-2 group cursor-pointer shadow-lg border border-slate-100/50"
              >
                <Image
                  src={reviews[currentIndex].videoThumbnail}
                  alt="Student review video"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={nextReview}
          className="hidden md:flex absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-14 h-14 items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-gray-50 transition-all hover:scale-105 border border-slate-100"
          aria-label="Next Review"
        >
          <ChevronRight className="w-6 h-6 text-blue-600" />
        </button>

        {/* Mobile Navigation / Pagination Dots */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-2.5">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-pink-500" : "w-2.5 bg-slate-400 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full shadow-2xl relative border border-slate-100 flex flex-col space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-6 top-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Header Quote */}
              <div className="pr-12">
                <p className="text-lg md:text-xl font-medium text-blue-950 leading-relaxed">
                  "{reviews[currentIndex].quote}"
                </p>
              </div>

              {/* YouTube Video Embed */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-slate-900 border border-slate-100">
                <iframe
                  src={`${reviews[currentIndex].videoUrl}?autoplay=1`}
                  title="Student Review Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
