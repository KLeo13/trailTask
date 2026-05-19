import type { MentorContentProps, MentorDetailsProps } from "~/utils/interface";
import HalfBox from "../Template/HalfBox";
import { Box, Flex, Grid, Image, List, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { iconMap } from "~/utils/constant";
import PrimaryCard from "../Template/Cards/PrimaryCard";
import DetailsContent from "../Template/Content/DetailsContent";

const MentorSection: React.FC<MentorContentProps> = ({
    image,
    title,
    description,
    details,
    mentorSkills,
}) => {

    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    
    return (
        <HalfBox mih={{base: 1027, md: 591, lg: 770}}>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40, md: 60, lg: 80}} px={{base: 20, md: 40, lg: 60}} py={{base: 40, md: 80}}>
                <DetailsContent image={image} title={title} description={description} 
                    extraHeaderContent={
                        <Flex gap={40} direction={{base: 'column', sm: 'row'}}>
                            {details.map((item, index) => {
                                return <Flex flex={1} key={index} gap={'sm'} align={'start'}>
                                    <Box size={'xl'} p={'sm'} bg={'#FFFFFF1A'} bdrs={'md'}>
                                        {iconMap[item.icon]}
                                    </Box>
                                    <Box>
                                        <Text fw={'bold'}>{item.title}</Text>
                                        <Text>{item.description}</Text>
                                    </Box>
                                </Flex>
                                
                            })}
                        </Flex>
                    } 
                    extraContent={
                        <Grid gap={32} align="stretch">
                            {
                                mentorSkills.skills.map((skill, index) => {
                                return (
                                    <Grid.Col key={index} span={{base: 12, md: 4, lg: 4}}>
                                        <PrimaryCard icon={skill.icon}
                                            title={skill.title}
                                            description={skill.description}
                                            extraContent={
                                                <List listStyleType="disc" c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>
                                                    {skill.skillsList.map((skl, index) => <List.Item key={index}>{skl}</List.Item>)}
                                                </List>
                                            }>
                                        </PrimaryCard>
                                    </Grid.Col>
                                )
                                })
                            }
                        </Grid>
                    }
                />
            </Flex>
        </HalfBox>
    )
}

export default MentorSection