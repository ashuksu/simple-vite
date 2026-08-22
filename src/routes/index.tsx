import {createFileRoute} from '@tanstack/react-router'
// import MainPage from "../ui/pages/MainPage.tsx";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
            {/*<MainPage/>*/}
        </div>
    )
}