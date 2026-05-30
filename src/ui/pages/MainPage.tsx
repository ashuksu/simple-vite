import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import SidebarMenu from "../layouts/SidebarMenu";
import {useTrackSelection} from "../../bll/useTrackSelection";

export default function MainPage() {
    const {trackId, setTrackId} = useTrackSelection();
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