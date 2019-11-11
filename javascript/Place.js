
var Rule = document.getElementById('checkrule').value;
var reason = document.getElementById('Reason').value
//var Reason = $("#Reason").val();
var Place = document.getElementById('Sel').value
var Time_b = document.getElementById('Time_Before').value
var Time_a = document.getElementById('Time_After').value

var Rule_text = ''
var Reason_text = ''
var Place_text = ''
var Time_text = ''
var Date_text = '- โปรดเลือกวันในการใช้สถานที่'


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
////////////////////////////////////////////////////////////////////////
function Submit(){

    if(Rule == 'on'){
        Rule_text = '- โปรดกดยอมรับ ระเบียบการใช้สถานที่'
        document.getElementById('Rule_text').innerHTML = Rule_text 
        $('#alert').show('fade');
    }
    else if(Rule = 'off'){
        Rule_text = ''
        document.getElementById('Rule_text').innerHTML = Rule_text 
    }
    /////////////////////////////////////////////////////////////////////////
    if(document.getElementById('Reason').value == ''){
        Reason_text = '- โปรดกรอกเหตุผลในการใช้สถานที่'
        document.getElementById('Reason_text').innerHTML = Reason_text 
        $('#alert').show('fade');
    }
    else if(document.getElementById('Reason').value != ''){
        Reason_text = ''
        document.getElementById('Reason_text').innerHTML = Reason_text 
    }
    ////////////////////////////////////////////////////////////////////////
    if(Place == ''){
        Place_text = '- โปรดเลือกสถานที่'
        document.getElementById('Place_text').innerHTML = Place_text 
        $('#alert').show('fade');
    }
    else if(Place != ''){
        Place_text = ''
        document.getElementById('Place_text').innerHTML = Place_text 
    }
    /////////////////////////////////////////////////////////////////////////
    if(Time_b == ''){
        Time_text = '- โปรดเลือกเวลาในการใช้สถานที่'
        document.getElementById('Time_text').innerHTML = Time_text 
        $('#alert').show('fade');
    }
    else if(Time_b != ''){
        Time_text = ''
        document.getElementById('Time_text').innerHTML = Time_text 
    }
    else if(Time_a == ''){
        Time_text = '- โปรดเลือกเวลาในการใช้สถานที่'
        document.getElementById('Time_text').innerHTML = Time_text 
        $('#alert').show('fade');
    }
    else if(Time_a != ''){
        Time_text = ''
        document.getElementById('Time_text').innerHTML = Time_text 
    }
    /////////////////////////////////////////////////////////////////////////

    var r = confirm("ยืนยันการส่งเอกสาร ขอใช้สถานที่");

    if (r == true) {
        
      alert("คุณได้ยืนยันการส่งเอกสารหมายเลข "+ID_Paper)
    } else {
        event.preventDefault();
    }
    /////////////////////////////////////////////////////////////////////////
}
/////////////////////////////////////////////////////////////////////////////////
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


document.getElementById('Reason_text').innerHTML += Reason_text 
document.getElementById('Place_text').innerHTML += Place_text 
document.getElementById('Time_text').innerHTML += Time_text 
document.getElementById('Date_text').innerHTML += Date_text 
