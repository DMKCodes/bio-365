import { 
    faSkullCrossbones, 
    faEarthAmericas, 
    faFire,
    faTree,
    faFishFins,
    faArrowTrendDown,
    faCapsules,
    faSackDollar,
    faMoneyBillWheat
} from '@fortawesome/free-solid-svg-icons';

export const BY_THE_NUMBERS = [
    {
        figure: '28%',
        content: 'Species threatened by extinction, of the 150,300 species monitored by the IUCN Global Species Programme',
        source: 'The IUCN Red List of Threatened Species (2023)',
        icon: faSkullCrossbones
    },
    {
        figure: '69%',
        content: 'Average decline in population density across 31,821 species since 1970, with freshwater and tropical species bearing the brunt of the loss',
        source: 'WWF Living Planet Report (2022)',
        icon: faArrowTrendDown
    },
    {
        figure: '1.5°C',
        content: 'The warming threshold at which global climate change is estimated to become the leading cause of biodiversity loss',
        source: 'WWF Living Planet Report (2022)',
        icon: faFire
    },
    {
        figure: '1.75',
        content: "Number of Earths needed to sustain the demand humans put on the planet's biocapacity in 2020",
        source: 'WWF Living Planet Report (2022)',
        icon: faEarthAmericas
    },
    {
        figure: '10M',
        content: 'Hectares of forest habitat estimated to be lost to deforestation each year — an area roughly the size of Portugal',
        source: 'WWF Living Planet Report (2022)',
        icon: faTree
    },
    {
        figure: '1,800%',
        content: 'The increase in fishing pressure threatening ocean species since 1970',
        source: 'WWF Living Planet Report (2022)',
        icon: faFishFins
    },
    {
        figure: '$33T',
        content: 'The estimated annual value ecosystem services, such as water and soil regulation, provide to the global economy (USD)',
        source: 'conservationtools.org',
        icon: faSackDollar
    },
    { 
        figure: '80%',
        content: 'Registered pharmaceuticals that come from plants, with research estimating the source of a critical new medicine goes extinct every two years',
        source: 'WWF Living Planet Report (2022)',
        icon: faCapsules
    },
    { 
        figure: '1 in 5',
        content: 'People around the world who rely exclusively on wild species for food and income, while 2.4 billion rely on wood fuel for heat and cooking',
        source: 'IPBES',
        icon: faMoneyBillWheat
    }
];