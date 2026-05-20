// =============================
// 🔹 CORE / SHARED TYPES
// =============================

export type IconKey = string;
export type HeadingsProps = {
  text: string,
  id: string,
  level: number
}
export type CompanyLogo =
  | string
  | {
      light: string;
      dark: string;
    };

// Reusable base with icon/content
export type IconContent = {
  icon: IconKey;
  title: string;
  description: string;
};

// Reusable section base
export type SectionBase = {
  title: string;
  description: string;
};

// =============================
// 🔹 NAVIGATION & SOCIAL
// =============================

export type NavigationItemProps = {
  label: string;
  to: string;
};

export type SocialLinksProps = NavigationItemProps & {
  icon: IconKey;
};

// =============================
// 🔹 HERO
// =============================

export type HeroProps = {
  heroName: string;
  heroImage: string;
  roles: string | string[];
  subTitle: string;
  socialLinks: SocialLinksProps[];
};

// =============================
// 🔹 ABOUT
// =============================

export type AboutMetricProps = Pick<IconContent, "icon" | "title" | "description">;

export type AboutItemsProps = IconContent & {
  subTitle: string;
  subDescription: string;
  keywordTitle: string;
  keywords: string[];
};

export type AboutProps = SectionBase & {
  image: string;
  metricItems: AboutMetricProps[];
  aboutItems: AboutItemsProps[];
};

// =============================
// 🔹 SERVICES
// =============================

export type ServicesItemsProps = IconContent & {
  list: string[];
};

export type ServiceProps = SectionBase & {
  serviceItems: ServicesItemsProps[];
};

// =============================
// 🔹 WRITINGS
// =============================

export type WritingItemsProps = {
  id?: string;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  content: string;
  slug: string;
};

export type WritingsProps = SectionBase & {
  writingItems: WritingItemsProps[];
};

export type WritingHeaderProps = SectionBase

// =============================
// 🔹 TRUSTY BRANDS
// =============================

export type TrustyBrandProps = {
  thumb: string;
  label: string;
  link: string;
};

export type TrustyBrandPlacement = TrustyBrandProps & {
  classTransform: string;
};

export type TrustiesPops = SectionBase & {
  trustyBrands: TrustyBrandPlacement[];
};

// =============================
// 🔹 TESTIMONIALS
// =============================

export type TestimonialItemProps = {
  avatar?: string;
  name: string;
  position: string;
  testimony: string;
};

export type TestimonialProps = SectionBase & {
  testimonialItems: TestimonialItemProps[];
};

// =============================
// 🔹 COLLABORATION
// =============================

export type AvailabilityProps = {
  id: number;
  label: string;
  classColor: string;
};

export type CollaborationProps = SectionBase & {
  availability: AvailabilityProps;
  buttonLabel?: string;
};

// =============================
// 🔹 ABOUT HEADER
// =============================

export type SkillGroupProps = Record<string, string[]>;

export type AboutHeaderProps = {
  title: string;
  heroImage: string;
  roles: string | string[];
  description: string;
  skillGroup: SkillGroupProps;
  socialLinks: SocialLinksProps[];
};

// =============================
// 🔹 EXPERIENCE
// =============================

export type ExperienceProps = {
  startDate: string;
  endDate: string;
  company?: string;
  position: string;
  icon?: string | CompanyLogo;
  shortDescription?: string;
  bulletpoints?: string[];
};

export type ExperienceContentProps = SectionBase & {
  experiences: ExperienceProps[];
  metricItems: AboutMetricProps[];
};

export type GroupExperiences = Record<string, ExperienceProps[]>;

// =============================
// 🔹 COMPANIES
// =============================

export type CompaniesProps = {
  logo: CompanyLogo;
  link: string;
};

export type CompanyCollabContentProps = {
  title: string;
  companies: CompaniesProps[];
};

// =============================
// 🔹 MENTORING
// =============================

export type MentorDetailsProps = IconContent;

export type MentorHeaderProps = SectionBase & {
  subTitle: string;
  mentorGuides: {
    title: string;
    guides: MentorDetailsProps[];
  };
};

export type MentorSkillsProps = MentorDetailsProps & {
  skillsList: string[];
};

export type MentorContentProps = {
  image: string;
  title: string;
  subTitle?: string;
  description: string;
  details: MentorDetailsProps[];
  mentorSkills: {
    title: string;
    description: string;
    skills: MentorSkillsProps[];
  };
};

// =============================
// 🔹 PRICING
// =============================

export type MentorPricing = {
  label: string;
  rate: number;
  uom: string;
  calls?: number;
  description: string;
  includes: {
    label: string;
    highlight: boolean;
    isChecked: boolean;
  }[];
  mostPopular?: boolean;
};

export type MentorPricingContentProps = SectionBase & {
  plans: MentorPricing[];
  sessions: MentorPricing[];
};

// =============================
// 🔹 FAQ
// =============================

export type FAQ = {
  icon: IconKey;
  inquiry: string;
  answer: string;
};

export type FAQContentProps = SectionBase & {
  faqs: FAQ[];
};

// =============================
// 🔹 WORK
// =============================

export type WorkGuideProps = MentorDetailsProps;

export type WorkHeaderProps = Omit<MentorHeaderProps, "mentorGuides"> & {
  workerGuideTitle: string;
  workGuides: WorkGuideProps[];
};

export type WorkerDetails = Omit<MentorContentProps, "mentorSkills" | "details"> & {
  workerSkills: string[];
  workerMetric: AboutMetricProps[];
};

export type WorkPhaseProps = IconContent & {
  number: number;
};

export type WorkPhaseContentProps = SectionBase & {
  phases: WorkPhaseProps[];
};