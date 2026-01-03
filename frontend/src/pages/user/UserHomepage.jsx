import React, { useEffect, useState } from 'react'
import { useUser } from '../../context/UserContext'
import { useFirebase } from '../../context/Firebase'

const UserHomepage = () => {
  const {user} = useUser()
  const firebase = useFirebase()
  const [data, setdata] = useState()

  useEffect(() => {
    async function fetchProjects(user){
      const res = await firebase.handleViewAllProjects(user)
      setdata(res)
    }

    fetchProjects(user)
  }, [user])

  console.log(data)
  
  return (
    <div>
      hey baby..
      
    </div>
  )
}

export default UserHomepage
