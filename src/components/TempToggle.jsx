import { useState } from 'react';
import './TempToggle.css';

export default function TempToggle() {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleToggle = () => {
    setIsCelsius(!isCelsius);
  };

  let transformValue = '';
  let celsius = '';
  let fahrenheit = '';

  if (isCelsius) {
    transformValue = 'translateX(0)';
    celsius = '#000';
    fahrenheit = '#fff';
  } else {
    transformValue = 'translateX(40px)';
    celsius = '#fff';
    fahrenheit = '#000';
  }

  return (
    <div className="toggle__component" onClick={handleToggle}>
      <div className="toggle__indicator" style={{ transform: transformValue }}></div>
      <span className="toggle__label" style={{ color: celsius }}>
        &deg;C
      </span>
      <span className="toggle__label" style={{ color: fahrenheit }}>
        &deg;F
      </span>
    </div>
  );
}
