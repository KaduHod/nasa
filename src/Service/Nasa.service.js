import { serializeObject } from "../utils/functions.helpers.js";

export let NasaService = () => {
    const baseUrl = 'https://api.nasa.gov';
    const apiKey = 'BEMhFlpqSK4yc3QZj4VlRThGFcGiIdHzpwzuTdeL';
    /**
     * This endpoint retrieves the Landsat 8 image for the supplied location and date. The response will include the date and URL to the image that is closest to the supplied date. The requested resource may not be available for the exact date in the request. You can retrieve a JSON that contains the inputs you provided and a URL to the resulting image through the assets endpoint. The assets endpoint no longer returns a list of potential images within your date range due to a change on the Google Earth Engine API side
     * @param {*} params for the infos 
     */
    let earth = async ({lat, lon, dim = '0.3', date, cloud_score}) => {
        const url = `${baseUrl}/planetary/earth/assets?` + serializeObject({lat, lon, dim, date, cloud_score}) + `&api_key=${apiKey}`;
        try {
            const request = await fetch(url)
            const response = await request.json()
            console.log({request, response})
            if([500,404].includes(request.status)) return response.msg
            return response;
        } catch (error) {
            console.log(error)
            return error
        }        
    }
    let nasaImageAndVideoLibrary = async  (params) => {

    }
    let asteroidNeoWs = async ({start_date,end_date}) => {
        const url = `${baseUrl}/neo/rest/v1/feed?${serializeObject({start_date, end_date})}&api_key=${apiKey}`;
        try {
            const request = await fetch(url)
            const response = await request.json()
            console.log({request, response})
            if([500,404].includes(request.status)) return response.msg
            return response;
        } catch (error) {
            console.log(error)
            return error
        }
    }

    let asteroid = async ({asteroid_id}) => {
        const url = `${baseUrl}/neo/rest/v1/neo/${asteroid_id}?api_key=${apiKey}`;
        try {
            const request = await fetch(url)
            const response = await request.json()
            console.log({request, response})
            if([500,404].includes(request.status)) return response.msg
            return response;
        } catch (error) {
            console.log(error)
            return error
        }
    }
    /**
     * Using decorator
     * @param {*} param0 
     */

    let epic = async ({
        archive = false, 
        collection = 'enhanced',
        images = 'false', 
        date,
        fileName,
        all = false
    }) => {
        let url = `${baseUrl}/EPIC/api`;
        
        if(archive) url += `/archive`;
        if(collection) url += `/${collection}`;
        if(date)  {
            var [year, month, day] = date.split('-');
            url += `/date/${date}`
        }
        if(fileName) url += `/${fileName}`;
        if(all) url += `/all`
        if(images){
            url = `${baseUrl}/EPIC/api/${collection}/images`;
        }
        let searchUrl = url 
        url += `?api_key=${apiKey}`
        console.log(url); 
        try {
            let request = await fetch(url)
            if([404].includes(request.status)){
                return 'Não foi possível achar uma image  apartir dos paramtetros especificados!'
            }
            let response = await request.json()
            if([500].includes(request.status)) return response.msg
            const images = response.map(({image}) => `${baseUrl}/EPIC/archive/${collection}/${year}/${month}/${day}/png/${image}.png?api_key=${apiKey}`);
            
            return {data: response, imageLinks:images};
        } catch (error) {
            console.log(error)
            return error
        }
    }

    const epicDecorator = (fn) => {
        const name = fn.name;
        return (...params) => {
            if(!params.length) 
                throw new Error(`You have to pass the config parameter for ${name}`);
            let paramKeys = Object.keys(params[0])
            if(['date', 'fileName'].includes(paramKeys)){
                params[0].all = true;
            }
            return fn(...params)
        } 
    }

    epic = epicDecorator(epic);

    let apod = async ({date, count}) => {
        const url = `${baseUrl}/planetary/apod?${serializeObject({date, count})}&api_key=${apiKey}`;
        try {
            const request = await fetch(url)
            const response = await request.json()
            console.log({request, response})
            if([500,404].includes(request.status)) return response.msg
            return response;
        } catch (error) {
            console.log(error)
            return error
        }
    }
    
    let webMap = async (params) => {

    }

    

    let donki = async (params) => {

    }
    let eonet = async (params) => {

    }
    let exoplanet = async (params) => {

    }
    let geneLab = async (params) => {

    }
    let insight = async (params) => {

    }
    let marsRoverPhotos = async (params) => {

    }   
    let satelliteSituationCenter = async (params) => {

    }

    return {
        earth,
        nasaImageAndVideoLibrary,
        asteroidNeoWs,
        asteroid,
        epic, 
        apod, 
        webMap
    }
}

