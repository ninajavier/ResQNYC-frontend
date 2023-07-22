import React from 'react'

const EvacMapModal = () => {
  return (
    <div>
      <h1>Are You Located in An Evacuation Zone?</h1>
      <div>
      <iframe 
      allow="geolocation" src="https://data.cityofnewyork.us/dataset/Hurricane-Inundation-by-Evacuation-Zone-Map-/2234-9r2y/embed?width=800&height=600" title="Evacuation Map" width="800" height="600" style={{border:"0", padding: "0", margin: "0"}}
      />
      </div>
    </div>
  )
}

export default EvacMapModal
