var Place;
var Rule = document.getElementById('checkrule').value
var Elec = document.getElementById('electric').value
var Rule_text = 'โปรดกดยอมรับ ระเบียบการใช้สถานที่
var Reason_text = 'โปรดกรอกเหตุผลในการใช้สถานที่'

document.getElementById('alert').innerHTML += Rule_text 
document.getElementById('alert').innerHTML += Reason_text 
//document.getElementById('alert').innerHTML = Rule_text
//document.getElementById('alert').innerHTML = Rule_text


function Select(){
    var Val = $('#Sel').val();
    var S1 = document.getElementById('img-1')
    var S2 = document.getElementById('img-2')
    var S3 = document.getElementById('img-3')
    var S4 = document.getElementById('img-4')
    var S5 = document.getElementById('img-5')
    if(Val == "0"){
        Place = "0";  
        S1.src='../img/Namo.jpg';
        S2.src='../img/Namo.jpg';
        S3.src='../img/Namo.jpg';
        S4.src='../img/Namo.jpg';
        S5.src='../img/Namo.jpg';
    }
    else if(Val == "1"){
        Place = "1";
        S1.src='../img/KMUTT.png';
        S2.src='../img/Aon.jpg';
        S3.src='../img/Wa.jpg';
        S4.src='../img/God.jpg';
        S5.src='../img/chit.jpg';
    }
    else if(Val == "2"){
        Place = "2";
        S2.src='../img/KMUTT.png';
        S3.src='../img/Aon.jpg';
        S1.src='../img/Wa.jpg';
        S4.src='../img/God.jpg';
        S5.src='../img/chit.jpg';
    }
    else if(Val == "3"){
        Place = "3";
    }
}
function Submit(){
    
    if(Place == "0"){
    }
    else if(Place == "1"){
        alert("1");
    }
    else if(Place == "2"){
        alert("2");
    }
    else if(Place == "3"){
        alert("3");
    }
    else{
        event.preventDefault();
    }
    if(Rule == 'on'){
        $('#alert').show('fade');
    }
    var r = confirm("ยืนยันการส่งเอกสาร ขอใช้สถานที่");
    if (r == true) {
      alert("คุณได้ยืนยันการส่งเอกสารหมายเลข "+ID_Paper)
    } else {
      
    }
}
function checkrule(){
    alert('!!')
    if(Rule == 'on'){
        Rule = 'off';
    }
    else if (Rule =='off'){
        Rule = 'on';
    }
}
function checkelec(){
    if(Elec == 'on'){
        Elec = 'off';
    }
    else if (Elec =='off'){
        Elec = 'on';
    }
}
function checkRule(){
    if(Rule == 'on'){
        Rule_text = ''
        Rule = 'off';
    }
    else if (Rule =='off'){
        Rule = 'on';
    }
}
function Close(ID){
    $(ID).hide();
}
