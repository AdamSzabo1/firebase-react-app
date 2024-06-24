import { Link } from "react-router-dom";

import './header.css';

export default function Header() {

    return (
        <header className="app-header">
            <nav className="container">
                <ul>
                    <li> <Link to={'/'} >Home</Link> </li>
                    <li> <Link to={'/campaigns'} >Campaigns</Link> </li>
                    <li> <Link to={'/campaigns/upload'} >Upload</Link> </li>
                </ul>
            </nav>
        </header>
    );
}
