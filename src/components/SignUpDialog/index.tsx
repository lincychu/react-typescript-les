import * as React from 'react';
import Dialog, { InterfaceInfo } from './../Dialog';

class SignUpDialog extends React.Component {
    public state = {
        login: 'robin'
    };
    public handleChange = (e: any) => {
        e.persist();
        this.setState({login: e.target.value});
    };
    public handleSignUp = () => {
        alert(`Welcome aboard, ${this.state.login}!`);
    };
    public render() {
        const info: InterfaceInfo = {
            message: '这是message!',
            title: '我是title'
        };
        return (
            <Dialog {...info}>
                <input type="text" value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>Sign Me Up</button>
            </Dialog>
        );
    };
};

export default SignUpDialog;