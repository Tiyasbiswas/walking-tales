import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import {
  TileLayer,
  MapContainer,
  LayersControl
} from "react-leaflet";
import { Button } from "react-bootstrap";

// Base map tile:
const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

const Map = () => {
// Set up a useState hook for our map instance:
  const [map, setMap] = useState(null);

  return (
    <>
      <Button variant='contained' color='default'>Click To Change Waypoints</Button>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={3}
        zoomControl={false}
        style={{ height: "100vh", width: "100%", padding: 0 }}
        
      // Set the map instance to state when ready:
        whenCreated={map => setMap(map)}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default Map;
