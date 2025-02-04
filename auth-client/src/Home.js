import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/signup");
    }
  }, [navigate])


  return (
    <h1>
      welcome to Retinoscan
    </h1>
  )
}

export default Home
