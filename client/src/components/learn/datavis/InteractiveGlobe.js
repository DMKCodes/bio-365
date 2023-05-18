import { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import countriesData from '../../../datasets/countries.json';
import { SPECIES_COUNTRIES } from '../../../datasets/speciesByCountry.js';

const InteractiveGlobe = ({ setCountryData, viewType }) => {
    const [countries, setCountries] = useState({ features: [] });
    const [hover, setHover] = useState();

    useEffect(() => {
        setCountries(countriesData);
    }, []);

    const getSpeciesData = (name) => {
        const data = SPECIES_COUNTRIES.filter((country) => country.name.toLowerCase() === name);
        return data;
    };

    const showSpeciesData = (polygonData) => {
        if (polygonData) {
            const data = getSpeciesData(polygonData.properties.NAME.toLowerCase());
            
            setCountryData(data[0]);
        } else {
            setCountryData(null);
        }
    };

    return (
        <>
        <Globe
            width={800}
            height={650}
            lineHoverPrecision={0}

            polygonsData={countries.features.filter((d) => d.properties.ISO_A2 !== 'AQ')}
            polygonAltitude={(d) => d === hover ? 0.12 : 0.06}
            polygonCapColor={d => d === hover ? 'steelblue' : 'white'}
            polygonSideColor={() => 'rgba(0, 100, 0, 0.15'}
            polygonStrokeColor={() => '#111'}
            polygonsTransitionDuration={300}

            onPolygonHover={setHover}
            onPolygonClick={(polygonData, polygonIndex) => showSpeciesData(polygonData)}
        />
        </>
    );
};

export default InteractiveGlobe;