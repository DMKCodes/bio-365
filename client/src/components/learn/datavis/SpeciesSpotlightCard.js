import { useState } from 'react';
import {
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText,
    CardHeader,
    CardFooter,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Row,
    Col
} from 'reactstrap';
import giantpanda from '../../../app/media/giant-panda.jpeg';

const SpeciesSpotlightCard = () => {
    const [accordionOpen, setAccordionOpen] = useState([]);

    const toggleAccordion = (id) => {
        if (accordionOpen === id) {
            setAccordionOpen([]);
        } else {
            if (id === undefined) {
                setAccordionOpen([]);
            } else {
                setAccordionOpen(id);
            }
        }
    };

    return (
        <Card>
            <img src={giantpanda} alt='giant panda' className='img-fluid mb-1' />
            <small className='text-muted'>Photo Credit: Cyrill Bambilla</small>
            <CardBody className='text-center'>
                <CardHeader className='mb-3'>
                    <CardTitle>
                        <h5>CONSERVATION SPOTLIGHT</h5>
                    </CardTitle>
                    <CardSubtitle>
                        Giant Panda<br />
                        <small className='text-muted'>(Ailuropoda melanoleuca)</small>
                    </CardSubtitle>
                </CardHeader>
            </CardBody>
            <Accordion 
                flush 
                open={accordionOpen} 
                toggle={toggleAccordion} 
                className='border-top'
            >
                <AccordionItem>
                    <AccordionHeader targetId='1'>
                        About
                    </AccordionHeader>
                    <AccordionBody accordionId='1'>
                        <CardText>
                            Giant pandas, known for their distinctive black-and-white fur, are an iconic symbol of conservation worldwide. These animals are adored for their peaceful demeanor and playful behavior. Primarily herbivores, their diet consists largely of bamboo, though they occasionally consume other grasses, wild tubers, or even meat in the form of birds and rodents.
                        </CardText>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId='2'>
                        Habitat
                    </AccordionHeader>
                    <AccordionBody accordionId='2'>
                        Giant pandas inhabit the mountainous regions of central China, mainly in Sichuan Province, but also in the Shaanxi and Gansu provinces. These areas are characterized by dense, misty bamboo forests situated at high altitudes of 5,000 to 10,000 feet. The pandas rely heavily on bamboo, which makes up nearly all of their diet. These forests provide a cool, wet climate optimal for bamboo growth and offer the pandas shelter and solitude.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId='3'>
                        Status
                    </AccordionHeader>
                    <AccordionBody accordionId='3'>
                        Despite their status as a national treasure in China and their protected status under Chinese law, giant pandas were classified as endangered for decades due to habitat loss and low birth rates. However, dedicated conservation efforts have had a positive impact, improving their status to "vulnerable" in 2016.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId='4'>
                        Conservation
                    </AccordionHeader>
                    <AccordionBody accordionId='4'>
                        The recovery of the giant panda from endangered to vulnerable status represents a significant triumph for conservation. Chinese authorities, in collaboration with international organizations, have implemented several conservation strategies to save the species. These efforts include creating a network of panda reserves in their natural habitats, enforcing strict anti-poaching laws, and regulating deforestation. Furthermore, successful breeding programs, both in the wild and in captivity, have substantially increased their population numbers. Public education campaigns were also instrumental in raising global awareness about the plight of the giant panda and the necessity to protect its habitat.
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
            <CardFooter>
                <Row>
                    <a href='https://www.worldwildlife.org/species/giant-panda' target='_blank' rel='noreferrer'>Read more at WWF...</a><br />
                </Row>
            </CardFooter>
        </Card>
    );
};

export default SpeciesSpotlightCard;