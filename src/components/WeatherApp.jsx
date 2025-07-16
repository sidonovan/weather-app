import React, { useState, useEffect } from 'react';
import SearchCity from './SearchCity';
import TempToggle from './TempToggle';
import '../top.css';
import './WeatherSummary.css';

export default function WeatherApp() {
  return (
    <>
      <header className="header">
        <SearchCity></SearchCity>
        <TempToggle></TempToggle>
      </header>
      <div className="top">
        <div className="weather__summary">
          <div className="weather__summary-top">
            <div className="weather__summary-temp">-1&deg;</div>
            <div className="weather__summary-topside">
              <div className="weather__summary-cityname">Helsinki</div>
              <div className="weather__summary-time">11:45 AM</div>
            </div>
          </div>
          <div className="weather__summary-mid">
            <div className="weather__summary-weathertype">
              <img width="36px" height="36px" src="./src/assets/icons/snow.png" alt="snow" />
            </div>
            <div className="weather__summary-weathertypelabel">Snow</div>
          </div>
        </div>
        <div></div>
      </div>
      <main className="main"></main>
    </>
  );
}
