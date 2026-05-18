
export type IconKey = string
export type CompanyLogo = string | {
  light: string,
  dark: string
}
export type NavigationItemProps = {
  label: string, 
  to: string
}
export type SocialLinksProps = {
  label: string,
  icon: IconKey,
  to: string
}
export type HeroProps = {
  heroName: string,
  heroImage: string,
  roles: string | string[],
  subTitle: string,
  socialLinks: SocialLinksProps[]
}
export type AboutMetricProps = {
  title: string,
  description: string,
  icon: IconKey
}
export type AboutItemsProps = {
  icon: IconKey,
  title: string,
  description: string,
  subTitle: string,
  subDescription: string,
  keywordTitle: string,
  keywords: string[]
}
export type AboutProps = {
  title: string,
  description: string,
  image: string,
  metricItems: AboutMetricProps[]
  aboutItems: AboutItemsProps[]
}
export type ServicesItemsProps = {
  icon: IconKey,
  title: string,
  description: string,
  list: string[]
}
export type ServiceProps = {
  title: string,
  description: string,
  serviceItems: ServicesItemsProps[]
}
export type WritingItemsProps = {
  image: string,
  category: string,
  date: string,
  title: string,
  content: string
}
export type WritingsProps = {
  title: string,
  description: string,
  writingItems: WritingItemsProps[]
}

export type TrustyBrandProps = {
  thumb: string,
  label: string,
  link: string
}

export type TrustyBrandPlacement = TrustyBrandProps & {
  classTransform: string,
}

export type TrustiesPops = {
  title: string,
  description: string,
  trustyBrands: TrustyBrandPlacement[]
}

export type TestimonialItemProps = {
  avatar?: string,
  name: string,
  position: string,
  testimony: string,
}

export type TestimonialProps = {
  title: string,
  description: string,
  testimonialItems: TestimonialItemProps[]
}

export type AvailabilityProps = {
  id: number,
  label: string,
  classColor: string
}

export type CollaborationProps = {
  title: string,
  description: string,
  availability: AvailabilityProps,
  buttonLabel?: string
}
export type SkillGroupProps = Record<string, string[]>;
export type AboutHeaderProps = {
  title: string,
  heroImage: string,
  roles: string | string[],
  description: string,
  skillGroup: SkillGroupProps,
  socialLinks: SocialLinksProps[]
}
export type ExperienceProps = {
  startDate: string,
  endDate: string,
  company?: string,
  position: string,
  icon?: string | CompanyLogo,
  shortDescription?: string,
  bulletpoints?: string[],
}
export type ExperienceContentProps = {
  title: string,
  description: string,
  experiences: ExperienceProps[],
  metricItems: AboutMetricProps[]
}
export type GroupExperiences = Record<string, ExperienceProps[]>
export type CompaniesProps = {
  logo: CompanyLogo,
  link: string
}

export type CompanyCollabContentProps = {
  title: string,
  companies: CompaniesProps[]
}
export type MentorDetailsProps = {
  icon: IconKey,
  title: string,
  description: string
}
export type MentorHeaderProps = {
  title: string,
  subTitle: string,
  description: string,
  mentorGuides: {
    title: string,
    guides: MentorDetailsProps[]
  }
}
export type MentorSkillsProps = MentorDetailsProps & {
  skillsList: string[]
}
export type MentorContentProps = {
  image: string,
  title: string,
  description: string,
  details: MentorDetailsProps[],
  mentorSkills: {
    title: string,
    description: string,
    skills: MentorSkillsProps[]
  }
}
export type MentorPricing = {
  label: string,
  rate: number,
  uom: string,
  calls?: number,
  description: string,
  includes: {
    label: string,
    highlight: boolean,
    isChecked: boolean
  }[],
  mostPopular?: boolean
}

export type MentorPricingContentProps = {
  title: string,
  description: string,
  plans: MentorPricing[],
  sessions: MentorPricing[]
}

export type FAQ = {
  icon: IconKey,
  inquiry: string
  answer: string
}

export type FAQContentProps = {
  title: string,
  description: string,
  faqs: FAQ[]
}