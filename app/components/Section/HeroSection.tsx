import { Box, Flex, Image, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import { Link } from "react-router";
import { socialLinks } from "~/utils/constant";
import { DownloadCTA, MainCTA } from "../Action/CTAButtons";
import TypingText from "../Plugins/TypingText";

const HeroSection: React.FC<{}> = () => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  
  return (
    <section className="py-20">
      <Flex direction={{ base: 'column', md: 'row',}} maw={1440} mx={'auto'} px={{base: 20, md: 40}} gap={40} justify={"space-between"} align={'stretch'}>
        <Flex direction={"column"} gap={'md'} maw={'480'}>
          <Flex direction={"column"} gap={8}>
            <Text c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]} fz={'xl'}>{'HI THERE 👋🏻, I’M'}</Text>
            <h1 className="text-5xl lg:text-6xl font-bold" style={{
              background: `-webkit-linear-gradient(0deg, #064280 0%, #4B96E7 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            } as React.CSSProperties}>{'Jake Sta. Teresa'}</h1>
            <Text fz={{base: 24, sm: 30}} c={computedColorScheme === 'dark' ? 'white' : 'black'}>
              <TypingText words={['Software Architect', 'AI Engineer', 'Entrepreneur', 'Mentor']}
                typeSpeed={80}
                deleteSpeed={40}
                delay={1500}
              />
            </Text>
          </Flex>
          <Text fz={'sm'}>
            {'20+ years building scalable, user-centric products across AI, fintech, health tech, and enterprise.'}
          </Text>

          <Flex
            c={computedColorScheme === 'dark' ? theme.colors.gray[4] :theme.colors.gray[6]}
            gap={'sm'}>
            {socialLinks.map((link, index) => {
              return (
                <Link to={link.to} key={index} className="border border-blue-100 rounded size-10 flex items-center justify-center">
                  {link.icon}
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
            <Image src={'/images/hero.png'} alt="hero-template" className="rounded-2xl! rounded-bl-[6rem]! z-10"/>
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