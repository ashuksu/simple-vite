import {Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";
import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";

export function RootLayout() {
    return (
        <>
            <Header/>
            <main className="flex flex-col flex-1 gap-3 py-5">
                <Outlet/>
            </main>
            <Footer/>
            <TanStackRouterDevtools/>
        </>
    )
}