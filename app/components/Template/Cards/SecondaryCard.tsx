import { Card, Flex, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import { iconMap } from "~/utils/constant"
import type { IconKey } from "~/utils/interface"

const SecondaryCard: React.FC<{
    id?: string,
    icon: IconKey,
    title: string,
    description: string,
    extraContent: any
}> = ({
    id, icon, title, description, extraContent
}) => {
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <Card id={id} c={'inherit'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`} bg={computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[0]} bdrs={'md'} p={'lg'} shadow="sm" display={'flex'} className="flex-col gap-5 h-full">
            <Flex w={52} h={52} p={'xs'} bg={computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[6]} bdrs={'md'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : 'white'}>
            {iconMap[icon]} 
            </Flex> 
            <Text fz={24} fw={'bold'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{title}</Text>
            <Text>{description}</Text>
            {extraContent}
        </Card>
    )
}

export default SecondaryCard