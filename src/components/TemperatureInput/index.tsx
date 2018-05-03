import * as React from 'react';
import { toFahrenheit } from './../Calculator';

export interface InterfaceProp {
    scale: string;
    temperature: string;
    onTemperatureChange: any;
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

interface InterfaceState {
    temperature: string;
};

class TemperatureInput extends React.Component<InterfaceProp, any> {
    public state: InterfaceState = {
        temperature: this.props.temperature
    };
    public handleChange = (e: any) => {
        e.persist();
        this.props.onTemperatureChange(e.target.value);
    };
    public componentWillReceiveProps(nextProps: InterfaceProp){
        this.setState({
            temperature: nextProps.temperature
        });
    };
    public shouldComponentUpdate(nextState: InterfaceState) {
        return this.state.temperature !== nextState.temperature;
    };
    public render() {
        const temperature = this.props.temperature;
        const scale: string = this.props.scale;
        const scaleName: string = scaleNames[scale];
        const rangeArea = {
            max: 150,
            min: 0
        };
        if (scaleName === 'Fahrenheit'){
            rangeArea.min = toFahrenheit(0);
            rangeArea.max = toFahrenheit(150);
        }
        return (
            <div>
                <p>在{scaleName}中输入温度，当前温度为：{this.state.temperature}{scaleName === 'Celsius' ? '℃' : '℉'}</p>
                <input type="range" min={rangeArea.min} max={rangeArea.max} value={temperature} onChange={this.handleChange} />
            </div>
        );
    };
};

export default TemperatureInput;