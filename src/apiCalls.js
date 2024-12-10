/**
 * Search for tracks on Spotify
 * @param {SpotifyWebApi} spotifyApi - Authenticated Spotify client
 * @param {string} query - Search query
 * @returns {Promise<Object>} Search results
 */
async function searchTracks(spotifyApi, query) {
    try {
        const response = await spotifyApi.searchTracks(query, { limit: 5 });
        return response.body.tracks.items;
    } catch (error) {
        console.error('Error searching tracks:', error);
        throw error;
    }
}

/**
 * Get artist information
 * @param {SpotifyWebApi} spotifyApi - Authenticated Spotify client
 * @param {string} artistId - Spotify artist ID
 * @returns {Promise<Object>} Artist information
 */
async function getArtist(spotifyApi, artistId) {
    try {
        const response = await spotifyApi.getArtist(artistId);
        return response.body;
    } catch (error) {
        console.error('Error getting artist:', error);
        throw error;
    }
}

module.exports = {
    searchTracks,
    getArtist
}; 