import {useState} from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import SidebarMenu from "../layouts/SidebarMenu";

export default function MainPage() {
    const [trackId, setTrackId] = useState<string | null>(null);

    const handleTrackSelect = (id: string | null) => setTrackId(id)

    return (
        <>
            <Header/>
            <main className="main container">
                <Main
                    trackId={trackId}
                    onTrackSelect={handleTrackSelect}
                />
                <SidebarMenu trackId={trackId}/>
            </main>
            <Footer/>
        </>
    )
}