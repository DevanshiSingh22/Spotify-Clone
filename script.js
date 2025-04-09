console.log("hey")


async function getSongs() {
    let a = await fetch('http://127.0.0.1:3000/songs/')
    let response = await a.text();

    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }

    }
    return songs
}
async function main() {
    let songs = await getSongs()
    console.log(songs)

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
        
                            <img src="music.svg" alt="">
                            <div class="info">
                                <div> ${song.replaceAll("%20", " ")}</div>
                                <div>D</div>
                            </div>
                            <div class="playNow">
                                <span>Play Now</span>
                                <img src="play.svg" alt="">
                            </div>
                        
        
        
        
        
        
        
        
        
        
        </li>`;

    }

    let playButton = document.getElementById("playButton");
    let audio = new Audio(songs[0]);
    playButton.addEventListener("click", function () {
        audio.play().catch(error => console.log("Playback failed:", error));
    });
    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(duration);
    });
}
main();
