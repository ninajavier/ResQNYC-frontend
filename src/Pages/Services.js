import React from 'react';
import CoolingMapModal from '../Components/CoolingMapModal';
import EvacMapModal from '../Components/EvacMapModal';
import EvacZoneModal from '../Components/EvacZoneModal';

const Services = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Explore Our Services</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <CoolingMapModal />
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <EvacMapModal />
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <EvacZoneModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
