import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div style={{color : 'white'}}>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 41.311081,
      lng: 69.240562,
    },
    zoom: 11.5,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "500px", width: "600px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={41.371081}
          lng={69.260562}
          text="MEning yashash joyim"
        />
      </GoogleMapReact>
    </div>
  );
}
