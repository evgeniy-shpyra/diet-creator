import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "@/components/main";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
    return (
        <Main>
            <h3 className="h-[80px] w-full">HamePage</h3>
        </Main>
    );
}
