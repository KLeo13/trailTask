import type { AboutHeaderProps } from "~/utils/interface"
import ImageOverlay from "../Template/ImageOverlay"
import { Box, Divider, Flex, Group, Image, rgba, Stack, Text, Title, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import React from "react"
import { DownloadCTA, MainCTA } from "../Action/CTAButtons"
import { Link } from "react-router"
import { iconMap } from "~/utils/constant"
import { HeroTitle } from "../Template/HeroTitle"

const AboutHeaderSection: React.FC<AboutHeaderProps> = ({
    title,
    heroImage,
    roles,
    description,
    skillGroup,
    socialLinks,
}) => {
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    return (
        <ImageOverlay>        
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 20, lg: 40}} px={{base: 20, md: 40, lg: 60}} pt={{base: 40, md: 80}} pb={{base: 40, md: 80}}>
                <Flex align={'center'} gap={40}>
                    <Box display={{base: 'none', sm: 'block'}} p={8} bdrs={'lg'} style={{
                        backgroundColor: rgba(theme.colors.blue[5], 0.1)
                    }}>
                        <Image id="hero-image" bdrs={'md'} src={heroImage} alt={heroImage} w={160} h={160}/>
                    </Box>
                    <Flex direction={'column'} gap={'md'}>
                        <HeroTitle title={title}/>
                        <Text fz={'xl'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
                            {typeof roles === 'string' ? roles : roles.join(' | ')}
                        </Text>
                    </Flex>
                </Flex>
                <Text style={{whiteSpace: 'pre-line'}}>
                    {description}
                </Text>
                <Stack gap={'xs'}>
                    {Object.entries(skillGroup).map(([key, value], index) => {
                        return (
                            <React.Fragment key={index}>
                                <Group>
                                    <Text fw={'bold'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{key}</Text>
                                    <Text c={computedColorScheme === 'dark' ? 'white' : theme.colors.blue[8]}>{value.join(' • ')}</Text>
                                </Group>
                                {index < Object.entries(skillGroup).length - 1 && <Divider my="sm" />}
                            </React.Fragment>
                        )
                    })}
                </Stack>
                <Flex direction={{base: 'column', sm: 'row'}} gap={'md'} justify={'space-between'} align={'center'}>
                    <Group>
                        <MainCTA size="lg"/>
                        <DownloadCTA/>
                    </Group>
                    <Group gap={'lg'}>
                        {socialLinks.map((link, index) => {
                        return (
                            <Link id={`hero-social-link-${index}`} to={link.to} key={index} className="border border-blue-100 rounded size-10 flex items-center justify-center">
                            {iconMap[link.icon]}
                            </Link>
                        )
                        })}
                    </Group>
                </Flex>
            </Flex>
        </ImageOverlay>
    )
}

export default AboutHeaderSection