import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
const Chart = ({ range, startDate, endDate }) => {
  const [value, setValue] = useState({
    // confirmed: [],
    // death: [],
    // recovered: [],
    data: [],
    // label:[]
  });

  let deathCases,confirmedCases,recoveredCases;

  console.log(startDate, endDate);

  const { confirmed, death, recovered, data } = value;

 
  const Cases = () => {
    if(data){
      deathCases = data.reduce((acc,item) => {
        acc.push(item.Deaths);
        return [...acc];
      },[]);
      confirmedCases = data.reduce((acc,item) => {
        acc.push(item.Confirmed);
        return [...acc];
    },[]);
    recoveredCases = data.reduce((acc,item) => {
      acc.push(item.Recovered);
      return [...acc];
  },[]);
  console.log(deathCases ,confirmedCases,recoveredCases );
  };
}

  Cases();


  useEffect(() => {
    const getData = async () => {
      await axios
      .get(
        `https://api.covid19api.com/country/india?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z`
      )
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          setValue({ data: res.data });
        }
      });
    }
    getData();
  },[endDate,startDate]);
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
        data: deathCases ,
      },
      {
        label: "Recovered",
        backgroundColor: "green",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: confirmedCases,
      },
      {
        label: "Confirmed",
        backgroundColor: "blue",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: recoveredCases ,
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
