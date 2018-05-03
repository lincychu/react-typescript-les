import * as React from 'react';
import {setInterval} from "timers";

export interface InterfaceDate {
    date?: any;
}

class Clock extends React.Component<InterfaceDate, any> {
    public timer: any;
    constructor(props: any){
        super(props);
        console.log('constructor');
        this.state = {
            date: ''
        }
    };
    public componentWillMount() {
        console.log('componentWillMount');
        this.setState({
            date: this.props.date || new Date()
        })
    };
    public componentDidMount() {
        console.log('componentDidMount');
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    };
    public componentWillUnmount() {
        this.timer = null;
    }
    public render() {
        return (
            <div>
                <h1>当前时间： {this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Clock;