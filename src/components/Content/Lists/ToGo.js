import React from "react";
import Card from "../Cards/Card";
import Buttons from "../../Buttons/Buttons";

class ToGo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {
                    name: 'cansel',
                    value: 'Cancel trip'
                },
                {
                    name: 'done',
                    value: 'Mark as done'
                }
            ],
            placesListActive: [
                {
                    name: 'New Zealand',
                    date: '10.20.2024',
                    reqClass: '',
                    bool: false
                },
                {
                    name: 'Argentina',
                    date: '10.20.2025',
                    reqClass: '',
                    bool: false
                },
                {
                    name: 'Iceland',
                    date: '10.20.2026',
                    reqClass: '',
                    bool: false
                }
            ],
            placesListPassed: []
        }
    }
    markAsDone = (e) => {
        e.preventDefault();
       this.state.placesListActive.map((obj, index) => {
           if(index == e.target.id){
               obj.reqClass = 'card-done'
               this.state.placesListPassed.push(obj)
           }
       })
        console.log(this.state.placesListPassed)
    }
    render(){
        return (
            <div className={'togo'}>
                <div className="togo-title">Planned</div>
                { this.state.placesListActive.map((destination, index) => {
                    const parentIndex = index;
                    return (
                        <Card key={destination.name}
                            dateTitle="Target date"
                            class={destination.reqClass}
                            place = {destination.name}
                            date = {destination.date}
                            buttons={
                                this.state.buttons.map((btn) =>{
                                    if(btn.name === 'done')
                                        return(
                                            <Buttons handler={this.markAsDone} id={parentIndex} key={btn.name} name={btn.name} value={btn.value}/>
                                        )
                                    else
                                        return(
                                            <Buttons class={'cansel'}  key={btn.name} name={btn.name} value={btn.value}/>
                                        )
                                })
                            }
                        />
                    )
                })}
            </div>
        )
    }
}
export default ToGo