// MapComponent.tsx
import React from 'react';
import { mapProps } from "../declareInterface";

const MapComponent: React.FC<mapProps> = ({ iframe }) => {
  if (!iframe) {
    return <p>No map found</p>;
  }
  return (
    <div className="w-full">
      <p className="font-Lora text-2xl sm:text-3xl">Map</p>
      <div
        className="w-full aspect-video overflow-hidden rounded-md border-2"
        dangerouslySetInnerHTML={{ __html: iframe }}
      />
    </div>
  );
};

export default MapComponent;
