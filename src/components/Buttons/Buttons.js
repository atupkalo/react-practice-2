import React from 'react';
import './buttons.css';


class Buttons extends React.Component{
    render() {
        return(
            <button id={this.props.id} name={this.props.name} className={'btn btn-primary' + ' ' + this.props.class} onClick={this.props.handler}>{this.props.value}</button>
        )
    }
}
export default Buttons