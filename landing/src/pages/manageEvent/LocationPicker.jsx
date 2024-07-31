import LocationPicker from "react-leaflet-location-picker"
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import xSvg from "./X.svg";

var greenIcon = L.icon({
  iconUrl: xSvg,

  iconSize:     [30, 40], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [20, 30], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const LocationMarker = ({setPositionState}) => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click(e) {
        
        setPosition(e.latlng);
        setPositionState(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      }
    })
  
    return position === null ? null : (
      <Marker position={position} icon={greenIcon}>
        <Popup>مکان انتخاب شده</Popup>
      </Marker>
    )
  }
  
const LocationPicke = ({initialValue, handleLoc}) =>{
  const [locationValue, setLocationValue] = useState(initialValue || null);
  React.useEffect(() => {
    handleLoc(locationValue);
  }, [locationValue, handleLoc]);

    return(
      <div className="flex w-full justify-center items-center h-70">
      <div className="w-11/12 md:w-5/6 lg:w-5/6 h-60 sm:h-80">
    <MapContainer
      className="h-full w-full rounded-md border-2 border-gray-300"
      center={{ lat: 35.7219, lng:51.3347 }}
      zoom={11}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker setPositionState={setLocationValue}/>
    </MapContainer>
    </div>
    </div>
    )
}

export default LocationPicke;
