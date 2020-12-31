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

  let startDate,endDate;

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleChange = (item) => {
    setState([item.selection]);
    startDate = JSON.stringify(state[0].startDate);
    startDate = startDate.slice(1, 11);
    endDate = JSON.stringify(state[0].endDate);
    endDate = endDate.slice(1, 11);
  };
  console.log(state[0]);


  return (
    <div>
      <DateRange
        dateDisplayFormat="dd-mm-yyyy"
        editableDateInputs={true}
        onChange={(item) => handleChange(item)}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      <Chart range={state} startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default Calendar;
