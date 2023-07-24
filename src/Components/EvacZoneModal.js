import React, { useState } from "react";

const EvacZoneModal = () => {
  const [showEvacModal, setShowEvacModal] = useState(false);

  const toggleEvacModal = () => {
    setShowEvacModal(!showEvacModal);
  };

  return (
    <div>
      <h2>Evacuation Zones</h2>
      <div>
        <button
          className={`evac-sites-map-container btn btn-primary ${
            showEvacModal ? "active" : ""
          }`}
          onClick={toggleEvacModal}
        >
          {showEvacModal ? "Close" : "Map of Evacuation Zones"}
        </button>
      </div>
      {showEvacModal && (
        <div className="modal-overlay">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Map of Evacuation Zones</h5>
                <button
                  type="button"
                  className="close"
                  
                  onClick={toggleEvacModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <iframe
                  allow="geolocation"
                  src="https://data.cityofnewyork.us/dataset/Hurricane-Inundation-by-Evacuation-Zone-Map-/2234-9r2y/embed?width=800&height=600"
                  title="Evacuation Map"
                  width="100%"
                  height="600"
                  style={{ border: "0", padding: "0", margin: "0" }}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleEvacModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <p>
        Evacuation Zones are predefined geographic areas designated by local
        authorities to indicate areas at higher risk during emergencies or
        natural disasters. These zones are part of a comprehensive emergency
        management plan aimed at safeguarding residents and reducing potential
        harm in times of crisis. The primary purpose of Evacuation Zones is to
        provide clear guidance to residents regarding potential evacuation
        orders based on the severity and proximity of the threat.
      </p>
    </div>
  );
};

export default EvacZoneModal;
