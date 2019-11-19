//rgb(92, 238, 97)
var Approve = 'rgb(92, 238, 97)'
var No_Approve = 'rgb(250, 50, 25)'
var Ap = document.getElementsByClassName('Approve');
var No = document.getElementsByClassName('No-Approve');
var Status;
var Color;
var ID = ''
var Name_ = 'ARM'
var C = 0;
var State = 'OK';
var Role = document.getElementById('Role').value;
var Place_Name = ['AAA','BBB','CCC','DDD'];
var Time_Name = ['AAA','BBB','CCC','DDD'];
var Date_Name = ['AAA','BBB','CCC','DDD'];
var Teacher_Name = ['AAA','BBB','CCC','DDD' ];

//$('#A').html('<a href="Info_Approve.html" class="link"><div class="card" id="paper"><div id="A1" class="overlay approve">ไม่อนุมัติ</div></div></a>);
let Name_use = document.createElement('div');
let Place_use = document.createElement('div');
let Time_use = document.createElement('div');
let Date_use = document.createElement('div');
let Teacher_use = document.createElement('div');

for(var i=1;i<=3;i++){
    if(i==2){
        Add('NO');

    }
    else{Add(State);}
    Place_use.setAttribute('id','Place_use'+String(i));
    Time_use.setAttribute('id','Time_use'+String(i));
    Date_use.setAttribute('id','Date_use'+String(i));
    Teacher_use.setAttribute('id','Teacher_use'+String(i));
    document.getElementById('paper'+String(i)).appendChild(Place_use);
    document.getElementById('paper'+String(i)).appendChild(Time_use);
    document.getElementById('paper'+String(i)).appendChild(Date_use);
    document.getElementById('paper'+String(i)).appendChild(Teacher_use);    
    document.getElementById('Place_use'+String(i)).innerHTML = 'สถานที่ : '+Place_Name[i-1];
    document.getElementById('Time_use'+String(i)).innerHTML = 'เวลา : '+Time_Name[i-1];
    document.getElementById('Date_use'+String(i)).innerHTML = 'วันที่ : '+Date_Name[i-1];
    document.getElementById('Teacher_use'+String(i)).innerHTML = 'อาจารย์ปรึกษา : '+Teacher_Name[i-1];
}
function Add(D){
    C+=1
    ID = String(C)
    if(D=='OK'){
        Status = "url('../img/Approve.png')";
        Color = Approve;
    }
    else{
          Status = "url('../img/No-Approve.png')";
          Color = No_Approve;
        }
    if(Role == 'Student'){
        document.getElementById('A').innerHTML += '<a href="Info_Approve.html" class="link " ><div class="card paper" id="paper'+ID+'"><div id='+ID+' class="overlay approve" ></div></div></a>'
        document.getElementById(ID).style.backgroundColor = Color;    
        document.getElementById(ID).style.backgroundImage = Status;
        document.getElementById(ID).style.backgroundRepeat = "no-repeat"
    }
    else if(Role == 'Teacher'){
        document.getElementById('A').innerHTML += '<a href="Info_Access.html" class="link " ><div class="card paper "id="paper'+ID+'" ><div id='+ID+' class="overlay approve '+Status+'"></div></div></a>'
        document.getElementById(ID).style.backgroundImage = Status;
        document.getElementById(ID).style.backgroundRepeat = "no-repeat"        
        document.getElementById(ID).style.backgroundColor = Color;
    } 
    
}
