import { availability, companyCollabs, faqs, mentorDetails, mentorGuides, mentorShipTestimonials, mentorSkills, plansPricing, sessionPricing } from "~/utils/constant";
import type { Route } from "./+types/mentorship";
import { useLoaderData } from "react-router";
import type { CollaborationProps, CompanyCollabContentProps, FAQContentProps, MentorContentProps, MentorHeaderProps, MentorPricingContentProps, TestimonialProps } from "~/utils/interface";
import CompanyCollabsSection from "~/components/Section/CompanyCollabSection";
import TestimonialsSections from "~/components/Section/TestimonialsSections";
import MentorHeaderSection from "~/components/Section/MentorHeaderSection";
import MentorSection from "~/components/Section/MentorSection";
import MentorPricingSection from "~/components/Section/MentorPricingSection";
import FAQSection from "~/components/Section/FAQSection";
import CTASection from "~/components/Section/CTASection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mentorship | Jake Sta. Teresa" },
    { name: "description", content: "20+ years building scalable, user-centric products across AI, fintech, health tech, and enterprise." },
  ];
}

export async function loader(){
    const mentorshipData = {
        mentorHeaderData: {
            title: 'Start or Elevate Your Career in Software Development',
            subTitle: '1-ON-1 Software Mentorship',
            description: 'Mentorship tailored to where you are — and where you want to go.',
            mentorGuides: {
                title: 'How I Can Guide You:',
                guides: mentorGuides
            }
        },
        mentorData: {
            image: '/images/hero.png',
            title: 'Me as Your Mentor',
            description: `I’m Jake—a technical lead, scrum master, founder, entrepreneur, and mentor with 20+ years of experience helping developers grow into confident, high-impact engineers. I work closely with you to understand your goals, simplify complex concepts, and provide practical guidance. From coding and interviews to career growth, you’ll get structured support, hands-on exercises, code reviews, and focused 1:1 sessions to help you move forward with clarity.`,
            details: mentorDetails,
            mentorSkills: {
                title: 'What You Get',
                description: 'Focused guidance, real-world insights, and continuous support—designed to help you build and grow effectively.',
                skills: mentorSkills
            }
        },
        pricingData: {
            title: '1-on-1 Mentorship',
            description: 'Guidance to help you build, think, and grow.',
            plans: plansPricing,
            sessions: sessionPricing
        },
        companiesData: {
            title: "I'm proud to have collaborated with some awesome companies:",
            companies: companyCollabs
        },
        testimonialsData: {
            title: `Testimonials`,
            description: `What colleagues and clients say about working with me:`,
            testimonialItems: mentorShipTestimonials,
        },
        faqData: {
            title: `FAQs`,
            description: `Whether you're building a product, levelling up technically, or navigating a career pivot —\nhere's what I bring to the table.`,
            faqs: faqs
        },
        collabData: {
            title: `Ready to level up?`,
            description: `Get unstuck, build better skills, and move forward with clarity—one step at a time.`,
            availability: availability[2],
        }
    }
    return mentorshipData
}
export default function Mentorship() {

    const { mentorHeaderData, mentorData, pricingData, companiesData, testimonialsData, faqData, collabData } = useLoaderData() as {
        mentorHeaderData: MentorHeaderProps
        mentorData: MentorContentProps
        pricingData: MentorPricingContentProps
        companiesData: CompanyCollabContentProps
        testimonialsData: TestimonialProps
        faqData: FAQContentProps
        collabData: CollaborationProps
    }

    return <>
        <MentorHeaderSection {...mentorHeaderData}/>
        <MentorSection {...mentorData}/>
        <MentorPricingSection {...pricingData}/>
        <CompanyCollabsSection {...companiesData}/>
        <TestimonialsSections {...testimonialsData}/>
        <FAQSection {...faqData}/>
        <CTASection {...collabData} />
    </>

}
