import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
const Chart = ({ range, startDate, endDate }) => {
  const [value, setValue] = useState({
    confirmed: [],
    death: [],
    recovered: [],
    data: [],
  });

  console.log(startDate, endDate);

  const { confirmed, death, recovered, data } = value;

  console.log(data);

  const confirmedCases = () => {};
  const deathCases = () => {};
  const recoveredCases = () => {};

  const getData = async () => {
    await axios
      .get(
        `https://api.covid19api.com/country/india?from=${startDate}&to=${endDate}`
      )
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          setValue({ data: res.data });
        }
      });
  };
  console.log(data);

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Death",
        backgroundColor: "red",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Recovered",
        backgroundColor: "green",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Confirmed",
        backgroundColor: "blue",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <div>
      <Bar
        data={chartData}
        className="bar"
        width={100}
        height={200}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default Chart;
