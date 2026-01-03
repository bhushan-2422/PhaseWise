import React, { useEffect, useState } from 'react'
import { useUser } from '../../context/UserContext'
import { useFirebase } from '../../context/Firebase'

const TaskArea = ({phaseId, projectId}) => {
  const {user} = useUser()
  const firebase = useFirebase()
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState()

  useEffect(() => {
    const fetchTask = async() =>{
      try{
        setLoading(true)
        const res = await firebase.handleViewTask(user, projectId, phaseId)
        setTasks(res)

      }catch(e){
        console.log(e)
      }finally{
        setLoading(false)
      }
    }
    fetchTask()
  }, [phaseId, projectId])

  if(!phaseId && !projectId) return <div>select a phase..</div>
  
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.taskTitle}</h3>
          <p>{task.taskDescription}</p>
          <p>{task.createdBy}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskArea
