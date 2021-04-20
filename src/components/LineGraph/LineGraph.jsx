import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import { getLastDaysData } from "../../API/api";

import { buildChartData } from "../../util";
import { ChartOptions } from "../../util";

const LineGraph = ({ casesType = "cases" }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getLastDaysData(setData, buildChartData, casesType);
  }, [casesType]);

  return (
    <div>
      {data.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data
              }
            ]
          }}
          options={ChartOptions}
        />
      )}
    </div>
  );
};

export default LineGraph;
