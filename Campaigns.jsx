import React, { useEffect, useState } from "react";
import axios from "axios";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/campaigns")
      .then(response => setCampaigns(response.data))
      .catch(error => console.error("Error fetching campaigns:", error));
  }, []);

  return (
    <div>
      <h2>Active Campaigns</h2>
      <ul className="list-group">
        {campaigns.map((campaign) => (
          <li key={campaign.id} className="list-group-item">
            <h5>{campaign.name}</h5>
            <p>{campaign.description}</p>
            <p><strong>Goal:</strong> ${campaign.goal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Campaigns;
