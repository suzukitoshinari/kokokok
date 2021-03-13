import React from 'react'

const Api = ({ onClick, color, text }) => {
    return (
        <button onClick={onClick} className={`ui ${color} button`}>
            {text}
        </button>
    )
}

export default Api;
