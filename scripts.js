console.log("Music player");
let songIndex=0;
let audioElement = new Audio("kesariya.mp3");
let masterPlay=document.getElementById('masterPlay');
let btn_btm = document.getElementById('btn_btm');
let giffy=document.getElementById('giffy');
let masterSongName = document.getElementById('masterSongName');
let Music_lists = Array.from(document.getElementsByClassName('Music_lists'));



let songs=[
    { SongName: "Legends Never Die", filePath: "/songs/Legends-Never-Die.mp3", Cover: "/album/legends.png", duration: "2:59" },
    { SongName: "Bones", filePath: "/songs/My Patience Is Waning-.mp3", Cover: "/album/patience.png", duration: "2:45" },
    { SongName: "My Demons", filePath: "/songs/My Demons.mp3", Cover: "/album/MyDemons.png", duration: "3:59" },
    { SongName: "Cheap-Thrills", filePath: "/songs/Cheap-Thrills.mp3", Cover: "/album/Cheap-Thrills.png", duration: "3:37" },
    { SongName: "Broken Promises", filePath: "/songs/Broken Promises.mp3", Cover: "/album/brokenpromises.png", duration: "0:26" },
    { SongName: "Kesariya", filePath: "/songs/kesariya.mp3", Cover: "/album/Kesariya.png", duration: "4:28" },
    { SongName: "Tere Hawaale", filePath: "/songs/Tere Hawaale.mp3", Cover: "/album/terehawaale.png", duration: "5:50" },
    { SongName: "Jhoome Jo Pathaan", filePath: "/songs/Jhoome Jo Pathaan.mp3", Cover:"/album/Pathaan.png",duration:"3:22"},
    { SongName: "Apna Bana Le", filePath: "/songs/Apna-Bana-Le.mp3", Cover: "/album/apnabanale.png", duration: "3:24" },
    { SongName: "Deva Deva", filePath: "/songs/Deva Deva.mp3", Cover: "/album/devadeva.png", duration: "4:39" },
    { SongName: "Unstoppable", filePath: "/songs/Unstoppable.mp3", Cover: "/album/Unstoppable.png", duration: "4:06" },
    { SongName: "Calm-Down", filePath: "/songs/Calm-Down.mp3", Cover: "/album/Calm Down.png", duration: "3:59" },
    { SongName: "The Drum", filePath: "/songs/The Drum.mp3", Cover: "/album/The-Drum.png", duration: "3:07" },
    { SongName: "As-It-Was", filePath: "/songs/As-It-Was.mp3", Cover: "/album/asitwas.png", duration: "3:05" },
    
       
];

songs.forEach((element,i)=>{
    // element.getElementsByTagName("img")[0].src = songs[i].Cover;
    // element.getElementsByClassName("s_name")[0].innerText = songs[i].SongName;
    document.querySelector(".all_songs").insertAdjacentHTML('beforeend',`<div class="Music_lists" data-index="0">
<img src="${element.Cover}" class="albums" alt="coverpage" height="70px" width="100px">
<li class="mu_title"><span class="s_name">${element.SongName}</span> <span class="duration">${element.duration}</span>
</li>

    
<li class="alb_icons play-${i}" id="btn-${i}"> <i class="fa-solid fg songItemPlay fa-circle-play"></i></li></div>
`)
})

songs.forEach((element,i)=>{
    document.querySelector(`#btn-${i}`).addEventListener('click', function () {
        if (audioElement.paused || audioElement.currentTime <= 0) {
           
            audioElement.src = element.filePath;
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            giffy.style.opacity=1;
        }
        else{
            audioElement.pause();
            audioElement.src = element.filePath;
            audioElement.load();
            audioElement.play();
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            giffy.style.opacity = 0;
        }
        }
       );
})


 masterPlay.addEventListener('click', function () {
         if (audioElement.paused || audioElement.currentTime <= 0) {
             audioElement.play();
             masterPlay.classList.remove('fa-play');
             masterPlay.classList.add('fa-pause');
             giffy.style.opacity=1;
         }
         else{
             audioElement.pause();
             masterPlay.classList.remove('fa-pause');
             masterPlay.classList.add('fa-play');
             giffy.style.opacity = 0;
         }
         }
        );

audioElement.addEventListener('timeupdate', ()=> {
    // console.log('timeupdate');


let rangeValue=parseInt((audioElement.currentTime/audioElement.duration)*100);
// console.log('timeupdate');
// console.log(rangeValue);
btn_btm.value=rangeValue;
});

btn_btm.addEventListener('change',()=>{
  audioElement.currentTime=btn_btm.value*audioElement.duration/100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('alb_icons')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
};

// Array.from(document.getElementsByClassName('alb_icons')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         songIndex = parseInt(e.target.parentNode.getAttribute('data-index'));
//         e.target.firstChild.classList.remove('fa-play');
//         e.target.firstChild.classList.add('fa-pause');
//         audioElement.src = songs[songIndex].filePath;
//         masterSongName.innerText = songs[songIndex].SongName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         giffy.style.opacity = 1;
//         masterPlay.classList.remove('fa-play');
//         masterPlay.classList.add('fa-pause');
//     });
// });

document.getElementById('nextButton').addEventListener('click', () => {
    songIndex=(songIndex+1)%songs.length;
    
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', () => {
   /* if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }*/
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})



/*Songs to be added
//
1.Legends never die
2.bones*/
3.//My demons*/
//4.cheap thrills*/
5.//broken promises*/