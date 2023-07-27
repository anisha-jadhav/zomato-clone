import React from "react";
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapView = (props) => {
  return (
    <>
      <div>
        <h5 className="text-xl font-normal ">Call</h5>
        <h4 className="text-zomato-400 font-medium">{props.phno}</h4>
      </div>
      <div>
        <h4 className="text-xl font-normal ">Direction</h4>
        <div className="w-full h-48">
          <MapContainer
            center={props.mapLocation}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full z-10"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.mapLocation}>
              <Popup>{props.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-3 py-2 flex gap-2 items-center border text-gray-700 border-gray-400 rounded-lg ">
          <MdContentCopy /> Copy
        </button>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${props.latAndLong}`}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-2 flex gap-2 items-center border text-gray-700 border-gray-400 rounded-lg "
        >
          <FaDirections className="text-zomato-400" /> Directions
        </a>
      </div>
    </>
  );
};

export default MapView;
