import * as React from 'react';

export interface InterfaceName {
    name: string;
}

class HelloWorld extends React.Component<InterfaceName> {
    public render() {
        return (
            <div>{this.props.name}</div>
        );
    }
}

export default HelloWorld;