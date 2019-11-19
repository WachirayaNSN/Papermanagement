//rgb(92, 238, 97)
var Approve = 'rgb(92, 238, 97)'
var No_Approve = 'rgb(250, 50, 25)'
var Status;
var Color;
var A = 'อนุมัติ'
var N = 'ไม่อนุมัติ'
var ID = ''
var C = 0;
var Role = document.getElementById('Role').value;
//$('#A').html('<a href="Info_Approve.html" class="link"><div class="card" id="paper"><div id="A1" class="overlay approve">ไม่อนุมัติ</div></div></a>);

for(var i=1;i<=3;i++){
    Add('OK');
    document.getElementById('paper'+String(i)).appendChild('AAA')   
}

function Add(D){
    C+=1
    ID = String(C)
    if(D=='OK'){
        Status = A;
        Color = Approve;
    }
    else{
          Status = N;
          Color = No_Approve;
        }
    if(Role == 'Student'){
        document.getElementById('A').innerHTML += '<a href="Info_Approve.html" class="link "><div class="card paper" id="paper'+ID+' "><div id='+ID+' class="overlay approve">'+Status+'</div></div></a>'
        document.getElementById(ID).style.backgroundColor = Color;    
    }
    else if(Role == 'Teacher'){
        document.getElementById('A').innerHTML += '<a href="Info_Access.html" class="link paper"><div class="card" id="paper'+ID+'"><div id='+ID+' class="overlay approve">'+Status+'</div></div></a>'
        document.getElementById(ID).style.backgroundColor = Color;
    } 
    
}
