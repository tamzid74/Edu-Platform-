"use client";

import HeroSlider from "@/components/home/HeroSlider";
import FeatureBento from "@/components/home/FeatureBento";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import ReviewSection from "@/components/home/ReviewSection";
import Container from "@/components/layout/Container";
import AcademicProgramSection from "@/components/home/AcademicProgramSection";

export default function Home() {
  return (
    <div className="flex flex-col pb-10 pt-20">
      {/* Hero Slider */}
      <div className="mb-16">
        <HeroSlider />
      </div>

      {/* Academic & Skills Program Section — Full Width, no gap */}
      <AcademicProgramSection />

      {/* Rest of sections with consistent spacing */}
      <div className="flex flex-col gap-16 mt-16">
        {/* Benefits Bento Grid */}
        <FeatureBento />

        {/* Promotional Banner Section */}
        <PromotionalBanner />

        {/* Review & Trust Section */}
        <Container>
          <ReviewSection />
        </Container>
      </div>
    </div>
  );
}
