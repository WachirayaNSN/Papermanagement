
var Name = 'Paper Management ';
var Role = document.getElementById('Role').value
var R = document.getElementById('Role_');

document.getElementById('Role').value = 'Admin';
if(document.getElementById('Role').value == 'Student'){
    document.getElementById('Menu').style.backgroundColor = 'rgb(248, 198, 106)';
    document.getElementById('Hide').hidden =true;
    document.getElementById('Role').value = 'Student';
    document.getElementById('Hide_Set').hidden =true;
  }
else if(document.getElementById('Role').value == 'Teacher'){
    document.getElementById('Menu').style.backgroundColor = 'rgb(138, 231, 142)';
    document.getElementById('Hide_Set').hidden =true;
    document.getElementById('Role').value = 'Teacher';

  }
else if(document.getElementById('Role').value == 'Admin'){
    document.getElementById('Menu').style.backgroundColor = 'rgba(193, 221, 247, 0.925)';
    document.getElementById('Role').value = 'Admin';

  }
  document.getElementById('Name').innerHTML = Name;
  document.getElementById('Name_User').innerHTML = Name;
  
  

function test(){
    alert('')
}
function Menu1(){
  window.location='Home_User.html'
}
function Menu2(){
  window.location='Approve_User.html'
}
function Menu3(){
  if(document.getElementById('Role').value == 'Student'){
    alert('You not have permission!!!')  
    
  }
  else if(document.getElementById('Role').value == 'Teacher'){
    window.location='Approve_Teacher.html'
  }
  else if(document.getElementById('Role').value == 'Admin'){
    window.location='Approve_Teacher.html' 
  }
}
function Menu4(){
  if(document.getElementById('Role').value == 'Student'){
    alert('You not have permission!!!')  
    
  }
  else if(document.getElementById('Role').value == 'Teacher'){
    alert('You not have permission!!!')  
    
  }
  else if(document.getElementById('Role').value == 'Admin'){
    window.location='Setting.html'
  }
}