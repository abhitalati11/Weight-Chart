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
        const deletBtn = document.createElement('button');
        deletBtn.id = "dltBtn";
        const weightLbl = document.createElement('lable');
        weight.id = 'weightTD';
        deletBtn.textContent = "Delete";
        weight.appendChild(weightLbl);
        weight.appendChild(deletBtn);


        date.textContent = realdate;
        weightLbl.textContent = realweight;
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

    clearInput();
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
        const deletBtn = document.createElement('button');
        deletBtn.id = "dltBtn";
        const weightLbl = document.createElement('lable');
        weight.id = 'weightTD';
        deletBtn.textContent = "Delete";
        weight.appendChild(weightLbl);
        weight.appendChild(deletBtn);

        date.textContent = dateEntered;
        weightLbl.textContent = weightEnterd;
        tr.appendChild(date);
        tr.appendChild(weight);

        table.appendChild(tr);
    }
    clearInput();
}
}

// clearing input fields

function clearInput(){
    document.querySelector("#date").value = "";
    document.querySelector("#weight").value = "";
}

// taking menu button and making menu 

document.querySelector("#icon").addEventListener("click" , ()=>{
    console.log("hello menu open");
})