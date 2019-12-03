
var Data_Place = 2;
var C  = 1;
var Info = `<div class="collapse" id="Info1" style="margin-top:50px;">
                <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div>
            `

document.getElementById('Main').innerHTML += Info;

for(var i=0;i<=Data_Place;i++){   //      Data_Place คือ จำนวนสถานที่จาก DataBase
    document.getElementById('Place_Card').innerHTML += `<div class="card" style="width: 50%; margin-top:10%;" >
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
  <img class="d-block w-100" src="../img/Namo.jpg" alt="First slide">
</div>
<div class="carousel-item">
  <img class="d-block w-100" src="../img/Namo.jpg" alt="Second slide">
</div>
<div class="carousel-item">
  <img class="d-block w-100" src="../img/Namo.jpg" alt="Third slide">
</div>
</div>
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>
</div>
<div class="card-body">
  <h5 class="card-title">`+document.getElementById('Name_Place'+String(i)).value+`</h5>
  <p class="card-text" style="font-size:105%;">อาจารย์ผู้มีสิทธิ์อนุมัติ</p>
  <p class="card-text">`+document.getElementById('Teacher1'+String(i)).value+`</p>
  <p class="card-text">`+document.getElementById('Teacher2'+String(i)).value+`</p>
  <p class="card-text">`+document.getElementById('Teacher3'+String(i)).value+`</p>
  <button class="btn btn-primary">เเก้ไข / Edit</button>
  <button class="btn btn-danger">ลบ / Delete</button>
</div>
</div>
`;
}
    function ADD_Place(){
    if(document.getElementById('Name_Place').value == ''){
        alert('การเพิ่มผิดพลาด กรุณากรอกชื่อสถานที่')
        event.preventDefault();
    }
    else{
        document.getElementById('Place_Card').innerHTML += `<div class="card" style="width: 50%; margin-top:10%;" >
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../img/Namo.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../img/Namo.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../img/Namo.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    <div class="card-body">
      <h5 class="card-title">`+document.getElementById('Name_Place').value+`</h5>
      <p class="card-text" style="font-size:105%;">อาจารย์ผู้มีสิทธิ์อนุมัติ</p>
      <p class="card-text">`+document.getElementById('Teacher1').value+`</p>
      <p class="card-text">`+document.getElementById('Teacher2').value+`</p>
      <p class="card-text">`+document.getElementById('Teacher3').value+`</p>
      <button class="btn btn-primary">เเก้ไข / Edit</button>
      <button class="btn btn-danger">ลบ / Delete</button>
    </div>
  </div>
`;
    }
}

function ADD_Back(){
    if(document.getElementById('Name_Place').value == ''){
        alert('การเพิ่มผิดพลาด กรุณากรอกชื่อสถานที่')
        event.preventDefault();
    }
    else{
        // Up data ขึ้น Data Base
    }
    
}
function Teacher_1(){
    if(document.getElementById('Teacher1').value == ''){
        document.getElementById('Teacher1').value = 'Aj.B';
    }
    else if (document.getElementById('Teacher1').value =='Aj.B'){
        document.getElementById('Teacher1').value = '';
    }
}
function Teacher_2(){
    if(document.getElementById('Teacher2').value == ''){
        document.getElementById('Teacher2').value = 'Aj.Bawornsak';
    }
    else if (document.getElementById('Teacher2').value =='Aj.Bawornsak'){
        document.getElementById('Teacher2').value = '';
    }
}
function Teacher_3(){
    if(document.getElementById('Teacher3').value == ''){
        document.getElementById('Teacher3').value = 'Aj.Blinkimon';
    }
    else if (document.getElementById('Teacher3').value =='Aj.Blinkimon'){
        document.getElementById('Teacher3').value = '';
    }
}
