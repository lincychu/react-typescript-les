import * as React from 'react';

export interface InterfaceInfo {
    title: string;
    message: string;
};

class Dialog extends React.Component<InterfaceInfo, any> {
    public render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.message}</p>
                {this.props.children}
            </div>
        );
    }
}

export default Dialog;