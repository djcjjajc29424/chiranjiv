const animeList = [
    { title: "episode 1 ", video: "Episode 1.mp4" } , 
  
    { title: "episode 2 ", video: "Episode 2.mp4" } ,
    { title: "episode 3 ", video: "Episode 3.mp4" } , 
    { title: "episode 4 ", video: "Episode 4.mp4" } , 
    { title: "episode 5 ", video: "Episode 5.mp4" } , 
    { title: "episode 6 ", video: "Episode 6.mp4" } , 
    { title: "episode 7 ", video: "Episode 7.mp4" } , 
];

const animeListDiv = document.getElementById("anime-list");

function renderAnimeList(searchTerm = "") {
    animeListDiv.innerHTML = "";
    animeList.forEach(anime => {
        if (anime.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            const item = document.createElement("div");
            item.classList.add("anime-item");
            item.textContent = anime.title;
            item.addEventListener("click", () => playVideo(anime.video));
            animeListDiv.appendChild(item);
        }
    });
}

function playVideo(videoUrl) {
    const videoPlayer = document.createElement('video');
    videoPlayer.setAttribute('controls', '');
    videoPlayer.style.width = '100%'; // Set video player width to 100% of parent element

    const source = document.createElement('source');
    source.setAttribute('src', videoUrl);
    source.setAttribute('type', 'video/mp4'); // Assuming your videos are in MP4 format

    videoPlayer.appendChild(source);

    // Replace the content of the anime-list div with the video player
    animeListDiv.innerHTML = '';
    animeListDiv.appendChild(videoPlayer);
}

renderAnimeList();

document.getElementById("search-bar").addEventListener("input", event => {
    renderAnimeList(event.target.value);
});
