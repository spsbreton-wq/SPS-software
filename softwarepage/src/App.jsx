import { useState } from 'react'
import AboutUS from './components/AboutUs'
import NavigationBar from './components/NavigationBar'
import RequirementsDGII from './components/RequirementsDGII'
import News from './components/News' 

function App() {
 

  return (
    <>
    <NavigationBar />
    <AboutUS />
    <RequirementsDGII />
    <News />
    </>
  )
}

export default App
