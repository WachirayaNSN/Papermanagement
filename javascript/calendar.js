let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฏาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

let monthAndYear = document.getElementById("monthAndYear");
currentYear+=543;
showCalendar(currentMonth, currentYear);


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
                var link = '<a href="Team.html">AAA</a>';
                let cell = document.createElement("td");
                var bt = document.createElement("button");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear()+543 && month === today.getMonth()) {
                    cell.classList.add("Today");
                } // color today's date
                cell.classList.add('Day');
               
                //document.getElementsByClassName('Day').innerHTML += '<a href="login.html"></a>'
                var D = '<a href="Team.html"></a>';
                document.getElementsByClassName('Day').innerHTML  = D;
                cell.appendChild(cellText);
                cell.appendChild(bt);
                row.appendChild(cell);
                date++;
            }


        }
        tbl.appendChild(row); // appending each row into calendar body.
    }

}