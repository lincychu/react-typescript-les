import * as React from 'react';

export const Greeting = {
    GuestGreeting: () => {
        return <h1>Please sign up!</h1>
    },
    UsersGreeting: () => {
        return <h1>Welcome back!</h1>
    }
};

export interface InterfaceLoginIn {
    isLoggedIn: boolean;
}

class UserGreeting extends React.Component<InterfaceLoginIn> {
    public state: any = {
        isLoggedIn: this.props.isLoggedIn
    };
    public componentWillReceiveProps(nextProps: any, nextState: any) {
        this.setState({
            ...nextProps
        })
    };
    public shouldComponentUpdate(nextState: any) {
        return true;
    };
    public render() {
        return (
            <div>
                { this.state.isLoggedIn && <Greeting.UsersGreeting /> }
                { !this.state.isLoggedIn && <Greeting.GuestGreeting /> }
            </div>
        );
    };
}

export default UserGreeting;