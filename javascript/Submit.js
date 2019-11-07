function Submit(){
    
    var username = $('#username').val();
    var password = $('#password').val();
    var ID = [["123","456"],["789"],["61340500057"]];
    var Pass = [["123","456"],["789"],["Arm"]];
    var C = 0;
  for(n = 0;n<3;n++){
    for(i=0;i<=ID[n].length;i++){
      if(username == ID[n][i] && password == Pass[n][i]){
        if(n == 0){ window.location.href="Home_User.html"
        alert('hello User');}
        else if(n == 1){ window.location.href="Home_T.html"
        alert('hello Teacher');}
        else if(n == 2){ window.location.href="Home_Admin.html"
        alert('hello Admin');}
        C = 1;
        break;
        } 
    }
 }
      if(username == "" && password == ""){alert("Please fill Username and Password");}
      else if(username != "" && password == ""){alert("Please fill Password");}
      else if(username == "" && password != ""){alert("Please fill Username");}
      else if(C == 0){alert("Wrong Password");}
      event.preventDefault();
 }

 function Pin(A){
    alert();
    window.location.href="Pin.html"
    event.preventDefault();
  }