import React from "react"

interface BigButtonProps {
    onClick?: () => void
    children: React.ReactNode
    className?: string
}

const BigButton: React.FC<BigButtonProps> = ({
    onClick,
    children,
    className,
}) => {
    return (
        <button
            onClick={onClick}
            className={`${className} max-w-[600px] text-[40px] p-[80px] rounded-[50px] hover:opacity-[0.8] transition-opacity`}
        >
            {children}
        </button>
    )
}

export default BigButton
