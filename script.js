// let submit = document.getElementById("taskSubmit")
// submit.addEventListener("submit",function() {
//     let theText = document.createElement("p");
//     let doneButton = document.createElement("button");
//     let theBody = document.querySelector("body");
//     theText.innerHTML = document.getElementsByClassName("inputBox");
//     theBody.appendChild(theText);
//     theBody.appendChild(doneButton);
// })


let submitButton = document.querySelector(".submit")
submitButton.addEventListener("click",createTask)

function createTask(){
    let theTask = document.createElement("div");
    let theText = document.createElement("p");
    theText.classList.add("text");
    let doneButton = document.createElement("button");
    doneButton.classList.add("delbutton");
    doneButton.innerHTML = "Done"
    doneButton.addEventListener("click", removeTask); 
    let theBody = document.querySelector("body");
    let input = document.getElementById('inputBox').value
    document.getElementById('inputBox').value = "";
    theText.innerHTML = input;
    theTask.appendChild(theText);
    theTask.appendChild(doneButton);
    theBody.appendChild(theTask);
}


function removeTask(event) {
    let taskElement = event.target.parentElement;
    taskElement.remove();
}