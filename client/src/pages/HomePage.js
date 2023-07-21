import { Container } from 'reactstrap';

const HomePage = () => {
    return (
        <Container>
            <p>Welcome to Biodiversity 365! This platform is a one-stop shop for policy, news, and data concerning biodiversity and conservation.</p>
            <p>Featured: IPBES Global Assessment Report on Biodiversity and Ecosystem Services</p>
            <a href='https://www.un.org/sustainabledevelopment/blog/2019/05/nature-decline-unprecedented-report/'>Read the report...</a>
            <p>'The overwhelming evidence of the IPBES Global Assessment, from a wide range of different fields of knowledge, presents an ominous picture. The health of ecosystems on which we and all other species depend is deteriorating more rapidly than ever. We are eroding the very foundations of our economies, livelihoods, food security, health and quality of life worldwide.</p>
            <p>- Sir Robert Watson, IPBES Chair</p>
        </Container>
    );
};

export default HomePage;