const { setupAuth } = require('./auth');
const { searchTracks, getArtist } = require('./apiCalls');

async function runDemo() {
    try {
        // Get authenticated client
        const spotifyApi = await setupAuth();

        // Demo 1: Search for tracks
        console.log('\n=== Track Search ===');
        const tracks = await searchTracks(spotifyApi, 'Bohemian Rhapsody');
        tracks.forEach(track => {
            console.log(`- ${track.name} by ${track.artists[0].name}`);
        });

        // Demo 2: Get artist info (using Queen's Spotify ID)
        console.log('\n=== Artist Info ===');
        const artist = await getArtist(spotifyApi, '1dfeR4HaWDbWqFHLkxsg1d');
        console.log(`Name: ${artist.name}`);
        console.log(`Followers: ${artist.followers.total}`);
        console.log(`Genres: ${artist.genres.join(', ')}`);

    } catch (error) {
        console.error('Error in demo:', error);
    }
}

runDemo(); 