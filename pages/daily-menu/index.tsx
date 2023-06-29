import BigButton from "@/components/elements/buttons/BigButton"
import Main from "@/components/main"
import { useAppSelector } from "@/hooks/reduxHooks"
import Link from "next/link"
import React from "react"

const DailyMenu = () => {
    const headerHeight = useAppSelector((state) => state.app.headerHeight)
    return (
        <Main
            style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
            className='flex justify-center items-center gap-[30px]'
        >
            <Link href='/daily-menu/simple'>
                <BigButton className='bg-[var(--brown)] text-[var(--text-light)] border-[2px] border-[var(--text-dark)]'>
                    ЗВИЧАЙНЕ ДЕННЕ МЕНЮ
                </BigButton>
            </Link>
            <Link href='/daily-menu/with-second-breakfast'>
                <BigButton className='bg-[var(--green)] text-[var(--text-light)] border-[2px] border-[var(--text-dark)]'>
                    ДЕННЕ МЕНЮ З ДРУГИМ СНІДАНКОМ
                </BigButton>
            </Link>
        </Main>
    )
}

export default DailyMenu
