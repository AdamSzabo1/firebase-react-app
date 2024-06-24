import { Link } from "react-router-dom";

import './campaign-link.css';

export default function CampaignLink({ to, children }) {

    return (
        <Link className="campaign-link" to={to}>{children}</Link>
    );
}
