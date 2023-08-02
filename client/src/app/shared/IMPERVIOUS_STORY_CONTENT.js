// INTRO MEDIA
import { METRO_POPULATIONS } from './METRO_POPULATIONS';
import impervious from '../media/impervious.jpg';
import cityPeople from '../media/city-people.jpg';
import greenCity from '../media/green-city.jpg'

// THREATS MEDIA
import { IMPERVIOUS_RUNOFF } from './IMPERVIOUS_RUNOFF';
import waterTableDiagram from '../media/water-table-diagram2.png';
import groundwaterWetland from '../media/groundwater-wetland.jpg';
import groundwaterIrrigation from '../media/groundwater-irrigation.jpg';
import bilithu from '../media/bilithu.jpg'
import redTide from '../media/red-tide.jpg';
import turbidity from '../media/turbidity.jpg';
import fragmentation from '../media/fragmentation.jpg';
import soilPollution from '../media/soil-pollution.jpg';
import uhi from '../media/uhi.jpg';

// SOLUTIONS MEDIA
import { EDUCATION_CLIMATE } from './EDUCATION_CLIMATE';
import greenBuilding from '../media/green-building.jpg';
import bioswale from '../media/bioswale.jpg';
import riparian from '../media/riparian.png';
import pervious from '../media/pervious.jpg';
import wetland from '../media/wetland-conservation.jpg';
import bioSymbiosis from '../media/biodiversity-symbiosis.png';
import greenBuildingTwo from '../media/green-building2.jpg';
import leedRating from '../media/leed-rating.png';
import mixedUse from '../media/mixed-use-development.jpg';
import twentyMinuteNeighborhood from '../media/20-minute-neighborhoods.jpg';
import sprawl from '../media/sprawl.jpg';
import easement from '../media/easement.jpg';
import protest from '../media/protest.jpg';
import protestTwo from '../media/protest2.jpg';
import wildfires from '../media/wildfires.jpg';
import communityGarden from '../media/community-garden.jpg';
import kukri from '../media/kukri.jpg';
import socialMedia from '../media/social-media.jpg';
import loveCanal from '../media/love-canal.jpg';
import loveCanalProtest from '../media/love-canal-protest.jpg';
import loisGibbs from '../media/lois-gibbs.jpg';
import superfundAct from '../media/superfund-act.png';
import somethingGreat from '../media/do-something-great.jpg';

export const IMPERVIOUS_STORY_INTRO_CONTENT = [
    {
        header: 'What are impervious surfaces?',
        body: [
            'Impervious (or impermeable) surfaces are the hard, often artificial, almost always humanmade surfaces and structures that provide us with shelter and let us travel from place to place.',
            'Concrete and asphalt pavement, from superhighways all the way down to driveways and sidewalks, are impervious surfaces. So are the roofs of our homes and the commercial buildings where we work, eat, shop, and learn. Even swimming pools are impervious surfaces.'
        ]
    },
    {
        header: 'What makes them impervious?',
        body: [
            "What all these things have in common is they can't absorb water. When it rains, water typically infiltrates the soil, is stored as groundwater, and is slowly discharged into nearby rivers, lakes, wetlands, and streams. Impervious surfaces prevent infiltration and instead trap water above ground, leading to a host of problems including reduced groundwater recharge, increased water pollution, and reduced biodiversity."
        ]
    },
    {
        header: 'Spotlight: Urban sprawl',
        body: [
            'As the human population continues to swell, the uncontrolled expansion of cities and towns requires construction of new roads, neighborhoods, shopping centers, and walkways. These suburban areas are often characterized by low-density housing, increased reliance on automobiles for transportation, and the destruction and fragmentation of wildlife habitat.'
        ],
    },
    {
        header: '',
        body: [
            'Over the past sixty years, humans have trended overwhelmingly toward living in urban areas.',
            'According to data from the United Nations Population Division, in 1960, the global rural population was twice that of the urban population.'
        ]
    },
    {
        header: '',
        body: [
            'By 2007, the distribution was roughly equal.'
        ]
    },
    {
        header: '',
        body: [
            'And since then the urban population has skyrocketed, and the area dedicated to impervious surfaces has increased in kind.'
        ],
        link: 'https://ourworldindata.org/urbanization'
    },
    {
        header: 'The benefits of urbanization',
        body: [
            "This isn't necessarily a bad thing.  Living in an urban area has many advantages: better access to essential resources like healthcare and education, job opportunities, public transportation, recreation, cultural diversity, and more."
        ]
    },
    {
        header: '',
        body: [
            "For many, the suburban areas at the outskirts of cities offer the best of both worlds. Suburbs are quieter and more spacious than city centers while still connecting residents to the amenities a city offers.", 
            'An analysis of metro areas in the United States shows that for the past 50 years, a steadily higher share of the population has moved to suburban counties while urban cores have seen virtually no growth. This phenomenon is referred to as suburbanization.'
        ],
        link: 'https://www.pewresearch.org/social-trends/2020/07/29/prior-to-covid-19-urban-core-counties-in-the-u-s-were-gaining-vitality-on-key-measures/'
    },
    {
        header: 'So where do we go from here?',
        body: [
            "The benefits of urban and suburban living can keep us connected and improve our quality of life, but they often come at an unsustainable price. They require more roads, parking lots, and single-family homes—all impervious surfaces.",
            "To protect wildlife and preserve the ecosystem services on which we all rely, we can start by reimagining the way our cities and suburban areas are built. You'll learn some ways we can do that later on in the story."
        ]
    }
];

export const IMPERVIOUS_STORY_INTRO_MEDIA = [
    {
        index: 0,
        image: null,
        video: 'https://www.youtube.com/embed/EbAoOQPNsu8',
        alt: null,
        source: 'PennState Extension',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 1,
        image: null,
        video: 'https://www.youtube.com/embed/EbAoOQPNsu8',
        alt: null,
        source: 'PennState Extension',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 2,
        image: impervious,
        video: null,
        alt: 'Aerial view of suburban neighborhood with many impervious surfaces.',
        source: 'Raphaël Biscaldi',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 3,
        image: null,
        video: null,
        alt: null,
        source: 'World Bank, based on data from the UN Population Division',
        caption: null,
        chart: true,
        chartTitle: 'Urban & Rural Population Distribution (1960-2020)',
        chartType: 'line',
        chartData: null,
        chartTicks: null
    },
    {
        index: 4,
        image: null,
        video: null,
        alt: null,
        source: 'World Bank, based on data from the UN Population Division',
        caption: null,
        chart: true,
        chartTitle: 'Urban & Rural Population Distribution (1960-2020)',
        chartType: 'line',
        chartData: null,
        chartTicks: null
    },
    {
        index: 5,
        image: null,
        video: null,
        alt: null,
        source: 'World Bank, based on data from the UN Population Division',
        caption: 'While the exact figures are often disputed in the research community, the data shown here is widely considered to be a conservative estimate. The consensus is that the true distribution is likely to be even further in favor of urban populations.',
        chart: true,
        chartTitle: 'Urban & Rural Population Distribution (1960-2020)',
        chartType: 'line',
        chartData: null,
        chartTicks: null
    },
    {
        index: 6,
        image: cityPeople,
        video: null,
        alt: 'City street with heavy foot traffic.',
        source: 'Christopher Burns',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 7,
        image: null,
        video: null,
        alt: null,
        source: 'Pew Research Center',
        caption: "'Smaller metropolitan' refers to counties in metros with fewer than 1 million residents.",
        chart: true,
        chartTitle: 'Trends in Urban, Suburban, and Rural Living (1970-2018)',
        chartType: 'bar',
        chartData: METRO_POPULATIONS,
        chartTicks: null
    },
    {
        index: 8,
        image: greenCity,
        video: null,
        alt: 'Aerial view of a city that incorporates heavy greenery to promote biodiversity',
        source: 'CHUTTERSNAP',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    }
];

export const IMPERVIOUS_STORY_THREATS_CONTENT = [
    {
        header: '1. The water cycle',
        body: [
            "As we learned earlier, our planet's surface absorbs water through a process known as infiltration. After water seeps down through the soil and rock layers, it reaches a level where the ground is completely saturated with water. This level is known as the water table, and the water stored beneath it is referred to as groundwater."
        ]
    },
    {
        header: 'Spotlight: Groundwater',
        body: [
            'In some parts of the world, especially rural and arid regions, groundwater is the only reliable source of fresh water. In the United States alone, groundwater provides roughly half of the population with drinking water.',
            'As an ecosystem service, groundwater performs several important functions. It feeds water into streams, wetlands, and lakes, sustaining both aquatic environments and the wildlife that depend on them, particularly during periods of low rainfall. These ecosystems in turn help to filter pollutants from water and sequester carbon, among other benefits.'
        ]
    },
    {
        header: '',
        body: [
            "There are cultural benefits as well. Society values groundwater not just for practical uses, but for its religious and recreational contributions. If you've ever spent a day at the lake or gone whitewater rafting, you have groundwater to thank."
        ]
    },
    {
        header: '',
        body: [
            'Groundwater is also used extensively in agriculture. The ability to extract groundwater for irrigation can be the difference between a reliable harvest or crop failure due to drought. This becomes increasingly important as the global population, and thus our dietary needs, continue to expand.',
        ],
        link: 'https://www.oecd.org/agriculture/topics/water-and-agriculture/'
    },
    {
        header: '',
        body: [
            'So how do impervious surfaces fit in?',
            "When rainfall can't infiltrate the soil and reach the water table, groundwater recharge is disrupted. As groundwater levels drop, the water table can drop as well. This leads to soil, wetlands, and residential wells drying up, and can even cause land subsidence, damaging infrastructure such as roads and buildings.",
            'Without a steady rate of replenishment, rivers and streams experience unpredictable flow rates, becoming more likely to flood and more susceptible to drought and erosion. In coastal areas, it can allow saltwater to intrude into freshwater aquifers, contaminating soil and drinking water.'
        ],
        link: 'https://www.usgs.gov/special-topics/water-science-school/science/groundwater-decline-and-depletion'
    },
    {
        header: 'Runoff',
        body: [
            "Water that can't penetrate impervious surfaces is trapped above ground as surface runoff. This runoff, instead of being released slowly into rivers and streams via groundwater, flows rapidly through stormwater systems before being discharged into bodies of water. Both aquatic ecosystems and human infrastructure are often ill-equipped to handle this sudden influx of water.",
        ],
        link: 'https://enviroatlas.epa.gov/enviroatlas/datafactsheets/pdf/ESN/PercentImperviousArea.pdf'
    },
    {
        header: 'Water pollution',
        body: [
            'Above ground, runoff water picks up pollutants such as pesticides, oils, and heavy metals as it flows over impervious surfaces. The contaminated water harms aquatic life by affecting reproduction, introducing disease, and even leading to death. For humans, this poses a threat as well in the form of contaminated drinking water.',
            "Runoff can also contain excessive nutrients, like nitrogen and phosphorus, from fertilizers and other sources. When these nutrients enter water bodies they cause harmful algal blooms (HABs), which consume large amounts of oxygen as they decompose.  This process, called eutrophication, creates 'dead zones' where oxygen levels are too low to support marine wildlife.",
            'One of the most infamous HABs is the Florida red tide, which occurs in the Gulf of Mexico. This phenomenon, caused by a neurotoxic algae called Kerenia brevis, has been connected to human respiratory infections and the mass deaths of aquatic species.'
        ],
        link: 'https://oceanservice.noaa.gov/hazards/hab/gulf-mexico.html'
    },
    {
        header: 'Erosion and sedimentation',
        body: [
            'The increased volume and speed of runoff causes erosion along the banks of streams, lakes, and rivers. ',
            'Erosion not only alters the natural landscape but also introduces excessive sediment into water bodies, causing turbidity in aquatic ecosystems. This reduces the amount of light that can penetrate the water, inhibiting the growth of plants and other aquatic wildlife. On top of that, the physical sediment harms wildlife as well. For example, it can clog the gills of fish and bury or smother their eggs.'
        ]
    },
    {
        header: '2. Habitat loss and fragmentation',
        body: [
            'Perhaps the greatest risk to biodiversity is habitat destruction. Not only do impervious surfaces cause immediate habitat loss through the removal of vegetation and topsoil, but they also intersect habitats, such as when a road passes through the middle of a forest, dividing them into smaller sections.',
            'Habitat fragmentation makes it difficult and dangerous for animals to move between sections to find food or reproduce. This isolation can lead to inbreeding and reduced genetic diversity, making populations more vulnerable to disease, invasive species, and environmental changes.'
        ]
    },
    {
        header: 'Soil degradation',
        body: [
            'As construction and erosion remove topsoil, they often take with it the organic matter and nutrients that are essential for vegetation to grow. This degradation of soil results in less diverse and less dense vegetation, which in turn affects the species that rely on these plants for food and shelter.',
            'Like rivers, lakes, and streams, soil is also susceptible to pollution from runoff. Soil in particular is susceptible to heavy metal contamination, characterized by a contamination of metals such as copper, zinc, lead, or mercury, as well as platinum, palladium, and rhodium from car exhaust.',
            'These contaminants then make their way through the terrestrial food web. They accumulate in soil-dwelling organisms like earthworms and ants, which are then ingested by larger animals, including livestock, birds, and amphibians. These often include the grazing animals or poultry that become our food, posing the risk of transferring contaminants to humans as well.'
        ],
        link: 'https://www.tandfonline.com/doi/full/10.1080/00380768.2015.1035622'
    },
    {
        header: '',
        body: [
            'Soil disruption has a cascading effect on the food chain. When the plant species that are primary food sources for animals are affected, it leads to food scarcity for herbivores. And when the herbivore population is reduced, the carnivores that prey on them are in turn impacted by food scarcity of their own.',
            'The opposite can also be true. As the amounts of topsoil and vegetation dwindle, the cover and shelter that insects and small animals use to hide from predators disappears. Without adequate hiding spots, these animals become more vulnerable to predation.',
            'The key takeaway is that all ecosystems exist in a delicate balance of autotrophs and heterotrophs, which make up its food chain. If that balance is disrupted, every organism in the chain is affected.'
        ]
    },
    {
        header: '3. The urban heat island effect',
        body: [
            'The Urban Heat Island effect is a phenomenon where urban areas experience higher temperatures than rural ones. Impervious surfaces absorb more solar radiation during the day than natural surfaces like vegetation and soil. They then release the heat at night, raising temperatures. This is compounded by so-called waste heat, which is generated by vehicles, industrial processes, and air conditioning systems, among other sources.',
            'Areas with high impervious surface coverage also tend to lack vegetation. Plants and trees provide shade and help to cool the air through the process of evapotranspiration. Finally, tall buildings block and redirect wind flow, reducing wind speed and preventing the dispersion of heat in the air.',
            'When all of these forces occur together, the result is an urban environment that endangers both humans and wildlife. The Urban Heat Island effect has been linked to higher energy consumption, more heat-related illnesses such as heat-exhaustion and heat-stroke, increased air pollution, and reduced water quality.'
        ],
        link: 'https://education.nationalgeographic.org/resource/urban-heat-island/'
    }
];

export const IMPERVIOUS_STORY_THREATS_MEDIA = [
    {
        index: 0,
        image: waterTableDiagram,
        video: null,
        alt: 'Diagram depicting the water table, groundwater, and aquifers.',
        source: 'Public Domain',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 1,
        image: groundwaterWetland,
        video: null,
        alt: 'A partially flooded wetland ecosystem with trees and birds.',
        source: 'Ashwini Chaudhary',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 2,
        image: bilithu,
        video: null,
        alt: 'Yinderitu, a desert lake in China fed by many underground springs.',
        source: 'Wikimedia Commons',
        caption: "Yinderitu, in Mongolian 'The Place Without Steps', is the largest salt lake in the Badain Jaran Desert in China. Locally, it is referred to as Shenquan, or 'Divine Spring.' This lake contains 108 springs, fed by groundwater, that provide both refreshment and cultural significance to locals and visitors alike.",
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 3,
        image: groundwaterIrrigation,
        video: null,
        alt: 'A rural farmer spreading seeds in a paddy flooded by an irrigation system.',
        source: 'wilsanphotography',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 4,
        image: null,
        video: 'https://www.youtube.com/embed/ft7s7y-f8Q8',
        alt: null,
        source: 'United States Geological Survey',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 5,
        image: null,
        video: null,
        alt: null,
        source: 'United States Environmental Protection Agency',
        caption: null,
        chart: true,
        chartTitle: 'Effects of Impervious Surface Cover % on Runoff',
        chartType: 'bar',
        chartData: IMPERVIOUS_RUNOFF,
        chartTicks: null
    },
    {
        index: 6,
        image: redTide,
        video: null,
        alt: 'A sign posted at a Florida beach warning of the dangers of red tide.',
        source: 'Florida Guidebook',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 7,
        image: turbidity,
        video: null,
        alt: 'Aerial view of a boat traveling a river of muddy, opaque water.',
        source: 'Justin Wilkens',
        caption: 'The Yazoo River Diversion Canal in Mississippi, USA, shows high levels of turbidity due to suspended sediment. The Mississippi Department of Environmental Quality notes sediment from land use runoff is the primary pollutant of concern.',
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 8,
        image: fragmentation,
        video: null,
        alt: 'A road bisecting a forest.',
        source: 'Sophie N',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 9,
        image: soilPollution,
        video: null,
        alt: 'Infographic depicting the many harmful effects of soil pollution.',
        source: 'Food & Agriculture Organization of the United Nations',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 10,
        image: soilPollution,
        video: null,
        alt: 'Infographic depicting the many harmful effects of soil pollution.',
        source: 'Food & Agriculture Organization of the United Nations',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 11,
        image: uhi,
        video: null,
        alt: 'Infographic showing the much higher heat levels in areas with more impervious surface coverage.',
        source: 'Climate Central',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    }
];

export const IMPERVIOUS_STORY_SOLUTIONS_CONTENT = [
    {
        header: '1. Green spaces',
        body: [
            'Creating and maintaining parks and green spaces in cities provides habitat and corridors for native species, reduces the Urban Heat Island effect, and improves air and water quality.',
            'Humans benefit too, with many studies linking greener urban areas with lower stress, better cognitive function, and overall happiness.'
        ]
    },
    {
        header: 'Green buildings',
        body: [
            'Growing vegetation on impervious building surfaces reduces stormwater runoff, improves insulation, and creates new habitat for various species. Green buildings act as stepping stones for wildlife, especially birds and insects, as they pass through urban environments in search of food, shelter, or mates.'
        ]
    },
    {
        header: 'Wildlife corridors',
        body: [
            'Designing urban spaces with wildlife corridors allows animals to move between habitats and mitigates fragmentation. This may involve overpasses, underpasses, or green bridges, enabling wildlife to safely cross roads.'
        ],
        link: 'https://largelandscapes.org/'
    },
    {
        header: 'Rain gardens and bioswales',
        body: [
            'Rain gardens are shallow depressions planted with native shrubs, perennials, grasses, and flowers. Bioswales are similar, but usually larger and sometimes lined to help direct stormwater. Both are used to collect stormwater runoff, allowing it to be absorbed and filtered naturally by the soil and plants, which helps in preventing floods and protecting nearby water bodies.',
            'The use of rain gardens and bioswales, among other methods that tackle the stormwater problem at its source, is known as rainscaping.'
        ],
        link: 'https://www.missouribotanicalgarden.org/sustainability/sustainability/sustainable-living/at-home/rainscaping-guide'
    },
    {
        header: 'Riparian buffers',
        body: [
            'Planted along the banks of streams, rivers, wetlands, and lakes, riparian buffers are strips of vegetation that act as a bulwark between water bodies and urban or agricultural areas. This layer of protection helps to maintain water temperature, capture and filter sediment and pollutants, and provide a more diverse array of habitats and microclimates for wildlife.'
        ]
    },
    {
        header: '2. Permeable materials',
        body: [
            'Permeable, or pervious, materials are designed to allow water to pass through them, thereby reducing surface runoff and allowing for groundwater recharge. This helps to maintain natural water cycles and reduces the stress on local ecosystems.'
        ]
    },
    {
        header: 'Spotlight: PICP',
        body: [
            "In many cities, you may have encountered Permeable Interlocking Concrete Pavement, or PICP. While impervious themselves, these concrete blocks are designed with narrow openings between them that are filled with permeable or organic material. This allows stormwater runoff to travel between them, where it's caught beneath them in a layer of crushed stone and then dispersed into groundwater. PICP can be used to build sidewalks, parking lots, or low speed roadways."
        ]
    },
    {
        header: '',
        body: [
            'Permeable materials have other advantages as well. The air trapped in these porous materials has been shown to store heat and release it during cold-weather periods, helping to thaw and melt ice and snow. Because of this, researchers observe that permeable asphalt needs less than 25% of the deicing salt required for normal asphalt.'
        ],
        link: 'https://www.epa.gov/soakuptherain/soak-rain-permeable-pavement'
    },
    {
        header: '3. Habitat restoration',
        body: [
            "Sometimes, it's just as important to fix what we've already broken as it is to add new features to our urban environments. Rehabilitating degraded areas by reintroducing native plants and creating conditions that support native wildlife can be instrumental in increasing biodiversity.",
            "Of particular importance is the preservation and restoration of wetlands, which are among the most productive (and most threatened) ecosystems on the planet. They host a vast array of species, many of which are endemic to wetland environments. In addition, these ecosystems function as nature's filters, mitigating floods, trapping and breaking down pollutants and suspended solids, and sequestering carbon."
        ]
    },
    {
        header: 'Spotlight: The Vermont Partners Program',
        body: [
            'In many cases, habitat restoration is a partnership between private landowners and government organizations. Cost-share programs offset the financial burden of biodiversity conservation, allowing the owners of the land to act as conservationists without the need for direct government intervention.',
            'One example, the Vermont Partners Program, pairs biologists with local landowners to identify and plan restoration projects. These projects control invasive species, introduce native vegetation, and improve habitat connectivity, among other benefits.',
            "Most programs of this kind designate priority species—any animal species that is particularly threatened in terms of its continued survival. In Vermont, this includes the monarch butterfly, black duck, and blue spotted salamander, among others."
        ],
        link: 'https://www.uvm.edu/seagrant/sites/default/files/files/publication/USFW_Partners_Wetland_Riparian_Restoration_2020.pdf'
    },
    {
        header: '4. Government regulation and incentives',
        body: [
            'Implementing and enforcing regulations that limit the impact of development on biodiversity, as well as providing incentives for sustainable business practices, can drive positive change.',
            'In theory, governments are themselves incentivized to invest in biodiversity. A healthy environment is foundational to human well-being.',
            "You've already learned many ways that biodiversity improves the quality of our air and water, but they are also essential for ensuring food security, preventing the emergence and spread of infectious diseases, and contributing to the development of medicines that improve and prolong our lives. This is referred to in economic terms as 'natural capital'."
        ]
    },
    {
        header: 'Natural capital',
        body: [
            "It's a common misconception that investing in biodiversity conservation harms the economy. In fact, that couldn't be further from the truth. Natural capital is the world's single most important economic asset, and the essential services provided by healthy ecosystems are estimated to generate anywhere from US$33 to US$125 trillion each year.",
            "The United Nations maintains an international standard for natural capital accounting, the System of Environmental-Economic Accounting (SEEA). As of 2021, at least 89 countries had started to implement natural capital accounts consistent with SEEA, but only 34 of them were considered complete.",
            'In the business world, the outlook is more grim. Of the 3,500 companies that represent more than 85% of the global market, fewer than 1% of business models sufficiently account for biodiversity- and nature-related risks. This short-sighted view of the value of nature exposes the financial sector to immense risk as the effects of global climate change intensify and more species face endangerment and extinction.'
        ],
        link: 'https://seea.un.org/home/Natural-Capital-Accounting-Project'
    },
    {
        header: 'Urban planning',
        body: [
            'Across the world, governments and urban planners are seeking new, sustainable ways for our cities to house a growing population without sacrificing the environment. When it comes to impervious surfaces, these changes are often imposed in terms of maximum impervious coverage, strictly limiting how much land is available for urban development.',
        ]
    },
    {
        header: '',
        body: [
            'Adopting green building codes and standards is an approach that ensures construction projects meet sustainability criteria. This includes energy efficiency, water conservation, and the use of renewable building materials',
            "One example of a successful urban planning program is Leadership in Energy and Environmental Design, or LEED, a green development certification recognized across the globe. LEED awards credits across several categories of ethical, inclusive, and sustainable design."
        ],
        link: 'https://www.usgbc.org/leed',
        quote: 'LEED certification provides a framework for healthy, highly efficient, and cost-saving green buildings, which offer environmental, social and governance benefits. LEED certification is a globally recognized symbol of sustainability achievement and leadership.',
        quoteSource: 'Leadership in Energy and Environmental Design'
    },
    {
        header: 'Spotlight: Mixed-use development',
        body: [
            "While limiting impervious coverage is an effective tool, it's also important to scrutinize how urban areas can best be designed to protect the environment. A concept called mixed-use development, sometimes referred to as the '15-Minute City', is an urban planning concept that combines residential, commercial, and recreational areas with public transit to create hubs where residents can meet all their basic needs by traveling only a short distance. This concept has taken many forms in recent years."
        ]
    },
    {
        header: '',
        body: [
            'In 2016, Copenhagen adopted a five-minutes-to-everything model for their Nordhavn district, which requires a maximum five-minute walk to all amenities and public transit. Over the next 50 years, their goal is to ensure tight-knit and varied neighborhoods, encouraging the use of bicycles and public transit over private automobiles.',
            'Copenhagen goes one step further by incorporating energy forms including district heating and cooling, geothermal energy, and solar cells, aiming to make their urban areas CO2-neutral.'
        ],
        link: 'https://stateofgreen.com/en/',
        quote: 'The challenge of creating a sustainable city is not to create life - but to create the good life.',
        quoteSource: 'Claus Billehøj, Chief of Section, Municipality of Copenhagen'
    },
    {
        header: '',
        body: [
            'In Melbourne, Plan Melbourne 2017-2050 is an urban development strategy underpinned by the principle of 20-minute neighborhoods, which features six hallmarks of sustainable cities: ',
            '1: Safe, accessible and well connected for pedestrians and cyclists to optimise active transport',
            '2. High-quality public realm and open spaces',
            '3. Provide services and destinations that support local living',
            '4. Facilitate access to quality public transport that connects people to jobs and higher order services',
            '5. Deliver housing/population at densities that make local services and transport viable',
            '6. Facilitate thriving local economies',
            'The Plan Melbourne program has inspired similar land-use strategies in France, Singapore, and elsewhere across the world.'
        ],
        link: 'https://theconversation.com/people-love-the-idea-of-20-minute-neighbourhoods-so-why-isnt-it-top-of-the-agenda-131193'
    },
    {
        header: '',
        body: [
            'Whatever the specific time period, the central ideology of mixed-use development holds true. To combat urban sprawl, and thus mitigate the area and impact of impervious surfaces, we need to rethink the layout of our cities. Our current, low-density and spread out way of living comes at far too great a cost.'
        ]
    },
    {
        header: 'Conservation easements',
        body: [
            'Governments work with landowners to establish conservation easements, which are legal agreements that limit the type of development that takes place on a piece of land in order to protect its conservation values.',
            'The goal of conservation easements is twofold: to preserve the land for future generations, and to keep the land in private ownership by empowering landowners as stewards of the environment through education and tax incentives.'
        ]
    },
    {
        header: 'Economic incentives',
        body: [
            'Providing tax incentives, grants, or low-interest loans for green development encourages builders and developers to implement more sustainable practices. For example, a developer might receive a grant for choosing permeable pavement or preserving a fixed percentage of a property as green space, subsidizing the added planning and material costs.',
            'Many of these incentives are also available to private citizens in the form of tax credits, such as for installing solar panels or purchasing electric vehicles. In many countries, properties that produce excess electricity through solar, wind, or hydropower can sell that surplus energy back to the grid.'
        ],
        link: 'https://www.pwc.com/gx/en/services/tax/green-tax-and-incentives-tracker.html#:~:text=Green%20incentives%20are%20financial%20benefits,investments%20that%20mitigate%20environmental%20impact.'
    },
    {
        header: '5. You (yes, you!)',
        body: [
            "As you've now seen, there are many ways to mitigate the impact of impervious surfaces. Urban planners, developers, scientists, and governments both local and national are all important cogs in the machine of biodiversity conservation.",
            "But there's one stakeholder in the future of our planet who we haven't discussed: YOU."
        ]
    },
    {
        header: '',
        body: [
            "As a citizen of our planet, you are directly affected by impervious surfaces, urban sprawl, and the biodiversity loss occurring across the globe. Individual and community engagement are a crucial factor in any conservation effort.",
            'Here are some ways that you can get involved today: '
        ]
    },
    {
        header: 'Education and awareness',
        body: [
            'Educate your community about the importance of biodiversity and the impact of impervious surfaces. Start a club, organize an informational event, or plan a nature walk that highlights how developed areas fragment or incur on wildlife habitats.',
            'Education and the perception of the importance of climate change and conservation go hand in hand. When people understand the significance of these issues, they are more likely to support conservation efforts or roll up their sleeves and get to work themselves.'
        ],
        quote: 'When students see that they hold the power to contribute to conservation as a collective, they become motivated to continue to pursue conservation efforts. [T]hey retain science and conservation knowledge, skills, roles, and actions, which create the foundation and capacity for future conservation efforts.',
        quoteSource: 'National Environmental Education Foundation'
    },
    {
        header: 'Citizen science',
        body: [
            'Citizen science programs allow anyone to get involved in the scientific process of understanding and confronting global challenges. You can affect change by taking photos of your local environment, collecting field samples, documenting changes in nature, or even using sensors in your smartphone to monitor the air and water.',
            "These programs aren't limited to ecology or biodiversity. Citizen scientists drive progress in diverse fields including astronomy, medicine, psychology, genetics, engineering, and more! Your curiosity could help fuel the next great scientific discovery."
        ],
        link: 'https://www.citizenscience.gov/#'
    },
    {
        header: 'Gardening and greening projects',
        body: [
            'Encouraging your community to plant trees or cultivate gardens provides small patches of habitat for pollinators and other wildlife. This also helps to engage communities in biodiversity conservation efforts, a hands-on method of environmental education. Not to mention, community gardens are a healthy and sustainable food source!'
        ]
    },
    {
        header: 'Social media and technology',
        body: [
            "We're fortunate to live in a time when anyone's voice can be amplified and broadcast around the world. Even if your network is small, social media is a great way to share knowledge and resources with people near and far. Don't be afraid to put yourself out there and stand up for our planet and its biodiversity.",
            'Remember, advocating for your beliefs, whether online or in person, is not about having the loudest voice. Be consistent, do the research, and share information with confidence. If we stay focused on raising awareness and affecting change, the results will come.',
        ]
    },
    {
        header: '',
        body: [
            "In recent years, social media has also been identified as an invaluable source of data for conservation efforts. This form of passive or incidental citizen science, by which user-uploaded photo and video content can be evaluated by researchers, can help in the location and identification of threatened or endangered species, and even new species entirely!"
        ],
        link: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0255416'
    },
    {
        header: 'Make your voice heard',
        body: [
            'Legislation starts with an idea, and that idea can come from anywhere. From lobbyists and advocacy groups to subject matter experts and concerned citizens, anyone can be the progenitor of the next great advancement in biodiversity conservation.',
            "In the modern day, it can feel like we don't have a voice in government—like politicians bend to the will of powerful business interests, often at the expense of our planet, social equality, and justice. It's essential to find a productive outlet for these frustrations. Whether by contacting your local officials, exerting pressure on government and business through peaceful protests or boycotts, or volunteering to support a cause that's important to you, there are many ways to affect change.",
            "Our most essential human rights and the institutions that protect them don't come about by chance. They're the product of a storied history of action and advocacy, both collective and individual.",
            'And remember: if you have the privilege, VOTE.'
        ],
        link: 'https://mobilisationlab.org/resources/10-ways-people-power-can-change-the-world/'
    },
    {
        header: 'Spotlight: Love Canal',
        body: [
            'In the late 1970s, the Love Canal neighborhood in Niagara Falls, New York found itself in the national spotlight. The Hooker Chemical Company had sold the 16-acre site, once a planned model community, to the local school district for US$1 in 1953. Two schools were built on the property by 1955.',
            'How did the school district get such an amazing bargain? The company had used the site for decades to dump tens of thousands of tons of chemicals, and the deal included a clause that they hoped would absolve them of legal liability.'
        ]
    },
    {
        header: '',
        body: [
            'In the ensuing years, residents of the Love Canal area, by then an established suburban community, complained about suspicious black fluids and foul odors in their yards and public playgrounds.',
            'In 1977, after winter storms raised the water table and brought the buried contaminants to the surface, a study by the State Departments of Health and Environmental Conservation was conducted. It found toxic vapors from more than 80 compounds in many Love Canal homes, the result of groundwater leaching into basements and evaporating into the air.',
            'By 1979, more studies has discovered leukemia, miscarriages, birth defects, and more among residents.'
        ]
    },
    {
        header: '',
        body: [
            'At the heart of the community effort to remediate this tragedy was Lois Gibbs, a local mother of two. Her family lived atop the dumping ground, and her son had developed epilepsy and asthma associated with exposure to chemical waste.',
            "Over a 2-year period, Lois Gibbs rallied homeowners, organized protests and rallies, and navigated a protracted legal battle in the face of resistance from Occidental Petroleum, Hooker Chemical's parent company, as well as the local and state governments. She didn't give up until her campaign gained national attention."
        ],
        quote: 'The main lesson to be learned from the Love Canal crisis is that in order to protect public health from chemical contamination, there needs to be a massive outcry - a choir of voices - by the American people demanding change.',
        quoteSource: 'Lois Gibbs'
    },
    {
        header: '',
        body: [
            "Lois Gibbs's advocacy for her family and community eventually led to the evacuation and relocation of families affected by the toxic waste, and it played a significant role in the creation of the Comprehensive Environmental Response, Compensation, and Liability Act, commonly known as the Superfund Act."
        ],
        link: 'https://cumulis.epa.gov/supercpad/SiteProfiles/index.cfm?fuseaction=second.cleanup&id=0201290'
    },
    {
        header: '',
        body: [
            'The Love Canal tragedy has very little to do with impervious surfaces, of course. But it does illustrate how concerned citizens, through grassroots activism and advocacy, can significantly influence environmental legislation.',
            'Protecting biodiversity is a collaboration between individuals and organizations at all levels of our society, but the initial spark can come from anywhere.',
            'Even you.'
        ],
        quote: 'One person can change the world.',
        quoteSource: 'Rosa Parks'

    }
];

export const IMPERVIOUS_STORY_SOLUTIONS_MEDIA = [
    {
        index: 0,
        image: greenBuilding,
        video: null,
        alt: 'Green architecture, building with incorporated greenery.',
        source: 'jwvaneck',
        caption: "The Aeres University of Applied Sciences in Almere, Netherlands features a stunning example of green architecture. Nicknamed 'Green Lung', this building embodies the philosophies of climate adaptation and sustainability.",
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 1,
        image: greenBuilding,
        video: null,
        alt: 'Green architecture, building with incorporated greenery.',
        source: 'jwvaneck',
        caption: "The Aeres University of Applied Sciences in Almere, Netherlands features a stunning example of green architecture. Nicknamed 'Green Lung', this building embodies the philosophies of climate adaptation and sustainability.",
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 2,
        image: null,
        video: 'https://www.youtube.com/embed/cswQpkHiPOs',
        alt: null,
        source: 'The Center for Large Landscape Conservation',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 3,
        image: bioswale,
        video: null,
        alt: 'A bioswale between a city street and sidewalk planted with native shrubs.',
        source: 'Erica Fischer',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 4,
        image: riparian,
        video: null,
        alt: 'Riparian buffer infographic demonstrating advantages.',
        source: 'Public Domain',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 5,
        image: pervious,
        video: null,
        alt: 'Examples of pervious paving materials.',
        source: 'Atelier Groenblauw',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 6,
        image: null,
        video: 'https://www.youtube.com/embed/7LHPzybDWtc',
        alt: null,
        source: 'Oak Pavers',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 7,
        image: null,
        video: 'https://www.youtube.com/embed/7LHPzybDWtc',
        alt: null,
        source: 'Oak Pavers',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 8,
        image: wetland,
        video: null,
        alt: 'Wetland conservation infographic demonstrating advantages and risks.',
        source: 'Wetland-based Solutions',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 9,
        image: null,
        video: 'https://www.youtube.com/embed/AU5czu931yU',
        alt: null,
        source: 'U.S. Fish & Wildlife Service',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 10,
        image: bioSymbiosis,
        video: null,
        alt: 'Infographic depicting symbiotic relationship between biodiversity and economy.',
        source: 'United States Agency for International Development',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 11,
        image: null,
        video: 'https://www.youtube.com/embed/ykzFmT4rhmM',
        alt: null,
        source: 'Natural Capital Ireland',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 12,
        image: greenBuildingTwo,
        video: null,
        alt: 'Another example of green architecture.',
        source: 'CHUTTERSNAP',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 13,
        image: leedRating,
        video: null,
        alt: 'LEED rating scorecard for neighborhood development.',
        source: 'U.S. Green Building Council',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 14,
        image: mixedUse,
        video: null,
        alt: 'German city street depicting mixed-use development, with people biking and businesses alongside homes.',
        source: 'Roman Kraft',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 15,
        image: null,
        video: 'https://www.youtube.com/embed/BCYgajPrT64',
        alt: null,
        source: 'dotDK Media, Denmark',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 16,
        image: twentyMinuteNeighborhood,
        video: null,
        alt: 'Infographic depicting the six hallmarks of sustainable cities.',
        source: 'State Government of Victoria',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 17,
        image: sprawl,
        video: null,
        alt: 'Aerial view of Tokyo, a sprawling megacity with little vegetation in sight.',
        source: 'Terence Starkey',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 18,
        image: easement,
        video: null,
        alt: 'Signs displayed in a privately owned wetland declaring a conservation easement boundary.',
        source: 'Pheasants Forever',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 19,
        image: null,
        video: 'https://www.youtube.com/embed/ggYzYUBw97c',
        alt: null,
        source: 'OECD Environment',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 20,
        image: protest,
        video: null,
        alt: 'Protestors in a city street holding signs about climate change.',
        source: 'Li-An Lim',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 21,
        image: wildfires,
        video: null,
        alt: 'Wildfires rampage through forests in Tasmania, Australia.',
        source: 'Matt Palmer',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 22,
        image: null,
        video: null,
        alt: null,
        source: 'Gallup World Risk Poll (2019)',
        caption: null,
        chart: true,
        chartTitle: 'Perception of Climate Risk by Years of Education',
        chartType: 'bar',
        chartData: EDUCATION_CLIMATE,
        chartTicks: null
    },
    {
        index: 23,
        image: null,
        video: 'https://www.youtube.com/embed/O4xdKenrlJ4',
        alt: null,
        source: 'Environmental Social Science Research Group',
        caption: '',
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 24,
        image: communityGarden,
        video: null,
        alt: 'A community garden in Denver, Colorado.',
        source: 'Steve Adams',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 25,
        image: socialMedia,
        video: null,
        alt: 'Cartoon depiction of a social media post connecting to many other users.',
        source: 'pxfuel',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 26,
        image: kukri,
        video: null,
        alt: 'Photograph of Oligodon churahensis, a previously undescribed species discovered on social media.',
        source: 'Virendar Bhardwaj',
        caption: "When Virendar Bhardwaj, a postgraduate student in India's Himalayan region, uploaded this photo to social media, herpetologists from the National Centre for Biological Sciences in Bengaluru took notice. The kukri snake's unique features warranted further investigation, which led to its identification as an undiscovered species.",
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 27,
        image: protestTwo,
        video: null,
        alt: 'Climate protesters congregate in Nuremberg, Germany to speak out against climate inaction.',
        source: 'Markus Spiske',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 28,
        image: loveCanal,
        video: null,
        alt: "A sign posted in Love Canal during the environmental tragedy, decrying the government's inaction.",
        source: 'Public Domain',
        caption: '',
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 29,
        image: loveCanalProtest,
        video: null,
        alt: 'A protest by Love Canal residents.',
        source: 'Bettmann Archive/United Press International',
        caption: '',
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 30,
        image: loisGibbs,
        video: null,
        alt: 'Photograph of Lois Gibbs being interviewed by the media during the Love Canal tragedy.',
        source: 'E.H. Butler Library, SUNY Buffalo State',
        caption: null,
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 31,
        image: superfundAct,
        video: null,
        alt: 'Jimmy Carter signing the Superfund Act in the Oval Office.',
        source: 'Dennis Cook',
        caption: 'Jimmy Carter signed the Comprehensive Environmental Response, Compensation, and Liability Act, commonly known as the Superfund Act, in 1980. The program has gone on to restore nearly 400 sites affected by hazardous waste in the wake of hurricanes, oil spills, train derailments, and corporate malfeasance.',
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
    {
        index: 32,
        image: somethingGreat,
        video: null,
        alt: "Neon sign that reads 'Do Something Great'.",
        source: 'Clark Tibbs',
        caption: 'Well, what are you waiting for?',
        chart: null,
        chartTitle: null,
        chartType: null,
        chartData: null,
        chartTicks: null
    },
];

export const IMPERVIOUS_STORY_SUMMARY = [
    {
        header: 'What are they?',
        bullets: [
            'Impervious surfaces are the humanmade structures, like roads and buildings, that provide us with shelter and allow us to travel from place to place.',
            "They're impervious because they can't absorb rainwater.",
            'As more humans move to urban areas and away from rural ones, our cities become bigger and more spread out (a concept known as urban sprawl), and therefore require more impervious surfaces.'
        ]
    },
    {
        header: 'Why are they a problem?',
        bullets: [
            'Impervious surfaces trap rainwater above ground, preventing infiltration and depleting aquifers.',
            'Wildlife relies on the groundwater in aquifers to maintain the health of the aquatic and wetland ecosystems they call home.',
            'Without a steady rate of replenishment from groundwater, our rivers, lakes, and wetlands are more susceptible to floods, drought, and erosion.',
            'Rainwater trapped above ground becomes runoff, which picks up excess nutrients, sediment, and heavy metals from our cities, polluting water and soil.',
            'Impervious surfaces intersect and fragment habitat, making it difficult for wildlife to find food and reproduce.',
            'Areas with high impervious cover absorb solar radiation and redirect windflow, causing the temperature to skyrocket, a phenomenon known as the Urban Heat Island Effect.'
        ]
    },
    {
        header: 'What can we do?',
        bullets: [
            'Incorporate more green spaces into our cities, providing habitat and corridors for native wildlife to thrive.',
            'Replace impervious materials with pervious materials such as Permeable Interlocking Concrete Pavement (PICP).',
            'Rehabilitate degraded areas by reintroducing native plants, improving habitat connectivity, and controlling invasive species.',
            'Engage and educate your community.',
            'Lobby the local or federal government to overhaul regulations and implement sustainable urban planning.',
            'Participate in Citizen Science programs to support scientific research.',
            'Donate to conservation groups.'
        ]
    }
];

export const IMPERVIOUS_STORY_SOURCES = [
    {
        category: 'Organizations',
        sources: [
            {
                name: 'Center for Large Landscape Conservation',
                link: 'https://largelandscapes.org/'
            },
            {
                name: 'Climate Central',
                link: 'https://www.climatecentral.org/'
            },
            {
                name: 'dotDK Media',
                link: 'https://www.dotdkmedia.dk/'
            },
            {
                name: 'Environmental Social Science Research Group',
                link: 'https://www.essrg.hu/en/'
            },
            {
                name: 'Food & Agriculture Organization of the U.N.',
                link: 'https://www.fao.org/home/en'
            },
            {
                name: 'Gallup',
                link: 'https://www.gallup.com/home.aspx'
            },
            {
                name: 'Missouri Botanical Garden',
                link: 'https://www.missouribotanicalgarden.org/'
            },
            {
                name: 'Mobilisation Lab',
                link: 'https://mobilisationlab.org/'
            },
            {
                name: 'National Environmental Education Foundation',
                link: 'https://www.neefusa.org/'
            },
            {
                name: 'National Geographic Education',
                link: 'https://education.nationalgeographic.org/'
            },
            {
                name: 'Natural Capital Ireland',
                link: 'https://www.naturalcapitalireland.com/'
            },
            {
                name: 'OECD Environment',
                link: 'https://www.oecd.org/environment/'
            },
            {
                name: 'PennState Extension',
                link: 'https://extension.psu.edu/'
            },
            {
                name: 'Pew Research Center',
                link: 'https://www.pewresearch.org/'
            },
            {
                name: 'Pheasants Forever',
                link: 'https://www.pheasantsforever.org/'
            },
            {
                name: 'PwC Green Taxes & Incentives Tracker',
                link: 'https://www.pwc.com/gx/en/services/tax/green-tax-and-incentives-tracker.html#:~:text=Green%20incentives%20are%20financial%20benefits,investments%20that%20mitigate%20environmental%20impact.'
            },
            {
                name: 'State Government of Victoria',
                link: 'https://www.vic.gov.au/'
            },
            {
                name: 'State of Green',
                link: 'https://stateofgreen.com/en/'
            },
            {
                name: 'The Conversation',
                link: 'https://theconversation.com/us'
            },
            {
                name: 'U.N. System of Environmental Economic Accounting',
                link: 'https://seea.un.org/'
            },
            {
                name: 'U.S. Agency for International Development',
                link: 'https://www.usaid.gov/'
            },
            {
                name: 'U.S. Environmental Protection Agency',
                link: 'https://www.epa.gov/'
            },
            {
                name: 'U.S. Fish & Wildlife Service',
                link: 'https://www.fws.gov/'
            },
            {
                name: 'U.S. General Services Administration',
                link: 'https://www.citizenscience.gov/#'
            },
            {
                name: 'U.S. Geological Survey',
                link: 'https://www.usgs.gov/'
            },
            {
                name: 'U.S. Green Building Council',
                link: 'https://www.usgbc.org/'
            },
            {
                name: 'Wetland-based Solutions',
                link: 'https://www.wetlandbasedsolutions.org/'
            },
            {
                name: 'World Bank',
                link: 'https://www.worldbank.org/en/home'
            }
        ]
    },
    {
        category: 'Studies',
        sources: [
            {
                authors: 'Jin-Ling Yang & Gan-Lin Zhang',
                name: 'Formation, characteristics and eco-environmental implications of urban soils - A review',
                link: 'https://doi.org/10.1080/00380768.2015.1035622',
                year: '2015'
            },
            {
                authors: 'Thomas Edwards, Christopher B. Jones, Sarah E. Perkins & Padraig Corcoran',
                name: 'Passive citizen science: The role of social media in wildlife observations',
                link: 'https://doi.org/10.1371/journal.pone.0255416',
                year: '2021'
            }
        ]
    },
    {
        category: 'Photography',
        sources: [
            'Ashwini Chaudhary', 'Atelier Groenblauw', 'Bettmann Archive/United Press International', 'Christopher Burns', 'CHUTTERSNAP', 'Clark Tibbs', 'Dennis Cook', 'E.H. Butler Library, SUNY Buffalo State', 'Erica Fischer', 'Florida Guidebook', 'Justin Wilkens', 'jwvaneck', 'Li-An Lim', 'Markus Spiske', 'Matt Palmer', 'pxfuel', 'Raphaël Biscaldi', 'Sophie N', 'Steve Adams', 'Roman Kraft', 'Terence Starkey', 'Virendar Bhardwaj', 'Wikimedia Commons', 'wilsanphotography'
        ]
    }
];