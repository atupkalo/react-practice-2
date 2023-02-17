import React from 'react';


class Form extends React.Component{
    state = {
        place: '',
        date: ''
    }
    data = [];

    getValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitData = (e) => {
        e.preventDefault()
        this.data.push(this.state);
    }


    render(){
        return <form action="#" id="form" className="main-form">
                <div className="row mb-3">
                    <label htmlFor="text" className="col-sm-2 col-form-label">Place</label>
                    <div className="col-sm-10">
                        <input name="place" type="text" className="form-control" id="text" onChange={this.getValue}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                    <div className="col-sm-10">
                        <input name="date" type="date" className="form-control" id="date" onChange={this.getValue}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-width" onClick={this.submitData}>Submit</button>
               </form>
    }
}
export default Form