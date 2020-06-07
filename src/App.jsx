import React, { Component } from "react"
import Weather from "./Components/Weather"
import "./App.css"
import Form from "./Components/Form"

const API_KEY = "7d8cbfb4d7b20987c3a766277b26ade4"
class App extends Component {
  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15)
    return cell
  }

  state = {
    city: undefined,
    country: undefined,
    icon: undefined,
    main: undefined,
    celsius: undefined,
    temp_max: undefined,
    temp_min: undefined,
    description: "",
    error: false,
  }
  // this.getWeather();
  weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog",
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm })
        break
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle })
        break
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.Rain })
        break
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.Snow })
        break
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere })
        break
      case rangeId >= 800:
        this.setState({ icon: this.weatherIcon.Clear })
        break
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds })
        break
      default:
        this.setState({ icon: this.weatherIcon.Thunderstorm })
    }
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    if (city && country) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      )
      const response = await api_call.json()
      console.log(response)
      this.setState({
        city: `${response.name},${response.sys.country}`,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
      })
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    const {
      city,
      country,
      icon,
      error,
      description,
      celsius,
      temp_max,
      temp_min,
    } = this.state
    return (
      <div className="App">
        <Form loadWeather={this.getWeather} error={error} />
        <Weather
          city={city}
          country={country}
          temp_celsius={celsius}
          temp_max={temp_max}
          temp_min={temp_min}
          description={description}
          weatherIcon={icon}
        />
      </div>
    )
  }
}

export default App
