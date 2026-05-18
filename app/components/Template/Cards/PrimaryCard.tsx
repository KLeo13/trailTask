import { Button, Card, Collapse, Flex, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import { iconMap } from "~/utils/constant";
import type { IconKey } from "~/utils/interface";

const PrimaryCard: React.FC<{
    id?: string,
    icon: IconKey,
    iconBg?: boolean,
    title: string,
    description: string,
    extraContent?: any,
    collapsible?: boolean
}> = ({id, icon, iconBg = true, title, description, extraContent, collapsible}) => {
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    const [expanded, { toggle }] = useDisclosure(collapsible ? false : true);
  
    return (
        <Card id={id} p={'md'} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`} h={expanded ? '100%' : 'auto'} display={'flex'} className="flex-col gap-6 justify-start"
            style={{boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`}}>
            <Flex w={52} h={52} p={'xs'} bg={iconBg ? computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1] : 'transparent'} bdrs={'md'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
                {iconMap[icon]} 
            </Flex> 
            <Text fz={24} fw={'bold'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{title}</Text>
            <Text c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]} className={`${collapsible ? (!expanded ? 'line-clamp-3' : '') : ''}`}>{description}</Text>
            {
                collapsible && collapsible == true ? <>
                    <Collapse expanded={expanded} className="flex flex-col gap-4">
                        {extraContent}
                    </Collapse>
                    <Button display={'flex'} variant="transparent" p={0} fw={'normal'} mt={'auto'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]} onClick={toggle}>
                        {expanded ? `Show less -` :`Show more +`}
                    </Button>
                </> : <>
                    {extraContent}
                </>
            }
        </Card>
    )
}

export default PrimaryCard