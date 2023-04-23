const searchMovie = document.getElementById('search')
let inputValue = document.getElementById('enter-movie')
const dataDisplay = document.getElementById('data-display')
let arrayOfFilms=[];
let movies =""
searchMovie.addEventListener('click',function(){
    arrayOfFilms =[];
    let searchedValue = inputValue.value
    inputValue.value =""
   
        fetch(`https://www.omdbapi.com/?apikey=55ea45d4&type=movie&s=${searchedValue}`)
        .then(res=>res.json())
       
        .then(data =>{
            if(data.Response==="False"){
                dataDisplay.innerHTML =`
                <div id="placeholder-place" class="place-holder-area">
                <p class="unable-text">Unable to find what you're looking for. Please try another search.</p>
                </div>`
            } else{
                for(let i=0;i<data.Search.length;i++){
                    fetch(`https://www.omdbapi.com/?apikey=55ea45d4&t=${data.Search[i].Title}`)
                    .then(res=>res.json())
                    .then(data=>{
                         movies+= `<div>
                        <h2>${data.Title}</h2>
                        </div>`
            
                    })
                    
                }
                dataDisplay.innerHTML = movies
              
            }

          
           
            
        })
    
  
})

