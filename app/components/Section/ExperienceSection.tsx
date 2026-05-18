import type { AboutMetricProps, ExperienceContentProps, ExperienceProps, GroupExperiences } from "~/utils/interface";
import HalfBox from "../Template/HalfBox";
import { Box, Button, Card, Collapse, Flex, Group, Image, List, ListItem, Text, Timeline, Title, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { iconMap, metricItems } from "~/utils/constant";
import MetricCard from "../Template/Cards/MetricCard";

const ExperienceMetricCard: React.FC<AboutMetricProps & { index: number}> = ({title, description, icon, index}) => {
    
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    return (
        <Card flex={1} shadow="lg" bg={computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]} bd={computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[2]}>
            <Flex id={`metric-item-${index}`} gap={'sm'} direction={'column'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
                <Text fz={36} fw={'bold'}>{title}</Text>
                <Flex gap={'xs'} align={'center'}>        
                    <Box w={20} h={20}>{iconMap[icon]} </Box>
                    <Text fz={'lg'} fw={'bold'} c={computedColorScheme === 'dark' ? 'white' : theme.colors.blue[8]}>{description}</Text>
                </Flex>
            </Flex>
        </Card>
    )
}
const ExperienceItem: React.FC<{keyTitle: string, experiences: ExperienceProps[], index: number}> = ({keyTitle, experiences, index}) => {
    
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    return (
        <Timeline.Item lineVariant="dashed" bullet={
                <Box className="relative flex size-3">
                    <Box className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75`} bg={'blue'}></Box>
                    <Box className={`relative inline-flex size-3 rounded-full`} bg={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}></Box>
                </Box>
            } 
            classNames={{
                itemBullet: 'bg-transparent! border-transparent!'
            }}
        >
            <Flex direction={{base: 'column', sm: 'row'}}>
                <Text fz={'xl'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]} style={{
                    flexBasis: '20%'
                }}>{keyTitle}</Text>
                <Flex direction={'column'} gap={20} style={{
                    flexBasis: '80%'
                }}>
                    {experiences.map((experience, index) => {
                        return (
                            <Box key={index} c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>
                                <Flex direction={{base: 'column', sm: 'row'}} mb={'sm'} gap={'sm'} align={{base: 'start', sm: 'center'}} fw={'bold'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
                                    <Text fw={'bold'} fz={'xl'}>{experience.position}</Text>
                                    {
                                        experience.company && <Group>
                                            {experience.icon ? 
                                                <Image src={typeof experience.icon === 'string' ? experience.icon : (computedColorScheme === 'dark' ? experience.icon.dark : experience.icon.light) } w={24} h={24}/> 
                                                    : '|'}
                                            <Text fw={'bold'} fz={'xl'}>{experience.company}</Text>
                                        </Group>
                                    }
                                </Flex>
                                <Text>
                                    {experience.shortDescription}
                                </Text>
                                {
                                    experience.bulletpoints && <List listStyleType="disc">
                                        {experience.bulletpoints.map((point, index) => 
                                            <ListItem key={index}>{point}</ListItem>
                                        )}
                                    </List>
                                }
                            </Box>
                        )
                    })}
                </Flex>
            </Flex>
        </Timeline.Item>
    )
}
const ExperienceSection: React.FC<ExperienceContentProps> = ({
    title,
    description,
    experiences,
}) => {
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    const [expanded, { toggle }] = useDisclosure(false);

    const groupedExperience: GroupExperiences = experiences.reduce((acc, exp) => {
        const key = `${exp.startDate} - ${exp.endDate}`;

        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(exp);

        return acc;
    }, {} as Record<string, ExperienceProps[]>)
    return (
        <HalfBox mih={{base: 632, md: 591, lg: 385}}>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 20, lg: 40}} px={{base: 20, md: 40, lg: 60}} pt={{base: 40, md: 80}} pb={{base: 20, md: 40}}>
                <Flex direction={'column'} gap="md">
                    <Title order={2} id='experience-title' className="text-4xl! font-bold text-center" c={theme.white}>{title}</Title>
                    <Text id='experience-description' fz={'md'} ta="center" c={computedColorScheme === 'dark' ? theme.white : theme.colors.gray[0]}>
                        {description}
                    </Text>
                </Flex>
                <Card shadow="lg" bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}>
                    <Box>
                        <Timeline bulletSize={25} lineWidth={1} active={0}>
                            {Object.entries(groupedExperience).slice(0, expanded ? Object.entries(groupedExperience).length : 2).map(([key, experiences], i) => {
                                return (
                                    <ExperienceItem key={i} keyTitle={key} index={i} experiences={experiences}/>
                                )
                            })}
                        </Timeline>
                    </Box>
                    <Box mx={"auto"}>
                        <Button display={'flex'} variant="transparent" p={0} fw={'normal'} mt={'auto'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]} onClick={toggle}>
                            {expanded ? `Show less -` :`Show more +`}
                        </Button>
                    </Box>
                </Card>
                <Flex gap={'xl'} direction={{base: 'column', sm: 'row'}}>
                    {
                        metricItems.map((metric, index) => 
                            <MetricCard {...metric} key={index} type={'secondary'}/>
                        )
                    }
                </Flex>
            </Flex>
        </HalfBox>
    )
}

export default ExperienceSection