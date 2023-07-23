import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import icon from '../Assets/map-pin.png';
import userIcon from '../Assets/user-location.png';

const API = process.env.REACT_APP_API_URL;

const EvacMapModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const firstLocationUpdateRef = useRef(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/data`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const customIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  const userLocationIcon = new L.Icon({
    iconUrl: userIcon,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  const GetUserLocation = () => {
    const map = useMap();

    useEffect(() => {
      map.locate().on('locationfound', (e) => {
        setUserLocation(e.latlng);
        if (firstLocationUpdateRef.current) {
          map.flyTo(e.latlng, 15);
          firstLocationUpdateRef.current = false;
        }
      });

      map.locate().on('locationerror', () => {
        console.error('Error getting location');
      });
    }, [map]);

    return null;
  };

  return (
    <div>
      <div>
        <button className='evac-sites-map-container' onClick={toggleModal}>
          {showModal ? 'Close' : 'Show Nearest Evacuation Centers'}
        </button>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="modal-close" onClick={toggleModal}>
                &times;
              </span>
              <MapContainer
                center={[40.77485678097445, -73.8186225050414]}
                zoom={12}
                style={{ height: '400px', width: '50%' }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {userLocation && (
                  <Marker position={userLocation} icon={userLocationIcon}>
                    <Popup>You are here</Popup>
                  </Marker>
                )}

                <GetUserLocation />

                {data.map((item) => {
                  const geom = item.the_geom.slice(7, -1);
                  const [longitude, latitude] = geom.split(' ').map(parseFloat);

                  return (
                    <Marker
                      key={item.BIN}
                      position={[latitude, longitude]}
                      icon={customIcon}
                    >
                      <Popup>
                        <div>
                          <h3>{item.EC_Name}</h3>
                          <p>{item.ADDRESS}</p>
                          <p>{item.CITY}, {item.STATE} {item.ZIP_CODE}</p>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EvacMapModal;
