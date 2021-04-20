import axios from "axios";
import { sortData } from "../util.jsx";

export const API_ALL_COUNTRY = `https://disease.sh/v3/covid-19/countries`;
export const API_WORLDWIDE = `https://disease.sh/v3/covid-19/all`;
export const API_COUNTRY = `https://disease.sh/v3/covid-19/countries/`;
export const API_LAST_DAYS = `https://disease.sh/v3/covid-19/historical/all?lastdays=120`;

export const getLastDaysData = async (setData, buildChartData, casesType) => {
  axios
    .get(API_LAST_DAYS)
    .then(({ data }) => {
      const chartData = buildChartData(data, casesType);
      setData(chartData);
    })
    .catch(error => console.log(error));
};

export const getCountryData = async (setData, setMap, setZoom, url) => {
  await axios
    .get(url)
    .then(({ data }) => {
      setData(data);
      setMap({
        lat: data.countryInfo.lat,
        lng: data.countryInfo.long
      });
      setZoom(4);
    })
    .catch(error => console.log(error));
};

export const getCovidData = async (
  setCountries,
  setTableData,
  setMapCountries
) => {
  await axios
    .get(API_ALL_COUNTRY)
    .then(({ data }) => {
      const countries = data.map(item => ({
        name: item.country,
        value: item.countryInfo.iso2
      }));
      setCountries(countries);
      setMapCountries(data);
      const sortedData = sortData(data);
      setTableData(sortedData);
    })
    .catch(error => console.log(error));
};
