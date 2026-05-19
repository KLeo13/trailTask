import AboutHeaderSection from "~/components/Section/AboutHeaderSection";
import type { Route } from "./+types/about";
import { availability, companyCollabs, experiences, metricItems, skillGroup, socialLinks, testimonials } from "~/utils/constant";
import { useLoaderData } from "react-router";
import type { AboutHeaderProps, CollaborationProps, CompaniesProps, CompanyCollabContentProps, ExperienceContentProps, ExperienceProps, TestimonialProps } from "~/utils/interface";
import ExperienceSection from "~/components/Section/ExperienceSection";
import TestimonialsSections from "~/components/Section/TestimonialsSections";
import CompanyCollabsSection from "~/components/Section/CompanyCollabSection";
import CTASection from "~/components/Section/CTASection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Me | Jake Sta. Teresa" },
    { name: "description", content: "20+ years building scalable, user-centric products across AI, fintech, health tech, and enterprise." },
  ];
}


export async function loader(){
    const aboutData = {
        heroData: {
            title: "About Me",
            heroImage: '/images/hero.png',
            roles: ['Software Architect', 'AI Engineer', 'Entrepreneur', 'Mentor'],
            description: `I'm a veteran software engineer and technical leader with over 20 years of experience building scalable, user-centric solutions across AI, fintech, health tech, and enterprise platforms.\n\nAt Undetectable AI, I lead engineering for intelligent content detection platforms powered by large language models (LLMs) — scaling systems from 50,000 to over 500,000 requests per day. My role bridges architecture, hands-on development, and close collaboration with product and growth teams.\n\nI'm the founder of Barcode Essentials, transforming a niche technical concept into a commercially viable, enterprise-grade product. Throughout my career I've consistently combined engineering precision with business alignment.\nI value mentoring, code quality, and building teams that ship fast without compromising craft.`,
            skillGroup: skillGroup,
            socialLinks: socialLinks
        },
        experienceData: {
            title: "Experience",
            description: "A curated history of work across engineering, product, and technical leadership.",
            experiences: experiences,
            metricItems: metricItems,
        },
        companiesData: {
            title: "I'm proud to have collaborated with some awesome companies:",
            companies: companyCollabs
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

    return aboutData
}
export default function About() {

    const { heroData, experienceData, companiesData, testimonialsData, collabData } = useLoaderData() as {
        heroData: AboutHeaderProps,
        experienceData: ExperienceContentProps,
        companiesData: CompanyCollabContentProps,
        testimonialsData: TestimonialProps,
        collabData: CollaborationProps
    }
    return <>
        <AboutHeaderSection {...heroData}/>
        <ExperienceSection {...experienceData}/>
        <CompanyCollabsSection {...companiesData}/>
        <TestimonialsSections {...testimonialsData}/>
        <CTASection {...collabData} />
    </>
}