import * as React from 'react';

export const BoilingVerdict = (props: any) => {
    if (parseFloat(props.celsius) >= 100){
        return <p>水已经烧开！</p>;
    }
    return <p>水不会烧开！</p>;
};

class StateIncrease extends React.Component {
    public state = {
        temperature: '0'
    };
    public handleChange = (e: any) => {
        e.persist();
        this.setState({ temperature: e.target.value });
    };
    public render() {
        return (
            <div>
                <BoilingVerdict celsius={this.state.temperature}/>
                <p>当前温度：{this.state.temperature}℃</p>
                <input type="range" value={this.state.temperature} name="range" min="0" max="150" onChange={this.handleChange}/>
            </div>
        );
    };
}

export default StateIncrease;