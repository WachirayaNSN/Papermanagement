
var Rule = document.getElementById('checkrule').value;
var reason = document.getElementById('Reason').value
var Place = document.getElementById('Sel')
var Time_b = document.getElementById('Time_Before').value
var Time_a = document.getElementById('Time_After').value
var Date_before = document.getElementById('date_before').value
var File = document.getElementById('File').value
var Date_after = document.getElementById('date_after').value
var fileList = document.getElementById('File').file;
var Time_be = document.getElementById('Time_be').value;
var Time_af = document.getElementById('Time_af').value;

var Reason_Data = document.getElementById('Reason_').value;
var Place_Data = document.getElementById('Place_').value;
var Elec_Data = document.getElementById('Elec_').value;

var Rule_text = ''
var Reason_text = ''
var Place_text = ''
var Time_text = ''
var Date_text = ''





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
    else if(Rule == 'off'){
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
    if(document.getElementById('Time_Before').value == '' || document.getElementById('Time_After').value == ''){
        Time_text = '- โปรดเลือกเวลาในการใช้สถานที่'
        document.getElementById('Time_text').innerHTML = Time_text 
        $('#alert').show('fade');
    }
    else if(document.getElementById('Time_Before').value != '' && document.getElementById('Time_After').value != ''){
        Time_text = ''
        document.getElementById('Time_text').innerHTML = Time_text 
    }
    /////////////////////////////////////////////////////////////////////////
    if(document.getElementById('date_before').value == '' || document.getElementById('date_after').value == ''){
        Date_text = '- โปรดเลือกวันที่ในการใช้สถานที่'
        document.getElementById('Date_text').innerHTML = Date_text
        $('#alert').show('fade');
    }
    else if(document.getElementById('date_before').value != '' && document.getElementById('date_after').value != ''){
        Date_text = ''
        document.getElementById('Date_text').innerHTML = Date_text
    }
    /////////////////////////////////////////////////////////////////////////
    if(document.getElementById('date_before').value == ''||document.getElementById('date_after').value == ''&&Rule == 'on'&&document.getElementById('Reason').value == ''&&Place == ''&&document.getElementById('Time_Before').value == '' || document.getElementById('Time_After').value == ''){
        alert('กรุณากรอกเอกสารให้ครบถ้วน');
        event.stopPropagation();
        event.preventDefault();
    }
    else if(document.getElementById('date_before').value != ''|| document.getElementById('date_after').value != ''&&Rule != 'on'&&document.getElementById('Reason').value != ''&&Place != ''&&document.getElementById('Time_Before').value != '' || document.getElementById('Time_After').value != ''){
        
        
        Reason_Data = reason;
        Place_Data = Val
        Time_be = document.getElementById('Time_Before').value;
        Time_af = document.getElementById('Time_After').value;
        document.getElementById('alert').hidden;
        document.getElementById('Information').setAttribute('method','POST');
        
    }
    else{event.preventDefault();}
    

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

function Info_close(){
    document.getElementById('Information').setAttribute('method','');
    event.preventDefault();
}
function Info_submit(){
    alert("คุณได้ยืนยันเอกสาร");
}
document.getElementById('Reason_text').innerHTML += Reason_text 
document.getElementById('Place_text').innerHTML += Place_text 
document.getElementById('Time_text').innerHTML += Time_text 
document.getElementById('Date_text').innerHTML += Date_text 
