document.addEventListener("DOMContentLoaded", ()=>{
    const jokeText = document.getElementById("joke-text");
    const jokeBtn = document.getElementById("joke-btn");


    function fetchJoke(){
        fetch("https://v2.jokeapi.dev/joke/programming?type=single")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            if(data.type === "single"){
                jokeText.textContent=data.joke
            }
            else{
                jokeText.textContent="no joke available"
            }
        })
        .catch(function (error) {
            console.error("Error:", error);;
        });
    }

    jokeBtn.addEventListener("click", fetchJoke);
    fetchJoke();
})