import { Box, Button, Card, CheckIcon, Flex, FloatingIndicator, Grid, List, ListItem, SegmentedControl, Stack, Tabs, Text, useComputedColorScheme, useMantineTheme, type StyleProp } from "@mantine/core";
import { useState } from "react";
import { TimesIcon } from "~/utils/icons";
import type { MentorPricing, MentorPricingContentProps } from "~/utils/interface";

const PricingCard: React.FC<{
    plan: MentorPricing
    selectedPlan: MentorPricing | null,
    setSelectedPlan: React.Dispatch<React.SetStateAction<MentorPricing | null>>,
    span?: StyleProp<number | 'auto' | 'content'>,
    cta: React.ReactNode
}> = ({
    plan,
    selectedPlan,
    setSelectedPlan,
    span = {base: 12, md: 4},
    cta
}) => {
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    const [onHover, toggleOnHover] = useState<boolean>(false)

    return (
        <Grid.Col onMouseEnter={() => toggleOnHover(true)} 
            onMouseLeave={() => toggleOnHover(false)} 
            className={`cursor-pointer`} 
            style={{
                background: (selectedPlan && selectedPlan == plan) || onHover ? `linear-gradient(180deg, ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]} 0%, ${computedColorScheme === 'dark' ? theme.colors.blue[8] : 'transparent'} 100%)` : 'transparent'
            }}
            span={span}
            p={'sm'}
            bdrs={'md'}
            onClick={() => setSelectedPlan(plan)}>
            <Flex direction={'column'} justify={'end'} h={'100%'} gap={'sm'} pos={'relative'}>
                {plan.mostPopular && <Text pos={'absolute'} top={0} left={'50%'} className="-translate-x-1/2 uppercase" fw={'bold'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{'Most Popular'}</Text>}
                <Card flex={1} p={'sm'} mt={34} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'lg'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}
                    style={{boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`}} 
                    className={`${(selectedPlan && selectedPlan == plan) || onHover ? 'translate-y-0' : 'translate-y-5'} hover:translate-y-0 transition-all`}
                >
                    <Card.Section flex={1} display={"flex"}  className="flex-col gap-4" withBorder p={'xl'} pb={20} c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>
                        <Stack bg={computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[0]}
                            bdrs={'md'} p={'lg'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}
                        >
                            <Text className="uppercase " fw={"bold"}>{plan.label}</Text>
                            <Flex align={'baseline'}>
                                <Text fz={'h1'} fw={"bold"}>{`$${plan.rate}`}</Text>
                                <Text fz={'sm'}>{`/${plan.uom}`}</Text>
                            </Flex>
                        </Stack>
                        <Text>{plan.description}</Text>
                        <List ps={0}>
                            {
                                plan.includes.map((include, index) => 
                                    <List.Item key={index}>
                                        <Flex align={'baseline'} gap={'sm'}>
                                            <Box w={'sm'} c={include.isChecked ? 'green' : 'red'}>
                                                {include.isChecked ? <CheckIcon/> : <TimesIcon/>}
                                            </Box>
                                            <Text fw={include.highlight ? 'bold' : 'normal'}>{include.label}</Text>
                                        </Flex>
                                    </List.Item>
                                )
                            }
                        </List>
                    </Card.Section>
                    <Card.Section p={'md'}>
                        {cta}
                    </Card.Section>
                </Card>
            </Flex>
        </Grid.Col>
    )
}
const MentorPricingSection: React.FC<MentorPricingContentProps> = ({
    title, description, plans, sessions
}) => {

    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    const [priceType, setPriceType] = useState<string>('plan')

    const [selectedPlan, setSelectedPlan] = useState<MentorPricing | null>(null)
    
    return (
        <section>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40, md: 60, lg: 80}} px={{base: 20, md: 40, lg: 60}} pt={{base: 40, md: 80}} pb={{base: 20, md: 40}}>
                <Stack gap="lg">
                    <h2 id='pricing-title' className="text-4xl font-bold text-center" style={{
                        color: computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]
                    }}>{title}</h2>
                    <Text id='pricing-description' fz={'md'} ta="center">
                        {description}
                    </Text>
                </Stack>
                <SegmentedControl
                    styles={{
                        root: {
                            backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[0]
                        },
                        control: {
                            minWidth: 140
                        },
                        indicator: {
                            backgroundColor: theme.colors.blue[5]
                        },
                    }}
                    maw={300}
                    mx={'auto'}
                    value={priceType}
                    onChange={setPriceType}
                    size="lg"
                    data={[
                        {label: (<Text c={priceType == 'plan' ? theme.white : theme.colors.blue[5]}>{'Plans'}</Text>), value: 'plan'},
                        {label: (<Text c={priceType == 'session' ? theme.white : theme.colors.blue[5]}>{'Sessions'}</Text>), value: 'session'},
                    ]}
                ></SegmentedControl>
                <Tabs value={priceType} onChange={(e) => setPriceType(e as string)}>
                    <Tabs.Panel value="plan" key={'plan-panel'}>
                        <Grid gap={'xs'}>
                            {plans.map((plan, index) =>
                                <PricingCard plan={plan} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} key={index} cta={<Button w={`100%`} size="lg" fw={'normal'} bg={computedColorScheme === 'dark' ? theme.colors.blue[5] :theme.colors.blue[6]}>
                                    {`Get ${plan.calls} Calls`}
                                </Button>}/>
                            )}
                        </Grid>
                    </Tabs.Panel>
                    <Tabs.Panel value="session" key={`session-panel`}>
                        <Grid gap={'xs'}>
                            {sessions.map((session, index) =>
                                <PricingCard plan={session} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} span={{base: 12, md: 3}} key={index} cta={<Button w={`100%`} size="lg" fw={'normal'} bg={computedColorScheme === 'dark' ? theme.colors.blue[5] :theme.colors.blue[6]}>
                                    {`Book a Session`}
                                </Button>}/>
                            )}
                        </Grid>
                    </Tabs.Panel>
                </Tabs>
            </Flex>
        </section>
    )
}

export default MentorPricingSection