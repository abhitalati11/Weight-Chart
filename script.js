console.log("~ Created by Yantram Devs. in 2025");
console.log("Yantram Devs. is running by Abhi Talati");

const table = document.getElementById("table");

function addData(){
    const dateEntered = document.getElementById("date").value;
    const weightEnterd = document.getElementById("weight").value;
    
    console.log(dateEntered , weightEnterd);
    const tr = document.createElement('tr');
    const date = document.createElement('td');
    const weight = document.createElement('td');

    date.textContent = dateEntered;
    weight.textContent = weightEnterd;

    tr.appendChild(date);
    tr.appendChild(weight);

    table.appendChild(tr);

}

