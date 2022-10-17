import React, { useState } from 'react'
import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi'
import axios from 'axios';

const InputField = styled.input`
      outline : none;
      width : 100%;
      height : 2.6rem;
      /* margin : 2rem auto; */
      /* padding : 0 1.2rem; */
      font-size : 1rem;
      display : block;
      background-color : #fff;
      border : none;
`

const Container = styled.div`
      display : flex;
      height : 2.6rem;
      align-items : center;
      background-color : #fff;
      overflow : hidden;
      max-width : 25rem;
      border : 1px solid #d3d3d399;
      border-radius :  2rem;
      margin : 0 auto;
`

function SearchBar({ setWeatherData }) {

     const handleSubmit = (e) => {
            e.preventDefault();
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.elements['city'].value}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`).
            then((response) => {
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
            });
     }

      return (
            <>
                  <Container>
                        <BiSearchAlt style={{ margin : "0 0.7rem", fontSize : "1.1rem" }} />
                        <form onSubmit={handleSubmit} style={{width:"100%",}}>
                              <InputField  type="text" name='city' placeholder='Search City Weather'  />
                        </form>
                        
                  </Container>
            </>
      )
}

export default SearchBar