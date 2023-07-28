import { ThemeContext } from "@/store/theme/ThemeContext"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

interface HeaderProps {
    className?: string
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
    const { theme, setTheme } = React.useContext(ThemeContext)
    const router = useRouter()

    const handleChangeTheme = () => {
        if (theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    const handleGoToPrevPage = () => {
        router.back()
    }

    return (
        <header
            className={`bg-[var(--theme-color)] h-[60px] min-w-[1400px] w-full flex items-center ${className}`}
        >
            <div className='mx-auto px-[40px] w-[1400px] max-w-[1400px] h-full flex items-center justify-between gap-[15px]'>
                <i
                    onClick={handleGoToPrevPage}
                    className='leading-none mr-[7px] cursor-pointer hover:opacity-[0.7] text-[20px] text-[#fff] transition-opacity icon-go-back'
                ></i>

                <div>
                    <i className='leading-none cursor-pointer hover:opacity-[0.7] text-[20px] text-[#fff] transition-opacity icon-link'></i>
                    <i className='leading-none mx-[15px] cursor-pointer hover:opacity-[0.7] text-[20px] text-[#fff] transition-opacity icon-download'></i>
                    <Link href='/'>
                        <i className='leading-none cursor-pointer hover:opacity-[0.7] text-[20px] text-[#fff] transition-opacity icon-home'></i>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
