import React from "react";

import Card from "../Cards/Card";
import Buttons from "../Buttons/Buttons";

import "./Main.css";

import Form from "../Form/Form";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlacesList: [],
      flag: false
    };
    this.allPlacesListSnap = []
  }

  handleCallback = (childData) => {
    this.allPlacesListSnap.push(childData);
    this.setStateHandler(this.allPlacesListSnap);
  };
  btnClickHandler = (e) => {
    const id = Number(e.target.id);

    if(e.target.name === 'delete'){
      this.placesDeleteHandler(id);
    }else{
      for (let i = 0; i < this.allPlacesListSnap.length; i++) {
        if(i === id){
          this.allPlacesListSnap[i].bool = true;
        }
      }
      this.setStateHandler(this.allPlacesListSnap);
    }
    e.preventDefault();
  };

  placesDeleteHandler = (id) =>{
    this.allPlacesListSnap = this.allPlacesListSnap.filter((el, i) => {
      return i !== id;
    });
    this.setStateHandler(this.allPlacesListSnap);
  }
  setStateHandler = (arr) => {
    this.setState({ allPlacesList: arr });
  }

  render() {
    return (
      <main className="main">
        <div className="container">
          <Form passingFormData={this.handleCallback} />
          <div className={"togo"}>
            <div className="togo-title">Planned</div>
            {this.state.allPlacesList.map((elem, i) => {
              return (
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
