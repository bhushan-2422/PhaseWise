import React, { useEffect } from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate= useNavigate()
    const {user} = useUser()
    useEffect(() => {
      if(!user){
        navigate('/signin')
    }
    }, [])
    console.log(user)
    
  return (
    <div>
      <h1>welcome to home</h1>
    </div>
  )
}

export default Home
