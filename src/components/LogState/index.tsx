import * as React from 'react';

export interface InterfaceLog {
    isLoggedIn: boolean;
}

class LogState extends React.Component<InterfaceLog, any> {
    public state = {
        isLoggedIn: this.props.isLoggedIn
    };
    public render() {
        return (
            <div>The user is <b>{this.state.isLoggedIn ? 'currently': 'not'}</b> logged in.</div>
        );
    };
};

export default LogState;