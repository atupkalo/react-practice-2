import React from "react";
import "./Buttons.css";

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons-wrap">
        <button
          id={this.props.id}
          name="dlete"
          className={"btn btn-primary delete"}
          onClick={this.props.clickHandler}
        >
          Cansel trip
        </button>
        <button
          id={this.props.id}
          name="done"
          className={"btn btn-primary"}
          onClick={this.props.clickHandler}
        >
          Marke as done
        </button>
      </div>
    );
  }
}
export default Buttons;
