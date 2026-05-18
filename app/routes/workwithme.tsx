import { availability, companyCollabs, metricItems, servicesItems, testimonials, workfaqs, workGuides, workPhase } from "~/utils/constant";
import type { Route } from "./+types/workwithme";
import { useLoaderData } from "react-router";
import type { CollaborationProps, CompanyCollabContentProps, FAQContentProps, ServiceProps, TestimonialProps, WorkerDetails, WorkHeaderProps, WorkPhaseContentProps } from "~/utils/interface";
import ServicesSection from "~/components/Section/ServicesSection";
import CompanyCollabsSection from "~/components/Section/CompanyCollabSection";
import TestimonialsSections from "~/components/Section/TestimonialsSections";
import CTASection from "~/components/Section/CTASection";
import WorkHeaderSection from "~/components/Section/WorkHeaderSection";
import WorkContentSection from "~/components/Section/WorkContentSection";
import FAQSection from "~/components/Section/FAQSection";
import WorkPhaseSection from "~/components/Section/WorkPhaseSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mentorship | Jake Sta. Teresa" },
    { name: "description", content: "20+ years building scalable, user-centric products across AI, fintech, health tech, and enterprise." },
  ];
}

export async function loader(){
    const workData = {
        headerData: {
            title: 'Build, Scale, and Grow Together',
            subTitle: 'WORK WITH ME',
            description: 'Let’s develop scalable systems and ship great products.',
            workerGuideTitle: 'How I Can Help You:',
            workGuides: workGuides
        },
        workerData: {
            image: '/images/hero.png',
            title: 'Why Me?',
            subTitle: 'I bridge the gap between scalable architecture, AI innovation, and team growth.',
            description: `I bridge the gap between scalable architecture, AI innovation, and team growth.\n\nCollaborating with me means bringing over two decades of software engineering experience into your corner. I don't just write code—I design architectures that scale, build AI-driven platforms, and mentor teams to ship fast while maintaining high quality.`,
            workerSkills: ['Microservices','Performance','Database (MySQL/Mongo)','AWS','DevOps','Artificial Intelligence Integration','React','Node.js','Python','.net','Java','SaaS & Startup Growth','Team Mentorship','1:1 Mentorship','Agile Development',],
            workerMetric: metricItems
        },
        servicesData: {
            title: `Services`,
            description: `A focused set of services to help you design, build, and scale reliable software.`,
            serviceItems: servicesItems,
        },
        phaseData: {
            title: 'How It Works:',
            description: 'From initial idea to execution—a clear, collaborative process on how we work together.',
            phases: workPhase
        },
        companiesData: {
            title: "I'm proud to have collaborated with some awesome companies:",
            companies: companyCollabs
        },
        testimonialsData: {
            title: `Testimonials`,
            description: `What colleagues and clients say about working with me:`,
            testimonialItems: testimonials
        },
        faqsData: {
            title: 'FAQs',
            description: `Whether you're building a product, levelling up technically, or navigating a career pivot —\n\nhere's what I bring to the table.`,
            faqs: workfaqs
        },
        collabData: {
            title: `Have a project in mind?`,
            description: `I’m always open to collaborating on meaningful products and solving complex problems together.`,
            availability: availability[0],
        }
    }
    return workData
}


export default function WorkWithMe() {

    const { headerData, workerData, servicesData, phaseData, companiesData, testimonialsData, faqsData, collabData } = useLoaderData() as {
        headerData: WorkHeaderProps,
        workerData: WorkerDetails,
        servicesData: ServiceProps,
        phaseData: WorkPhaseContentProps,
        companiesData: CompanyCollabContentProps,
        testimonialsData: TestimonialProps,
        faqsData: FAQContentProps,
        collabData: CollaborationProps
    }
    return <>
        <WorkHeaderSection {...headerData}/>
        <WorkContentSection {...workerData}/>
        <ServicesSection {...servicesData}/>
        <WorkPhaseSection {...phaseData}/>
        <CompanyCollabsSection {...companiesData}/>
        <TestimonialsSections {...testimonialsData}/>
        <FAQSection {...faqsData}/>
        <CTASection {...collabData}/>
    </>
}