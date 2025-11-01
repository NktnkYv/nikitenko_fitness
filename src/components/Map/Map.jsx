import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
    border: "1px solid #92949F",
    borderRadius: "16px",
};

const center = {
    lat: 51.5016023,
    lng: 31.3195978, // UNDERGROUND fitness & fight
};

const MapComponent = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyBzOzaHRJR6YD-rFM7ZagiuiIUKC70TWug">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;