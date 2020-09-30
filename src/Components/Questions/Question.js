import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

const Question = ({ question }) => {
    return (
        <div>
            <p>{question}</p>
        </div>
    )
}
export default Question