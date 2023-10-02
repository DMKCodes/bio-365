import allcreatures from '../media/allcreaturespodcast.png';
import businessofbio from '../media/businessofbiodiversitypodcast.jpg';
import consconv from '../media/conservationconversationspodcast.png';
import lifeinthesoil from '../media/lifeinthesoilpodcast.jpg';
import biodiversityspeaks from '../media/biodiversityspeakspodcast.jpg';
import noaa from '../media/noaapodcast.jpg';

export const PODCASTS = [
    {
        name: 'Business of Biodiversity (AU)',
        link: 'https://www.environment.nsw.gov.au/topics/animals-and-plants/threatened-species/saving-our-species-program/business-of-biodiversity-podcast',
        description: 'Biodiversity is not just good for the environment, but good for business too.',
        image: businessofbio
    },
    {
        name: 'All Creatures',
        link: 'https://www.allcreaturespod.com/episode_type/all/',
        description: 'An animal podcast covering hundreds of species, featuring experts from all around the world.',
        image: allcreatures
    },
    {
        name: 'Conservation Conversations',
        link: 'https://audioboom.com/channels/5029774-conservation-conversations-with-sean-o-brien',
        description: "Join Sean O'Brien as he discusses emerging technologies and regional and global trends in biodiversity.",
        image: consconv
    },
    {
        name: 'Life in the Soil',
        link: 'https://rilliglab.org/podcast/',
        description: "Learn from soil scientists about soil biodiversity, why it matters, and how we can protect it.",
        image: lifeinthesoil
    },
    {
        name: 'Biodiversity Speaks',
        link: 'https://ibios.ubc.ca/events/the-podcast/',
        description: 'A brief peek into the journeys of experts in the field of biodiversity conservation.',
        image: biodiversityspeaks
    },
    {
        name: 'NOAA Ocean Podcast',
        link: 'https://oceanservice.noaa.gov/podcast/',
        description: 'From corals to coastal science, connect with ocean experts to explore questions about the ocean environment.',
        image: noaa
    }
];