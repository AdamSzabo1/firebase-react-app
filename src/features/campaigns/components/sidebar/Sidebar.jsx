import CampaignLink from "./CampaignLink";

import './sidebar.css';

export default function Sidebar({ campaignHeadings }) {

    return (
        <div className="campaign-sidebar">
            {
                campaignHeadings.map(item => (
                    <CampaignLink
                        key={item.slug}
                        to={`/camapaigns/${item.slug}`}
                    >
                        {item.title}
                    </CampaignLink>
                ))
            }
        </div>
    );
}
