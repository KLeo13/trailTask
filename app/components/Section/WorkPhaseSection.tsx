import { Box, Card, Flex, Group, Stack, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { iconMap } from "~/utils/constant";
import type { WorkPhaseContentProps, WorkPhaseProps } from "~/utils/interface";

const WorkPhaseCard: React.FC<WorkPhaseProps> = ({
    number, icon, title, description
}) => {
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light')

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder  h={"100%"} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}
            style={{boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`}}>
            <Flex gap={'sm'} h={"100%"}>
                <Box style={{
                    textOrientation: 'sideways',
                    writingMode: 'vertical-lr',
                    transform: `rotate(180deg)`
                }} bdrs={'sm'} c={theme.white} bg={computedColorScheme === 'dark' ? theme.colors.blue[5] : theme.colors.blue[6]} ta={'center'} p={'sm'}>{`Phase ${number}`}</Box>
                <Stack>
                    <Flex w={52} h={52} p={'xs'} bdrs={'md'} bg={computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
                        {iconMap[icon]} 
                    </Flex> 
                    <Text fz={24} fw={'bold'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{title}</Text>
                    <Text c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>{description}</Text>
                </Stack>
            </Flex>
        </Card>
    )
}
const WorkPhaseSection: React.FC<WorkPhaseContentProps> = ({
    title, description, phases
}) => {
    
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    return (
        <section>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40, md: 60, lg: 80}} px={{base: 20, md: 40, lg: 60}} pt={{base: 40, md: 80}} pb={{base: 20, md: 40}}>
                <Stack gap="lg">
                    <h2 className="text-4xl font-bold text-center" style={{
                        color: computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]
                    }}>{title}</h2>
                    <Text fz={'md'} ta="center">
                        {description}
                    </Text>
                </Stack>
                <Flex gap={'xl'} direction={{base: 'column', sm: 'row'}}>
                    {phases.map((ph, index) => {
                        return <Box key={index} flex={1}><WorkPhaseCard {...ph}/></Box>
                    })}
                </Flex>
            </Flex>
        </section>
    )
}

export default WorkPhaseSection