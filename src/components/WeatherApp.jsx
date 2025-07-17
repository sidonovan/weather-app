import React, { useState, useEffect } from 'react';
import SearchCity from './SearchCity';
import TempToggle from './TempToggle';
import '../top.css';
import './WeatherSummary.css';
import './TwentyFourHourForecast.css';

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
            <div>
              <img width="36px" height="36px" src="./src/assets/icons/snow.png" alt="snow" />
            </div>
            <div className="weather__summary-weathertypelabel">Snow</div>
            <img width="20px" height="20px" src="./src/assets/icons/wind.png" alt="wind" />
            <div className="weather__summary-weatherwindlabel">5.14 m/s</div>
          </div>
          <div className="weather__summary-bottom">
            <div className="weather__summary-feelslikelabel">Feels like:</div>
            <div className="weather__summary-feelsliketemp">-4&deg;C</div>
            <div className="weather__summary-temprange">-1&deg; to -3&deg;</div>
          </div>
        </div>
        <div className="twentyfourhour__forecast">
          <div className="twentyfourhour__forecast-box">
            <div className="twentyfourhour__forecast-box-time">9:00 AM</div>
            <div className="twentyfourhour__forecast-box-line"></div>
            <img width="36px" height="36px" src="./src/assets/icons/snow.png" alt="snow" />
            <div className="twentyfourhour__forecast-box-weathertypelabel">Snow</div>
            <div className="twentyfourhour__forecast-box-temp">-1&deg;</div>
          </div>
          <div className="twentyfourhour__forecast-box">
            <div className="twentyfourhour__forecast-box-time">12:00 AM</div>
            <div className="twentyfourhour__forecast-box-line"></div>
            <img width="36px" height="36px" src="./src/assets/icons/snow.png" alt="snow" />
            <div className="twentyfourhour__forecast-box-weathertypelabel">Snow</div>
            <div className="twentyfourhour__forecast-box-temp">-1&deg;</div>
          </div>
          <div className="twentyfourhour__forecast-box">
            <div className="twentyfourhour__forecast-box-time">3:00 PM</div>
            <div className="twentyfourhour__forecast-box-line"></div>
            <img width="36px" height="36px" src="./src/assets/icons/snow.png" alt="snow" />
            <div className="twentyfourhour__forecast-box-weathertypelabel">Snow</div>
            <div className="twentyfourhour__forecast-box-temp">-1&deg;</div>
          </div>
          <div className="twentyfourhour__forecast-box">
            <div className="twentyfourhour__forecast-box-time">6:00 PM</div>
            <div className="twentyfourhour__forecast-box-line"></div>
            <img width="36px" height="36px" src="./src/assets/icons/snow.png" alt="snow" />
            <div className="twentyfourhour__forecast-box-weathertypelabel">Snow</div>
            <div className="twentyfourhour__forecast-box-temp">-1&deg;</div>
          </div>
          <div className="twentyfourhour__forecast-box">
            <div className="twentyfourhour__forecast-box-time">9:00 PM</div>
            <div className="twentyfourhour__forecast-box-line"></div>
            <img width="36px" height="36px" src="./src/assets/icons/snow.png" alt="snow" />
            <div className="twentyfourhour__forecast-box-weathertypelabel">Snow</div>
            <div className="twentyfourhour__forecast-box-temp">-1&deg;</div>
          </div>
          <div className="twentyfourhour__forecast-box">
            <div className="twentyfourhour__forecast-box-time">12:00 PM</div>
            <div className="twentyfourhour__forecast-box-line"></div>
            <img width="36px" height="36px" src="./src/assets/icons/snow.png" alt="snow" />
            <div className="twentyfourhour__forecast-box-weathertypelabel">Snow</div>
            <div className="twentyfourhour__forecast-box-temp">-1&deg;</div>
          </div>
          <div className="twentyfourhour__forecast-box">
            <div className="twentyfourhour__forecast-box-time">3:00 AM</div>
            <div className="twentyfourhour__forecast-box-line"></div>
            <img width="36px" height="36px" src="./src/assets/icons/snow.png" alt="snow" />
            <div className="twentyfourhour__forecast-box-weathertypelabel">Snow</div>
            <div className="twentyfourhour__forecast-box-temp">-1&deg;</div>
          </div>
          <div className="twentyfourhour__forecast-box">
            <div className="twentyfourhour__forecast-box-time">6:00 AM</div>
            <div className="twentyfourhour__forecast-box-line"></div>
            <img width="36px" height="36px" src="./src/assets/icons/snow.png" alt="snow" />
            <div className="twentyfourhour__forecast-box-weathertypelabel">Snow</div>
            <div className="twentyfourhour__forecast-box-temp">-1&deg;</div>
          </div>
        </div>
      </div>
      <main className="main"></main>
    </>
  );
}
