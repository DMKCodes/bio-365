import {
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText,
    CardHeader,
    CardFooter
} from 'reactstrap';
import InfoAccordion from './InfoAccordion';
import defineKeywords from '../../../../utils/defineKeywords';
import { 
    MEGADIVERSE_CONTENT, 
    SPECIES_CONTENT, 
    ENDANGERED_CONTENT 
} from '../../../../app/shared/GLOBE_CONTENT';

const InfoCard = ({ countryToDisplay, speciesData, endangeredData, viewType, title }) => {
    return (
        <Card className='globe-data-card rounded-0'>
            <CardBody className='text-center'>
                    <CardHeader className='mb-3 rounded-0 border'>
                        <h4>{title}</h4>
                    </CardHeader>
                <CardSubtitle>
                    {viewType !== 'megadiverse' &&
                        <>
                            {countryToDisplay ? (
                                <CardTitle>
                                    <h5 className='mb-0'><b>{countryToDisplay.toUpperCase()}</b></h5>
                                </CardTitle>
                            ) : (
                                <CardTitle>
                                    <small className='text-muted'>
                                        <i>Choose a country to learn more.</i>
                                    </small>
                                </CardTitle>
                            )}
                        </>
                    }
                </CardSubtitle>
                {viewType === 'species' && speciesData ? (
                    <CardText>
                        {SPECIES_CONTENT.map((text, index) => {
                            const textWithKeywords = defineKeywords(text);
                            return <p key={index}>{textWithKeywords}</p>;
                        })}

                        Animals: {speciesData.animalSpecies.toLocaleString('en-US')}<br />
                        Plants: {speciesData.plantSpecies.toLocaleString('en-US')}<br />
                        Fungi: {speciesData.fungusSpecies.toLocaleString('en-US')}<br />
                        Chromists: {speciesData.chromistSpecies.toLocaleString('en-US')}<br /><br />
                        Total: {speciesData.totalSpecies.toLocaleString('en-US')}<br /><br />
                    </CardText>
                ) : viewType === 'endangered' && endangeredData ? (
                    <CardText>
                        {ENDANGERED_CONTENT.map((text, index) => {
                            const textWithKeywords = defineKeywords(text);
                            return <p key={index}>{textWithKeywords}</p>;
                        })}

                        Amphibians: {endangeredData.amphibians.toLocaleString('en-US')}<br />
                        Birds: {endangeredData.birds.toLocaleString('en-US')}<br />
                        Fish: {endangeredData.fish.toLocaleString('en-US')}<br />
                        Mammals: {endangeredData.mammals.toLocaleString('en-US')}<br />
                        Reptiles: {endangeredData.reptiles.toLocaleString('en-US')}<br />
                        Molluscs: {endangeredData.molluscs.toLocaleString('en-US')}<br />
                        Other Invertebrates: {endangeredData.otherInvertebrates.toLocaleString('en-US')}<br />
                        Vascular Plants: {endangeredData.plants.toLocaleString('en-US')}<br />
                        Fungi: {endangeredData.fungi.toLocaleString('en-US')}<br /><br />
                        Total: {endangeredData.total.toLocaleString('en-US')}
                        <br /><br />
                        <small className='text-muted'>Color depicts ratio of endangered species to total species. This is not a statement on any country's individual conservation efforts or unique challenges.</small>
                    </CardText>
                ) : viewType === 'megadiverse' ? (
                    <CardText>
                        {MEGADIVERSE_CONTENT.map((text, index) => {
                            const textWithKeywords = defineKeywords(text);
                            return <p key={index}>{textWithKeywords}</p>;
                        })}
                    </CardText>
                ) : null}
            </CardBody>
            <CardFooter>
                <InfoAccordion />
            </CardFooter>
        </Card>
    );
};

export default InfoCard;