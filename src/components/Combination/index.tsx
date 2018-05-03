import * as React from 'react';

class Combination extends React.Component<any, any> {
    public render() {
        return (
            <div>{this.props.children}</div>
        );
    };
};

export default Combination;