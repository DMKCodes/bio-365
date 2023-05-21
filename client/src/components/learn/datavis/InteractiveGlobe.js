import { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import countriesData from '../../../datasets/countries.json';

const InteractiveGlobe = ({ setCountryToDisplay, viewType }) => {
    const [countries, setCountries] = useState({ features: [] });
    const [hover, setHover] = useState();

    useEffect(() => {
        setCountries(countriesData);
    }, []);

    return (
        <>
        <Globe
            width={800}
            height={650}
            lineHoverPrecision={0}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

            polygonsData={countries.features.filter((d) => d.properties.ISO_A2)}
            polygonAltitude={(d) => d === hover ? 0.12 : 0.06}
            polygonCapColor={d => d === hover ? 'steelblue' : 'white'}
            polygonSideColor={() => 'rgba(0, 100, 0, 0.15'}
            polygonStrokeColor={() => '#111'}
            polygonsTransitionDuration={300}

            onPolygonHover={setHover}
            onPolygonClick={(polygonData, polygonIndex) => 
                setCountryToDisplay(polygonData.properties.NAME_LONG)
            }
        />
        </>
    );
};

export default InteractiveGlobe;