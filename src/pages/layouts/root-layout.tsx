import Header from "@/components/header"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <>
        <Header/>
        <main className="container my-5">
            <Outlet/>
        </main>
        </>
    )
}

export default RootLayout