let submitButton = document.querySelector(".submit")
submitButton.addEventListener("mouseover", highlightButton); 
submitButton.addEventListener("mouseout", unHighlightButton);
submitButton.addEventListener("click",createTask)

function createTask(){
    let theTask = document.createElement("div");
    let theText = document.createElement("p");
    theText.classList.add("text");
    let doneButton = document.createElement("button");
    doneButton.classList.add("delbutton");
    doneButton.innerHTML = "Done"
    doneButton.addEventListener("mouseover", crossText); 
    doneButton.addEventListener("mouseout", unCrossText);
    doneButton.addEventListener("click", removeTask); 
    let theBody = document.querySelector("body");
    let input = document.getElementById('inputBox').value
    document.getElementById('inputBox').value = "";
    theText.innerHTML = input;
    theTask.appendChild(theText);
    theTask.appendChild(doneButton);
    theBody.appendChild(theTask);
}

function highlightButton(event) {
    let taskElement = event.target;
    taskElement.style.backgroundColor = "gold";
}

function unHighlightButton(event) {
    let taskElement = event.target;
    taskElement.style.backgroundColor = "darkblue";
}

function crossText(event) {
    let taskElement = event.target.parentElement;
    taskElement.style.textDecoration = "line-through";
    taskElement.style.backgroundImage = "url(./images/newimg.png)";
    taskElement.style.backgroundRepeat = "no-repeat";
    taskElement.style.backgroundSize = "100% 285%";

}

function unCrossText(event) {
    let taskElement = event.target.parentElement;
    taskElement.style.textDecoration = "";
    taskElement.style.removeProperty("background-image");
    taskElement.style.removeProperty("background-repeat");
    taskElement.style.removeProperty("background-size");

}

function removeTask(event) {
    let taskElement = event.target.parentElement;
    taskElement.remove();
}