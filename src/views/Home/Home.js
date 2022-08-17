import React, { useEffect, useState } from 'react'
import GridTemperatures from '../../components/GridTemperatures/GridTemperatures'
import './Home.css'

export const Home = () => {

  const [weather, setWeather] = useState() //Clima
  const [weekWeather, setWeekWeather] = useState(null) //Clima por Días

  useEffect(() => {
    console.log('test')
    fetch('https://api.weather.gov/points/40.7770875,-73.9640935') //Obtener Clima segun ciudad
      .then((resp) => resp.json())
      .then(res => {
        setWeather(res)
        fetch(res.properties.forecast.toString()) // obtener forecast del barrio segun ciudad
          .then(resp => resp.json())
          .then(res => setWeekWeather(res))
      })
  }, [])

  return (
    <div className='contenedor-home'>
      <div className='header'>
        <h3>
          Climate of the city of {weather && weather.properties.relativeLocation.properties.city} of the state of {weather && weather.properties.relativeLocation.properties.state}
        </h3>
      </div>
      <hr className='hr' />
      <div className='contenedor-doble'>
        {console.log(weekWeather)}
        {weekWeather && weekWeather.properties.periods.map((day) =>
          <GridTemperatures
            day={day.name}
            temperature={day.temperature}
            tempUnits={day.temperatureUnit}
          />)}
      </div>
    </div>
  )
}
