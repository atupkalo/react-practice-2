import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={"card card-custom" + " " + this.props.class}>
        <div className="card-inner-wrap">
          <div className="card-title-custom">
            <span className="card-text-custom">Destination</span>
            {this.props.place}
          </div>
          <div className="card-title-custom">
            <span className="card-text-custom">Date of the trip</span>
            {this.props.date}
          </div>
          {this.props.buttons}
        </div>
      </div>
    );
  }
}
export default Card;
