import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";
import Markers from "./map-components/Markers"

import DataDisplay from "./map-components/DataDisplay"
import {markerDummyData} from "./map-components/data.js";
import './map-components/Map.scss';


const MapWrapper = styled.div`
  width:100vw;
  height:100vh;
`;


export default function Map() {

  const [cityMarkers, setCityMarkers] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect( _ => {
      setCityMarkers(markerDummyData);
  }, [])

    const [viewport, setViewport] = useState({
      width: '100%',
      height: '100%',
      latitude: 45,
      longitude: -95,
      zoom: 5,
    });

    const onViewportChange = viewport => {
        setViewport({ ...viewport });
      };

      return (

        <div className="map-page">
          <div className="map">
              <MapWrapper>
                <ReactMapGL
                    mapStyle='mapbox://styles/mapbox/light-v9'
                    {...viewport}
                    mapboxApiAccessToken={
                    'pk.eyJ1IjoiYnJ1bmNodGltZSIsImEiOiJjazIwdG80MGkxN3lmM25vaWZ5cThkZDU1In0.uYqrXjiEyUL1mTEO_N5-0w'
                    }
                    onViewportChange={onViewportChange}>
                    <Markers 
                      cityMarkers={cityMarkers}
                      selected={selected}
                      setSelected={setSelected} />
                </ReactMapGL>
              </MapWrapper>
            </div>
            <DataDisplay />
          </div>

      );
    }