const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Here, we are creating a function addTask and if input box has value empty then it will shows an alert message

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // "\u00d7 is the icon of cross"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Here, we are adding an event called add event listener on list container so if we clicked on LI then it shows checked
// and if we clicked on span or "\u00d7" it will remove

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Here, we are saving the data and if we refresh the page the data is safe..... 

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
   listContainer.innerHTML = localStorage.getItem("data");
}
showTask();