import React, { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import Chart from "../component/Chart";
import axios from "axios";

const Calendar = () => {
  const [value, setValue] = useState({
    confirmed: [],
    death: [],
    recovered: [],
    data: [],
  });

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleChange = (item) => {
    setState([item.selection]);
    axios
      .get(
        `https://api.covid19api.com/country/india?from=2020-12-19&to=2020-12-31`
      )
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          setValue({ data: res.data });
        }
      });
  };
  console.log(state[0]);

  let startDate = JSON.stringify(state[0].startDate);
  startDate = startDate.slice(1, 11);
  console.log(startDate);
  let endDate = JSON.stringify(state[0].endDate);
  endDate = endDate.slice(1, 11);
  console.log(endDate);

  const { confirmed, death, recovered, data } = value;

  useEffect(() => {}, []);

  console.log(data);

  const confirmedCases = () => {};
  const deathCases = () => {};
  const recoveredCases = () => {};

  return (
    <div>
      <DateRange
        dateDisplayFormat="dd-mm-yyyy"
        editableDateInputs={true}
        onChange={(item) => handleChange(item)}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      <Chart range={state} />
    </div>
  );
};

export default Calendar;
