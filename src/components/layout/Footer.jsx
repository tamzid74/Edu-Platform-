import React from "react";
import Link from "next/link";
import {
  Users,
  MessageCircle,
  Briefcase,
  Play,
  Camera,
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
} from "lucide-react";
import Container from "./Container";
import { Button } from "@/components/ui/button";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Live Classes", href: "/live" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ],
  popularCourses: [
    { name: "Academic Courses", href: "/courses/academic" },
    { name: "Skill Development", href: "/courses/skills" },
    { name: "Language Learning", href: "/courses/language" },
    { name: "Exam Preparation", href: "/courses/exams" },
    { name: "Free Resources", href: "/resources" },
  ],
  studentSupport: [
    { name: "My Account", href: "/profile" },
    { name: "Course Certificate", href: "/certificates" },
    { name: "Help Center", href: "/help" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t pt-16 pb-8">
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  S
                </span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">
                Shorolipi
              </span>
            </Link>
            <p className="text-slate-600 mb-8 max-w-sm leading-relaxed">
              Shorolipi is Bangladesh's leading educational platform, providing
              high-quality digital learning resources and live classes to help
              students achieve their goals.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-primary transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">
              Popular Courses
            </h4>
            <ul className="space-y-4">
              {footerLinks.popularCourses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-primary transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">
              Contact Info
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm leading-relaxed">
                  Level 4, Building Name, Road Name, Dhanmondi, Dhaka-1209
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <span className="text-slate-600 text-sm">+880 1XXX XXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                <span className="text-slate-600 text-sm">
                  support@shorolipi.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Gateways Section */}
        {/* <div className="border-t border-b border-slate-200 py-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">We Accept</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
            {['bKash', 'Nagad', 'Rocket', 'SSLCommerz'].map((p) => (
              <span key={p} className="text-lg font-black text-slate-400 select-none grayscale hover:grayscale-0 transition-all cursor-default uppercase">
                {p}
              </span>
            ))}
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-slate-900">Shorolipi</span>.
            All rights reserved.
          </div>

          <div className="flex items-center space-x-8">
            {/* Language Switch Placeholder */}
            {/* <div className="flex items-center space-x-2 text-sm font-medium text-slate-600 border rounded-full px-4 py-1.5 bg-white shadow-xs">
              <Globe size={14} className="text-primary" />
              <button className="hover:text-primary transition-colors text-primary font-bold">EN</button>
              <span className="text-slate-300">|</span>
              <button className="hover:text-primary transition-colors">BN</button>
            </div> */}

            <div className="hidden sm:flex items-center space-x-4 text-sm text-slate-500">
              <Link href="/privacy" className="hover:text-primary">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-primary">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
