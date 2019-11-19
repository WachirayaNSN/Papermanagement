let today = new Date();
var S = 1;
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฏาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
let monthAndYear = document.getElementById("monthAndYear");
currentYear+=543;

showCalendar(currentMonth, currentYear);
let Name_info = document.getElementById("Name_info");
let Place_info = document.getElementById("Place_info");
let Date_info = document.getElementById("Date_info");
let Time_info = document.getElementById("Time_info");
let Name_Teacher = document.getElementById("Name_Teacher_info");
let Status = document.getElementById("Status");
//let B1 = document.getElementById("B1");
//let B18 = document.getElementById("B18");



    Name_info.innerHTML = 'B'+String(i);
    Place_info.innerHTML = 'B';
    Date_info.innerHTML = 'C';
    Time_info.innerHTML = 'D';
    Name_Teacher.innerHTML = 'E';
    Status.innerHTML ='F';

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
    var C = 1;
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                break;
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");

                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear()+543 && month === today.getMonth()) {
                    cell.classList.add("Today");
                    //C+=1;
                } // color today's date
                cell.classList.add('Day');
                cell.appendChild(cellText);
                for(var k=1;k<=S;k++){
                    let D = document.createElement("div");
                    let B = document.createElement("button");
                    B.setAttribute("id","B"+String(k)+String(C)+String(currentMonth+1)+String(currentYear));
                    B.setAttribute("type","button");
                    B.setAttribute("class","btn ");
                    B.setAttribute("onclick","Atest("+String(k)+String(C)+String(currentMonth+1)+String(currentYear)+")");
                    B.setAttribute("data-toggle","modal");
                    B.setAttribute("data-target",'#info');
                    D.setAttribute("id",'A'+String(C));
                    D.appendChild(B);
                    cell.appendChild(D);
                    row.appendChild(cell);
                    document.getElementById('CA').style.marginBottom = String(k*20)+'px';
                    document.getElementById('DA').style.height= String((k*220)+650)+'px';
                }
                
                C+=1;
                date++;
            }


        }
        tbl.appendChild(row); // appending each row into calendar body.
    }

    for(var i=1;i<=C;i++){
       for(var k=1;k<=S;k++){
        document.getElementById("B"+String(k)+String(i)+String(currentMonth+1)+String(currentYear)).innerHTML = String(k)+':'+"B"+String(i)+String(currentMonth+1)+String(currentYear);
       }
    }
}
function Atest(D){
    document.getElementById('Name_info').innerHTML = 'ชื่อผู้รับผิดชอบ : '+String(D);
    document.getElementById("Place_info").innerHTML ='สถานที่ : '+ String(D);
    document.getElementById("Date_info").innerHTML = 'วันที่ : '+String(D);
    document.getElementById("Time_info").innerHTML = 'เวลา : '+String(D);
    document.getElementById("Name_Teacher_info").innerHTML = 'อาจารย์ที่ปรึกษา : '+String(D);
    document.getElementById("Status").innerHTML = 'สถานะ : '+String(D);
}