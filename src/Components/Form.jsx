import React from "react"
import "./Form.style.css"
const Form = ({ error, loadWeather }) => {
  return (
    <div className="container">
      <div>{error ? error : null}</div>
      <form onSubmit={loadWeather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              placeholder="city"
              required
              className="form-control"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              placeholder="country"
              required
              className="form-control"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-md-0 text-md-left">
            <button className="btn btn-secondary">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  )
}
function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country
    </div>
  )
}

export default Form
