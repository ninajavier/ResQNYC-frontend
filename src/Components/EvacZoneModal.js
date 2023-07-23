import React, { useState } from 'react';

const EvacZoneModal = () => {
  const [showEvacModal, setShowEvacModal] = useState(false);

  const toggleEvacModal = () => {
    setShowEvacModal(!showEvacModal);
  };

  return (
    <div>
      <div>
        <div className='evac-zones-map-container' onClick={toggleEvacModal}>
          Map of Evacuation Zones
        </div>
      </div>
      {showEvacModal && (
        <div className="modal-overlay">
          <div>
        <iframe
          allow="geolocation"
          src="https://data.cityofnewyork.us/dataset/Hurricane-Inundation-by-Evacuation-Zone-Map-/2234-9r2y/embed?width=800&height=600"
          title="Evacuation Map"
          width="800"
          height="600"
          style={{ border: "0", padding: "0", margin: "0" }}
        />
      </div>
        </div>
      )}
    </div>
  );
};

export default EvacZoneModal;
