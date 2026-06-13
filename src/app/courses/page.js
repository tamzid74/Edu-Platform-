"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Clock, BookOpen, Users, ChevronRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-28 pb-20">
      <Container>
        {/* Page Header */}
        <div className="text-center space-y-3 mb-12 max-w-xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black text-slate-800"
          >
            📚 Our Courses
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-base"
          >
            Fun English courses made just for kids — learn, play & grow! 🌟
          </motion.p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:-translate-y-1 group"
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-50`} />
                <span className={`absolute top-3 left-3 ${course.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {course.badge}
                </span>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                  <span className="flex items-center gap-1 bg-black/50 text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                    <Clock className="w-3 h-3" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1 bg-black/50 text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                    <BookOpen className="w-3 h-3" /> {course.lessons}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                <h2 className="text-lg font-extrabold text-slate-800 leading-snug">
                  {course.title}
                </h2>

                {/* Instructor */}
                <div className="flex items-center gap-2.5">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-7 h-7 rounded-full object-cover border-2 border-white shadow"
                  />
                  <p className="text-xs font-semibold text-slate-600">{course.instructor.name}</p>
                </div>

                {/* Rating & Students */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-800">{course.rating}</span>
                    <span className="text-slate-400 text-xs">({course.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Users className="w-3.5 h-3.5" />
                    <span className="text-xs">{course.students}</span>
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div>
                    <p className="text-xl font-black text-slate-900">{course.price}</p>
                    <p className="text-xs text-slate-400 line-through">{course.originalPrice}</p>
                  </div>
                  <Link
                    href={`/courses/${course.slug}`}
                    className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${course.color} text-white font-bold text-sm px-4 py-2 rounded-xl shadow hover:scale-105 transition-transform`}
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-slate-400 text-sm"
        >
          Need help choosing? Call us at{" "}
          <a href="tel:16910" className="text-orange-500 font-bold hover:underline">
            16910
          </a>{" "}
          📞
        </motion.p>
      </Container>
    </div>
  );
}
