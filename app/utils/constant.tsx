import { CheckIcon } from "@mantine/core";
import { AppleIcon, AvatarIcon, BrainIcon, BranchIcon, CodeIcon, CommentIcon, EmailIcon, GithubIcon, GradIcon, InquiryIcon, LaptopCodeIcon, LayerIcon, LightIcon, LinkedInIcon, PinIcon, RefreshIcon, RepairIcon, RibbonIcon, RocketIcon, ShapesIcon, SuitcaseIcon, TeachIcon, TimesIcon, ToolsIcon, XIcon } from "./icons";
import type { AboutItemsProps, AboutMetricProps, AvailabilityProps, CompaniesProps, ExperienceProps, FAQ, IconKey, MentorDetailsProps, MentorPricing, MentorSkillsProps, NavigationItemProps, ServicesItemsProps, SkillGroupProps, SocialLinksProps, TestimonialItemProps, TestimonialProps, TrustyBrandPlacement, TrustyBrandProps, WorkerDetails, WorkHeaderProps, WorkPhaseProps, WritingItemsProps } from "./interface";

export const iconMap: Record<IconKey, React.ReactNode> = {
  linkedin: <LinkedInIcon />,
  github: <GithubIcon />,
  x: <XIcon />,
  suitcase: <SuitcaseIcon />,
  branch: <BranchIcon />,
  grad: <GradIcon />,
  code: <CodeIcon />,
  brain: <BrainIcon />,
  light: <LightIcon />,
  teach: <TeachIcon />,
  rocket: <RocketIcon />,
  laptop: <LaptopCodeIcon />,
  refresh: <RefreshIcon />,
  ribbon: <RibbonIcon />,
  shapes: <ShapesIcon />,
  layer: <LayerIcon />,
  comment: <CommentIcon />,
  pin: <PinIcon />,
  repair: <RepairIcon />,
  avatar: <AvatarIcon />,
  inquiry: <InquiryIcon />,
  check: <CheckIcon/>,
  times: <TimesIcon/>,
  apple: <AppleIcon/>,
  email: <EmailIcon/>,
  tools: <ToolsIcon/>
};


export const navigationItems: NavigationItemProps[] = [
  { label: 'Home', to: '/'},
  { label: 'About', to: '/about'},
  { label: 'Writings', to: '/writings'},
  { label: 'Mentorship', to: '/mentorship'},
]

export const socialLinks: SocialLinksProps[] = [
  { label: 'LinkedIn', icon: 'linkedin', to: '#'},
  { label: 'GitHub', icon: 'github', to: '#'},
  { label: 'X', icon: 'x', to: '#'},
]
export const metricItems: AboutMetricProps[] = [
  {title: '20+', description: 'Years of Experience', icon: 'suitcase'},
  {title: '80+', description: 'Project Completed', icon: 'branch'},
  {title: '100+', description: 'Successful Mentorships', icon: 'grad'}
]
export const aboutItems: AboutItemsProps[] = [
  {icon: 'code', title: 'Software Architect', description: 'I design scalable, maintainable systems that support real-world applications and long-term growth.', subTitle: 'Things I focus on', subDescription: 'System Design, Scalable Architecture, Microservices, Performance, Reliability', keywordTitle: 'Core Strengths', keywords: ['Architecture Design', 'Distributed Systems', 'API Design', 'Cloud-Native Solutions', 'Technical Strategy']},
  {icon: 'brain', title: 'AI Engineer', description: 'I build and integrate AI-driven solutions to automate workflows and enhance product capabilities.', subTitle: 'Technologies I use', subDescription: 'Python, LLM APIs, Node.js, Cloud AI Services', keywordTitle: 'Focus Areas', keywords: ['AI/LLM Integration','Automation Systems','Prompt Engineering','AI Product Development','Data-Driven Solutions',]},
  {icon: 'light', title: 'Entrepreneur', description: 'I build and launch digital products, combining engineering with product thinking and business strategy.', subTitle: 'What I do', subDescription: 'MVP Development, Product Strategy, Startup Execution, Scaling Systems', keywordTitle: 'Experience', keywords: ['SaaS Products','End-to-End Development','Founder Experience','Rapid Prototyping',]},
  {icon: 'teach', title: 'Mentor', description: 'I help developers grow their skills, improve their thinking, and advance their careers with practical, real-world guidance.', subTitle: 'What I help with', subDescription: 'Career Growth, System Design, Coding Best Practices, Interview Preparation', keywordTitle: 'Mentor Stats', keywords: ['15+ years experience','5+ teams led','1000+ hours mentoring','Senior & Lead coaching',]},
] 

export const servicesItems: ServicesItemsProps[] = [
  {icon: 'rocket', title: 'MVP & Startup App Development', description: 'Launch in 3-4 months, not 12-18. Lean MVP development for startups seeking funding and product-market fit validation. Built SWEAT from MVP to $400M exit - we know what investors scrutinize and users actually want.', list: ['MVP Strategy & Scope Validation','Rapid Prototyping & User Testing','Investor-Ready Technical Architecture','3-4 Month Launch Timelines','Post-Launch Iteration & Scaling Support',]},
  {icon: 'brain', title: 'AI-Powered App Development', description: 'AI is not the answer to everything. But when you build with experts who know what to build and why, AI becomes a force multiplier. We develop AI-powered applications with judgment - combining product expertise since 2013, proven engineering standards, and relentless focus on business outcomes.', list: ['AI Strategy & Discovery','AI-Powered Mobile & Web Applications','AI Integration into Existing Products','Custom Model Development & Fine-Tuning','AI App Scaling & Production Optimization',]},
  {icon: 'laptop', title: 'Cross-Platform App Development', description: 'Expert Flutter app development for iOS and Android from a single codebase. 40% cost savings with simultaneous platform launch. Native performance without compromise.', list: ['Single codebase for iOS and Android','40% cost savings vs separate native development','Native performance and platform-specific features','Faster time to market - simultaneous platform launch',]},
  {icon: 'teach', title: 'Mentorship', description: "Grow as an engineer with practical, real-world guidance. I work with developers and teams to improve how they think, build, and make technical decisions.", list: ['1:1 mentorship and ongoing support','System design and architecture guidance','Code reviews and technical feedback','Real-world problem solving and best practices',]},
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
export const testimonials: TestimonialItemProps[] = [
  {avatar: '/images/testimonial/Apiado.png', name: 'Mark Apiado', position: 'Full Stack Javascript Developer', testimony: `Jake is one of the most humble people you'll meet, which is rare for someone with his level of expertise. He's a true full-stack architect and he communicates in a way that makes complex things easy to understand.\nBeyond the technical skills, he's someone I'm glad to call a friend.\nIf you get the chance to work with Jake, take it.`},
  {avatar: '/images/testimonial/Miller.png', name: 'Benjamin Miller', position: 'COO at TruthScan', testimony: `How do I even talk about a guy as strong as Jake? He's the best backend engineer I've ever known. He has great people skills. He's works his butt off. He's really kind. He's taken on a leadership role with the entire team...`},
  {avatar: '/images/testimonial/Lingel.jpg', name: 'Grant Lingel', position: 'Former CGO at Undetectable AI', testimony: `Jake is the professional you always hope to find but rarely, if ever, have the luck to do so. Working with Jake was such a positive and lucky experience for me. \n\nNot only is he insanely good at his job, Jake is so reliable that I never even thought once to follow up with him about anything because I just knew that it would be delivered when needed and that the execution would be flawless. Even if I dropped something in Slack at an obnoxious hour because I didn't want to forget, and I clearly said that this isn't urgent, he would get on it. \n\nBut the thing that makes Jake such a rare find is that he goes so far beyond the scope of what he is there for and always delivers far more than what was expected. Finding someone who is proactive and seeking additional value to add is not common. Most people who are proactive, and I group myself here a lot of the time as well, try to deliver more value but end up scatter-braining their way into adding things or bringing up ideas that are all over the map. \n\nNot Jake. Pure value, each and every time.\n\nJake, it was a pleasure working with you and learning from you. It's a shame there aren't more Jakes out there.`},
  {avatar: '/images/testimonial/Raza.png', name: 'Wamiq Raza', position: 'Generative AI Engineer', testimony: `Jake has an exceptional talent for designing scalable back-end solutions that handle millions of users with ease. From load balancers to AI-driven components, his approach blends technical excellence with forward-thinking architecture. A true asset to any high-growth team.`},
  {avatar: '/images/testimonial/Arthur.png', name: 'Arthur A.', position: 'Founder @ Artech Digital', testimony: `Jake is a very reliable software engineer and a great technical leader. My experience with Jake has been nothing but wonderful. Our projects have progressed a lot and the last month has been very transformative. I can predict achieving further milestones in the months ahead. Jake is not just a great developer but a partner in success. Five stars!`},
  {avatar: '/images/testimonial/Monty.png', name: 'Dominique Monty', position: 'Customer Success and Engineering Leadership', testimony: `Jake was a great contributor to the mobile app team during his 5 years at Sandstone.  During that time, I have see Jake progress from being a mobile app developer to taking ownership of some of the key components on the server side, stepping up to the role of technical lead and also scrum master.  Jake has a lot of talent and skills and a great attitude towards work and this team.`},
  {avatar: '/images/testimonial/Kondal.png', name: 'Ajit Kondal', position: '', testimony: `A seasoned technologist and a thought leader in mobile application development. I had the pleasure of working with Kriztian Jake Sta. Teresa when he accelerated the development of New Payments Platform (NPP) capabilities for the BankFast Mobile App.\n\nNPP was an Australian banking industry initiative with an extremely firm deadline. Taking complete ownership of the initiative, Jake sought his deep technical expertise, problem solving skills and an extraordinary can-do attitude to deliver the project on time and budget, despite limited resources present in the team. Jake adopted a pragmatic approach at overcoming impediments and vowed everyone with his collaboration with designers. \n\nOur Client appreciated the quick turnaround, quality of the end-product and end-user experience.\n\nJake has consistently helped shape the native experience of BankFast Mobile App.`},
  {avatar: '/images/testimonial/McKenzie.png', name: 'Paul McKenzie', position: 'Principal Product Manager at Renewtrak', testimony: `I worked with Jake at Sandstone Technology as part of the Mobile Banking App team for the past 2 years. Jake is a talented Mobile App developer, strong in iOS and Android as well as hybrid app development. \n\nHe is hard working and dependable, quite willing to go the extra mile when needed. As a senior member of the team, other developers often looked to him for advice about how to best implement new features. Jake contributed strongly in Agile backlog grooming and planning meetings often raising very important technical considerations.\n\nIf you need a strong performer on your team I’d highly recommend Jake!`},
  {avatar: '/images/testimonial/Aguinaldo.png', name: 'Franklin Aguinaldo III', position: 'Sr. Enterprise Solutions Architect at Amazon Web Services (AWS)', testimony: `Kriztian is a very detail oriented, advanced programming skills beyond his age and experience.  He shows interests in new things technologies and keep himself updated.  He carries an attribute of a life long learner.  Always humble and delivers on-time and exceeds expectation.  He is a joy to work with.`},
  {avatar: '/images/testimonial/Dobbins.png', name: 'Joel Dobbins', position: 'Senior Developer / Designer', testimony: `Jake is a top notch developer and played a key role in creating the Mobile App. He is a true team player and was an absolute pleasure to work with. I'd recommend Jake to anyone for his extensive knowledge and versatility with working across multiple platforms and languages.`},
  {avatar: '/images/testimonial/Kachlon.png', name: 'Shmulik (Sam) Kachlon', position: 'CTO & Co-founder @ Smarter City Solutions', testimony: `I had the pleasure to work with Jake at Sandstone Technology.Simple put, if you want to put a proof of concept together in no time, Jake is your man. Jake has an amazing positive and can-do attitude in addition to his great technical skills.I'll recommend Jake as a great developer to any company.`},
  {avatar: '/images/testimonial/Sethi.png', name: 'Nitin Sethi', position: 'Head of Product | Startups | Investor', testimony: `“Jake is a great asset to any team because of his extensive breadth of knowledge( server side , client side, mobile apis). He was able to work on any given task and guide his more junior teammates where necessary. His can-do attitude and lively nature kept the team positive and motivated even in the tough times. \n\nI expect great things from Jake and I know he will deliver.`},
]

export const availability: AvailabilityProps[] = [
  {id: 0, label: 'Available for new projects', classColor: 'green'},
  {id: 1, label: 'Not available for new projects', classColor: 'red'},
  {id: 2, label: 'Available for mentorship', classColor: 'green'},
]

export const skillGroup: SkillGroupProps = {
  "Engineering": ['TypeScript','JavaScript','Python','C#','Node.js','.NET','React','Vue.js',],
  "Cloud & Data": ['AWS','Azure','Serverless','CI/CD','Docker','MySQL','MongoDB'],
  "Systems & AI": ['System Design','Microservices','Distributed Systems','API Design','LLM Integration','Automation']
}

export const experiences: ExperienceProps[] = [
  {
      startDate: 'July 2024',
      endDate: 'Present', 
      company: 'Undetectable AI', 
      position: 'Technical Lead', 
      icon: {
        dark: '/images/brands/undetectable-icon-light.png',
        light: '/images/brands/undetectable-icon.png'
      }, 
      bulletpoints: [
          `Led architecture and engineering of Undetectable AI’s content detection platform, powered by LLMs (Large Language Models) and real-time classification systems`,
          `Scaled the platform from 50,000 to 500,000+ requests per day by optimizing backend infrastructure, improving caching layers, and integrating async processing`,
          `Collaborated closely with product and growth teams to align technical roadmap with business goals`,
          `Full-stack contributions across React, TypeScript, Python, and cloud-native services`,
          `Introduced observability tooling and CI/CD pipelines to reduce deploy times and enhance platform resilience`
      ]
  },
  {
      startDate: 'July 2024',
      endDate: 'Present', 
      company: 'TruthScan', 
      position: 'Technical Lead', 
      icon: {
        dark: '/images/brands/truthscan-icon-light.png',
        light: '/images/brands/truthscan-icon.png'
      }, 
      shortDescription: 'Built and launched a SaaS product from the ground up.', 
      bulletpoints: [
          `Developed full-stack architecture and APIs`,
          `Led product direction and technical strategy`,
          `Deployed scalable cloud infrastructure`,
      ]
  },
  {
      startDate: 'Sep 2018',
      endDate: 'Present', 
      company: 'Barcode Essentials', 
      position: 'Founder/Technical Lead', 
      icon: '/images/brands/barcode-icon.png', 
      shortDescription: 'Barcode Essentials for Symantec Management Platform gives you instant access to your favourite asset management workflows on your iPhone, iPad, iPad mini or iPod touch. Just login, sync and go.', 
  },
  {
      startDate: '2010',
      endDate: 'Present', 
      position: 'Technical Lead / Software Engineer', 
      shortDescription: `Led engineering teams and delivered scalable software solutions across multiple industries. Focused on system architecture, performance, and long-term maintainability.`, 
      bulletpoints: [
          `Designed and built scalable systems using modern full-stack technologies`,
          `Led teams using Agile/Scrum methodologies`,
          `Improved system performance and reliability across projects`,
          `Collaborated with product and business stakeholders`,
      ]
  },
  {
      startDate: '2018',
      endDate: 'Present', 
      company: 'Barcode Essentials', 
      position: 'Founder',
      shortDescription: 'Built and launched a SaaS product from the ground up.', 
      bulletpoints: [
          `Developed full-stack architecture and APIs`,
          `Led product direction and technical strategy`,
          `Deployed scalable cloud infrastructure`,
      ]
  },
  {
      startDate: '2016',
      endDate: 'Present', 
      position: 'Mentor / Coach', 
      shortDescription: 'Helping developers grow into senior and leadership roles.', 
      bulletpoints: [
          `Mentored engineers on system design and best practices`,
          `Provided career guidance and technical coaching`,
          `Conducted code reviews and real-world problem solving`,
      ]
  },
]

export const companyCollabs: CompaniesProps[] = [
  {logo: {dark: '/images/brands/undetectable-logo-light.png', light: '/images/brands/undetectable-logo.png'}, link: '#'},
  {logo: {dark: '/images/brands/truthscan-logo-light.png', light: '/images/brands/truthscan-logo.png'}, link: '#'},
  {logo: {dark: '/images/brands/barcode-logo-light.png', light: '/images/brands/barcode-logo.png'}, link: '#'},
  {logo: {dark: '/images/brands/sonder-logo.png', light: '/images/brands/sonder-logo.png'}, link: '#'},
  {logo: {dark: '/images/brands/dash-logo-light.png', light: '/images/brands/dash-logo.png'}, link: '#'},
  {logo: {dark: '/images/brands/sandstone-logo.png', light: '/images/brands/sandstone-logo.png'}, link: '#'},
  {logo: {dark: '/images/brands/ubs-logo-light.png', light: '/images/brands/ubs-logo.png'}, link: '#'},
]

export const mentorGuides: MentorDetailsProps[] = [
  {icon: 'refresh', title: 'Switch Careers', description: `Coming from chemistry, law, or another field? You've come to the right place. Let's map your transition into software development.`},
  {icon: 'rocket', title: 'Lead with Confidence', description: `Running a SaaS and struggling to manage remote teams? I can help you ensure your team delivers the right features with real quality.`},
  {icon: 'ribbon', title: 'Own Your Promotion', description: `Just got promoted into a senior developer? I can help you manage expectations, lead with confidence, and step fully into your new role.`},
  {icon: 'code', title: 'Level Up Your Engineering', description: `Looking to write cleaner, more maintainable code? I can help you apply architectural best practices and write software that scales.`},
  {icon: 'shapes', title: 'Master Frontend Architecture', description: `Want to build highly interactive and accessible UIs? Let's refine your frontend workflows, component design, and UI implementation.`},
  {icon: 'layer', title: 'Scale Your Systems', description: `Need to support long-term growth and high traffic? I can help you design robust, secure APIs and reliable backend infrastructure.`},
]
export const mentorDetails: MentorDetailsProps[] =[
  {icon: 'comment', title: 'Speaks', description: `English, Spanish and Tagalog`},
  {icon: 'pin', title: 'Location', description: `Australia`},
]
export const mentorSkills: MentorSkillsProps[] = [
  {icon: 'tools', title: 'Engineering Foundations', description: `Build strong fundamentals with hands-on guidance across core technologies.`, skillsList: ['Server-side (Node.js, .NET, Serverless)', 'Frontend (React, Vue)', 'Mobile (Swift, Objective-C)', 'General programming (C#, JavaScript, Java, PHP)', 'Shell scripting']},
  {icon: 'code', title: 'Code, Architecture & Quality', description: `Learn how to design and write software that scales and lasts.`, skillsList: ['Clean Code principles', 'Design patterns', 'Software design & UML', 'Components & frameworks', 'Unit & integration testing']},
  {icon: 'suitcase', title: 'Career Growth & Mentorship', description: `Grow faster with practical advice and real-world engineering insight.`, skillsList: ['Productivity & developer workflows', 'Career guidance', 'Problem-solving mindset', 'Real-world decision making']}
]

export const plansPricing: MentorPricing[] = [
  {label: 'Lite', rate: 180, uom: 'month', calls: 2, description: `Keep me on retainer. Schedule meetings when you need mentor advice.`, includes: [
    {label: '2 calls + priority support', highlight: true, isChecked: true},
    {label: 'Unlimited Q&A via chat', highlight: false, isChecked: true},
    {label: 'Responses in 24 hours or less', highlight: false, isChecked: true},
    {label: 'Hands-on support', highlight: false, isChecked: true},
  ]},
  {label: 'Standard', rate: 350, uom: 'month', calls: 4, description: `The most popular way to get mentored, let's work towards your goals!`, includes: [ 
    {label: '4 calls + priority support', highlight: true, isChecked: true},
    {label: 'Unlimited Q&A via chat', highlight: false, isChecked: true},
    {label: 'Responses in 24 hours or less', highlight: false, isChecked: true},
    {label: 'Hands-on support', highlight: false, isChecked: true},
  ], mostPopular: true},
  {label: 'Pro', rate: 600, uom: 'month', calls: 6, description: `Get the extra bit of support needed to reach your goals faster.`, includes: [
    {label: '6 calls + priority support', highlight: true, isChecked: true},
    {label: 'Unlimited Q&A via chat', highlight: false, isChecked: true},
    {label: 'Responses in 24 hours or less', highlight: false, isChecked: true},
    {label: 'Hands-on support', highlight: false, isChecked: true},
  ]},
]

export const sessionPricing: MentorPricing[] = [
  {label: 'Introductory Call', rate: 39, uom: 'session', description: `A quick introductory session to clarify your goals and next steps.`, includes: [
    {label: '30 minutes', highlight: true, isChecked: true},
    {label: 'High-level situation assessment', highlight: false, isChecked: true},
    {label: 'Quick answers to your key question', highlight: false, isChecked: true},
    {label: 'Direction and next-step guidance', highlight: false, isChecked: true},
  ]},
  {label: 'Expert Consultation', rate: 69, uom: 'session', description: `A focused session for direct, actionable help on issues.`, includes: [
    {label: '30 minutes', highlight: true, isChecked: true},
    {label: 'Targeted problem breakdown', highlight: false, isChecked: true},
    {label: 'Practical solutions and recommendations', highlight: false, isChecked: true},
    {label: 'Trade-off and approach guidance', highlight: false, isChecked: true},
  ]},
  {label: 'Ask me Anything', rate: 189, uom: 'session', description: `A deep-dive session to explore multiple topics.`, includes: [
    {label: '60 minutes', highlight: true, isChecked: true},
    {label: 'Multi-topic discussion', highlight: false, isChecked: true},
    {label: 'System design / career / interview support', highlight: false, isChecked: true},
    {label: 'Action plan or summary takeaway', highlight: false, isChecked: true},
  ]},
  {label: 'Deep Consultation', rate: 350, uom: 'session', description: `An intensive end-to-end session for strategic challenges.`, includes: [
    {label: '60 minutes', highlight: true, isChecked: true},
    {label: 'Full system or project deep dive', highlight: false, isChecked: true},
    {label: 'Hands-on debugging or restructuring', highlight: false, isChecked: true},
    {label: 'Execution plan with priorities', highlight: false, isChecked: true},
  ]},
]
export const mentorShipTestimonials: TestimonialItemProps[] = [
  {avatar: '/images/testimonial/Natalia.png', name: 'Natalia', position: 'Standard Plan • 1.5 years', testimony: `Jake is a good mentor, good teacher. He helps me a lot with understanding stuff and is always happy to help with my questions.`},
  {avatar: '/images/testimonial/Matas.png', name: 'Matas', position: 'Lite Plan • 6 months', testimony: `Jake is an amazing mentor, who has helped me both with clarity regarding my career in tech, and actual improvement in the field.\nWhy Jake is a superhero:\n- Clear, concise, fast communication;\n- Flexibility in tools, approach, and problem-solving;\n- Deep knowledge in the field;\n- Enabler personality.`},
  {name: 'Mustafa', position: 'Standard Plan • 10 months', testimony: `My mentorship with Jake continues to be a wonderful journey. I've been making strides all along, and the last month has been quite transformative. For the first time, I made an application without relying on tutorials. I look forward to achieving further milestones in the months ahead. As always, Jake is not just a mentor but a partner in success. He's always there to help in all kinds of ways. I'm truly grateful!`},
  {name: 'Hao', position: 'Standard Plan • 9 months', testimony: `Jake is an experienced developer who has worked in different locations in the world and with different programming languages. He is so friendly and he cares a lot about his students. Jake made a easy-to-follow plan for me based on my background and he often monitors and make some changes about my plan according to my progress. He also gives me practice problems, with detailed solutions and feedbacks, to hone my skills. He always responds to my messages or questions in a timely manner.`},
  {name: 'Phonlavath', position: 'Standard Plan • 2 months', testimony: `After graduating from university, I felt lost and lacked confidence in my coding skills, making it difficult for me to pursue a job in the industry. I was searching for help when I found Jake. He helped me rebuild my foundation and address my knowledge gaps. His tutorials were incredibly helpful in improving and refactoring my code, showing me how to do things better. Jake is an amazing mentor with deep industry knowledge, and he's also a kind person who truly understands you. Now, I know what I need to do to improve myself with tasks and goals that align with my path. I highly recommend him.`},
  {name: 'Fabio', position: 'Standard Plan • 1 month ', testimony: `Jake has been great in his mentorship. He's been helping me fill my knowledge gaps in the backend development with the best practices in the industry, and guiding me with the required technologies to become a backend developer.\nJake is also very helpful with any questions you have, responding on the same day.\n\nI'm glad I found his mentorship.`},
  {name: 'David', position: 'Standard Plan • 6 months', testimony: `I just wanted to say a little about Jake for those that might be looking for a mentor. Jake is a very talented senior dev who can break down complex problems and explain them. As a mentor, he has guided me in preparing for a web development career. We sat down and created a plan, then had weekly discussions on the completion of that plan. Whenever I have issues, he is just an instant message away with an explanation that makes sense. I highly recommend Jake to anyone looking to further their career!`},
  {name: 'Shaunn', position: 'Standard Plan • 2 years', testimony: `Jake has been helped me fast track my skills and career in a way I didn't think was possible. I used to have knowledge gaps, but not anymore! Never felt more comfortable in this industry!`},
  {name: 'Adham', position: 'Standard Plan • 7 months', testimony: `Jake has been excellent so far, he has intensive experience & is willing to help in any way possible. Since the first call, I have sensed his loyalty & passion for his work, to add on that he is a trustworthy guy. \n\nOther things Jake is good at are communication, dedication, skills & flexibility.`},
  {name: 'Artur', position: 'Standard Plan • 8 months', testimony: `Jake is a very knowledgeable, highly experienced, and supportive mentor. We created a detailed plan for learning the front-end and getting a job. I am very satisfied with the progress I made in HTML/CSS/Javascript/React under the mentorship of Jake in last 2 months.`},
  {name: 'Xiomara', position: 'Standard Plan • 3 months', testimony: `My mentorship with Jake, definitely has been very helpful during my initial months as a software engineer. Jake's experience is reflected on the advise and feedback provided by him during our mentorship. He is always available even to answer a question and very flexible when it came to needing help.`},
  {name: 'Cds', position: 'Standard Plan • 7 months', testimony: `Jake is an exceptional mentor. He is patient and positive. Two values that you would always hope to find in a mentor. I highly recommend him to devs looking for support and guidance.`},
]

export const faqs: FAQ[] = [
  {icon: 'inquiry', inquiry: `What goals can this mentorship help me achieve?`, answer: `The program is designed to help you switch careers into tech, lead with more confidence in your current role, or secure a promotion to a more senior position.`},
  {icon: 'inquiry', inquiry: `What technical topics are covered in the curriculum?`, answer: `Mentorship covers engineering foundations (such as Data Structures and Algorithms), code architecture and quality (including system design and clean code), and general career growth strategies.`},
  {icon: 'inquiry', inquiry: `How much does the 1-on-1 mentorship cost?`, answer: `There are three main pricing tiers: Lite at $180/month, Standard at $350/month, and Pro at $800/month.`},
  {icon: 'inquiry', inquiry: `What is the difference between the Lite and Standard plans?`, answer: `While both include 1-on-1 sessions and chat support, the Standard plan offers bi-weekly sessions compared to the monthly sessions in the Lite plan, and it also includes additional features like code reviews and priority support.`},
  {icon: 'inquiry', inquiry: `Is there support for more senior developers?`, answer: `Yes, the "Pro" plan is specifically designed for those looking for executive-level coaching and high-touch mentorship for advanced career moves.`},
]

export const workGuides: MentorDetailsProps[] = [
  {icon: 'refresh', title: 'Scale Systems', description: 'Need to scale without compromising quality? I design scalable, maintainable systems that support real-world growth.'},
  {icon: 'rocket', title: 'Launch With Impact', description: 'Struggling to connect code to business strategy? I help you blend product thinking and strategy to launch successful products.'},
  {icon: 'ribbon', title: 'Innovate With AI', description: 'Want to automate with AI but unsure where to start? I integrate intelligent solutions that enhance functionality and drive engagement.'},
  {icon: 'apple', title: 'Focus on Growth', description: 'Looking to level up your skills or scale your team? I provide the practical, real-world guidance you need to lead with confidence.'},
]


export const workPhase: WorkPhaseProps[] = [
  {number: 1, icon: 'email', title: 'Send an email', description: 'Tell me about your project or idea.'},
  {number: 2, icon: 'light', title: 'Alignment', description: 'We define the right approach and technical direction.'},
  {number: 3, icon: 'repair', title: 'Build and improve', description: 'Develop, refine, and scale the solution.'},
]

export const workfaqs: FAQ[] = [
  {icon: 'inquiry', inquiry: `What core services are offered for new businesses?`, answer: `The page offers MVP & Startup App Development, which includes strategy, scope validation, rapid prototyping, and user testing to help launch and grow your idea.`},
  {icon: 'inquiry', inquiry: `Can you help integrate AI into my existing or new applications?`, answer: `Yes, there is a specific service for AI-Powered App Development that covers AI strategy, custom model development, and integrating AI into existing systems.`},
  {icon: 'inquiry', inquiry: `Do you develop apps for both iOS and Android?`, answer: `Yes, through Cross-Platform App Development, apps are built for multiple platforms from a single codebase, which can result in up to 40% cost savings.`},
  {icon: 'inquiry', inquiry: `What is the step-by-step process for starting a project?`, answer: `The process follows a three-phase "How It Works" model: first, you send an email with your project idea; second, an alignment phase to discuss details; and third, the "Build and Improve" phase where the project is executed.`},
]