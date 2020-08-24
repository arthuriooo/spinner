import React from 'react'
import './App.css'

import styled from 'styled-components'

const logo = require('./command.png')

const Button = styled.div`
  padding: 20px 30px;
  margin-top: 120px;
  background-color: coral;
  border-radius: 15px;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" id={'image'} alt="logo" />
      </header>
    </div>
  )
}

export default App
