import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import TaskArea from '../components/TaskArea'
import { useUser } from '../../context/UserContext'
import { useFirebase } from '../../context/Firebase'

const ProjectDashboard = () => {
  const {user,loading} = useUser()
  const firebase = useFirebase()

  useEffect(() => {
   
  }, [])
  

  return (
    <div>
      <Sidebar/>
      <button>Phase 1</button>
      <button>Phase 2</button>
      <button>phase 3</button>
      <button>phase 4</button>
      <TaskArea/>
    </div>
  )
}

export default ProjectDashboard
