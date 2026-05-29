import {createRoot} from 'react-dom/client'
import MainPage from "./components/pages/MainPage";
import './index.css'

createRoot(document.getElementById('root')!).render(
    <MainPage/>
);