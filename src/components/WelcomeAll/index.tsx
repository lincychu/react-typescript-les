import * as React from 'react';

export interface InterfaceArr {
    name: string;
}

export interface InterfaceNameArr {
    nameArr: InterfaceArr[];
}

const Item = (item: any) => <div>{item.name}</div>;

class WelcomeAll extends React.Component<InterfaceNameArr> {
    public render() {
        return [
            this.props.nameArr.map((item: InterfaceArr, index: number) => <Item key={index} {...item}/>)
        ];
    }
}

export default WelcomeAll;