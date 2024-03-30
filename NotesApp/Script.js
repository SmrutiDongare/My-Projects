const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//check local starage when user open the browser again
function showNotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

//use to store notes in loacal storage
function updateStorage(){
    localStorage.setItem("notes", notescontainer.innerHTML);
}
//function to add notes 
createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
})

//function to delete notes
notescontainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }  //Storing data inside notes in local storage
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

//when user press a Enter key on keyboard = crate linebraker
document.addEventListener("keydown" , event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})