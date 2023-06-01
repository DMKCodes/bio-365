import { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { scaleLinear } from 'd3-scale';
import COUNTRIES from '../../../app/shared/COUNTRIES';
import { ENDANGERED_RATIOS } from '../../../app/shared/ENDANGERED_RATIOS';
import { MEGADIVERSE_COUNTRIES } from '../../../app/shared/MEGADIVERSE_COUNTRIES';

const InteractiveGlobe = ({ setCountryToDisplay, viewType }) => {
    const [countries, setCountries] = useState({ features: [] });
    const [hover, setHover] = useState();

    useEffect(() => {
        setCountries(COUNTRIES);
    }, []);

    const totalSpecies = new Map(
        ENDANGERED_RATIOS.map(({ name, totalSpecies }) => [name, totalSpecies])
    );
    const totalSpeciesToColor = scaleLinear().domain([0, 50414]).range(['white', 'green']);

    const endangeredRatios = new Map(
        ENDANGERED_RATIOS.map(({ name, ratio }) => [name, ratio])
    );
    const endangeredRatioToColor = scaleLinear().domain([0, 0.258]).range(['white', 'red']);

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
            polygonCapColor={d => {
                if (viewType === 'megadiverse' && MEGADIVERSE_COUNTRIES.includes(d.properties.NAME_LONG)) {
                    return 'steelblue';
                } else if (viewType === 'endangered') {
                    return endangeredRatioToColor(endangeredRatios.get(d.properties.NAME_LONG) || 0);
                } else if (viewType === 'species') {
                    return totalSpeciesToColor(totalSpecies.get(d.properties.NAME_LONG) || 0);
                } else {
                    return d === hover ? 'steelblue' : 'white';
                }
            }}
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