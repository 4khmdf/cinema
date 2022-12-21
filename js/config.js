import { best_comedies_mv_api, popular_mv_api,action_and_adnventure_mv_api } from "./api.js"

export const  getPopularMovies = async () =>{
    return await fetch(popular_mv_api)
    .then(resp=>resp.json())
    .then(data=>{
        return data.results
    })
}
export const  getBestComedyMovies = async () =>{
    return await fetch(best_comedies_mv_api)
    .then(resp=>resp.json())
    .then(data=>{
        return data.results
    })
}
export const  getActionAdvMovies = async () =>{
    return await fetch(action_and_adnventure_mv_api)
    .then(resp=>resp.json())
    .then(data=>{
        return data.results
    })
}