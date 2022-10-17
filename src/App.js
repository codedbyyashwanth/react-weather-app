import { useEffect, useState } from "react";
import DataCard from "./Components/DataCard";
import SearchBar from "./Components/SearchBar";
import axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar";
import Lottie from "react-lottie";
import LoadingData from './lotties/custom-loader.json';

function App() {
      const [weatherData, setWeatherData] = useState(null);
      const [loading, setLoading] = useState(false);

      const GetWeatherData = (value) => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?${value}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`).
            then((response) => {
                  setTimeout(() => {
                        setWeatherData(() => {
                              return {
                                    temp : response.data.main.temp,
                                    minTemp : response.data.main.temp_min,
                                    maxTemp : response.data.main.temp_max,
                                    humidity : response.data.main.humidity,
                                    wind : response.data.wind.speed,
                                    weather : response.data.weather[0].description,
                                    clouds : response.data.clouds.all,
                                    place : response.data.name,
                                    country : response.data.sys.country 
                              }
                        });
                  }, 3000);
            });
      }

      const successCall = (position) => {
            GetWeatherData(`lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
      }
      
      const failureCall = (error) => {
            GetWeatherData("q=delhi");
      }

      useEffect(() => {
            navigator.geolocation.getCurrentPosition(successCall, failureCall);
      }, []);

      const loadingOptions = {
            loop : true,
            autoplay : true,
            animationData : LoadingData
      }

      return (
            <>
                  {
                        weatherData !== null ? 
                              <div className="container">
                                    <Navbar />
                                    <SearchBar weatherData={weatherData} setWeatherData={setWeatherData} />
                                    <DataCard data={weatherData} />
                              </div>
                              : 
                              <div className="loading-container">
                                    <Lottie
                                          options={loadingOptions}
                                          width={300}
                                          height={300}
                                    />
                              </div>
                  }
            </>
      );
}

export default App;
