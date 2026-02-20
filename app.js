console.log("~ Created by Yantram Devs. in 2025");
console.log("Yantram Devs. is running by Abhi Talati");

const table = document.getElementById("table");
const save = document.getElementById("save");
document.getElementById("add-weight").addEventListener('submit' , (e)=>{
    e.preventDefault();
})

const rawdata = localStorage.getItem("Data");
//console.log(rawdata)

if(rawdata != null){
    const realdata = JSON.parse(rawdata);
    console.log(realdata);

    let length = realdata.length;
    console.log(length);
    
    for(let i = 0 ; i < realdata.length ; i++){
        showCards(realdata[i].date , realdata[i].weight);
    }
    
    function showCards(realdate , realweight){
        const tr = document.createElement('tr');
        const date = document.createElement('td');
        const weight = document.createElement('td');

        date.textContent = realdate;
        weight.textContent = realweight;
        tr.appendChild(date);
        tr.appendChild(weight);

        table.appendChild(tr);
    }

    function addCardData(realdate , realweight){
        const newdata = {w_id: length + 1, date:realdate, weight: realweight};
        console.log(newdata);

        realdata.push(newdata);
        console.log(realdata);

        const uploadData = JSON.stringify(realdata);
        localStorage.clear();
        console.log(uploadData);
        localStorage.setItem("Data" , uploadData);
    }

    save.onclick = function(){
    const dateEntered = document.getElementById("date").value;
    const weightEnterd = document.getElementById("weight").value;
    (dateEntered == null || weightEnterd == null || weightEnterd == ""
    ) ? alert("Enter Fields properly!!") : addCardData(dateEntered , weightEnterd) , showCards(dateEntered , weightEnterd);


    }
    
}
else{
    save.onclick = function (){
    const dateEntered = document.getElementById("date").value;
    const weightEnterd = document.getElementById("weight").value;
    (dateEntered == null || weightEnterd == null || weightEnterd == ""
    ) ? alert("Enter Fields properly!!") : addingData();

    function addingData(){
        const data = [];
        const push = {w_id : 1 , date : dateEntered , weight : weightEnterd};
        data.push(push);
        const localdata = JSON.stringify(data);
        //console.log(localdata);
        localStorage.setItem("Data" , localdata);

        const tr = document.createElement('tr');
        const date = document.createElement('td');
        const weight = document.createElement('td');

        date.textContent = dateEntered;
        weight.textContent = weightEnterd;
        tr.appendChild(date);
        tr.appendChild(weight);

        table.appendChild(tr);
    }
}
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}