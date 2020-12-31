import './App.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import React from "react";
import Calendar from './component/Calendar';
const  App = () =>{
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;
