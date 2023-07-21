let songIndex = 0;
let auidoElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
masterPlay;
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSong = document.getElementById("masterSong");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {

      makeAllPlay();
      songIndex = parseInt(e.target.id);
      console.log('songIndex')
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      auidoElement.src=`songs/${songIndex+1}.mp3`;
      masterSong.innerHTML =songs[songIndex].songName;
      auidoElement.currentTime=0;
        auidoElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
        //   songItemPlay.target.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    auidoElement.src=`songs/${songIndex+1}.mp3`;
    masterSong.innerHTML =songs[songIndex].songName;
    auidoElement.currentTime=0;
        auidoElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
   
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    auidoElement.src=`songs/${songIndex+1}.mp3`;
    masterSong.innerHTML =songs[songIndex].songName;
    auidoElement.currentTime=0;
        auidoElement.play();
        masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
})


// auidoElement.play();
// handle play/pause click

masterPlay.addEventListener("click", () => {
  if (auidoElement.paused || auidoElement.currentTime <= 0) {
    auidoElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    

    gif.style.opacity = 1;
  } else {
    auidoElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
   
  }
});

auidoElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  progress = parseInt((auidoElement.currentTime / auidoElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  auidoElement.currentTime =
    (myProgressBar.value * auidoElement.duration) / 100;
});
