import { useEffect, useState } from "react";
import { customAxios } from "../../src/axios/axios";

export function useFetch(baseURL: string):any {
    const [data, setData] = useState([])

    useEffect(() => {
        if(!baseURL) return 
        async function fetchData() {
       await customAxios({baseURL}).get(baseURL)
            .then(res => {
                //const data = res.data
                setData(res.data)
            })
            .catch(error => console.log(error));
        }
        fetchData()
    
    }, [baseURL])

    return data
}