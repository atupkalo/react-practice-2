import React from "react";
import Card from "../Cards/Card";
import Buttons from "../../Buttons/Buttons";

class Done extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {
                    id: 'delete',
                    value: 'Delete trip'
                },
                {
                    id: 'undone',
                    value: 'Undone'
                }
            ]

        }
    }
    render(){
        return (
            <div className={'done'}>
                <div className="done-title">Visited</div>
                <Card
                    dateTitle="Last day of the trip"
                    buttons={
                        this.state.buttons.map((btn) =>{
                            return(
                                <Buttons key={btn.id} id={btn.id} value={btn.value}/>
                            )
                        })
                    }
                />
            </div>
        )
    }
}
export default Done