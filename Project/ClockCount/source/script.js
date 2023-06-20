var  Now_ = document.getElementById("now_topic");
var url =  window.location.href;
var mode = url.split('#');
var settime_mode = mode[1];
window.onhashchange = function(event){
    //網址變更時觸發
    var url =  window.location.href;
    var mode = url.split('#');
    var settime_mode = mode[1];

    if(settime_mode == "Settime"){
        setMode();
    }
}
if(Now_ != null && mode[1] == undefined){
    
    var  timer = document.getElementById("now_time");
    //timer.style = "";
    setInterval(() => {
        let date = new Date();
        let date_data = [
            date.getFullYear(),
            date.getMonth()+1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        ]
            
            timer.innerText = date_data[0]+"/"+date_data[1]+"/"+date_data[2]+""+"  "+date_data[3]+"點"+date_data[4]+"分"+date_data[5]+"秒"; 
    }, 100);
    
}
else
{
    setMode();
}

function setMode(){
    var topic = document.getElementById('now_topic');
    topic.style = "display:none";
    var addTimer = document.getElementById('add_timer');
    addTimer.style = "display:block;";
}

function AddCount(sa){
    var timerInit = document.getElementById(sa);
    var create_timer = document.getElementById('add_timer');
    //var mp3_url = '../musicSource/over_the_testing.mp3';
    var percent = 360;
    var s = timerInit.value;
    var progressbar = document.getElementById('testing-progressbar');
    var  secLabel = document.getElementById('secLable');
    secLabel.style['display'] = "flex";
    //create_timer.append();
    //create_timer.innerHTML+="<div style='border: 1px solid gray; border-radius: 10px 10px; width: 100px; height: 100px; margin-left: 3%; margin-top: 3%;'><span id='sp"+now_sp+"'></span></div>";
    var countlabel = document.getElementById('sp1');
    countlabel.style['display'] = "flex";
    countlabel.innerText = timerInit.value;
    progressbar.style.background = "conic-gradient(#20c997 "+percent+"deg, #ffffff 0deg )";

    //console.log(timerSet.value);
    var timerCount = setInterval(()=>{

        if(countlabel.innerText == 0 ){
            countlabel.style['display'] = "none";
            secLabel.style['display'] = "none";
            clearInterval(timerCount);
            /*
            var alert_content = new Audio(mp3_url);
            alert_content.play();
            */
            alert('Time Out');
            //alert_content.pause();
            
            return ;
        }
        countlabel.innerText = countlabel.innerText -1 ;
        s-=1;
        percent = (s/timerInit.value)*360;
        progressbar.style.background = "conic-gradient(#20c997 "+percent+"deg, #ffffff 0deg )";

        
    },1000);
}
