import allcreatures from '../app/media/allcreaturespodcast.png';
import businessofbio from '../app/media/businessofbiodiversitypodcast.jpg';
import consconv from '../app/media/conservationconversationspodcast.png';
import lifeinthesoil from '../app/media/lifeinthesoilpodcast.jpg';
import biodiversityspeaks from '../app/media/biodiversityspeakspodcast.jpg';
import noaa from '../app/media/noaapodcast.jpg';

export const PODCASTS = [
    {
        name: 'Business of Biodiversity (AU)',
        link: 'https://www.environment.nsw.gov.au/topics/animals-and-plants/threatened-species/saving-our-species-program/business-of-biodiversity-podcast',
        description: 'The Business of Biodiversity aims to prove that biodiversity is not just good for the environment - but good for business too.',
        image: businessofbio
    },
    {
        name: 'All Creatures',
        link: 'https://www.allcreaturespod.com/episode_type/all/',
        description: 'An animal podcast covering hundreds of species, including interviews with conservation experts from all around the world.',
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
        description: "Learn from some of the world's best soil scientists about soil biodiversity, why it matters, and how we can protect it.",
        image: lifeinthesoil
    },
    {
        name: 'Biodiversity Speaks',
        link: 'https://ibios.ubc.ca/events/the-podcast/',
        description: 'The conversation with each speaker involves a brief peek into their personal and professional journey in the field of biodiversity conservation.',
        image: biodiversityspeaks
    },
    {
        name: 'NOAA Ocean Podcast',
        link: 'https://oceanservice.noaa.gov/podcast/',
        description: 'From corals to coastal science, connect with ocean experts to explore questions about the ocean environment.',
        image: noaa
    }
];