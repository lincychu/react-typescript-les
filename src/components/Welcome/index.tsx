import * as React from 'react';

export interface InterfacePeople {
    name: string;
}

class Welcome extends React.Component<InterfacePeople> {
    public render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

export default Welcome;