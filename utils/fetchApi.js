import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
                'X-RapidAPI-Key': 'fb9a84dc31msh6c3bb3b52065745p17b4f9jsnc8636ab942fe',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }
    });

    return data;
}