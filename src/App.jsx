import "./App.css";
import { useState, useEffect } from "react";
import { FormControl, Select, MenuItem, Typography } from "@material-ui/core";
import {
  StyledApp,
  StyledHeader,
  StyledLeftColumn,
  StyledRightColumn,
  StyledCardContent,
  StyledAppHeader,
  StyledTitle,
  StyledAppStats,
  StyledLineGraph
} from "./StyledApp";

import InfoBox from "./components/InfoBox/InfoBox";
import Table from "./components/Table/Table";

import Map from "./components/Map/Map";

import { getCovidData, getCountryData } from "./API/api";
import { API_WORLDWIDE, API_COUNTRY } from "./API/api";
import { prettyPrintStat } from "./util";
import "leaflet/dist/leaflet.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [table, setTableData] = useState([]);

  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    getCountryData(setCountryInfo, setMapCenter, setMapZoom, API_WORLDWIDE);
    getCovidData(setCountries, setTableData, setMapCountries);
  }, []);

  const onChangeCountry = e => {
    const countryCode = e.target.value;
    setCountry(countryCode);
    const url =
      countryCode === "worldwide"
        ? API_WORLDWIDE
        : `${API_COUNTRY}${countryCode}`;
    console.log(countryCode);

    getCountryData(setCountryInfo, setMapCenter, setMapZoom, url);
  };

  return (
    <StyledApp>
      <StyledLeftColumn>
        <StyledAppHeader>
          <StyledHeader>COVID - 19 TRACKER</StyledHeader>
          <FormControl>
            <Select
              onChange={onChangeCountry}
              variant="outlined"
              value={country}
            >
              <MenuItem value="worldwide">WorldWide</MenuItem>
              {countries.length > 0 &&
                countries.map(({ value, name }, index) => (
                  <MenuItem key={index} value={name}>
                    {name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </StyledAppHeader>
        <StyledAppStats>
          <InfoBox
            onClick={() => setCasesType("cases")}
            active={casesType === "cases"}
            isRed
            title="Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={countryInfo.cases}
          />
          <InfoBox
            onClick={() => setCasesType("recovered")}
            active={casesType === "recovered"}
            title="Recovered"
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={countryInfo.recovered}
          />
          <InfoBox
            onClick={() => setCasesType("deaths")}
            active={casesType === "deaths"}
            isDeath
            title="Deaths"
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={countryInfo.deaths}
          />
        </StyledAppStats>

        <Map
          casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
      </StyledLeftColumn>
      <StyledRightColumn>
        <StyledCardContent>
          <Typography variant="h6">Live cases by Country</Typography>
          <Table countries={table} />
          <StyledTitle>WorldWide new Cases last 120 days</StyledTitle>
          <StyledLineGraph casesType={casesType} />
        </StyledCardContent>
      </StyledRightColumn>
    </StyledApp>
  );
}

export default App;
