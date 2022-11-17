let hr=0, min=0, sec=0;
let startbtn=document.getElementById("start");
let stopbtn=document.getElementById("stop");
let resetbtn=document.getElementById("reset");

function watch()
{
    sec++;
    if(sec==60)
    {
        min++;
        sec=0;
    }
    if(min==60)
    {
        hr++;
        min=0;
        sec=0;
    }

    var hour=hr;
    var minute=min;
    var second=sec;

    if(hr<10)
    {
        hour="0"+hr.toString;
    }
    if(min<10)
    {
        minute="0"+min.toString;
    }
    if(sec<10)
    {
        second="0"+sec.toString;
    }

    document.getElementById("timer").innerHTML=hour+":"+minute+":"+second;
    setTimeout(watch,1000);
}

function start()
{
    watch();
    startbtn.style.display="none";
    stopbtn.style.display="initial";
    resetbtn.style.display="initial";
}

function stop()
{
    stopbtn.style.display="none";
    startbtn.style.display="initial";
    resetbtn.style.display="initial";
}

function reset()
{
    hr=0;
    min=0;
    sec=0;
    document.getElementById("timer")="00:00:00";
}