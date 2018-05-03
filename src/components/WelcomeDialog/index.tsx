import * as React from 'react';
import Dialog, { InterfaceInfo } from './../Dialog';

class WelcomeDialog extends React.Component {
    public render() {
        const Info: InterfaceInfo = {
            message: 'Thank you for visiting our spacecraft!',
            title: 'Welcome'
        };
        return (
            <Dialog {...Info}/>
        );
    };
}

export default WelcomeDialog;