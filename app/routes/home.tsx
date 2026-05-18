import HeroSection from "~/components/Section/HeroSection";
import type { Route } from "./+types/home";
import AboutSection from "~/components/Section/AboutSection";
import ServicesSection from "~/components/Section/ServicesSection";
import WritingSection from "~/components/Section/WritingSection";
import TrustiesSection from "~/components/Section/TrustiesSection";
import CTASection from "~/components/Section/CTASection";
import TestimonialsSections from "~/components/Section/TestimonialsSections";
import { aboutItems, availability, metricItems, servicesItems, socialLinks, testimonials, trustyBrands, writingItems } from "~/utils/constant";
import type { AboutProps, CollaborationProps, HeroProps, ServiceProps, TestimonialProps, TrustiesPops, WritingsProps } from "~/utils/interface";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Jake Sta. Teresa" },
    { name: "description", content: "20+ years building scalable, user-centric products across AI, fintech, health tech, and enterprise." },
  ];
}
export async function loader(){
  //Preparation for dynamic/database values
  const homapageData = {
    heroData: {
      heroName: "Jake Sta. Teresa",
      heroImage: '/images/hero.png',
      roles: ['Software Architect', 'AI Engineer', 'Entrepreneur', 'Mentor'],
      subTitle: "20+ years building scalable, user-centric products across AI, fintech, health tech, and enterprise.",
      socialLinks: socialLinks
    },
    aboutData: {
      title: 'About Me',
      image: '/images/hero.png',
      description: `Since beginning my journey as a software engineer over 20 years ago, I’ve built scalable solutions across AI, fintech, and health tech. I’ve led engineering for high-growth platforms, founded a successful enterprise-grade product, and consistently bridged the gap between complex architecture and business growth. I’m a technical leader who values mentorship, thrives on engineering precision, and is perpetually focused on shipping great craft at scale.`,
      metricItems: metricItems,
      aboutItems: aboutItems,
    },
    serviceData: {
      title: `Services`,
      description: `A focused set of services to help you design, build, and scale reliable software.`,
      serviceItems: servicesItems,
    },
    writingData: {
      title: `Writings`,
      description: `Sharing thoughts,  lessons, ideas, and practical insights from building and scaling software.`,
      writingItems: writingItems,
    },
    trustyData: {
      title: `Trusted by Teams`,
      description: `Collaborating with companies to build and scale impactful products.`,
      trustyBrands: trustyBrands,
    },
    testimonialsData: {
      title: `Testimonials`,
      description: `What colleagues and clients say about working with me:`,
      testimonialItems: testimonials,
    },
    collabData: {
      title: `Have a project in mind?`,
      description: `I’m always open to collaborating on meaningful products and solving complex problems together.`,
      availability: availability[0],
    }
  }
  return homapageData
}
export default function Home() {

  const { heroData, aboutData, serviceData, writingData, trustyData, testimonialsData, collabData } = useLoaderData() as {
    heroData: HeroProps,
    aboutData: AboutProps,
    serviceData: ServiceProps,
    writingData: WritingsProps,
    trustyData: TrustiesPops,
    testimonialsData: TestimonialProps,
    collabData: CollaborationProps,
  }

  return <>
    <HeroSection {...heroData} />
    <AboutSection {...aboutData} />
    <ServicesSection {...serviceData} />
    <WritingSection {...writingData} />
    <TrustiesSection {...trustyData} />
    <TestimonialsSections {...testimonialsData} />
    <CTASection {...collabData} />
  </>;
}
