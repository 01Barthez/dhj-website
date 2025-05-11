// src/components/Map.tsx
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maplibregl.Map | null>(null);

    const longitude = 11.555353;
    const latitude = 3.879170;

    useEffect(() => {
        if (map.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current!,
            style: "https://demotiles.maplibre.org/style.json", // style OSM libre
            center: [longitude, latitude],
            zoom: 13,
        });

        // Marqueur
        new maplibregl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map.current);

        return () => {
            map.current?.remove();
        };
    }, []);

    return (
        <div className="w-full h-[500px]" ref={mapContainer} />
    );
};

export default Map;
