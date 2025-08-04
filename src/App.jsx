import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import './index.css'

function App() {

  const [courses, setCourses] = useState([]);

      useEffect(() => {
          fetch("../../public/courses.json")
          .then(response => response.json())
          .then(data => setCourses(data))
      }, [])

  return (
    <div>
      <Navbar courses={courses}/>
    </div>
  )
}

export default App
