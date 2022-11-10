/**
 * return object in query string
 * @param {*} obj props and values
 * @param {*} filterFalsyValues boolean
 * @returns 
 */
export const serializeObject = (obj, filterFalsyValues = true) => {
    let keys = Object.keys(obj);
    return keys.reduce( (acc, key, index)=>{
        if(filterFalsyValues && !obj[key]) return acc;
        acc+= `${key}=${obj[key]}`;
        if(index !== keys.length -1 ) acc+= '&' ;
        return acc;
    }, '');
}

/**
 * Format date to YYYY-mm-dd
 * @param {*} data date
 * @return string date
 */
export const dateFormatted = data => `${data.getUTCFullYear()}-${data.getMonth()}-${data.getDay()}`;
