"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  BookOpen,
  Users,
  CheckCircle2,
  ArrowLeft,
  Play,
  ChevronDown,
  ChevronUp,
  Zap,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { getCourseBySlug } from "@/data/courses";

export default function CourseDetailPage({ params }) {
  const { slug } = React.use(params);
  const course = getCourseBySlug(slug);
  const [openWeek, setOpenWeek] = useState(null);

  if (!course) notFound();

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Hero Banner */}
      <div className={`bg-gradient-to-br ${course.color} text-white py-12`}>
        <Container>
          {/* Back link */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-5"
            >
              <span className={`inline-block ${course.badgeColor} text-white text-xs font-black px-3 py-1 rounded-full shadow`}>
                {course.badge}
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                {course.title}
              </h1>

              <p className="text-white/80 text-base leading-relaxed max-w-md">
                {course.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 text-sm pt-1">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-white/60">({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-white/60" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-white/60" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-white/60" />
                  <span>{course.lessons}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20 max-w-xs">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/50"
                />
                <div>
                  <p className="font-bold text-sm">{course.instructor.name}</p>
                  <p className="text-white/60 text-xs">{course.instructor.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl shadow-2xl p-6 text-slate-900 space-y-5"
            >
              {/* Video Preview */}
              <div className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-slate-900 text-slate-900 ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2.5 left-2.5 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg">
                  Free Preview
                </span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-3">
                <span className="text-3xl font-black">{course.price}</span>
                <span className="text-lg text-slate-400 line-through mb-0.5">{course.originalPrice}</span>
                <span className="bg-green-100 text-green-700 text-xs font-black px-2 py-0.5 rounded-full mb-0.5">50% OFF!</span>
              </div>

              {/* Enroll Button */}
              <a
                href={course.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 bg-gradient-to-r ${course.color} text-white font-extrabold text-base rounded-2xl shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2`}
              >
                <Zap className="w-5 h-5" />
                Enroll Now
              </a>

              <p className="text-center text-xs text-slate-400">
                ✅ 7-Day Money Back Guarantee &nbsp;|&nbsp; ✅ Lifetime Access
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
                {[
                  { label: "Duration", value: course.duration },
                  { label: "Lessons", value: course.lessons },
                  { label: "Students", value: course.students },
                  { label: "Level", value: course.level },
                ].map((item) => (
                  <div key={item.label} className="text-center p-3 bg-slate-50 rounded-xl">
                    <p className="text-sm font-black text-slate-800">{item.value}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Body */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100"
            >
              <h2 className="text-xl font-extrabold text-slate-800 mb-5">
                🎯 What You Will Learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Curriculum */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100"
            >
              <h2 className="text-xl font-extrabold text-slate-800 mb-5">
                📅 Course Schedule
              </h2>
              <div className="space-y-2.5">
                {course.curriculum.map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenWeek(openWeek === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg bg-gradient-to-br ${course.color} text-white text-xs font-black flex items-center justify-center`}>
                          {idx + 1}
                        </span>
                        <span className="font-bold text-slate-800 text-sm">{item.week}</span>
                      </div>
                      {openWeek === idx ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {openWeek === idx && (
                      <div className="px-5 pb-4 bg-slate-50 border-t border-slate-100">
                        <p className="text-sm text-slate-600 pt-3 font-medium">{item.topic}</p>
                        <p className="text-xs text-slate-400 mt-1">Live Class + Recorded Video + Activity</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-slate-900 text-white rounded-3xl p-6 shadow-lg"
            >
              <h3 className="text-base font-extrabold mb-4">🌟 Why Shorolipi?</h3>
              <ul className="space-y-3 text-sm text-slate-200">
                {[
                  "🎮 Fun & interactive lessons",
                  "👩‍🏫 Expert teachers for kids",
                  "💬 Doubt solving support",
                  "🏅 Certificate on completion",
                  "📱 Learn anytime on mobile",
                  "🔁 Lifetime course access",
                ].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100"
            >
              <h3 className="text-sm font-extrabold text-slate-800 mb-3">Browse Other Courses</h3>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-bold text-sm transition-colors"
              >
                ← All Courses
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
