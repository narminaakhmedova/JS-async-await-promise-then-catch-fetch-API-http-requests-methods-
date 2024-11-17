document.addEventListener("DOMContentLoaded", () => {
    const searchInp = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const showAllBtn = document.getElementById("show-all-btn");
    const todosContainer = document.getElementById("todos-container");
    const loader = document.getElementById("loader");
    const sortSelect = document.getElementById("sort-select");
    const filterSelect = document.getElementById("filter-select");


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
                    <h5 class="card-title">Title:${todo.title}</h5>
                    <p class="card-text">ID:${todo.id}</p>
                    <p class="card-text">Status:${todo.completed}</p>
                    <button onclick="gotoDetails(${todo.id})" class="btn btn-primary">Get Info</button>

                </div>
            </div>
            `;
            todosContainer.appendChild(card);
        });
    };

    // search input part
    searchBtn.addEventListener("click", function(){
        const searchTerm = searchInp.value.toLowerCase();
        filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchTerm));
        showTodos(filteredTodos);
    })

    // search btn part
    showAllBtn.addEventListener("click", ()=>{
        filteredTodos=todos;
        showTodos(filteredTodos);
    })

 // sorting
    sortSelect.addEventListener("change", ()=>{
    const sortValue = sortSelect.value;
    filteredTodos.sort((a, b) => sortValue === "az" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
    showTodos(filteredTodos);
})


// filtering
    filterSelect.addEventListener("change", ()=>{
    const filterValue = filterSelect.value;
    if(filterValue==="all"){
        filteredTodos=todos;
    }
    else if(filterValue==="completed"){
        filteredTodos=todos.filter(todo=>todo.completed);
    }
    else if(filterValue==="incomplete"){
        filteredTodos=todos.filter(todo=>!todo.completed);
    }
    showTodos(filteredTodos);
    });

    // details page
    window.gotoDetails= function(id){
        window.location.href=`details.html?id=${id}`
    }
});

