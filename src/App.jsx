import { useState, useEffect } from "react"

import SearchBar from "./components/SearchBar"
import CurrentWeather from "./components/CurrentWeather"
import WeatherDetails from "./components/WeatherDetails"
import HourlyForecast from "./components/HourlyForecast"
import WeeklyForecast from "./components/WeeklyForecast"
import TemperatureChart from "./components/TemperatureChart"
import WeatherAnimation from "./components/WeatherAnimation"
import FavoriteCities from "./components/FavoriteCities"
import SkyBackground from "./components/SkyBackground"

import {
  getCurrentWeather,
  getForecast,
  getWeatherByCoords
} from "./services/weatherApi"

export default function App() {

  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  // Add city to favorites
  const addCity = (city) => {

    const saved = JSON.parse(localStorage.getItem("cities")) || []

    if (!saved.includes(city)) {

      const updated = [...saved, city]

      localStorage.setItem("cities", JSON.stringify(updated))

    }

  }

  // Dynamic background
  let background = "from-blue-400 via-blue-500 to-indigo-700"

  if (weather?.weather[0].main === "Rain") {
    background = "from-gray-500 via-gray-600 to-gray-800"
  }

  if (weather?.weather[0].main === "Clear") {
    background = "from-yellow-400 via-orange-400 to-pink-500"
  }

  if (weather?.weather[0].main === "Clouds") {
    background = "from-gray-300 via-gray-400 to-gray-600"
  }

  if (weather?.weather[0].main === "Snow") {
    background = "from-blue-200 via-blue-300 to-blue-500"
  }

  // Search weather by city
  const searchWeather = async (city) => {

    try {

      const weatherData = await getCurrentWeather(city)
      const forecastData = await getForecast(city)

      setWeather(weatherData)
      setForecast(forecastData)

    } catch (error) {
      console.error("Weather fetch error:", error)
    }

  }

  // Get weather using GPS
  const getLocationWeather = () => {

    navigator.geolocation.getCurrentPosition(async (position) => {

      try {

        const { latitude, longitude } = position.coords

        const weatherData = await getWeatherByCoords(latitude, longitude)
        const forecastData = await getForecast(weatherData.name)

        setWeather(weatherData)
        setForecast(forecastData)

      } catch (error) {
        console.error("Location weather error:", error)
      }

    })

  }

  // Run when app loads
  useEffect(() => {
    getLocationWeather()
  }, [])

  return (

    <div className={`${darkMode ? "bg-black" : `bg-gradient-to-b ${background}`} min-h-screen text-white flex flex-col items-center p-6 gap-6`}>

      <SkyBackground weather={weather} />

      {/* Weather Animation */}
      <WeatherAnimation weather={weather} />

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 bg-white/20 px-4 py-2 rounded-lg"
      >
        Toggle Theme
      </button>

      {/* Search */}
      <SearchBar onSearch={searchWeather} />

      {/* Favorite Cities */}
      <FavoriteCities onSelectCity={searchWeather} />

      {/* Current Weather */}
      <CurrentWeather
        weather={weather}
        addCity={addCity}
      />

      {/* Hourly Forecast */}
      <HourlyForecast forecast={forecast} />

      {/* Temperature Chart */}
      <TemperatureChart forecast={forecast} />

      {/* Weather Details */}
      <WeatherDetails weather={weather} />

      {/* Weekly Forecast */}
      <WeeklyForecast forecast={forecast} />

    </div>

  )
}