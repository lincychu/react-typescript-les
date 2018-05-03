import * as React from 'react';

export interface InterfacePerson {
    name?: string;
}

class Greeting extends React.Component<InterfacePerson> {
    public render() {
        return (
            <div>
                {this.props.name && <h1>Hello, {this.props.name}!</h1>}
                {!this.props.name && <h1>Hello, Stranger!</h1>}
            </div>
        );
    }
}

export default Greeting;