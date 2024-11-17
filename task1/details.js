document.addEventListener("DOMContentLoaded", ()=> {
    const todoDetails = document.getElementById("todo-details");
    const goBackBtn = document.getElementById("go-back-btn");


    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>
        response.json())
    .then((todo)=>{
        todoDetails.innerHTML=`<h2>${todo.title}</h2>
        <p>${todo.id}</p>
        <p>${todo.completed}</p>`;
    })
    
    goBackBtn.addEventListener("click", ()=>{
        window.location.href = "index.html"
    })
})