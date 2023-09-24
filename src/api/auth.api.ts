const baseUrl: string = "https://rickandmortyapi.com/api/";
const characterUrl: string = baseUrl + "character/";

export const getMorty = async () => {
    return fetch(characterUrl + "2").then(response => response.json());
}
