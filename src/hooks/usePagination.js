import React, { useState } from 'react'

export function usePagination() {
    
    const [dataResults,setDataResults] = useState([]);
    const [loading,setLoading] = useState(false);
    const [totalPages,setTotalPages] = useState(0);
    const [totalResults,setTotalResults] = useState(0);
    /* const { text } = useContext(MyContext); */

        function getPages(url,text,pageNumber) {
            setTimeout(async () => {
                const response = await fetch(url+text+`&page=${pageNumber}`)
                const json = await response.json();
                setDataResults(json.results);
                setTotalPages(json.total_pages);
                setTotalResults(json.total_results);
            },1000)
        }
    
    return {
        loading,
        setLoading,
        getPages,
        dataResults,
        totalPages,
        totalResults
    }
}
