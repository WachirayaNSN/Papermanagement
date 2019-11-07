var Place;
function Select(){
    var Val = $('#Sel').val();
    if(Val == "0"){
        Place = "0";  
        document.getElementById('img').src='../img/KMUTT.png';
    }
    else if(Val == "1"){
        Place = "1";
    }
    else if(Val == "2"){
        Place = "2";
    }
    else if(Val == "3"){
        Place = "3";
    }
}
function Submit(){
    if(Place == "0"){
        alert("0");
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
    else{alert("ERROR");}
}