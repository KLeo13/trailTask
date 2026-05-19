import type { WorkerDetails } from "~/utils/interface"
import HalfBox from "../Template/HalfBox"
import { Box, Flex, Pill, rgba, Stack, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import DetailsContent from "../Template/Content/DetailsContent"
import PrimaryCard from "../Template/Cards/PrimaryCard"
import MetricCard from "../Template/Cards/MetricCard"

const WorkContentSection: React.FC<WorkerDetails> = ({
    image,
    title,
    subTitle,
    description,
    workerMetric,
    workerSkills,
}) => {
    
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    return (
        <>
        <section className="" style={{
            backgroundColor: theme.colors.blue[6]
        }}>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40, md: 60, lg: 80}} px={{base: 20, md: 40, lg: 60}} pt={{base: 40, md: 80}} pb={{base: 20, md: 40}}>
                <DetailsContent image={image} title={title} subtitle={subTitle} description={description} 
                    extraHeaderContent={
                        <Stack gap={20}>
                            <h2 id="title" className="text-4xl font-bold">{'Skills'}</h2>
                            <Flex wrap={'wrap'} gap={'sm'}>
                                {workerSkills.map((skill, index) => {
                                    return <Pill fz={'sm'} c={theme.white} bg={rgba(theme.white, 0.1)} key={index}>{skill}</Pill>
                                })}
                            </Flex>
                        </Stack>
                    } 
                />
            </Flex>
        </section>
        <HalfBox mih={{base: 80}}>
            <Flex gap={'xl'} direction={{base: 'column', sm: 'row'}} maw={1440} mx={'auto'} px={{base: 20, md: 40, lg: 60}}>
                {
                    workerMetric.map((metric, index) => 
                        <Box flex={1} key={index}>
                            <MetricCard {...metric} type="primary"/>
                        </Box>
                    )
                }
            </Flex>
        </HalfBox>
        </>
    )
}

export default WorkContentSection