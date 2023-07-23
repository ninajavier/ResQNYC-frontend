import React from 'react'

const EvacCentersModal = () => {
  return (
    <div>
      <h1>Are you looking for Shelter?</h1>
      <iframe allow="geolocation" src="https://data.cityofnewyork.us/dataset/Hurricane-Evacuation-Centers-Map-/ayer-cga7/embed?width=800&height=600" title="Evacuation Center Map" width="800" height="600" style={{border:"0", padding: "0", margin: "0"}} />
    </div>
  )
}

export default EvacCentersModal
