"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, ChevronDown, User,  Phone, Home, BookOpen, Users, LogIn } from "lucide-react";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { courses } from "@/data/courses";

const translations = {
  en: {
    home: "Home",
    courses: "Courses",
    about: "About",
    search: "Search...",
    login: "Login",
    englishCourse: "English Language",
    spokenEnglish: "Spoken English",
    englishStories: "English Stories & Reading",
  },
  bn: {
    home: "হোম",
    courses: "কোর্সসমূহ",
    about: "আমাদের সম্পর্কে",
    search: "সার্চ করুন...",
    login: "লগ-ইন",
    englishCourse: "English Language",
    spokenEnglish: "Spoken English",
    englishStories: "English Stories & Reading",
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const pathname = usePathname();

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (course.highlights && course.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const t = translations[lang];

  const navLinks = [
    { name: t.home, href: "/" },
    { name: t.courses, href: "/courses", isDropdown: true },
    { name: t.about, href: "/about" },
  ];

  const mobileLinks = [
    { name: t.home, href: "/", icon: Home },
    { name: t.courses, href: "/courses", icon: BookOpen, isDropdown: true },
    { name: t.about, href: "/about", icon: Users },
    { name: t.login, href: "/login", icon: LogIn },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "pt-4 pb-2" : "py-4",
      )}
    >
      <Container>
        <div 
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled 
              ? "bg-background/95 backdrop-blur-md shadow-lg rounded-full px-8 py-4 border border-border/50 mx-2 lg:mx-0" 
              : "bg-transparent px-4 py-3"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                S
              </span>
            </div>
            <span className="font-bold text-xl tracking-tight text-primary">
              Shorolipi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-muted/40 p-1.5 rounded-full mx-auto">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
              
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center text-sm font-medium px-4 py-1.5 rounded-full transition-colors",
                        isActive
                          ? "bg-background text-orange-500 shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div className="absolute top-full left-0 mt-3 w-56 bg-background border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-2 flex flex-col space-y-1">
                        <Link href="/courses/english" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">{t.englishCourse}</Link>
                        <Link href="/courses/spoken-english" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">{t.spokenEnglish}</Link>
                        <Link href="/courses/english-stories" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">{t.englishStories}</Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium px-4 py-1.5 rounded-full transition-colors",
                    isActive
                      ? "bg-background text-orange-500 shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 shrink-0">
            <Dialog open={isSearchOpen} onOpenChange={(open) => { setIsSearchOpen(open); if (!open) setSearchQuery(""); }}>
              <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden border-none shadow-2xl">
                <DialogHeader className="p-4 border-b">
                  <DialogTitle className="sr-only">Search</DialogTitle>
                  <div className="flex items-center space-x-3">
                    <Search className="h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Search courses (e.g. English, Spoken)..."
                      className="border-none focus-visible:ring-0 text-lg p-0 h-auto"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                  </div>
                </DialogHeader>
                <div className="p-4 max-h-[350px] overflow-y-auto">
                  {!searchQuery.trim() ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center text-muted-foreground">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
                        <Search className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <p className="text-sm font-medium text-slate-700">Search for a course</p>
                      <p className="text-xs text-muted-foreground mt-1">Type course name (e.g. English, Spoken) to see results</p>
                    </div>
                  ) : filteredCourses.length > 0 ? (
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-muted-foreground px-2 uppercase tracking-wider mb-2">
                        Search Results
                      </p>
                      {filteredCourses.map((course) => (
                        <Link
                          key={course.slug}
                          href={`/courses/${course.slug}`}
                          onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                          className="flex items-center gap-4 p-3 rounded-2xl hover:bg-muted transition-colors group"
                        >
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-14 h-14 rounded-xl object-cover flex-shrink-0 border"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-sm font-extrabold text-slate-900 group-hover:text-orange-500 transition-colors truncate">
                                {course.title}
                              </span>
                              <span className="text-[10px] bg-orange-100 text-orange-600 font-bold px-2 py-0.5 rounded-full">
                                {course.price}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {course.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 flex flex-col items-center justify-center text-center text-muted-foreground">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
                        <Search className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <p className="text-sm font-medium text-slate-700">No matching courses found</p>
                      <p className="text-xs text-muted-foreground mt-1">Try searching with different keywords</p>
                    </div>
                  )}
                </div>
                <div className="p-3 bg-muted/50 border-t flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                  <span>Shorolipi Search</span>
                  <div className="flex items-center space-x-2">
                    <span className="px-1.5 py-0.5 bg-background rounded border">
                      ESC
                    </span>
                    <span>to close</span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-5 xl:space-x-6">
              {/* Search Bar */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center bg-background border border-border/60 rounded-full h-10 px-4 w-[180px] xl:w-[220px] hover:border-primary/50 transition-colors text-left shadow-sm"
              >
                <Search className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-sm text-muted-foreground flex-1">{t.search}</span>
              </button>

              {/* Language Switcher */}
              <div className="flex items-center bg-muted/60 rounded-full p-1 border border-border/40">
                <button 
                  onClick={() => setLang('bn')}
                  className={cn(
                    "px-3 py-1 text-xs font-bold rounded-full transition-colors",
                    lang === 'bn' ? "bg-[#10b981] text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  BN
                </button>
                <button 
                  onClick={() => setLang('en')}
                  className={cn(
                    "px-3 py-1 text-xs font-bold rounded-full transition-colors",
                    lang === 'en' ? "bg-[#10b981] text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  EN
                </button>
              </div>

              {/* Phone */}
              <a href="tel:16910" className="flex items-center text-[#10b981] font-bold text-lg hover:opacity-80 transition-opacity">
                <Phone className="w-5 h-5 mr-1.5 fill-current" />
                16910
              </a>

              {/* Login Link */}
              <Link href="/login" className="flex items-center text-[#334155] font-medium text-[17px] hover:text-[#10b981] transition-colors ml-2">
                <User className="w-5 h-5 mr-2 stroke-[2.5]" />
                {t.login}
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <Sheet>
                <SheetTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8"
                    />
                  }
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 flex flex-col bg-white">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Mobile Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex-1 overflow-y-auto py-8">
                    <div className="flex flex-col space-y-1">
                      {mobileLinks.map((link) => {
                        const Icon = link.icon;
                        
                        if (link.isDropdown) {
                          return (
                            <div key={link.name} className="flex flex-col">
                              <button
                                onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                                className="flex items-center justify-between px-8 py-3.5 hover:bg-muted/50 transition-colors w-full text-left"
                              >
                                <div className="flex items-center space-x-4">
                                  <Icon className="w-[18px] h-[18px] text-orange-500" strokeWidth={2} />
                                  <span className="text-[15px] font-medium text-[#1e293b]">{link.name}</span>
                                </div>
                                <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform duration-200", isMobileCoursesOpen && "rotate-180")} />
                              </button>
                              
                              <div className={cn("flex flex-col overflow-hidden transition-all duration-300 ease-in-out bg-muted/30", isMobileCoursesOpen ? "max-h-[400px] border-y border-border/40 py-2 opacity-100" : "max-h-0 opacity-0")}>
                                <SheetClose nativeButton={false} render={<Link href="/courses/english" className="pl-16 pr-8 py-2.5 text-sm text-[#1e293b] hover:text-orange-500 transition-colors block" />}>
                                  {t.englishCourse}
                                </SheetClose>
                                <SheetClose nativeButton={false} render={<Link href="/courses/spoken-english" className="pl-16 pr-8 py-2.5 text-sm text-[#1e293b] hover:text-orange-500 transition-colors block" />}>
                                  {t.spokenEnglish}
                                </SheetClose>
                                <SheetClose nativeButton={false} render={<Link href="/courses/english-stories" className="pl-16 pr-8 py-2.5 text-sm text-[#1e293b] hover:text-orange-500 transition-colors block" />}>
                                  {t.englishStories}
                                </SheetClose>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <SheetClose
                            key={link.name}
                            nativeButton={false}
                            render={
                              <Link
                                href={link.href}
                                className="flex items-center space-x-4 px-8 py-3.5 hover:bg-muted/50 transition-colors w-full text-left"
                              />
                            }
                          >
                            <Icon className="w-[18px] h-[18px] text-orange-500" strokeWidth={2} />
                            <span className="text-[15px] font-medium text-[#1e293b]">{link.name}</span>
                          </SheetClose>
                        );
                      })}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
