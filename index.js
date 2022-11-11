console.log("Welcome to spotify ");

let songindex = 0 ;
let masterplay = document.getElementById("masterplay");
let nextsong = document.getElementById("nextSong");
let mouseclick = new Audio("Mouse.mp3")
let audioElement = new Audio("music/1.mp3");
let mygif = document.getElementById('gif');
let ProgressBar = document.getElementById('myprogressbar');
let songsource = Array.from(document.getElementsByClassName('songitem'));
let mastersongname = document.getElementById('masterindex');


let songs = [

    {songName:'dilliwalli' , filepath : 'songs/1.mp3' , coverpath : 'photoes/1.jpg' },
    {songName:'she move it like' , filepath : 'songs/2.mp3' , coverpath : 'photoes/2.jpg' },
    {songName:'bapu - zimedaar' , filepath : 'songs/3.mp3' , coverpath : 'photoes/3.jpg' },
    {songName:'Dill - Tutdaa' , filepath : 'songs/4.mp3' , coverpath : 'photoes/4.jpg' },
    {songName:'Baapu - Suit' , filepath : 'songs/5.mp3' , coverpath : 'photoes/5.jpg' }
]

//changing song name and cover

songsource.forEach(
    (element,i)=>{
        element.getElementsByTagName('img')[0].src = songs[i].coverpath ;
        element.getElementsByClassName('songname')[0].innerText = songs[i].songName ;
        // element.getElementsByClassName('songitem')[0].src = songs[i].songName ;
        // element.audioElement[0] = songs[i].filepath ;


    }
)

// masterplay.addEventListener('click',()=>{
    //     mouseclick.play();
    
    // })


 //For play/pause music
masterplay.addEventListener('click',()=>{
    
    if(audioElement.paused || audioElement.currentTime <= 0){
        
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        mygif.style.opacity = 1 ;
    }
    else
    {
        
        audioElement.pause() ;
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        mygif.style.opacity =  0;

    }
})

//Listen to events
//progress bar

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate') ;

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100) ;
    console.log(progress);
    ProgressBar.value = progress ;
})

ProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100 ;

})

//changing song

// nextsong.addEventListener('click',()=>{
    
// })

//function to convert pause into play 
let makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('Songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })

}
Array.from(document.getElementsByClassName('Songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        mastersongname.innerText = songs[songindex].songName ;
        audioElement.src = `songs/${songindex+1}.mp3` ;
        audioElement.currentTime = 0 ;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })
})

document.getElementById('previousSong').addEventListener('click',()=>{
    if(songindex <= 0){
        songindex = 0 ;
    }
    else{
        songindex = songindex - 1 ;


    }
    audioElement.src = `songs/${songindex+1}.mp3` ;
    audioElement.currentTime = 0 ;
    mastersongname.innerText = songs[songindex].songName ;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})

const changeicon = ()=>{

}
document.getElementById('nextSong').addEventListener('click',()=>{

    if(songindex >= 4){
        songindex = 0 ;
    }
    else{
        songindex = songindex + 1 ;


    }
    audioElement.src = `songs/${songindex+1}.mp3` ;
    mastersongname.innerText = songs[songindex].songName ;
    audioElement.currentTime = 0 ;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})


















 