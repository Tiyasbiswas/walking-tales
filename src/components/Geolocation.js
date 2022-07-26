import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import React ,{ useState,useEffect}from 'react';
import "leaflet/dist/leaflet.css"

 export default function Geolocation () {
    const [latitude,setLatitude]=useState(0);
    const [longitude,setLongitude]=useState(0);
    
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition((position)=>{
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        })
    },[])
    return (
        <>
        <div className='leaflet-container'>
            <MapContainer center={[latitude, longitude]} zoom={2} scrollWheelZoom={false}>
                <TileLayer
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"           
                />
                <Marker position={[latitude, longitude]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
        </>
    )
}