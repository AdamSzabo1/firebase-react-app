import { Outlet } from "react-router";

import './default-layout.css';
import { Header } from "../../../features/nav";

export default function DefaultLayout() {

    return (
        <div className="default-layout" >
            <Header />
            <Outlet />

            <footer className="app-footer">
                <div className="container" >Footer</div>
            </footer>

        </div>
    );
} 
