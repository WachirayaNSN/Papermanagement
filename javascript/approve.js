//rgb(92, 238, 97)
var Approve = 'rgb(92, 238, 97)'
var No_Approve = 'rgb(250, 50, 25)'
var Status;
var Color;
var A = 'อนุมัติ'
var N = 'ไม่อนุมัติ'
var ID = ''
var C = 0;
//$('#A').html('<a href="Info_Approve.html" class="link"><div class="card" id="paper"><div id="A1" class="overlay approve">ไม่อนุมัติ</div></div></a>);

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
    document.getElementById('A').innerHTML += '<a href="Info_Approve.html" class="link"><div class="card" id="paper"><div id='+ID+' class="overlay approve">'+Status+'</div></div></a>'
    document.getElementById(ID).style.backgroundColor = Color;
    
}
