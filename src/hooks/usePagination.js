import React, { useState } from 'react'

export function usePagination() {
    
    const [dataResultsPagination,setDataResultsPagination] = useState([]);
    const [loading,setLoading] = useState(false);
    const [totalPages,setTotalPages] = useState(0);
    const [totalResults,setTotalResults] = useState(0);

        function getPages(url,text,pageNumber) {
            setTimeout(async () => {
                const response = await fetch(url+text+`&page=${pageNumber}`)
                const json = await response.json();
                setDataResultsPagination(json.results);
                setTotalPages(json.total_pages);
                setTotalResults(json.total_results);
                console.log(dataResultsPagination)
            },1000)
        }
    
    return {
        loading,
        setLoading,
        getPages,
        dataResultsPagination,
        totalPages,
        totalResults
    }
}
