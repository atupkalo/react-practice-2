import React from "react";

import './cards.css';


class Card extends React.Component{
    render(){
        return (
            <div className={'card card-custom' + ' ' + this.props.class}>
                <div className="card-inner-wrap">
                    <div className="card-title-custom"><span className="card-text-custom">Destination</span>{this.props.place}</div>
                    <div className="card-title-custom"><span className="card-text-custom" >{this.props.dateTitle}</span>{this.props.date}</div>
                    <div className="buttons-wrap">
                        {this.props.buttons}
                    </div>
                </div>
            </div>
        )
    }
}
export default Card