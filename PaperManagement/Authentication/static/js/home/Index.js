

var Role = document.getElementById('Role').value;

if(document.getElementById('Role').value == 'Student'){
    document.getElementById('Menu').style.backgroundColor = 'rgb(248, 198, 106)';
    document.getElementById('Hide').hidden =true;
    
  }
  else if(document.getElementById('Role').value == 'Approver'){
    document.getElementById('Menu').style.backgroundColor = 'rgb(138, 231, 142)';
  }
  else if(document.getElementById('Role').value == 'Admin' || document.getElementById('Role').value == 'Officer'){
    document.getElementById('Menu').style.backgroundColor = 'rgba(193, 221, 247, 0.925)';
  }

 
var tap_error = document.getElementById("response").value;
if(tap_error=='denied'){alert("You not have permission!!!");}
  
