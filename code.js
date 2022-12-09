let form=document.getElementById("lomake");
let date = new Date();
let result= document.getElementById("test");
let currentDate = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
let checkBox = document.getElementById("important");


form.addEventListener("submit", newMessage);

function newMessage(e){
    e.preventDefault();
    let fData= new FormData(form);
    let name=fData.get("name");
    let text = fData.get("textarea");
    let p = document.createElement("div");
    p.textContent= currentDate + " " + name + ":"+ " " + text;
    result.appendChild(p);
    if( checkBox.checked == true){
        p.style.borderColor= "red";
        
    }
}