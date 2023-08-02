import { useState, useEffect } from "react"

export const useFetch = (apiPath) => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=0ec5b219402ad9dd31be14a20e49cd44&language=en-US&page=1`

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        fetchMovies();
    }, [url])

    return { data }
}
