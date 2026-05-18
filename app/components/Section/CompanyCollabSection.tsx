import { Card, Flex, Image, Marquee, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import type { CompanyCollabContentProps } from "~/utils/interface";

const CompanyCollabsSection: React.FC<CompanyCollabContentProps> = ({title, companies}) => {
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    return (
        <section className="py-15" style={{
            backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]
        }}>
            <Flex direction={'column'} justify={'center'} gap={'lg'}>
                <Text fz={'h2'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]} fw={'bold'} ta={'center'}>{title}</Text>
                <Marquee fadeEdges={false} duration={10000} repeat={10}>
                    {companies.map((company, index) => {
                        return <Card key={index} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}>
                            <Image src={typeof company.logo === 'string' ? company.logo : (computedColorScheme === 'dark' ? company.logo.dark : company.logo.light) } w={130} my={'auto'}/>
                        </Card>
                    })}
                </Marquee>
            </Flex>
        </section>
    )
}

export default CompanyCollabsSection