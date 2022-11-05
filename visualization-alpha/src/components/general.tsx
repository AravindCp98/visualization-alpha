import React, { useContext, useEffect } from 'react'
import { UserComment } from '../context/usercontext'

function General() {
    const msg = useContext(UserComment)
    useEffect(() => {
        console.log(msg)
    })
  return (
      <div>
        {msg.stringVal +"   " + 'this is passed from use context'}
      </div>
  )
}

export default General