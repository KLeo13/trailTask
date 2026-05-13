export type NavigationItemProps = {
  label: string, 
  to: string
}

export type SocialLinksProps = {
  label: string,
  icon: React.ReactNode,
  to: string
}

export type AboutItemsProps = {
  icon: React.ReactNode,
  title: string,
  description: string,
  subTitle: string,
  subDescription: string,
  keywordTitle: string,
  keywords: string[]
}
export type ServicesItemsProps = {
  icon: React.ReactNode,
  title: string,
  description: string,
  list: string[]
}

export type WritingItemsProps = {
  image: string,
  category: string,
  date: string,
  title: string,
  content: string
}

export type TrustyBrandProps = {
  thumb: string,
  label: string,
  link: string
}

export type TrustyBrandPlacement = TrustyBrandProps & {
  classTransform: string,
}

export type TestimonialProps = {
  avatar: string,
  name: string,
  position: string,
  testimony: string,
}