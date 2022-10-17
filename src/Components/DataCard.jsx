import React from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import WeatherData from '../lotties/WeatherData.json'
import HumidityData from '../lotties/humidity.json'
import WindData from '../lotties/wind.json'
import CloudData from '../lotties/clouds.json'

const WeatherOptions = {
      loop : true,
      autoplay : true,
      animationData : WeatherData
}

const HumidityOptions = {
      loop : true,
      autoplay : true,
      animationData : HumidityData
}

const WindOptions = {
      loop : true,
      autoplay : true,
      animationData : WindData
}

const CloudsOptions = {
      loop : true,
      autoplay : true,
      animationData : CloudData
}

const Card = styled.div`
      width : 100%;
      max-width : 45rem;
      /* min-height : 25rem; */
      padding : 2rem 2rem;
      margin : 2rem auto;
      display : block;
      border-radius : 1.4rem;
      background-color : #fafafa;
      box-shadow : 0 0 5rem rgba(#00B4DB, 0.498);
`

const Heading = styled.h1`
      font-size : 2rem;
      text-align : center;
      font-weight : 600;

      @media (max-width: 500px) {
            font-size : 1.6rem;
      }
`

const Location = styled.h2`
      font-size : 1.6rem;
      font-weight : 500;
      margin : 1rem 0;

      @media (max-width: 650px) {
            text-align : center;
      }
`

const Content = styled.div`
      display : flex;
      justify-content : space-between;
      align-items : center;

      @media (max-width: 650px) {
            flex-direction : column;
      }
`

const WeatherContent = styled.div`
      display : flex;

      @media (max-width: 500px) {
            flex-direction : column;
      }
`

const DataContent = styled.div`
      
`
const Temperature = styled.h1`
      font-size : 4.5rem;
      font-weight : 400;
      font-family : "Nunito";
      margin : 0;
      color : rgba(0,0,0,0.9);
`
const Animation = styled.div`
      .lottie {
            @media (max-width: 500px) {
                  width : 250px;
                  height : 250px;
            }
      }
`

const InfoCard = styled.div`
      margin : 1rem 0;
      display : flex;
      align-items : center;
      /* box-shadow : 0 0 2rem #aaaaaab1; */
      border-radius : 2rem;
      background-color : #323232;
      padding : 0.2rem 1rem;
      margin : 0.5rem 0;
`
const Text = styled.span`
      margin : 0 0.6rem;
      font-size : 0.8rem;
      font-weight : 600;
      color : #fafafa;
`

function DataCard(props) {
      return (
            <Card>
                  <Heading>Weather Forecast</Heading>
                  <Location>{ props.data.place }, { props.data.country}</Location>
                  <Content>
                        <WeatherContent>
                              <Animation>
                                    <Lottie
                                          className="lottie"
                                          options={WeatherOptions}
                                          width={150}
                                          height={150}
                                          style={{ margin:"0" }}
                                    />
                              </Animation>
                              <div>
                                    <Temperature>{parseInt(Number(props.data.temp))}&#8451;</Temperature>
                                    <Location style={{ textTransform : "capitalize", color : "#fafafa" ,fontSize : "1rem", margin : "0", boxShadow : "0 0 2rem #aaaaaab1",
                                          borderRadius :" 2rem",
                                          backgroundColor : "#323232",
                                          padding : "0.5rem 1rem" }}>
                                    { props.data.weather }</Location>
                                    {/* <span style={{textAlign : "center"}}>min:{ props.data.minTemp } - max:{ props.data.maxTemp }</span> */}
                              </div>
                        </WeatherContent>
                        <DataContent>
                              <h3 style={{ color : "#000000", textAlign : "center", margin : "1rem 0 0 0" }}>Weather Info</h3>
                              <InfoCard>
                                    <Lottie 
                                          options={HumidityOptions}
                                          width={30}
                                          height={30}
                                          style={{margin:"0"}}
                                    />
                                    <Text>Humidity: {props.data.humidity}%</Text>
                              </InfoCard>
                              <InfoCard>
                                    <Lottie 
                                          options={WindOptions}
                                          width={30}
                                          height={30}
                                          style={{margin:"0"}}
                                    />
                                    <Text>Wind Speed: {props.data.wind}</Text>
                              </InfoCard>
                              <InfoCard>
                                    <Lottie 
                                          options={CloudsOptions}
                                          width={30}
                                          height={30}
                                          style={{margin:"0"}}
                                    />
                                    <Text>Clouds: {props.data.clouds}%</Text>
                              </InfoCard>
                        </DataContent>
                  </Content>
            </Card>
      )
}

export default DataCard