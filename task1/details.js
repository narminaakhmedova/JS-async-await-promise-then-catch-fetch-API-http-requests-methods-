document.addEventListener("DOMContentLoaded", ()=> {
    const todoDetails = document.getElementById("todo-details");
    const goBackBtn = document.getElementById("go-back-btn");
    
    const urlParams = new URLSearchParams(window.location.search);
    const todoId = urlParams.get("id");

    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then((response)=>
        response.json())
    .then((todo)=>{
        todoDetails.innerHTML=`<h2>${todo.title}</h2>
        <p>${todo.id}</p>
        <p>${todo.completed ? "completed" : "incomplete"}</p>`;
        cardColor(todo);
    })
    
    goBackBtn.addEventListener("click", ()=>{
        window.location.href = "index.html"
    })

    function cardColor(todo){
    // const cardDetails=document.querySelector("#todo-details")
        if(todo.completed){
            todoDetails.style.backgroundColor="green"
        }
        if(!todo.complete)
        {
            todoDetails.style.backgroundColor="red"
        }
    }
})