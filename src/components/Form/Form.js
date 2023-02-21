import React from "react";

class Form extends React.Component {
  onTrigger = (event) => {
    const formData = {};
    formData.place = event.target[0].value;
    formData.date = event.target[1].value;
    formData.bool = 0;
    this.props.passingFormData(formData);
    event.preventDefault();
  };

  render() {
    return (
      <form className="main-form" onSubmit={this.onTrigger}>
        <div className="row mb-3">
          <label htmlFor="text" className="col-sm-2 col-form-label">
            Place
          </label>
          <div className="col-sm-10">
            <input
              name="place"
              type="text"
              className="form-control"
              id="text"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="date" className="col-sm-2 col-form-label">
            Date
          </label>
          <div className="col-sm-10">
            <input name="date" type="date" className="form-control" id="date" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-width">
          Submit
        </button>
      </form>
    );
  }
}
export default Form;
// event.target[0].name: event.target[0].value,
//         event.target[1].name: event.target[1].value
