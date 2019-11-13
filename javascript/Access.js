
var Topic = 'เอกสารขอใช้สถานที่';
var ID_Paper = '';
var ID_Student = '';
var Department = '';
var Major = '';
var Year = '';
var Tel = '';
var Mail = '';
var Name_Teacher = '';
var Place = '';
var Time = '';
var date = '';
var Reason = '';
var Elec = '';
var img_1 ='../img/Namo.jpg';
var img_2 ='../img/Namo.jpg';
var img_3 ='../img/Namo.jpg';
var img_4 ='../img/Namo.jpg';
var img_5 ='../img/Namo.jpg';


document.getElementById('img-1').src = img_1;
document.getElementById('img-2').src = img_2;
document.getElementById('img-3').src = img_3;
document.getElementById('img-4').src = img_4;
document.getElementById('img-5').src = img_2;

document.getElementById('Topic').innerHTML = Topic;
document.getElementById('Id_Paper').innerHTML = ID_Paper;
document.getElementById('Id_Student').innerHTML = ID_Student;
document.getElementById('Department').innerHTML = Department;
document.getElementById('Major').innerHTML = Major;
document.getElementById('Year').innerHTML = Year;
document.getElementById('Tel_num').innerHTML = Tel;
document.getElementById('Mail').innerHTML = Mail;
document.getElementById('Name_Teacher').innerHTML = Name_Teacher;
document.getElementById('Place').innerHTML = Place;
document.getElementById('Time').innerHTML = Time;
document.getElementById('Date').innerHTML = date;
document.getElementById('Reason').innerHTML = Reason;
document.getElementById('Elec').innerHTML = Elec;

function Access_A(){
    var r = confirm("ยืนยันการ อนุมัติเอกสาร!");
    if (r == true) {
      alert("คุณได้ อนุมัติ เอกสารหมายเลข "+ID_Paper)
    } else {
        event.preventDefault();
    }
}
function Access_N(){
    var r = confirm("ยืนยันการ ไม่อนุมัติเอกสาร!");
    if (r == true) {
      alert("คุณได้ ไม่อนุมัติ เอกสารหมายเลข "+ID_Paper)
    } else {
        event.preventDefault();
    }
}