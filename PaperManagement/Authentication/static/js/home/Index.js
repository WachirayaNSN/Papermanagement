

var Role = document.getElementById('Role').value;

if(document.getElementById('Role').value == 'Student'){
    document.getElementById('Menu').style.backgroundColor = 'rgb(248, 198, 106)';
    document.getElementById('Hide').hidden =true;
    
  }
  else if(document.getElementById('Role').value == 'Approver'){
    document.getElementById('Menu').style.backgroundColor = 'rgb(138, 231, 142)';
  }
  else if(document.getElementById('Role').value == 'Admin'){
    document.getElementById('Menu').style.backgroundColor = 'rgba(193, 221, 247, 0.925)';
  }

  
  

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
  else if(document.getElementById('Role').value == 'Approver'){
    window.location='Approve_Teacher.html'
  }
  else if(document.getElementById('Role').value == 'Admin'){
    alert('You not have permission!!!')  
  }
}