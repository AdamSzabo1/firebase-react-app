
import { Outlet } from 'react-router';
import Sidebar from '../sidebar/Sidebar';
import './campaigns.css';

export default function Campaigns({ campaignHeadings }) {

    return (
        <div className="container content-area campaigns-area">
            <Sidebar campaignHeadings={campaignHeadings} />
            <Outlet />
        </div>
    );
}
