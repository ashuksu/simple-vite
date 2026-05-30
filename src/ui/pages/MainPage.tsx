import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import SidebarMenu from "../layouts/SidebarMenu";
import {uaeTrackSelection} from "../../bll/uaeTrackSelection";

export default function MainPage() {
    const {trackId, setTrackId} = uaeTrackSelection();
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