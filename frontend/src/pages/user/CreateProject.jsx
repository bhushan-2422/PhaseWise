import React, { useState } from 'react'

const CreateProject = () => {
    const [name, setname] = useState("")
    const [type, setType] = useState("")
    const [deadline, setDeadline] = useState("")
    const [level, setLevel] = useState("")
    const [techstack, setTechstack] = useState("")
    const [description, setDescription] = useState("")

  return (
    <div>
      <input type="text" value={name} placeholder='enter project name' />
      <br /><br />
      <input type="text" value={type} placeholder='enter type eg. web, mobile app, ml model' />
      <br /><br />
      <input type="text" value={deadline} placeholder='enter deadline eg. 10 jan 2026' />
      <br /><br />
      <input type="text" value={level} placeholder='level eg. beginer, intermidiate' />
      <br /><br />
      <input type="text" value={techstack} placeholder='tech stack eg. MERN' />
      <br /><br />
      <textarea name="description" id="description" value={description} placeholder='description'></textarea>
    </div>
  )
}

export default CreateProject