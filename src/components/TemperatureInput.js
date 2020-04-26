import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => (
  <fieldset>
    <legend>Enter temperature in {scaleNames[scale]}:</legend>
    <input value={temperature} onChange={onTemperatureChange} />
  </fieldset>
);

export default TemperatureInput;
