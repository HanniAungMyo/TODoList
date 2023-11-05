const inputBox=document.querySelector("#input-box")
const listContainer=document.querySelector("#listContainer")
const addBtn=document.querySelector("#addBtn")
// 
function createList(){
const li=document.createElement("li")
li.innerHTML=inputBox.value;
listContainer.appendChild(li)
const span=document.createElement("span")
span.innerHTML='\u00d7'
li.appendChild(span)
return li;
}

function saveDate(){
    localStorage.setItem("data",listContainer.innerHTML)

}
function showTask(){
listContainer.innerHTML=localStorage.getItem("data")
}
showTask()


// handler
const addBtnHandler=()=>{
    if(inputBox.value.trim()==''){
        alert("You must write something")
    }
    else{
        createList()
    }
    inputBox.value='';
    saveDate()
}
const listContainerHandler=(event)=>{
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked")
        saveDate()
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove()
        saveDate()
    }
}

// listener
addBtn.addEventListener("click",addBtnHandler)
listContainer.addEventListener("click",listContainerHandler)