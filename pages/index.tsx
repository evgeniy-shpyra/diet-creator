import Main from "@/components/main"
import Header from "@/components/header"

import BigButton from "@/components/elements/buttons/BigButton"
import Link from "next/link"
import { useAppSelector } from "@/hooks/reduxHooks"

export default function HomePage() {
    const headerHeight = useAppSelector((state) => state.app.headerHeight)
    return (
        <Main
            style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
            className={`flex justify-center items-center gap-[30px]`}
        >
            <Link href='/simple-menu'>
                <BigButton className='bg-[var(--light-green)] text-[var(--text-light)] border-[2px] border-[var(--text-dark)]'>
                    ПРОСТЕ МЕНЮ
                </BigButton>
            </Link>
            <Link href='/daily-menu'>
                <BigButton className='bg-[var(--brown)] text-[var(--text-light)] border-[2px] border-[var(--text-dark)]'>
                    ДЕННЕ МЕНЮ
                </BigButton>
            </Link>

            <p className='absolute bottom-[5px] left-[50%] translate-x-[-50%] text-[var(--text-dark] opacity-[0.6]'>
                © 2023 Zhenki Entertainment
            </p>
        </Main>
    )
}
