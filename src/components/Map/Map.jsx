import React from "react";
import { TileLayer } from "react-leaflet";
import { StyledContainer, StyledMapContainer } from "./styledMap";
import { showDataOnMap } from "../../util";

const URL_MAP = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const ATTRIBUTION_MAP =
  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <StyledContainer>
      <StyledMapContainer center={center} zoom={zoom}>
        <TileLayer url={URL_MAP} attribution={ATTRIBUTION_MAP} />
        {showDataOnMap(countries, casesType)}
      </StyledMapContainer>
    </StyledContainer>
  );
};

export default Map;
