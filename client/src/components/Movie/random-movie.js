// find results
var movieTitleEl = document.getElementById('title');
var movieGenreEl = document.getElementById('genre');
var moviePlotEl = document.getElementById('plot');
var movieRatingEl = document.getElementById('ratings')

// randomize movie
function randmovieAPI() {
    
    // randomize movie
    var randomNumber = Math.floor((Math.random() * randomMovieArray.length +1) -1);
    var randomMovie = randomMovieArray[randomNumber];
             // console.log(randomMovie)
    
    // fetch API
    $.getJSON('https://www.omdbapi.com/?t=' + randomMovie + '&apikey=7a94102a')
    .then(function(response){
                // console.log(response);

        movieTitleEl.innerHTML="";
        movieGenreEl.innerHTML="";
        moviePlotEl.innerHTML="";
        movieRatingEl.innerHTML="";

        var moviePoster= document.getElementById('movie-img')
        moviePoster.setAttribute('src', response.Poster)
        
        var movieTitle= document.createElement('h3')
        movieTitle.textContent=response.Title
        movieTitleEl.appendChild(movieTitle)
        
        var movieGenre= document.createElement('p')
        movieGenre.textContent=response.Genre
        movieGenreEl.appendChild(movieGenre)
       
        var moviePlot= document.createElement('p')
        moviePlot.textContent=response.Plot
        moviePlotEl.appendChild(moviePlot)
       
        // If ratings is a valid and non empty array, then loop
        if (Array.isArray(response.Ratings)){ 
            
            
            for (var i=0; i< response.Ratings.length; i++){
                console.log(i)
                
                var ratingSource = response.Ratings[i].Source
                var ratingValue = response.Ratings[i].Value

                var movieRating = document.createElement('p')
                movieRating.textContent = ratingSource + ": " + ratingValue
                movieRatingEl.appendChild(movieRating)  
            }
        }

    });

    
}

randmovieAPI();
document.getElementById('rand-movie').addEventListener('click', randmovieAPI);



