import { useLoaderData } from "react-router";
import Campaigns from "./campaigns/Campaigns";

export default function CampaignsContainer() {

    const campaignHeadings = useLoaderData();

    return (
        <Campaigns campaignHeadings={campaignHeadings} />
    );
}
