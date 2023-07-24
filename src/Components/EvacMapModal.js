import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import icon from "../Assets/map-pin.png";
import userIcon from "../Assets/user-location.png";

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
        console.error("Error fetching data:", error);
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
      map.locate().on("locationfound", (e) => {
        setUserLocation(e.latlng);
        if (firstLocationUpdateRef.current) {
          map.flyTo(e.latlng, 15);
          firstLocationUpdateRef.current = false;
        }
      });

      map.locate().on("locationerror", () => {
        console.error("Error getting location");
      });
    }, [map]);

    return null;
  };

  return (
    <div>
      <h2>Evacuation Centers</h2>
      <div>
        <button
          className={`evac-sites-map-container btn btn-primary btn-block ${
            showModal ? "active" : ""
          }`}
          onClick={toggleModal}
        >
          {showModal ? "Close" : "Show Nearest Evacuation Centers"}
        </button>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Nearest Evacuation Centers</h5>
                  <button type="button" className="close" onClick={toggleModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <MapContainer
                    center={[40.77485678097445, -73.8186225050414]}
                    zoom={12}
                    style={{ height: "400px", width: "100%" }}
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
                      const [longitude, latitude] = geom
                        .split(" ")
                        .map(parseFloat);

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
                              <p>
                                {item.CITY}, {item.STATE} {item.ZIP_CODE}
                              </p>
                            </div>
                          </Popup>
                        </Marker>
                      );
                    })}
                  </MapContainer>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <p>
        Evacuation Centers are designated facilities established by authorities
        to provide temporary shelter and support for individuals and families
        during emergency situations that necessitate evacuations. These centers
        are activated in response to various emergencies, such as natural
        disasters (e.g., hurricanes, floods, wildfires), industrial incidents,
        or other events that pose a threat to the safety and well-being of
        residents in specific areas.
      </p>
    </div>
  );
};

export default EvacMapModal;
