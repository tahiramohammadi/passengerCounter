// javascript
letCount=document.getElementById("count");
letSave=document.getElementById("Save-btn")
let count=0;
function increment(){
    count +=  1;
    letCount.innerText=count;
    console.log(count);
}

function Save(){
    let countStr=count+ " - "
    letSave.textContent +=countStr;
    letCount.textContent=0;
    count=0;
    console.log(count);
}