import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';
import { tryConvert, toCelsius, toFahrenheit } from '../utils/helpers';

class Calculator extends Component {
  constructor(props) {
    super(props);
    // this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    // this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: '37',
      scale: 'c',
    };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </>
    );
  }
}

export default Calculator;
