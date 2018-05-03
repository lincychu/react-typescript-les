import * as React from 'react';

export interface InterfaceURL {
    url?: string;
}

class Avatar extends React.Component<InterfaceURL, any> {
    public Image: InterfaceURL = {
        url: this.props.url||'//www.baidu.com/img/bd_logo1.png?qua=high&where=super'
    };
    public render() {
        const style: object = {
            width: '100px'
        };
        return (
            <img src={this.Image.url} style={style}/>
        );
    }
}

export default Avatar;