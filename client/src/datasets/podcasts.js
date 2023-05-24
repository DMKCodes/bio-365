import allcreatures from '../app/media/allcreaturespodcast.png';
import businessofbio from '../app/media/businessofbiodiversitypodcast.jpg';
import consconv from '../app/media/conservationconversationspodcast.png';

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
        description: "Join Sean O'Brien as he discusses emerging technologies, regional and global trends in biodiversity.",
        image: consconv
    },
];