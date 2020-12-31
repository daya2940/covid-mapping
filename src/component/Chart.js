import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({range}) => {
  
  const data = {
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
        data={data}
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
