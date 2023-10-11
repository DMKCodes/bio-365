import allcreatures from '../media/allcreaturespodcast.png';
import businessofbio from '../media/businessofbiodiversitypodcast.jpg';
import consconv from '../media/conservationconversationspodcast.png';
import lifeinthesoil from '../media/lifeinthesoilpodcast.jpg';
import biodiversityspeaks from '../media/biodiversityspeakspodcast.jpg';
import noaa from '../media/noaapodcast.jpg';

export const PODCASTS = [
    {
        name: 'The Business of Biodiversity',
        link: 'https://www.environment.nsw.gov.au/topics/animals-and-plants/threatened-species/saving-our-species-program/business-of-biodiversity-podcast',
        category: 'Podcast',
        description: 'Biodiversity is not just good for the environment, but good for business too.',
        about: 'The Business of Biodiversity, brought to you by the Saving our Species program, aims to prove why biodiversity is not just good for the environment - but good for business too.',
        image: businessofbio
    },
    {
        name: 'All Creatures',
        link: 'https://www.allcreaturespod.com/episode_type/all/',
        category: 'Podcast',
        description: 'An animal podcast covering hundreds of species, featuring experts from all around the world.',
        about: 'The All Creatures Podcast is a 5-star rated animal podcast covering hundreds of species, including interviews with conservation experts from all around the world.',
        image: allcreatures
    },
    {
        name: 'Conservation Conversations',
        link: 'https://audioboom.com/channels/5029774-conservation-conversations-with-sean-o-brien',
        category: 'Podcast',
        description: "Join Sean O'Brien as he discusses emerging technologies and regional and global trends in biodiversity.",
        about: 'Geared towards both conservation professionals and casual listeners alike, this educational and entertaining podcast discusses how emerging technologies can benefit conservation, regional and global trends in biodiversity, and the future for life on Earth.',
        image: consconv
    },
    {
        name: 'Life in the Soil',
        link: 'https://rilliglab.org/podcast/',
        category: 'Podcast',
        description: "Learn from soil scientists description soil biodiversity, why it matters, and how we can protect it.",
        about: "Life in the Soil brings you the insights and voices of some of the world's best soil scientists.",
        image: lifeinthesoil
    },
    {
        name: 'Biodiversity Speaks',
        link: 'https://ibios.ubc.ca/events/the-podcast/',
        category: 'Podcast',
        description: 'A brief peek into the journeys of experts in the field of biodiversity conservation.',
        about: 'Dr. Helina Jolly engages in discussions with esteemed speakers on diverse topics related to biodiversity. Through each conversation, gain a unique glimpse into the personal and professional journeys of individuals in the realm of biodiversity conservation.',
        image: biodiversityspeaks
    },
    {
        name: 'NOAA Ocean Podcast',
        link: 'https://oceanservice.noaa.gov/podcast/',
        category: 'Podcast',
        description: 'From corals to coastal science, connect with ocean experts to explore questions description the ocean environment.',
        about: 'Connect with ocean experts and explore topics from corals to coastal science with this audio podcast for teens and adults.',
        image: noaa
    }
];