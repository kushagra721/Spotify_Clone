console.log("welcome");
// initialize variable
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let  masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'))
let master=document.getElementById('master')

// below code is for naming of songs 
let songs=[
    {songname: "On Top - Karan Aujla", filePath:"songs/1.mp3",coverPath:"cover/On-Top.jpg"},
    {songname: "I Guess - Krishna", filePath:"songs/2.mp3",coverPath:"cover/iguess.jpg"},
    {songname: "Game Over - Karan Aujla", filePath:"songs/3.mp3",coverPath:"cover/gameover.jpg"},
    {songname: "Baazigar - Divine", filePath:"songs/4.mp3",coverPath:"cover/baazigar.jpg"},
    {songname: "Here & There - karan Aujla", filePath:"songs/5.mp3",coverPath:"cover/here.jpg"},
    {songname: "Players - karan Aujla", filePath:"songs/11.mp3",coverPath:"cover/players.jpg"},
    {songname: "Superman - Eminem", filePath:"songs/9.mp3",coverPath:"cover/superman.jpg"},
    {songname: "gansta - karan Aujla", filePath:"songs/7.mp3",coverPath:"cover/gangsta.jpg"},
    {songname: "Chauffer - Diljit", filePath:"songs/6.mp3",coverPath:"cover/chauff.jpg"},
    {songname: "Gangsta Paradise - Coolio", filePath:"songs/10.mp3",coverPath:"cover/coolio.jpg"},
    {songname: "94 - Flow", filePath:"songs/8.mp3",coverPath:"cover/94flow.jpg"}

]
songItem.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songname;
})
//below code is for handle play pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1
    

        
        
     }
     else{
         audioElement.pause();
         masterPlay.classList.remove('fa-pause');
         masterPlay.classList.add('fa-play');
         gif.style.opacity=0;
     }
})
// below code is for progress bar

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value=progress;
})
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100
})

// below code is for change songs and play pause 

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause')
        element.classList.add('fa-play')

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
       

        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src= `songs/${songIndex+1}.mp3`;
        master.innerText=songs[songIndex].songname;

        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause')


    })

})

// below code is for next and previous button
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex+= 1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    master.innerText=songs[songIndex].songname;

    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity=1
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-= 1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    master.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause')
    gif.style.opacity=1
})
