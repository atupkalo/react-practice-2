import React from "react";

import Card from "../Cards/Card";
import Buttons from "../Buttons/Buttons";

import "./Main.css";

import Form from "../Form/Form";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allplaces: [{ empty: "No listed places to go yet, please add a trip" }],
    };
    this.allPlacesList = [];
    this.stateFiltered = [];
    this.stateBoolModified = [];
  }

  handleCallback = (childData) => {
    this.allPlacesList.push(childData);
    this.setState({ allplaces: this.allPlacesList });
  };
  btnClickHandler = (e) => {
    e.preventDefault();
    const id = Number(e.target.id);

    if (e.target.name === "done") {
      this.stateBoolModified = this.state.allplaces;
      for (let i = 0; i < this.stateBoolModified.length; i++) {
        if (i == id) {
          this.stateBoolModified[i].bool = 1;
        }
      }
      this.setState({ allplaces: this.stateBoolModified });
    } else {
      this.stateFiltered = this.state.allplaces.filter((elem, i) => {
        return i !== id;
      });
      this.setState({ allplaces: this.stateFiltered });
    }
  };

  render() {
    return (
      <main className="main">
        <div className="container">
          <Form passingFormData={this.handleCallback} />
          <div className={"togo"}>
            <div className="togo-title">Planned</div>
            {this.state.allplaces.map((elem, i) => {
              return elem.empty ? (
                <div>{elem.empty}</div>
              ) : (
                <Card
                  class={elem.bool && "visited"}
                  key={i}
                  place={elem.place}
                  date={elem.date}
                  buttons={
                    <Buttons id={i} clickHandler={this.btnClickHandler} />
                  }
                />
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}
export default Main;
