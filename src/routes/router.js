import { CampaignsContainer, loadCampaignHeading } from "../features/campaigns";
import { DefaultLayout } from "../global";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <div className="container" >Home</div>
            },
            {
                path: 'campaigns',
                element: <CampaignsContainer />,
                loader: loadCampaignHeading,
                children: [
                    {
                        index: true,
                        element: <h3>Select a campaign...</h3>
                    }
                ]
            }
        ]
    }
])

export default router;
