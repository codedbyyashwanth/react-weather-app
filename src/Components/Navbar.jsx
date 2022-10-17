import React from 'react'
import styled from 'styled-components'
import { GrGithub } from "react-icons/gr";

const Nav = styled.nav`
        display : flex;
        justify-content : space-between;
        align-items : center;
        margin : 2rem 0;
`

function Navbar() {
        return (
                <Nav>
                        <h2 style={{ color : "#fafafa", cursor : 'pointer' }}>WeatherApp</h2>
                        <a href="https://github.com/codedbyyashwanth/react-weather-app">
                                <GrGithub style={{ fontSize : "2rem", color : "#fafafa" }} />
                        </a>
                </Nav>
        )
}

export default Navbar
