import * as React from 'react';

export interface InterfaceMessageArr {
    messages: string[];
};

class Mailbox extends React.Component<InterfaceMessageArr, object> {
    constructor(props: InterfaceMessageArr){
        super(props);
    };
    public render() {
        const unreadMessages = this.props.messages.length;
        return (
            <div>
                <h1>hello!</h1>
                { unreadMessages > 0 && <h2>You have <span style={{color: 'green'}}>{unreadMessages}</span> unread messages!</h2> }
            </div>
        );
    };
};

export default Mailbox;
