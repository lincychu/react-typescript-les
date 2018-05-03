import * as React from 'react';
import { BoilingVerdict } from './../StateIncrease';
import TemperatureInput, { InterfaceProp } from './../TemperatureInput';

const tryConvert = (temperature: string, convert: any) => {
    const input: number = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
};

export const toCelsius = (fahrenheit: number) => (fahrenheit - 32) * 5 / 9;

export const toFahrenheit = (celsius: number) => (celsius * 9 / 5) + 32;

class Calculator extends React.Component {
    public state = {
        scale: 'c',
        temperature: '0'
    };
    public handleCelsiusChange = (temperature: string) => {
        this.setState({
            scale: 'c',
            temperature
        });
    };
    public handleFahrenheitChange = (temperature: string) => {
        this.setState({
            scale: 'f',
            temperature
        });
    };
    public render() {
        const scale: string = this.state.scale;
        const temperature: string = this.state.temperature;
        const celsius: string = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit: string = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        const Prop0: InterfaceProp = {
            onTemperatureChange: this.handleCelsiusChange,
            scale: 'c',
            temperature: celsius
        };
        const Prop1: InterfaceProp = {
            onTemperatureChange: this.handleFahrenheitChange,
            scale: 'f',
            temperature: fahrenheit
        };
        return (
            <div>
                <TemperatureInput {...Prop0}/>
                <TemperatureInput {...Prop1}/>
                <BoilingVerdict celsius={celsius}/>
            </div>
        );
    };
}

export default Calculator;