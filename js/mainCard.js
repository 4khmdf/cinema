import { img_path } from "./api.js"




class MainCard{
    render(data){
        return(`
        <div class="slider_card">
            <div class="slider_img_container">
                <img src="${img_path+data.poster_path}" alt="">
            </div>
            <h3 class="card_title">${data.title}</h3>
        </div>
        `) 
    }
}

export default new MainCard