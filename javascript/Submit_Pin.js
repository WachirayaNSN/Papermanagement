
var Name = 'Wachiraya Tangsirivichaikul'

document.getElementById('Name').innerHTML = Name;
function Submit(){

      var username = Name;
      var password = $('#password').val();
      var ID = [["123****","***456"],["***789"],["****57" ,'Wachiraya Tangsirivichaikul']];
      var Pass = [["******","******"],["******"],["1234ถุ","896293"]];
      var C = 0;
    for(n = 0;n<3;n++){
      for(i=0;i<=ID[n].length;i++){
        if(username == ID[n][i] && password == Pass[n][i]){
          if(n == 0){ window.location.href="Home_User.html"
          alert('Hello User');}
          else if(n == 1){ window.location.href="Home_T.html"
          alert('Hello Teacher');}
          else if(n == 2){ window.location.href="Home_Admin.html"
          alert('Hello Admin');}
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