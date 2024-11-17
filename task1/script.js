document.addEventListener("DOMContentLoaded", () => {
    const searchInp = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const showAllBtn = document.getElementById("show-all-btn");
    const todosContainer = document.getElementById("todos-container");
    const loader = document.getElementById("loader");

    let todos = [];
    let filteredTodos = [];

    // fetching data
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            todos = data;
            filteredTodos = todos;

            showTodos(filteredTodos);
            loader.style.display = "none";
        })
        .catch(function (error) {
            console.error("Error:", error);;
        });



    function showTodos(todos) {
        todosContainer.innerHTML = "";
        todos.forEach(todo => {
            const card = document.createElement("div");
            card.className = "col-12 col-md-6 col-lg-3 text-center";
            card.innerHTML = `<div class="card ${todo.completed ? "bg-success": "bg-danger"}">
            <div class="card-body">
                    <h5 class="card-title">${todo.title}</h5>
                    <p class="card-text">${todo.id}</p>
                    <p class="card-text">${todo.status}</p>
                    <button onclick="${todo.id}" class="btn btn-primary" >Get Info</button>
                </div>
            </div>
            `;
            todosContainer.appendChild(card);
        });
    };
})

