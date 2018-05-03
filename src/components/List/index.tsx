import * as React from 'react';

export interface InterfaceNumArr {
    numArr: number[];
};

class List extends React.Component<InterfaceNumArr, any> {
    constructor(props: InterfaceNumArr) {
        super(props);
    };
    public render() {
        return [
            this.props.numArr.map((item, index) => <li key={index.toString()}>{item * 2}</li>)
        ];
    };
};

export default List;