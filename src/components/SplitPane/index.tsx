import * as React from 'react';

export const Dashboard = {
    Chat: () => {
        return <div style={{ width: '70%', background: '#f00', textAlign: 'center', display: 'inline-block'}}>This is Chat area!</div>
    },
    Contacts: () => {
        return <div style={{ width: '30%', background: 'deepskyblue', textAlign: 'center', display: 'inline-block'}}>This Contacts area!</div>
    },
};

export interface InterfacePane {
    left: any;
    right: any;
};

class SplitPane extends React.Component<InterfacePane, any> {
    public render() {
        return (
            <div className="SplitPane">
                {this.props.left}
                {this.props.right}
            </div>
        );
    };
}

export default SplitPane;