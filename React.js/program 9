import React, { useState } from 'react'

function App() {
  const[theme,setTheme]=useState("light")
  const toggleTheme=()=>{
    setTheme(theme === "light" ? "Dark": "light")
  }
  const containerStyle={
  minHeight:"100vh",
  padding:"20px",
  backgroundColor: theme === "light" ? "#222" : "#fff",
  color: theme === "Dark" ? "#030303" : "#fff"
  }
  return (
    <div style={containerStyle}>
      <h1>Theme Toggle Example</h1>
      <p>Click the button to switch light and dark Mode</p>
      <button onClick={toggleTheme}>Switch to{theme === "light" ? "light": "Dark"} Dark Mode</button>
      <div style={{marginTop:"20px"}}>
      <p> text clor also change according to selected theme</p>
      </div>
    </div>
  )
}

export default App
