import React, { useState, useEffect } from 'react';
import SearchCity from './SearchCity';
import TempToggle from './TempToggle';

export default function WeatherApp() {
  return (
    <header className="header">
      <SearchCity></SearchCity>
      <TempToggle></TempToggle>
    </header>
  );
}
