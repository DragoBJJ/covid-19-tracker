import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import {
  StyledFlag,
  StyledName,
  StyledContainer,
  StyledInfo
} from "./components/Popup/StyledPopup";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    mulitiplier: 800
  },

  recovered: {
    hex: "#90EE90",
    mulitiplier: 1200
  },

  deaths: {
    hex: "#1d1d1d",
    mulitiplier: 2000
  }
};

export const prettyPrintStat = stat => {
  return stat ? `+${numeral(stat).format("0.0a")}` : "+0";
};

export const showDataOnMap = (data, casesType = "cases") =>
  data.map(country => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType] / 10) *
        casesTypeColors[casesType].mulitiplier
      }
    >
      <Popup>
        <StyledContainer>
          <StyledFlag image={country.countryInfo.flag} />{" "}
          <StyledName> {country.country} </StyledName>{" "}
          <StyledInfo>
            {" "}
            Cases: {numeral(country.cases).format("0,0")}{" "}
          </StyledInfo>{" "}
          <StyledInfo>
            Recovered: {numeral(country.recovered).format("0,0")}{" "}
          </StyledInfo>{" "}
          <StyledInfo>
            Deaths: {numeral(country.deaths).format("0,0")}{" "}
          </StyledInfo>{" "}
        </StyledContainer>{" "}
      </Popup>{" "}
    </Circle>
  ));

export const sortData = data => [...data].sort((a, b) => b.cases - a.cases);

export const buildChartData = (data, casesType = "cases") => {
  let chartData = [];
  let lastDataPoint;
  for (let value in data[casesType]) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: value,
        y: data[casesType][value] - lastDataPoint
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][value];
  }
  return chartData;
};

export const ChartOptions = {
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 0
    }
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function(tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      }
    }
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll"
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          callback: function(value, index, values) {
            return numeral(value).format("0a");
          }
        }
      }
    ]
  }
};
