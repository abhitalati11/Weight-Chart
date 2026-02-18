console.log("~ Created by Yantram Devs. in 2025");
console.log("Yantram Devs. is running by Abhi Talati");

const table = document.getElementById("table");
const save = document.getElementById("save");
document.getElementById("add-weight").addEventListener('submit' , (e)=>{
    e.preventDefault();
})

save.onclick = () => {
    addData();
}

function addData(){
    
    const dateEntered = document.getElementById("date").value;
    const weightEnterd = document.getElementById("weight").value;

    if(dateEntered == null || dateEntered == "" || weightEnterd == null || weightEnterd == NaN || weightEnterd == ""){
        if(weightEnterd <= 0 )alert("Enter correct Weight & Date!");
        else alert("Enter the given fields!");
    }

    else{    

    const tr = document.createElement('tr');
    const date = document.createElement('td');
    const weight = document.createElement('td');

    date.textContent = dateEntered;
    weight.textContent = weightEnterd;

    tr.appendChild(date);
    tr.appendChild(weight);

    table.appendChild(tr);
    checkStrg(dateEntered , weightEnterd);
}

function checkStrg(date , weight){
    if(localStorage.getItem("Data")){
        const rawdata = localStorage.getItem("Data");
        const realdata = JSON.parse(rawdata);
        console.log(realdata);

        let lastid = realdata.length;
        console.log(lastid);

        for(let i = 0 ; i < realdata.length ; i++){
            console.log(realdata[i].w_id);
        }
    } 
    else{
        const data = [];
        const insert = {w_id : 1 , date : date , weight : weight}

        data.push(insert);
        console.log(data)
        console.log(insert);
        const localdata = JSON.stringify(data);
        console.log(localdata);
        localStorage.setItem("Data" , localdata);
    }
}
}