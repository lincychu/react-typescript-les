import * as React from 'react';

export interface InterfaceToggle {
    isToggleOn: boolean;
}

class Toggle extends React.Component<InterfaceToggle, any> {
    constructor(props: InterfaceToggle) {
        super(props);
        this.state = {
            isToggleOn: this.props.isToggleOn
        };
    };
    public handleClick = (e: any) => {
        e.preventDefault();
        this.setState((prevState: InterfaceToggle) => ({
            isToggleOn: !prevState.isToggleOn
        }));
    };
    public render() {
        return (
            <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON': 'OFF'}</button>
        );
    };
}

export default Toggle;