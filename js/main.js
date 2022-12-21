import { getPopularMovies,getBestComedyMovies,getActionAdvMovies } from "./config.js ";
import { popularMovieContainer, bestComedyContainer,actionAdventure} from "./query.js";
import MainCard from "./mainCard.js";


getPopularMovies()
.then(movie=>{
    movie.forEach(data=>{
        popularMovieContainer.innerHTML+=MainCard.render(data)
    })
    console.log(movie);
})

getBestComedyMovies()
.then(movie=>{
    movie.forEach(data=>{
        bestComedyContainer.innerHTML+=MainCard.render(data)
    })
    console.log(movie);
})

getActionAdvMovies()
.then(movie=>{
    movie.forEach(data=>{
        actionAdventure.innerHTML+=MainCard.render(data)
    })
    console.log(movie);
})


fetch(`..//db/data.json`)
.then(resp=>resp.json())
.then(data=>(
    console.log(data)
))