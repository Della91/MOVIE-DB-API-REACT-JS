import { useEffect, useState } from "react";

export function useFetch(url) {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        if(!url) return;
        async function callApi() {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            console.log(json)
        }
        callApi();
    },[url])

    return { data,loading,setData }
}