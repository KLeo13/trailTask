import { Box, Card, Flex, Text, useComputedColorScheme, useMantineTheme, type DefaultMantineColor, type StyleProp } from "@mantine/core";
import { iconMap } from "~/utils/constant";
import type { IconKey } from "~/utils/interface"

const MetricCard: React.FC<{
    id?: string,
    icon: IconKey,
    title: string,
    description: string,
    type?: 'primary' | 'secondary'
}> = ({
    id,
    icon,
    title,
    description,
    type = 'primary'
}) => {
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    /* const bg = computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white' */

    return (
        <Card h={'100%'} flex={1} shadow="lg" bg={computedColorScheme === 'dark' ? (type === 'primary' ? theme.colors.blue[8] : theme.colors.blue[7]) : (type === 'primary' ? theme.white : theme.colors.blue[1])} 
            bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.gray[2]}`} style={{boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`}}>
            <Flex id={id} gap={'sm'} direction={'column'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
                <Text fz={36} fw={'bold'}>{title}</Text>
                <Flex gap={'xs'} align={'center'}>        
                    <Box w={20} h={20}>{iconMap[icon]} </Box>
                    <Text fz={'lg'} fw={'bold'} c={computedColorScheme === 'dark' ? 'white' : theme.colors.blue[8]}>{description}</Text>
                </Flex>
            </Flex>
        </Card>
    )
}
export default MetricCard