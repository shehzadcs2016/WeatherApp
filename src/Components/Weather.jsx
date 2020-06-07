import React from "react"
const Weather = ({
  city,
  country,
  weatherIcon,
  description,
  temp_celsius,
  temp_max,
  temp_min,
}) => {
  return (
    <div className="container py-4 ml-5">
      <div className="cards" style={{ color: "white" }}>
        <h1>{city}</h1>
        <h5 className="py-4">
          <i className={`wi ${weatherIcon} display-1`} />
        </h5>
        {temp_celsius ? <h1 className="py-2">{temp_celsius}&deg;C</h1> : null}

        {minmaxTemp(temp_max, temp_min)}
        <h4 className="py-2">{description}</h4>
      </div>
    </div>
  )
}
function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3 className="py-2">
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    )
  }
}

export default Weather
