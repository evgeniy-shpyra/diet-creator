import Header from "@/components/header"
import Main from "@/components/main"
import { useAppSelector } from "@/hooks/reduxHooks"
import Image from "next/image"
import React from "react"
import imgLeaves from "@/assets/images/simple-leaves.png"
import imgKiwi from "@/assets/images/simple-kiwi.png"
import Template from "@/components/elements/template/Template"

const Simple = () => {
    const headerHeight = useAppSelector((state) => state.app.headerHeight)
    return (
        <>
            <Header />
            <Main style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
                <Template />
            </Main>
        </>
    )
}

export default Simple
