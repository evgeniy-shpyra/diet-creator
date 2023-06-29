import React from "react"

interface InputContainer {
    children: React.ReactNode
}

const InputContainer: React.FC<InputContainer> = ({ children }) => {
    return <div className='input-container'>{children}</div>
}

export default InputContainer
