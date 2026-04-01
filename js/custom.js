const apikey = "";
const baseUrl = "https://api.themoviedb.org/3";

async function fetchmovies(movieName) {
    const apiUrl = `${baseUrl}/search/movie?api_Key = ${apikey}&query = ${movieName}`;

    
    let response = await fetch(apiUrl)
    let data = await response.json()

    console.log(data);
    
}

