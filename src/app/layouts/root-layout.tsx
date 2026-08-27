import {HeadContent, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";
import {Header} from "../../widgets/header/ui/header.tsx";
import {Footer} from "../../widgets/footer/ui/footer.tsx";
import {AccountBar} from "../../features/auth/ui/account-bar.tsx";

// import {LoginButton} from "../../features/auth/ui/login-button.tsx";

export function RootLayout() {
    return (
        <>
            <HeadContent/>
            <Header renderAccountBar={() => <AccountBar/>}/>
            <main className="flex flex-col flex-1 gap-3 py-5">
                <Outlet/>
            </main>
            <Footer/>
            <TanStackRouterDevtools/>
        </>
    )
}