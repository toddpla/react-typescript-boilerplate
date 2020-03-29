import { Auth } from 'aws-amplify';

export default {
    API: {
        endpoints: [
            {
                name: "markets",
                endpoint: process.env.API_ENDPOINT_MARKETS || 'http://localhost:3000/dev',
                custom_header: async () => {
                    return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`, 'Access-Control-Allow-Origin': '*' }
                }
            }
        ]
    }
}