import * as React from 'react';

export interface InterfaceVal {
    type?: "select" | "input" | "textarea" | "file" | "checkbox";
    defaultValue?: string;
    isGoing?: boolean;
    numberOfGuests?: number;
    selected?: number;
};

class Label extends React.Component<InterfaceVal, any> {
    public state = {
        isGoing: this.props.isGoing || false,
        numberOfGuests: this.props.numberOfGuests || 1,
        selected: this.props.selected || 0,
        value: this.props.defaultValue || 'robin'
    };
    public handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(e.target);
    };
    public handleInputChange = (e: any) => {
        e.persist();
        const target: any = e.target;
        const value: any = target.type === 'checkbox' ? target.checked: target.value;
        const name: any = target.name;
        this.setState(Object.assign(this.state, {
            [name]: value
        }));
    };
    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                    { this.props.type === 'input' && <input type="text" name="value" value={this.state.value} onChange={this.handleInputChange} /> }
                    { this.props.type === 'textarea' && <textarea name="value" value={this.state.value} onChange={this.handleInputChange} /> }
                    { this.props.type === 'file' && <input type="file" /> }
                    { this.props.type === 'select' && <select name="selected" value={this.state.selected} onChange={this.handleInputChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option></select> }
                    { this.props.type === 'checkbox' && <div>
                        <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                        <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                    </div> }
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>
        );
    };
}

export default Label;