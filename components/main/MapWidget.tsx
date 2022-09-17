import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from '../../styles/Map.module.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {cameras} from "../../utils/cameras";
import Link from "next/link";

let DefaultIcon = L.icon({
    iconUrl: icon.src,
    shadowUrl: iconShadow.src
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapWidget = () => {
    const position = [47.523892, 42.175125]

    return (
        <div style={{ height: "450px", width: "100%" }}>
            <MapContainer style={{ height: "450px", width: "100%" }} center={[position[0], position[1]]} zoom={13} scrollWheelZoom={false} attributionControl={false}>
                <TileLayer
                    attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // url="https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}"
                />
                {cameras.map((camera, i) => <Marker position={[camera.coordinates[0], camera.coordinates[1]]} key={i}>
                    <Popup>
                        <h1 className={styles.heading}>{camera.street}</h1> <br/>
                        <Link href={'/camera/'+(i+1)} passHref prefetch={false}>
                        <button className={styles.watchButton}>Смотреть</button>
                        </Link>
                    </Popup>
                </Marker>) }
            </MapContainer>
        </div>
    );
};

export default MapWidget;
