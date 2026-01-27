/**
 * @param {string} url 
 * @returns {Array<Object>}
 */
export default async function ambilData(url){
    return await (await fetch(url)).json()
}