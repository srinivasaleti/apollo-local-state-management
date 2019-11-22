import React, { useState } from 'react'

export default function Todo({ todo = {} }) {
    const [completed, setCompleted] = useState(false)

    return (
        <div className='todo'>
            <h2>{todo.text}</h2>
            <label className="switch">
                <input type="checkbox" onChange={() => {
                    setCompleted(!completed)
                }} checked={completed} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}
