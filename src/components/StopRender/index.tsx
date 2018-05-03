import * as React from 'react';

export interface InterfaceProps {
    warn?: boolean;
};

const WarningBanner = (props: InterfaceProps) => {
    if(!props.warn){
        return null;
    }
    return (
        <div style={{color: 'red'}}>Warning!</div>
    );
};

class StopRender extends React.Component<InterfaceProps, object> {
    public state = {
        showWarning: this.props.warn || false
    };
    public handleToggleClick = () => {
        this.setState((prevState: any) => ({
            showWarning: !prevState.showWarning
        }));
    };
    public render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide': 'Show'}</button>
            </div>
        );
    };
};

export default StopRender;