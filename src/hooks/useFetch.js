import { useEffect, useState } from "react";

export function useFetch(url) {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [totalPages,setTotalPages] = useState(0);
    const [totalResults,setTotalResults] = useState(0);
    const [genresList,setGenresList] = useState([]); 

    useEffect(() => {
        async function callApi() {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            setTotalPages(json.total_pages);
            setTotalResults(json.total_results);
            setGenresList(json.genres);
            /* console.log(json) */
        }
        callApi();
    },[url])

    return { 
        genresList,
        data,
        setData,
        loading,
        setLoading,
        totalPages,
        totalResults,
    }
}