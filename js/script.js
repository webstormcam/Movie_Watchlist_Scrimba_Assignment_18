const searchMovie = document.getElementById('search')
let inputValue = document.getElementById('enter-movie')
let dataDisplay = document.getElementById('data-display')
let grouptitles =``
searchMovie.addEventListener('click',function(){
    let searchedValue = inputValue.value
    inputValue.value =""
   fetchMoviesJSON(searchedValue)    
})


async function fetchMoviesJSON(searchableMovie){
    const res = await fetch(`https://www.omdbapi.com/?apikey=55ea45d4&type=movie&s=${searchableMovie}`)
    const movies = await res.json()
    if(movies.Response==="False"){
        dataDisplay.innerHTML =`
                <div id="placeholder-place" class="place-holder-area">
                <p class="unable-text">Unable to find what you're looking for. Please try another search.</p>
                </div>`
    } else{
        grouptitles= ``
        for(let i = 0; i<movies.Search.length;i++){
           const res = await fetch(`https://www.omdbapi.com/?apikey=55ea45d4&t=${movies.Search[i].Title}`)
           const fullMovie = await res.json()
           grouptitles+= `<div class="movie-div"><img class="movie-poster" src=${fullMovie.Poster}>
           <div class="movie-words"></div></div>`
        }
        console.log(grouptitles)
       dataDisplay.innerHTML=grouptitles
    }

}


////Think about return all the movies in an array then checking them for pictures and placing in a image for the blank ones and also maybe catch duplicates. 
//// Put all the movies in an array and then work with the class constructor to deal with our local storage thing
