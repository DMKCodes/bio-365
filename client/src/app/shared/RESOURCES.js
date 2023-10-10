import {
    faSchool,
    faBuildingNgo,
    faBuildingColumns,
    faNewspaper,
    faFlaskVial,
    faEarthAmericas
} from '@fortawesome/free-solid-svg-icons';

export const CATEGORIES = [
    {
        name: 'All Resources',
        icon: null
    },
    {
        name: 'Education',
        icon: faSchool
    },
    {
        name: 'Government',
        icon: faBuildingColumns
    },
    {
        name: 'Treaty',
        icon: faEarthAmericas
    },
    {
        name: 'News',
        icon: faNewspaper
    },
    {
        name: 'Organization',
        icon: faBuildingNgo
    },
    {
        name: 'Research',
        icon: faFlaskVial
    },
];

export const RESOURCES = [
    {
        name: 'Biodiversity A-Z',
        link: 'https://www.biodiversitya-z.org/',
        category: 'Education',
        about: 'This biodiversity glossary provides clear, concise and relevant information about various topics relating to biodiversity, written and reviewed by experts.',
        icon: faSchool
    },
    {
        name: 'The Biodiversity Consultancy',
        link: 'https://www.thebiodiversityconsultancy.com/',
        category: 'Organization',
        about: 'The Biodiversity Consultancy is a global provider of strategic, technical and policy services for biodiversity management in the private and public sectors.',
        icon: faBuildingNgo
    },
    {
        name: 'Cambridge Institute for Sustainability Leadership',
        link: 'https://www.cisl.cam.ac.uk/resources/sustainability-horizons',
        category: 'Organization',
        about: 'CISL is an impact-led institute within the University of Cambridge that activates leadership globally to transform economies for people, nature and climate.',
        icon: faBuildingNgo
    },
    {
        name: 'The Conservation Fund',
        link: 'https://www.conservationfund.org/',
        category: 'Organization',
        about: "The Conservation Fund protects America's most critical lands and waters to provide greater access to nature, strengthen local economies and enhance climate resiliency.",
        icon: faBuildingNgo
    },
    {
        name: 'Conservation International',
        link: 'https://www.conservation.org/',
        category: 'Organization',
        about: 'Worldwide, Conservation International is working to improve the lives of people everywhere by protecting oceans, forests and other living ecosystems.',
        icon: faBuildingNgo
    },
    {
        name: 'The Convention on Biological Diversity',
        link: 'https://www.cbd.int/',
        category: 'Treaty',
        about: 'The Convention on Biological Diversity (CBD) is the first global agreement to cover all aspects of biological diversity.',
        icon: faEarthAmericas
    },
    {
        name: 'The Convention on International Trade in Endangered Species',
        link: 'https://cites.org/eng',
        category: 'Treaty',
        about: 'CITES aims to ensure that international trade in specimens of wild animals and plants does not threaten the survival of the species.',
        icon: faEarthAmericas
    },
    {
        name: 'The Conversation',
        link: 'https://theconversation.com/us/environment',
        category: 'News',
        about: 'Curated by professional editors, The Conversation offers informed commentary and debate on the issues affecting our world.',
        icon: faNewspaper
    },
    {
        name: 'Down To Earth',
        link: 'https://www.downtoearth.org.in/',
        category: 'News',
        about: 'Down To Earth brings to you latest news, opinion and blogs on environment and science from India and south Asia.',
        icon: faNewspaper
    },
    {
        name: 'The Ecological Society of America',
        link: 'https://www.esa.org/',
        category: 'Organization',
        about: 'The Ecological Society of America advances the science and practice of ecology and supports ecologists throughout their careers.',
        icon: faBuildingNgo
    },
    {
        name: 'Frontiers in Conservation Science',
        link: 'https://www.frontiersin.org/journals/conservation-science',
        category: 'Research',
        about: 'This multidisciplinary journal explores ecology, biology and social sciences to advance conservation and management.',
        icon: faFlaskVial
    },
    {
        name: 'Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services',
        link: 'https://www.ipbes.net/',
        category: 'Organization',
        about: 'IPBES is an independent intergovernmental body established by States to strengthen the science-policy interface for biodiversity and ecosystem services for the conservation and sustainable use of biodiversity, long-term human well-being and sustainable development.',
        icon: faBuildingNgo
    },
    {
        name: 'The International Union for Conservation of Nature',
        link: 'https://www.iucn.org/',
        category: 'Organization',
        about: 'The International Union for Conservation of Nature (IUCN) is a membership Union uniquely composed of both government and civil society organisations. IUCN is a global authority on the status of the natural world and the measures needed to safeguard it.',
        icon: faBuildingNgo
    },
    
    {
        name: 'Mongabay',
        link: 'https://news.mongabay.com/',
        category: 'News',
        about: 'Mongabay is a United States-based non-profit conservation and environmental science news platform.',
        icon: faNewspaper
    },
    {
        name: 'National Geographic Education',
        link: 'https://education.nationalgeographic.org/',
        category: 'Education',
        about: 'Explore educational opportunities that ignite the spirit of exploration and bring the wonder of the world to learners.',
        icon: faSchool
    },
    {
        name: 'Nature',
        link: 'https://www.nature.com/research-analysis',
        category: 'Research',
        about: 'Nature is a weekly international journal publishing peer-reviewed research in all fields of science and technology.',
        icon: faFlaskVial
    },
    {
        name: 'The Nature Conservancy',
        link: 'https://www.nature.org/en-us/',
        category: 'Organization',
        about: 'The Nature Conservancy is a global environmental nonprofit working to create a world where people and nature can thrive.',
        icon: faBuildingNgo
    },
    {
        name: 'Planet Custodian',
        link: 'https://www.planetcustodian.com/',
        category: 'News',
        about: 'Planet Custodian is a website dedicated to news on the environment including global warming, climate change, air pollution, solar energy & wildlife.',
        icon: faNewspaper
    },
    {
        name: 'PLOS ONE Biodiversity',
        link: 'https://journals.plos.org/plosone/browse/biodiversity',
        category: 'Research',
        about: 'PLOS ONE is a non-profit, peer-reviewed academic journal published by the Public Library of Science.',
        icon: faFlaskVial
    },
    {
        name: 'ScienceDaily',
        link: 'https://www.sciencedaily.com/news/plants_animals/',
        category: 'Research',
        about: 'ScienceDaily features breaking news about the latest discoveries in science, health, the environment, technology, and more.',
        icon: faFlaskVial
    },
    {
        name: 'ScienceDirect',
        link: 'https://www.sciencedirect.com/',
        category: 'Research',
        about: 'ScienceDirect combines authoritative, full-text scientific, technical and health publications with smart, intuitive functionality so that users can stay informed in their fields and can work more effectively and efficiently.',
        icon: faFlaskVial
    },
    {
        name: 'United States Environmental Protection Agency',
        link: 'https://www.epa.gov/',
        category: 'Government',
        about: 'Through scientific study, education, grants, and regulation enforcement, the mission of EPA is to protect human health and the environment.',
        icon: faBuildingColumns
    },
    {
        name: 'United States Fish & Wildife Service',
        link: 'https://www.fws.gov/',
        category: 'Government',
        about: 'The United States Fish and Wildlife Service is an agency within the United States Department of the Interior dedicated to the management of fish, wildlife, and natural habitats.',
        icon: faBuildingColumns
    },
    {
        name: 'United States Geological Survey',
        link: 'https://www.usgs.gov/',
        category: 'Government',
        about: 'As the science arm of the Department of the Interior, the USGS brings an array of earth, water, biological, and mapping data and expertise to bear in support of decision-making on environmental, resource, and public safety issues.',
        icon: faBuildingColumns
    },
    {
        name: 'United States National Oceanic & Atmospheric Administration',
        link: 'https://www.noaa.gov/',
        category: 'Government',
        about: 'The National Oceanic and Atmospheric Administration (NOAA) works to understand and predict changes in climate, weather, oceans, and coasts.',
        icon: faBuildingColumns
    },
    {
        name: 'United States National Park Service',
        link: 'https://www.nps.gov/index.htm',
        category: 'Government',
        about: 'The National Park Service preserves unimpaired the natural and cultural resources and values of the National Park System for the enjoyment, education, and inspiration of this and future generations.',
        icon: faBuildingColumns
    },
    {
        name: 'World Wildlife Fund',
        link: 'https://wwf.org/',
        category: 'Organization',
        about: 'World Wildlife Fund is a nonprofit organization dedicated to environmental conservation through science.',
        icon: faBuildingNgo
    },
    {
        name: 'Yale Environment 360',
        link: 'https://e360.yale.edu/topics/biodiversity',
        category: 'News',
        about: 'Yale Environment 360 is an online magazine offering opinion, analysis, reporting, and debate on global environmental issues.',
        icon: faNewspaper
    }
];