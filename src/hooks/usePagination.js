import React, { useContext,useState } from 'react'
import { MyContext } from '../components/context/Context';

export function usePagination() {
    
    const [dataResults,setDataResults] = useState([]);
    const [totalPages,setTotalPages] = useState(0);
    const [totalResults,setTotalResults] = useState(0);
    const { text } = useContext(MyContext);

        function getPages(url,pageNumber) {
            setTimeout(async () => {
            const response = await fetch(url+text+`&page=${pageNumber}`)
            const json = await response.json();
                setDataResults(json.results);
                setTotalPages(json.total_pages);
                setTotalResults(json.total_results);
            },1500)
        }
    
    return {
        getPages,
        dataResults,
        totalPages,
        totalResults
    }
}
