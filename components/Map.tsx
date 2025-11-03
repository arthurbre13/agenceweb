'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icon
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

const Map = () => {
  // Paris coordinates (Champs-?lys?es)
  const position: [number, number] = [48.8698, 2.3076]

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className="rounded-xl"
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <div className="text-center">
            <strong>DigiCraft Agency</strong>
            <br />
            123 Avenue des Champs-?lys?es
            <br />
            75008 Paris
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
