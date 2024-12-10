require('dotenv').config();
const SpotifyWebApi = require('spotify-web-api-node');

/**
 * Creates a Spotify API client instance
 * @returns {SpotifyWebApi} Spotify API client
 */
function createSpotifyClient() {
    return new SpotifyWebApi({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        redirectUri: process.env.REDIRECT_URI
    });
}

/**
 * Sets up authentication server and handles token management
 * @returns {Promise<SpotifyWebApi>} Authenticated Spotify client
 */
async function setupAuth() {
    const spotifyApi = createSpotifyClient();
    
    // Get access token using client credentials
    try {
        const data = await spotifyApi.clientCredentialsGrant();
        spotifyApi.setAccessToken(data.body['access_token']);
        console.log('Authentication successful!');
        return spotifyApi;
    } catch (error) {
        console.error('Error getting token:', error);
        throw error;
    }
}

module.exports = { setupAuth }; 