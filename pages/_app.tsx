import "@/styles/globals.css"
import "@/styles/globals.scss"
import "@/styles/icon.css"
import { ThemeProvider } from "@/store/theme/ThemeProvider"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "@/store/redux"
import { Raleway } from "next/font/google"

const raleway = Raleway({
    subsets: ["latin", "cyrillic"],
    weight: ["300", "400", "500", "700"],
    display: "swap",
    style: ["normal"],
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <div className={raleway.className}>
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
        </Provider>
    )
}
