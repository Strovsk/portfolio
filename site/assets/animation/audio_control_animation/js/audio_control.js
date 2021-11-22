const music_intro = new Audio('./assets/media/audio/profile_wellcome.mp3');
music_intro.volume = .2;

function call_play(){
    // console.log(music_intro.duration);
    // console.log(music_intro.currentTime);
    if(music_intro.paused){
        music_intro.play();
    }else{
        music_intro.pause();
    }

    window.starc.alternate_velocity();
}

function audio_control(){
    let container = document.getElementById('play_button');
    if(container.classList.length > 1){
        container.classList.remove('update_play');
    }else{
        container.classList.add('update_play');
    }
}

music_intro.onended = ()=>{
    audio_control();
}