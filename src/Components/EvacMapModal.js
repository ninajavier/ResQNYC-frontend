import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const EvacMapModal = ({ data }) => {
  return (
    <div>
      <div className='evac-sites-map'>

      </div>
      <div>
      <iframe 
      allow="geolocation" src="https://data.cityofnewyork.us/dataset/Hurricane-Inundation-by-Evacuation-Zone-Map-/2234-9r2y/embed?width=800&height=600" title="Evacuation Map" width="800" height="600" style={{border:"0", padding: "0", margin: "0"}}
      />
      </div>
    </div>
  )
}

export default EvacMapModal
