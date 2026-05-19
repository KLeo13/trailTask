import { Accordion, Flex, Stack, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { iconMap } from "~/utils/constant";
import type { FAQ, FAQContentProps } from "~/utils/interface";

const FAQSection: React.FC<FAQContentProps> = ({
    title,
    description,
    faqs
}) => {

    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    return (
        <section>
            <Flex direction="column" maw={900} mx={'auto'} gap={{base: 40, md: 60}} px={{base: 20, md: 40, lg: 60}} py={40}>
                <Stack gap="lg">
                    <h2 id='faq-title' className="text-4xl font-bold text-center" style={{
                        color: computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]
                    }}>{title}</h2>
                    <Text id='faq-description' fz={'md'} ta="center" style={{whiteSpace: 'pre-line'}}>
                        {description}
                    </Text>
                </Stack>
                <Accordion multiple={true} defaultValue={faqs.map((faq) => faq.inquiry)} 
                    bdrs={'lg'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.gray[3]}`} className="overflow-hidden">
                    {faqs.map((q, index) => {
                        return (
                            <Accordion.Item key={index} value={q.inquiry} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.gray[3]}`}>
                                <Accordion.Control px={'lg'} py={1} icon={iconMap[q.icon]} bg={computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[0]}>{q.inquiry}</Accordion.Control>
                                <Accordion.Panel p={'sm'} style={{
                                    borderTop: `solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.gray[3]}`,
                                }}>{q.answer}</Accordion.Panel>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
            </Flex>
        </section>
                    
    )
}

export default FAQSection