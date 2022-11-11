import { NasaService } from "./Service/Nasa.service.js";
import { dateFormatted } from './utils/functions.helpers.js';
import { formulario } from "./utils/formulario.js";
import { HamburguerMenu } from "./utils/menu.js";

const init = (async () => {
    const containerResult = document.getElementById('resultado');
    const imageResult = document.getElementById('image-result');
    const imageContainer = document.getElementById('')


    let nasa = NasaService();

    const earthForm = formulario({htmlElement:document.forms.earth});   
    earthForm
        .getButtonsBy('id','pedir-dados')
        .addEventListener('click',async (e) => {
            const payload = earthForm.getValues();
            const data = await nasa.earth(payload)
            console.log({data})
            displayReponse(JSON.stringify(data, undefined, 1))
            displayImage(data.url)
    })

    const spaceForm = formulario({htmlElement:document.forms.apod})
    spaceForm
        .getButtonsBy('id','pedir-dados')
        .addEventListener('click',  async (e) => {
            const payload = earthForm.getValues();
            const data = await nasa.apod(payload)
            console.log({data})
            displayReponse(JSON.stringify(data, undefined, 1))
            displayImage(data.url)
        })

    const asteroidForm = formulario({htmlElement:document.forms.asteroidNeoWs})
    asteroidForm
        .getButtonsBy('id','pedir-dados')
        .addEventListener('click',async e=>{
            const payload = earthForm.getValues();
            const data = await nasa.asteroidNeoWs(payload)
            console.log({data})
            displayReponse(JSON.stringify(data, undefined, 1))
            displayImage(data.url)
        })

    const asteroid = formulario({htmlElement:document.forms.asteroidById})
    asteroid
        .getButtonsBy('id','pedir-dados')
        .addEventListener('click',async e=>{
            const payload = asteroid.getValues();
            const data = await nasa.asteroid(payload)
            console.log({data})
            displayReponse(JSON.stringify(data, undefined, 1))
            displayImage(data.url)
        })

    const epic = formulario({htmlElement:document.forms.epic});
        epic 
            .getButtonsBy('id','pedir-dados')
            .addEventListener('click', async e => {
                const payload = epic.getValues();
                const data = await nasa.epic(payload)
                console.log({data})
                displayReponse(JSON.stringify(data, undefined, 1))
                displayImages(data.images)
            })



            
    function displayReponse(msg){
        containerResult.innerHTML = `<pre>${msg}<pre>`
    }
    function displayImage(src){
        imageResult.src = src
    }

    function displayImages(images){
        images.forEach( src => {
            let imageTag = document.createElement('img');
            imageTag.src = src
            imageC
            console.log({src})
        } )
        
    }



    const hamburguer = HamburguerMenu({
        htmlElement: document.getElementById('hamburguer-menu'),
        targetContainer: document.getElementById('drop-down-menu')
    })

















})();
