import React from "react"
import { ThemeContext, themes } from "./ThemeContext"

const getTheme = () => {
    let theme = "light"
    try {
        const currentTheme = localStorage.getItem("theme")
        if (currentTheme) theme = currentTheme
    } catch (error) {
        // console.error(error)
    }

    return theme
}

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = React.useState<string>(getTheme())

    const handleChangeTheme = (newTheme: string): void => {
        setTheme(newTheme)
    }

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme
        if (theme) {
            try {
                localStorage.setItem("theme", theme)
            } catch (error) {}
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleChangeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
