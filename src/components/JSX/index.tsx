import * as React from 'react';

export interface InterfaceNames {
    firstName: string;
    lastName: string;
}

class JSX extends React.Component<InterfaceNames> {
    public formatName = (User: InterfaceNames) => {
        return User.firstName + ' ' + User.lastName;
    };
    public render() {
        return (
            <div>{this.formatName(this.props)}</div>
        );
    };
}

export default JSX;