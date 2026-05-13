import { BrainIcon, CodeIcon, GithubIcon, LaptopCodeIcon, LightIcon, LinkedInIcon, RocketIcon, TeachIcon, XIcon } from "./icons";
import type { AboutItemsProps, NavigationItemProps, ServicesItemsProps, SocialLinksProps, TestimonialProps, TrustyBrandPlacement, TrustyBrandProps, WritingItemsProps } from "./interface";

export const navigationItems: NavigationItemProps[] = [
  { label: 'Home', to: '/'},
  { label: 'About', to: '/about'},
  { label: 'Writings', to: '/writings'},
  { label: 'Mentorship', to: '/mentorship'},
]

export const socialLinks: SocialLinksProps[] = [
  { label: 'LinkedIn', icon: <LinkedInIcon/>, to: '#'},
  { label: 'GitHub', icon: <GithubIcon/>, to: '#'},
  { label: 'X', icon: <XIcon/>, to: '#'},
]

export const aboutItems: AboutItemsProps[] = [
  {icon: <CodeIcon/>, title: 'Software Architect', description: 'I design scalable, maintainable systems that support real-world applications and long-term growth.', subTitle: 'Things I focus on', subDescription: 'System Design, Scalable Architecture, Microservices, Performance, Reliability', keywordTitle: 'Core Strengths', keywords: ['Architecture Design', 'Distributed Systems', 'API Design', 'Cloud-Native Solutions', 'Technical Strategy']},
  {icon: <BrainIcon/>, title: 'AI Engineer', description: 'I build and integrate AI-driven solutions to automate workflows and enhance product capabilities.', subTitle: 'Technologies I use', subDescription: 'Python, LLM APIs, Node.js, Cloud AI Services', keywordTitle: 'Focus Areas', keywords: ['AI/LLM Integration','Automation Systems','Prompt Engineering','AI Product Development','Data-Driven Solutions',]},
  {icon: <LightIcon/>, title: 'Entrepreneur', description: 'I build and launch digital products, combining engineering with product thinking and business strategy.', subTitle: 'What I do', subDescription: 'MVP Development, Product Strategy, Startup Execution, Scaling Systems', keywordTitle: 'Experience', keywords: ['SaaS Products','End-to-End Development','Founder Experience','Rapid Prototyping',]},
  {icon: <TeachIcon/>, title: 'Mentor', description: 'I help developers grow their skills, improve their thinking, and advance their careers with practical, real-world guidance.', subTitle: 'What I help with', subDescription: 'Career Growth, System Design, Coding Best Practices, Interview Preparation', keywordTitle: 'Mentor Stats', keywords: ['15+ years experience','5+ teams led','1000+ hours mentoring','Senior & Lead coaching',]},
] 

export const servicesItems: ServicesItemsProps[] = [
  {icon: <RocketIcon/>, title: 'MVP & Startup App Development', description: 'Launch in 3-4 months, not 12-18. Lean MVP development for startups seeking funding and product-market fit validation. Built SWEAT from MVP to $400M exit - we know what investors scrutinize and users actually want.', list: ['MVP Strategy & Scope Validation','Rapid Prototyping & User Testing','Investor-Ready Technical Architecture','3-4 Month Launch Timelines','Post-Launch Iteration & Scaling Support',]},
  {icon: <BrainIcon/>, title: 'AI-Powered App Development', description: 'AI is not the answer to everything. But when you build with experts who know what to build and why, AI becomes a force multiplier. We develop AI-powered applications with judgment - combining product expertise since 2013, proven engineering standards, and relentless focus on business outcomes.', list: ['AI Strategy & Discovery','AI-Powered Mobile & Web Applications','AI Integration into Existing Products','Custom Model Development & Fine-Tuning','AI App Scaling & Production Optimization',]},
  {icon: <LaptopCodeIcon/>, title: 'Cross-Platform App Development', description: 'Expert Flutter app development for iOS and Android from a single codebase. 40% cost savings with simultaneous platform launch. Native performance without compromise.', list: ['Single codebase for iOS and Android','40% cost savings vs separate native development','Native performance and platform-specific features','Faster time to market - simultaneous platform launch',]},
  {icon: <TeachIcon/>, title: 'Mentorship', description: "Grow as an engineer with practical, real-world guidance. I work with developers and teams to improve how they think, build, and make technical decisions.", list: ['1:1 mentorship and ongoing support','System design and architecture guidance','Code reviews and technical feedback','Real-world problem solving and best practices',]},
]

export const writingItems: WritingItemsProps[] = [
  {image: '/images/writing.png', category: 'Category', date: 'Aprill 22, 2026', title: 'This is a title. This is a title. This is a title.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
  {image: '/images/writing.png', category: 'Category', date: 'Aprill 22, 2026', title: 'This is a title. This is a title. This is a title.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
  {image: '/images/writing.png', category: 'Category', date: 'Aprill 22, 2026', title: 'This is a title. This is a title. This is a title.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
  {image: '/images/writing.png', category: 'Category', date: 'Aprill 22, 2026', title: 'This is a title. This is a title. This is a title.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
]

export const trustyBrands: TrustyBrandPlacement[] = [
  {thumb: '/images/brands/undetectable.png', label: 'Undetectable AI', link: '#', classTransform: 'top-0 left-1/2 -translate-x-1/2'},
  {thumb: '/images/brands/truthscan.png', label: 'TruthScan', link: '#', classTransform: 'top-15 left-5'},
  {thumb: '/images/brands/barcode.png', label: 'Barcode Essentials', link: '#', classTransform: 'top-15 right-0'},
  {thumb: '/images/brands/sonder.png', label: 'Sonder', link: '#', classTransform: 'top-30 left-1/2 -translate-x-1/2 '},
  {thumb: '/images/brands/dash.png', label: 'Dash', link: '#', classTransform: 'left-0 bottom-5'},
  {thumb: '/images/brands/sandstone.png', label: 'Sandstone Technology', link: '#', classTransform: 'right-0 bottom-0'},
]
export const testimonials: TestimonialProps[] = [
  {avatar: '/images/testimonial/Apiado.png', name: 'Mark Apiado', position: 'Full Stack Javascript Developer', testimony: "Jake is one of the most humble people you'll meet, which is rare for someone with his level of expertise. He's a true full-stack architect and he communicates in a way that makes complex things easy to understand. Beyond the technical skills, he's someone I'm glad to call a friend. If you get the chance to work with Jake, take it."},
  {avatar: '/images/testimonial/Miller.png', name: 'Benjamin Miller', position: 'COO at TruthScan', testimony: "How do I even talk about a guy as strong as Jake? He's the best backend engineer I've ever known. He has great people skills. He's works his butt off. He's really kind. He's taken on a leadership role with the entire team..."},
  {avatar: '/images/testimonial/Lingel.jpg', name: 'Grant Lingel', position: 'Former CGO at Undetectable AI', testimony: "Jake is the professional you always hope to find but rarely, if ever, have the luck to do so. Working with Jake was such a positive and lucky experience for me. Not only is he insanely good at his job, Jake is so reliable that I never even thought once to follow up with him about anything because I just knew that it would be delivered when needed and that the execution would be flawless. Even if I dropped something in Slack at an obnoxious hour because I didn't want to forget, and I clearly said that this isn't urgent, he would get on it. But the thing that makes Jake such a rare find is that he goes so far beyond the scope of what he is there for and always delivers far more than what was expected. Finding someone who is proactive and seeking additional value to add is not common. Most people who are proactive, and I group myself here a lot of the time as well, try to deliver more value but end up scatter-braining their way into adding things or bringing up ideas that are all over the map. Not Jake. Pure value, each and every time. Jake, it was a pleasure working with you and learning from you. It's a shame there aren't more Jakes out there."},
  {avatar: '/images/testimonial/Raza.png', name: 'Wamiq Raza', position: 'Generative AI Engineer', testimony: 'Jake has an exceptional talent for designing scalable back-end solutions that handle millions of users with ease. From load balancers to AI-driven components, his approach blends technical excellence with forward-thinking architecture. A true asset to any high-growth team.'},
  {avatar: '/images/testimonial/Arthur.png', name: 'Arthur A.', position: 'Founder @ Artech Digital', testimony: 'Jake is a very reliable software engineer and a great technical leader. My experience with Jake has been nothing but wonderful. Our projects have progressed a lot and the last month has been very transformative. I can predict achieving further milestones in the months ahead. Jake is not just a great developer but a partner in success. Five stars!'},
  {avatar: '/images/testimonial/Monty.png', name: 'Dominique Monty', position: 'Customer Success and Engineering Leadership', testimony: 'Jake was a great contributor to the mobile app team during his 5 years at Sandstone.  During that time, I have see Jake progress from being a mobile app developer to taking ownership of some of the key components on the server side, stepping up to the role of technical lead and also scrum master.  Jake has a lot of talent and skills and a great attitude towards work and this team.'},
]