import HeroSection from "~/components/Section/HeroSection";
import type { Route } from "./+types/home";
import AboutSection from "~/components/Section/AboutSection";
import ServicesSection from "~/components/Section/ServicesSection";
import WritingSection from "~/components/Section/WritingSection";
import TrustiesSection from "~/components/Section/TrustiesSection";
import CTASection from "~/components/Section/CTASection";
import TestimonialsSections from "~/components/Section/TestimonialsSections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <WritingSection/>
    <TrustiesSection/>
    <TestimonialsSections/>
    <CTASection/>
  </>;
}
