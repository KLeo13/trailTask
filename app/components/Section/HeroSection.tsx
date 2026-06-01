import { Box, Flex, Image, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import { Link } from "react-router";
import { iconMap, socialLinks } from "~/utils/constant";
import { DownloadCTA, MainCTA } from "../Action/CTAButtons";
import TypingText from "../Plugins/TypingText";
import type { HeroProps, SocialLinksProps } from "~/utils/interface";
import { HeroTitle } from "../Template/HeroTitle";

const HeroSection: React.FC<HeroProps> = ({
  heroName,
  heroImage,
  roles,
  subTitle,
  socialLinks,
}) => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');
  return (
    <section className="py-20">
      <Flex direction={{ base: 'column', md: 'row',}} maw={1440} mx={'auto'} px={{base: 20, md: 40}} gap={40} justify={"space-between"} align={'stretch'}>
        <Flex direction={"column"} gap={'md'} maw={'480'}>
          <Flex direction={"column"} gap={8}>
            <Text c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]} fz={'xl'}>{'HI THERE 👋🏻, I’M'}</Text>
            <HeroTitle title={heroName}/>
            <Text id="hero-roles" fz={{base: 24, sm: 30}} c={computedColorScheme === 'dark' ? 'white' : 'black'}>
              {
                typeof roles == 'string' ? roles : 
                  <TypingText words={roles}
                    typeSpeed={80}
                    deleteSpeed={40}
                    delay={1500}
                  />
              }
            </Text>
          </Flex>
          <Text fz={'sm'} id="hero-subtitle">
            {subTitle}
          </Text>
          <Flex
            c={computedColorScheme === 'dark' ? theme.colors.gray[4] :theme.colors.gray[6]}
            gap={'sm'}>
            {socialLinks.map((link, index) => {
              return (
                <Link id={`hero-social-link-${index}`} to={link.to} key={index} target="_blank" className="border border-blue-100 rounded size-10 p-2 flex items-center justify-center">
                  {iconMap[link.icon]}
                </Link>
              )
            })}
          </Flex>
          <Flex gap={'md'}>
            <MainCTA size="lg"/>
            <DownloadCTA size="lg"/>
          </Flex>
        </Flex>
        <Flex flex={1} justify={{base: 'center', md: 'end'}}>
          <Flex justify={'center'} align={'center'} w={'100%'} maw={370} p={'lg'} bg={computedColorScheme === 'dark' ? theme.colors.blue[7] :theme.colors.blue[1]} className="relative rounded-3xl rounded-bl-[7rem] md:me-5">
            <Image id="hero-image" src={heroImage} alt="hero-template" className="rounded-2xl! rounded-bl-[6rem]! z-10"/>
            <div className="absolute hidden lg:block top-10 -left-30 size-10 opacity-10 rounded-md" style={{backgroundColor: theme.colors.blue[5]}}/>
            <div className="absolute hidden lg:block bottom-10 -left-15 size-29 opacity-10 rounded-md" style={{backgroundColor: theme.colors.blue[5]}}/>
            <div className="absolute hidden lg:block bottom-5 -left-25 size-19 opacity-10 rounded-md" style={{backgroundColor: theme.colors.blue[5]}}/>
            <div className="absolute hidden lg:block top-10 -right-10 size-75 opacity-10 rounded-md" style={{backgroundColor: theme.colors.blue[5]}}/>
          </Flex>
        </Flex>
      </Flex>
    </section>
  )
}

export default HeroSection