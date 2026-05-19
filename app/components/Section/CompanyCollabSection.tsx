import { Card, Flex, Image, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { lazy, Suspense } from "react";
import type { CompaniesProps, CompanyCollabContentProps } from "~/utils/interface";
import FastMarquee from "react-fast-marquee";
const Marquee = (FastMarquee as any).default ?? FastMarquee;

const MarqueeCard: React.FC<{company: CompaniesProps}> = ({company}) => {
    return <Text>{company.link}</Text>
}


const CompanyCollabsSection: React.FC<CompanyCollabContentProps> = ({title, companies}) => {
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    
    return (
        <section className="py-15" style={{
            backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]
        }}>
            <Flex direction={'column'} justify={'center'} gap={40}>
                <Text fz={'h2'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]} fw={'bold'} ta={'center'}>{title}</Text>
                <Marquee speed={50} loop={0} autoFill={true} gradient={false}>
                    {companies.map((company, index) => {
                        return <Card h={100} key={index} mx={'sm'} px={'xl'} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}>
                            <Image src={typeof company.logo === 'string' ? company.logo : (computedColorScheme === 'dark' ? company.logo.dark : company.logo.light) } w={130} my={'auto'}/>
                        </Card>
                    })}
                </Marquee> 
            </Flex>
        </section>
    )
}

export default CompanyCollabsSection