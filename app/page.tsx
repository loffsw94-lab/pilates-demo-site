import Booking from "@/components/Booking";
import Coaching from "@/components/Coaching";
import Contact from "@/components/Contact";
import Facility from "@/components/Facility";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Journey from "@/components/Journey";
import Pricing from "@/components/Pricing";
import Programs from "@/components/Programs";
import StickyCta from "@/components/StickyCta";
import Studio from "@/components/Studio";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div id="top">
      <Header />
      {/*
        전환 퍼널 순서:
        공간 → 시설 → 방식 → 사람 → 변화 → 후기(증거) → 이용권 → 예약 → FAQ(불안 해소) → 문의
      */}
      <main>
        <Hero />
        <Programs />
        <Studio />
        <Facility />
        <Coaching />
        <Instructors />
        <Journey />
        <Testimonials />
        <Pricing />
        <Booking />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
