/**
 * Funcion que traduce los campos de la entidad Vehicle de la API SWAPI
 * @param response 
 * @param traslateMap 
 * @returns 
 */
export const traslateGetVehicle = (response, traslateMap) => {
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