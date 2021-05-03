import { useEffect, useState } from "react";

export function useFetch(url) {

    const [data,setData] = useState([]);
    const [dataJson,setDataJson] = useState([]);
    const [loading,setLoading] = useState(false);
    const [totalPages,setTotalPages] = useState(0);
    const [totalResults,setTotalResults] = useState(0);

    useEffect(() => {
        async function callApi() {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setDataJson(json);
            setData(json.results);
            setTotalPages(json.total_pages);
            setTotalResults(json.total_results);
            console.log(json)
        }
        callApi();
    },[url])

    return { 
        data,
        loading,
        setData,
        totalPages,
        totalResults,
        dataJson }
}