import React from "react"


interface MainProps {
    children?: React.ReactNode
    withSidebar?: boolean
    className?: string
    style?: object
}

const Main: React.FC<MainProps> = ({
    children,
    withSidebar,
    className = "",
    style,
}) => {
   

    return (
        <div
            style={style}
            className={`bg-[var(--bg-page-primary)] w-[1400px] max-w-[1400px] mx-auto px-[40px] ${className}`}
        >
            {children}
        </div>
    )
}

export default Main
