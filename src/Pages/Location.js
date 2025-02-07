import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Location.css";


const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});


const LocationMarker = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    }
  });
  return null;
};

const Location = () => {
  const [position, setPosition] = useState([11.232565555398729, 78.08919856864479]); // Default: India
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="location-page">
      <h2 className="location-title">Select Your Location</h2>

      
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      <MapContainer 
        center={position} 
        zoom={10} 
        className="map-container"
        zoomControl={false} 
        whenReady={() => setLoading(false)}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={customIcon} />
        <LocationMarker setPosition={setPosition} />

        
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default Location;
