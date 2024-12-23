/**
 * Funcion que traduce los campos de la entidad People de la API SWAPI
 * @param response 
 * @param traslateMap 
 * @returns 
 */
export const traslateGetPeople = (response, traslateMap) => {
    return response.map((item) => {
            return Object.entries(item).reduce((acc, [key, value]) => {
              console.log('key', key)
              console.log('value', value)
              const translatedKey = traslateMap[key] || key;
              acc[translatedKey] = value;
              return acc;
            }, {});
    });
}