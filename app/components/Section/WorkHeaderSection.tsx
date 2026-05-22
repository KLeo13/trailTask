import type { WorkHeaderProps } from "~/utils/interface";
import ImageOverlay from "../Template/ImageOverlay";
import { Flex } from "@mantine/core";
import CenterHero from "../Template/Content/CenterHero";
import CarouselHero from "../Template/Content/CarouselHero";
import { MentorCTA, ReachOutCTA } from "../Action/CTAButtons";

const WorkHeaderSection: React.FC<WorkHeaderProps> = ({
    title, subTitle, description, workerGuideTitle, workGuides
}) => {
    
    return (
        <ImageOverlay>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 20, lg: 'xl'}} px={{base: 20, md: 40}} pt={{base: 40}} pb={{base: 20, md: 40}}>
                <CenterHero title={title} subTitle={subTitle} description={description} cta={<ReachOutCTA size="lg"/>}/>
                <CarouselHero title={workerGuideTitle} slideSize={{ base: '100%', sm: '50%', md: '33.33333%', lg: '25%'}} items={workGuides}/>
            </Flex>
        </ImageOverlay>
    )
}

export default WorkHeaderSection