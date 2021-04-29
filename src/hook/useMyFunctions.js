import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../components/context/Context';

export function useMyFunctions() {
    
    const { dataSearch,setDataSearch } = useState([]);
    const [totalPages,setTotalPages] = useState(0);
    const [totalResults,setTotalResults] = useState(0);
    const { text } = useContext(MyContext);

        async function nextPages(url,pageNumber) {
            const response = await fetch(url+text+`&page=${pageNumber}`)
            const json = await response.json();
            setDataSearch(json.results);
            setTotalPages(json.total_pages);
            setTotalResults(json.total_results);
        }
    
    return {
        nextPages,
        dataSearch,
        totalPages,
        totalResults}
}
