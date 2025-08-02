window.onload = () =>{

 function buildClock(){
    const date =new Date();

    let hours = date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector('#clock-hours').innerHTML=hours
    document.querySelector('#clock-minutes').innerHTML=minutes
    document.querySelector('#clock-second').innerHTML=seconds;

    setTimeout(buildClock,1000);
   }
    buildClock(); 
}

// const clock= document.querySelector('clock');
// setInterval(function(){
//     let date = new Date();
//     clock.innerHTML=date.toLocaleTimeString();
// }, 1000)